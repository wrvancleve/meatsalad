function godPardonEffectIncr(entity) {
  let pardonTypeCount = 0
  const hasMagicPardon = entity.hasEffect('meatsalad:pardon_of_god_magic')
  if (hasMagicPardon) {
    pardonTypeCount += 1
  }
  const hasMeleePardon = entity.hasEffect('meatsalad:pardon_of_god_melee')
  if (hasMeleePardon) {
    pardonTypeCount += 1
  }
  const hasProjectilePardon = entity.hasEffect('meatsalad:pardon_of_god_projectile')
  if (hasProjectilePardon) {
    pardonTypeCount += 1
  }

  let pardonTypes = [
    'meatsalad:pardon_of_god_magic',
    'meatsalad:pardon_of_god_melee',
    'meatsalad:pardon_of_god_projectile',
  ]
  if (pardonTypeCount == 2) {
    if (!hasMagicPardon) {
      pardonTypes.splice(pardonTypes.indexOf('meatsalad:pardon_of_god_magic'), 1)
    } else if (!hasMeleePardon) {
      pardonTypes.splice(pardonTypes.indexOf('meatsalad:pardon_of_god_melee'), 1)
    } else if (!hasProjectilePardon) {
      pardonTypes.splice(pardonTypes.indexOf('meatsalad:pardon_of_god_projectile'), 1)
    }
  }

  let effectType = global.randomGet(pardonTypes)
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
        if (entity.health < entity.maxHealth * 0.50) {
          entity.removeEffect('meatsalad:gaze_of_god')
          entity.potionEffects.add('meatsalad:glare_of_god', 3600 * 20, 1, false, false)
          godPardonEffectIncr(entity)
        }
        /*
        if (entity.health < entity.maxHealth * 0.33) {
          entity.removeEffect('meatsalad:gaze_of_god')
          entity.potionEffects.add('meatsalad:glare_of_god', 180 * 20, 0, false, false)
          godPardonEffectIncr(entity)
        }
        */
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
        if (lvl > 0 && entity.health < entity.maxHealth * 0.33) {
          entity.removeEffect('meatsalad:glare_of_god')
          entity.potionEffects.add('meatsalad:glare_of_god', 3600 * 20, 0, false, false)
          godPardonEffectIncr(entity)
        }
        /*
        if (entity.getEffect('meatsalad:glare_of_god').getDuration() < 41) {
          entity.removeEffect('meatsalad:glare_of_god')
          entity.potionEffects.add('meatsalad:glimpse_of_god', 3600 * 20, 0, false, false)
          entity.setHealth(entity.getMaxHealth())
          godPardonEffectIncr(entity)
        }
        */
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
