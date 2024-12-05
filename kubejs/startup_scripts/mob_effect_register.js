function godPardonEffectIncr(entity) {
  const pardonTypes = new Set([
    'meatsalad:pardon_of_god_magic',
    'meatsalad:pardon_of_god_melee',
    'meatsalad:pardon_of_god_projectile',
  ])
  if (entity.hasEffect('meatsalad:pardon_of_god_magic')) {
    pardonTypes.delete('meatsalad:pardon_of_god_magic')
  }
  if (entity.hasEffect('meatsalad:pardon_of_god_melee')) {
    pardonTypes.delete('meatsalad:pardon_of_god_melee')
  }
  if (entity.hasEffect('meatsalad:pardon_of_god_projectile')) {
    pardonTypes.delete('meatsalad:pardon_of_god_projectile')
  }

  if (pardonTypes.size >= 2) {
    const effectType = global.randomGet(Array.from(pardonTypes))
    entity.potionEffects.add(effectType, 1200 * 20, 0, false, true)
  }
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
          entity.potionEffects.add('meatsalad:glare_of_god', 3600 * 20, 0, false, false)
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
