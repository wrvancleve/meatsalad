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

global.DAMAGE_TYPES = Object.freeze({
  PHYSICAL: 0,
  RANGED: 1,
  MAGIC: 2,
  OTHER: 3
})

global.getDamageType = (damageSource) => {
  let damageName = damageSource.getType() + ''
  if (damageName == 'player' || damageName == 'mob') {
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
      pardonOfGodLevelEffect(event, entity.getEffect('meatsalad:pardon_of_god_melee').getAmplifier())
    }
  } else if (damageType == global.DAMAGE_TYPES.RANGED) {
    if (entity.hasEffect('meatsalad:pardon_of_god_projectile')) {
      pardonOfGodLevelEffect(event, entity.getEffect('meatsalad:pardon_of_god_projectile').getAmplifier())
    }
  } else if (damageType == global.DAMAGE_TYPES.MAGIC) {
    if (entity.hasEffect('meatsalad:pardon_of_god_magic')) {
      pardonOfGodLevelEffect(event, entity.getEffect('meatsalad:pardon_of_god_magic').getAmplifier())
    }
  }
}

function pardonOfGodLevelEffect(event, amplifier) {
  switch (amplifier) {
    case 0:
      event.amount = 0
      break
    default:
      event.entity.heal(event.amount)
      event.amount = 0
      break
  }
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  if (event.source.player) {
    global.LivingHurtByPlayer(event);
  }

  if (event.entity.type == 'awakened_bosses:herobrine') {
    // Apply damage cap for Herobrine
    event.setAmount(Math.min(event.getAmount(), 35))
  }

  checkPardonOfGodEntityHurt(event)
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDamageEvent', event => {
  if (event.entity.isPlayer()) {
    global.PlayerDamagedByOthers(event);
  }
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDropsEvent', event => {
  if (event.entity.type in global.BOSSES) {
    event.cancel()
  }
})
