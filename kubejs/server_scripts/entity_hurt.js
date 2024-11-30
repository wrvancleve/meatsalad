const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const DAMAGE_TYPE = $ResourceKey.createRegistryKey('damage_type')

function getDamageSource(level, damageType, attacker) {
  const resourceKey = $ResourceKey.create(DAMAGE_TYPE, Utils.id(damageType))
  const holder = level.registryAccess().registryOrThrow(DAMAGE_TYPE).getHolderOrThrow(resourceKey)
  return new DamageSource(holder, attacker, attacker)
}

const getCustomDamageSource = (attacker) => {
  const level = attacker.getLevel()
  if (level.isClientSide()) return
  const entityType = attacker.type.split(':').pop()
  return getDamageSource(level, `meatsalad:${entityType}`, attacker)
}

const CHAOS_ENTITIES = [
  'awakened_bosses:herobrine',
  'awakened_bosses:herobrine_minion',
  'awakened_bosses:mahva',
  'awakened_bosses:prowler',
  'awakened_bosses:reeker',
]

EntityEvents.hurt((event) => {
  // Use only to cancel
  if (event.source.getType() == 'mob' && CHAOS_ENTITIES.includes(event.source.actual.type)) {
    let damage = event.getDamage()
    event.entity.attack(getCustomDamageSource(event.source.actual), damage)
    event.cancel()
  }
})

const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData")

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
}

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
