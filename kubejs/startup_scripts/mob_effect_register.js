function randomGet(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function godPardonEffectIncr(entity) {
  let effectType = randomGet([
    'meatsalad:pardon_of_god_magic',
    'meatsalad:pardon_of_god_melee',
    'meatsalad:pardon_of_god_projectile',
    'meatsalad:pardon_of_god_magic',
    'meatsalad:pardon_of_god_melee'
  ])
  let amplifier = 0
  if (entity.hasEffect(effectType)) {
    amplifier = entity.getEffect(effectType).getAmplifier() + 1
  }
  entity.potionEffects.add(effectType, 1200 * 20, amplifier, false, true)
}

StartupEvents.registry('mob_effect', event => {
  event.create('meatsalad:magic_forbiden')
    .displayName("Magic Forbiden")
    .modifyAttribute('irons_spellbooks:max_mana', 'magicForbiden', -10000, "addition")
    .harmful()
    .color(Color.DARK_GRAY)

  event.create('meatsalad:glimpse_of_god')
    .displayName("Divine Grace: Glimpse")
    .beneficial()
    .effectTick((entity, lvl) => {
      if (!entity || entity.level.isClientSide()) return
      if (entity.age % 20 == 0) {
        entity.heal(entity.getMaxHealth() * 0.01)
        if (entity.health < entity.maxHealth * 0.67) {
          entity.removeEffect('meatsalad:glimpse_of_god')
          entity.potionEffects.add('meatsalad:gaze_of_god', 3600 * 20, 0, false, false)
          godPardonEffectIncr(entity)
        }
      }
    })
    .color(Color.WHITE)

  event.create('meatsalad:gaze_of_god')
    .displayName("Divine Grace: Gaze")
    .beneficial()
    .effectTick((entity, lvl) => {
      if (!entity || entity.level.isClientSide()) return
      if (entity.age % 20 == 0) {
        entity.heal(entity.getMaxHealth() * 0.01)
        if (entity.health < entity.maxHealth * 0.33) {
          entity.removeEffect('meatsalad:gaze_of_god')
          entity.potionEffects.add('meatsalad:glare_of_god', 180 * 20, 0, false, false)
          godPardonEffectIncr(entity)
        }
      }
    })
    .color(Color.YELLOW)

  event.create('meatsalad:glare_of_god')
    .displayName("Divine Grace: Glare")
    .beneficial()
    .effectTick((entity, lvl) => {
      if (!entity || entity.level.isClientSide()) return
      if (entity.age % 20 == 0) {
        entity.heal(entity.getMaxHealth() * 0.01)
        if (entity.getEffect('meatsalad:glare_of_god').getDuration() < 41) {
          entity.removeEffect('meatsalad:glare_of_god')
          entity.potionEffects.add('meatsalad:glimpse_of_god', 3600 * 20, 0, false, false)
          entity.setHealth(entity.getMaxHealth())
          godPardonEffectIncr(entity)
        }
      }
    })
    .color(Color.GOLD)

  event.create('meatsalad:pardon_of_god_magic')
    .displayName("God's License: Magic Immunity")
    .beneficial()
    .color(Color.BLUE)
  event.create('meatsalad:pardon_of_god_melee')
    .displayName("God's License: Melee Immunity")
    .beneficial()
    .color(Color.RED)
  event.create('meatsalad:pardon_of_god_projectile')
    .displayName("God's License: Projectile Immunity")
    .beneficial()
    .color(Color.of('#9c9c9c'))
})
