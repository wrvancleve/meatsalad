LootJS.modifiers((event) => {
  // Remove Herobrine Loot
  const herobrineLoot = [
    'awakened_bosses:herobrine_a_helmet',
    'awakened_bosses:herobrine_a_chestplate',
    'awakened_bosses:herobrine_a_leggings',
    'awakened_bosses:herobrine_a_boots',
    'awakened_bosses:herobrine_sword',
    'awakened_bosses:herobrine_pickaxe',
    'awakened_bosses:herobrine_axe',
    'awakened_bosses:herobrine_shovel',
    'awakened_bosses:herobrine_hoe',
    'awakened_bosses:herobrine_nugget',
    'awakened_bosses:herobrine_ingot',
    'awakened_bosses:herobrine_block',
  ]
  const herobrineEntities = [
    'awakened_bosses:herobrine',
    'awakened_bosses:herobrine_minion',
    'awakened_bosses:mahva',
    'awakened_bosses:prowler',
    'awakened_bosses:reeker',
  ]
  herobrineEntities.forEach(herobrineEntity => {
    let herobrineLootModifier = event.addEntityLootModifier(herobrineEntity)
    herobrineLoot.forEach(loot => {
      herobrineLootModifier = herobrineLootModifier.removeLoot(loot)
    })
  })

  event.addEntityLootModifier('allthemodium:piglich')
    .removeLoot('allthemodium:allthemodium_sword')
    .removeLoot('allthemodium:allthemodium_pickaxe')
    .removeLoot('allthemodium:allthemodium_axe')
    .removeLoot('allthemodium:allthemodium_shovel')
    .removeLoot('allthemodium:allthemodium_hoe')
    .removeLoot('allthemodium:allthemodium_helmet')
    .removeLoot('allthemodium:allthemodium_chestplate')
    .removeLoot('allthemodium:allthemodium_leggings')
    .removeLoot('allthemodium:allthemodium_boots')

  event.addEntityLootModifier('quark:forgotten')
    .removeLoot('quark:forgotten_hat')

  event.addEntityLootModifier('minecraft:evoker')
    .removeLoot('minecraft:emerald')
    .removeLoot('minecraft:totem_of_undying')

  event.addEntityLootModifier('minecraft:vindicator')
    .removeLoot('minecraft:emerald')
    .removeLoot('minecraft:iron_axe')

  event.addEntityLootModifier('irons_spellbooks:necromancer')
    .removeLoot('irons_spellbooks:tarnished_helmet')
})
