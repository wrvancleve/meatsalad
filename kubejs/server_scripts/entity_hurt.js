const MAGIC_DAMAGES = new Set([
  'magic',
  'blood_magic',
  'dragon_breath_pool',
  'eldritch_magic',
  'ender_magic',
  'evocation_magic',
  'fire_field',
  'fire_magic',
  'holy_magic',
  'ice_magic',
  'lightning_magic',
  'nature_magic',
  'poison_cloud',
])
const PHYSICAL_DAMAGES = new Set([
  'player',
  'mob',
  'attributeslib:current_hp_damage',
])

global.DAMAGE_TYPES = Object.freeze({
  PHYSICAL: 0,
  RANGED: 1,
  MAGIC: 2,
  OTHER: 3
})

global.getDamageType = (damageSource) => {
  let damageName = damageSource.getType() + ''
  if (PHYSICAL_DAMAGES.has(damageName)) {
    return global.DAMAGE_TYPES.PHYSICAL
  } else if (damageName == 'arrow') {
    return global.DAMAGE_TYPES.RANGED
  } else if (MAGIC_DAMAGES.has(damageName)) {
    return global.DAMAGE_TYPES.MAGIC
  } else {
    return global.DAMAGE_TYPES.OTHER
  }
}

function checkPardonOfGodEntityHurt(event) {
  let entity = event.entity
  const damageType = global.getDamageType(event.source)
  if (damageType == global.DAMAGE_TYPES.PHYSICAL) {
    if (entity.hasEffect('meatsalad:pardon_of_god_melee')) {
      event.amount = 0
    }
  } else if (damageType == global.DAMAGE_TYPES.RANGED) {
    if (entity.hasEffect('meatsalad:pardon_of_god_projectile')) {
      event.amount = 0
    }
  } else if (damageType == global.DAMAGE_TYPES.MAGIC) {
    if (entity.hasEffect('meatsalad:pardon_of_god_magic')) {
      event.amount = 0
    }
  }
}

global.LivingHurt = (event) => {
  if (event.entity.type == 'awakened_bosses:herobrine' && event.source.getType() !== 'genericKill') {
    // Apply damage cap for Herobrine
    event.setAmount(Math.min(event.getAmount(), 35))
  }

  checkPardonOfGodEntityHurt(event)
}

global.LivingHurtByPlayer = (event) => {
  const player = event.source.player
  if (player.stages.has('berserk') && global.getDamageType(event.source) == global.DAMAGE_TYPES.PHYSICAL) {
    const healthPercent = player.health / player.maxHealth
    if (healthPercent <= 0.1) {
      event.amount *= 1.5
    } else if (healthPercent <= .25) {
      event.amount *= 1.25
    } else if (healthPercent <= .5) {
      event.amount *= 1.15
    } else if (healthPercent <= .75) {
      event.amount *= 1.1
    } else if (healthPercent <= .9) {
      event.amount *= 1.05
    }
  }
  if (player.stages.has('bowmaster_surge') && global.getDamageType(event.source) == global.DAMAGE_TYPES.RANGED) {
    const healthPercent = player.health / player.maxHealth
    let effectChance = 0.0
    let maxAmplifier = 0
    if (healthPercent <= 0.1) {
      effectChance = 1.0
      maxAmplifier = 9
    } else if (healthPercent <= .25) {
      effectChance = 0.35
      maxAmplifier = 6
    } else if (healthPercent <= .5) {
      effectChance = 0.25
      maxAmplifier = 4
    } else if (healthPercent <= .75) {
      effectChance = 0.15
      maxAmplifier = 2
    } else if (healthPercent <= .9) {
      effectChance = 0.1
      maxAmplifier = 1
    }

    if (player.hasEffect('meatsalad:bowmaster_surge')) {
      const currentAmplifier = player.getEffect('meatsalad:bowmaster_surge').getAmplifier()
      if (currentAmplifier < maxAmplifier) {
        player.potionEffects.add('meatsalad:bowmaster_surge', 20 * (currentAmplifier + 4), currentAmplifier + 1, false, true)
      }
    } else {
      if (Math.random() <= effectChance) {
        player.potionEffects.add('meatsalad:bowmaster_surge', 60, 0, false, true)
      }
    }
  }
}

const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData")

global.PlayerDamagedByOthers = (event) => {
  const player = event.entity
  if (player.stages.has('mp_rage')) {
    const playerMagicData = $MagicData.getPlayerMagicData(player)
    playerMagicData.addMana(event.amount)
  }

  if (player.stages.has('damage_control') && global.getDamageType(event.source) != global.DAMAGE_TYPES.MAGIC) {
    const healthPercent = player.health / player.maxHealth
    if (healthPercent <= 0.1) {
      event.amount *= 0.5
    } else if (healthPercent <= .25) {
      event.amount *= 0.75
    } else if (healthPercent <= .5) {
      event.amount *= 0.85
    } else if (healthPercent <= .75) {
      event.amount *= 0.9
    } else if (healthPercent <= .9) {
      event.amount *= 0.95
    }
  }
}

const getRandomEffect = (godEntity, otherEntity, fullEffectList) => {
  const effectList = fullEffectList.slice()
  let effect = null

  const healthPercent = godEntity.health / godEntity.maxHealth
  let effectChance = 0.0
  let amplifier = 0
  if (healthPercent <= 0.15) {
    effectChance = 1.0
    amplifier = 2
  } else if (healthPercent <= 0.33) {
    effectChance = 0.5
    amplifier = 1
  } else if (healthPercent <= 0.67) {
    effectChance = 0.15
  } else if (healthPercent <= 0.8) {
    effectChance = 0.05
  }

  if (Math.random() <= effectChance) {
    do {
      effect = global.randomGet(effectList)
      if (otherEntity.hasEffect(effect.id)) {
        effectList.splice(effectList.findIndex(e => e.id === effect.id), 1)
        effect = null
      }
    } while (effectList.length > 0 && effect === null)
    if (effect && amplifier) {
      effect = {
        id: effect.id,
        amplifier: effect.amplifier + amplifier,
        duration: effect.duration
      }
    }
  }

  return effect
}

const hasGodEffect = (entity) => {
  return entity.hasEffect('meatsalad:glimpse_of_god')
    || entity.hasEffect('meatsalad:gaze_of_god')
    || entity.hasEffect('meatsalad:glare_of_god')
}

const DAMAGED_EFFECTS = [
  {id: 'minecraft:blindness', amplifier: 0, duration: 5},
  {id: 'attributeslib:sundering', amplifier: 0, duration: 5},
  {id: 'cataclysm:curse_of_desert', amplifier: 0, duration: 3},
  {id: 'cofh_core:sundered', amplifier: 0, duration: 5},
  {id: 'cofh_core:wrenched', amplifier: 2, duration: 1},
  {id: 'irons_spellbooks:blight', amplifier: 2, duration: 5},
  {id: 'irons_spellbooks:slowed', amplifier: 1, duration: 5},
  {id: 'meatsalad:magic_forbiden', amplifier: 0, duration: 1},
]

global.GodEntityDamagedByOthers = (event) => {
  if (hasGodEffect(event.entity) && event.source.actual) {
    const effectToApply = getRandomEffect(event.entity, event.source.actual, DAMAGED_EFFECTS)
    if (effectToApply) {
      event.source.actual.potionEffects.add(effectToApply.id, effectToApply.duration * 20, effectToApply.amplifier, false, true)
    }
  }
}

const ON_ATTACK_EFFECTS = [
  {id: 'minecraft:wither', amplifier: 4, duration: 5},
  {id: 'minecraft:poison', amplifier: 4, duration: 5},
  {id: 'attributeslib:bleeding', amplifier: 4, duration: 5},
  {id: 'cataclysm:abyssal_curse', amplifier: 4, duration: 5},
]

global.OthersDamagedByGodEntity = (event) => {
  if (event.source.actual && hasGodEffect(event.source.actual)) {
    const effectToApply = getRandomEffect(event.source.actual, event.entity, ON_ATTACK_EFFECTS)
    if (effectToApply) {
      event.entity.potionEffects.add(effectToApply.id, effectToApply.duration * 20, effectToApply.amplifier, false, true)
    }
  }
}
