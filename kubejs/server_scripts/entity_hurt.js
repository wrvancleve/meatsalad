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
