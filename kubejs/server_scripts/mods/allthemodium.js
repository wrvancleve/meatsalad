ServerEvents.tags('block', event => {
  event.remove('forge:needs_allthemodium_tool', 'allthemodium:unobtainium_ore')
  event.add('forge:needs_vibranium_tool', 'allthemodium:unobtainium_ore')

  event.add('forge:ores', 'allthemodium:allthemodium_ore')
  event.add('forge:ores', 'allthemodium:allthemodium_slate_ore')
  event.add('forge:ores', 'allthemodium:unobtainium_ore')
  event.add('forge:ores', 'allthemodium:other_vibranium_ore')
})

ServerEvents.chestLootTables(event => {
  event.modify('allthemodium:generic_loot', table => {
    table.clearPools()
    table.addPool(pool => {
      addLootTable(pool, {type: 'the_other', name: 'materials_treasure', weight: 55})
      addLootTable(pool, {name: 'meatsalad:random_gear_treasure', weight: 44, quality: 0.5})
      addStack(pool, {item: 'minecraft:enchanted_golden_apple', weight: 1, quality: 0.5})
    })
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('allthemodium:hallway_loot', table => {
    table.clearPools()
    table.addPool(pool => {
      addLootTable(pool, {type: 'the_other', name: 'materials_treasure', weight: 55})
      addLootTable(pool, {name: 'meatsalad:random_gear_treasure', weight: 44, quality: 0.5})
      addStack(pool, {item: 'minecraft:enchanted_golden_apple', weight: 1, quality: 0.5})
    })
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('allthemodium:library_loot', table => {
    table.clearPools()
    addLootTablePool(table, {type: 'enchanted_books', name: 'random_treasure'}, [3,5], 0.05)
    addBlueprintLootPool(table, {name: 'permanent', weight: null}, [2,3])
    addAncientTomeLootPool(table, {weight: null}, [1,2], 0.05)
    table.addPool(pool => {
      pool.rolls = 1
      addStack(pool, {item: 'minecraft:netherite_upgrade_smithing_template'}, {weight: 20, quality: 1.5})
      addStack(pool, {item: 'allthemodium:allthemodium_upgrade_smithing_template'}, {weight: 20, quality: 1.5})
      addStack(pool, {item: 'allthemodium:vibranium_upgrade_smithing_template'}, {weight: 20, quality: 1.5})
      addStack(pool, {item: 'allthemodium:unobtainium_upgrade_smithing_template'}, {weight: 20, quality: 1.5})
      pool.addEmpty(80)
    })
  })

  event.modify('allthemodium:treasure_room', table => {
    table.clearPools()
    addLootTablePool(table, {type: 'the_other', name: 'materials_treasure'}, 1, 0.05)
    addLootTablePool(table, {name: 'meatsalad:random_gear_treasure'}, 1)
    table.addPool(pool => {
      pool.addEmpty(98)
      addStack(pool, {item: 'minecraft:enchanted_golden_apple', weight: 2, quality: 0.5})
    })
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('allthemodium:treasure_room_loot', table => {
    table.clearPools()
    addLootTablePool(table, {type: 'the_other', name: 'materials_treasure'}, 1, 0.05)
    addLootTablePool(table, {name: 'meatsalad:random_gear_treasure'}, 1)
    table.addPool(pool => {
      pool.addEmpty(98)
      addStack(pool, {item: 'minecraft:enchanted_golden_apple', weight: 2, quality: 0.5})
    })
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })
})

ServerEvents.recipes(event => {
  function removeItems(ids) {
    ids.forEach(id => {
      event.remove([{ input: id }, { output: id }])
    })
  }

  removeItems([
    'allthemodium:allthemodium_sword',
    'allthemodium:allthemodium_pickaxe',
    'allthemodium:allthemodium_axe',
    'allthemodium:allthemodium_shovel',
    'allthemodium:allthemodium_hoe',
    'allthemodium:allthemodium_helmet',
    'allthemodium:allthemodium_chestplate',
    'allthemodium:allthemodium_leggings',
    'allthemodium:allthemodium_boots',
    'allthemodium:allthemodium_rod',
    'allthemodium:allthemodium_apple',
    'allthemodium:allthemodium_carrot',

    'allthemodium:vibranium_sword',
    'allthemodium:vibranium_pickaxe',
    'allthemodium:vibranium_axe',
    'allthemodium:vibranium_shovel',
    'allthemodium:vibranium_hoe',
    'allthemodium:vibranium_helmet',
    'allthemodium:vibranium_chestplate',
    'allthemodium:vibranium_leggings',
    'allthemodium:vibranium_boots',
    'allthemodium:vibranium_rod',

    'allthemodium:unobtainium_sword',
    'allthemodium:unobtainium_pickaxe',
    'allthemodium:unobtainium_axe',
    'allthemodium:unobtainium_shovel',
    'allthemodium:unobtainium_hoe',
    'allthemodium:unobtainium_helmet',
    'allthemodium:unobtainium_chestplate',
    'allthemodium:unobtainium_leggings',
    'allthemodium:unobtainium_boots',
    'allthemodium:unobtainium_rod',

    'allthemodium:unobtainium_allthemodium_alloy_dust',
    'allthemodium:unobtainium_vibranium_alloy_dust',
    'allthemodium:vibranium_allthemodium_alloy_dust',
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'allthemodium:unobtainium_vibranium_alloy_ingot',
    'allthemodium:vibranium_allthemodium_alloy_ingot',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:alloy_sword',
    'allthemodium:alloy_pickaxe',
    'allthemodium:alloy_axe',
    'allthemodium:alloy_shovel',
    'allthemodium:alloy_hoe',
    'allthemodium:alloy_pick',
    'allthemodium:alloy_paxel',
  ])

  replaceShaped(event,
    [
      'fuf',
      'fbf',
      'fuf'
    ],
    {
      f: 'minecraft:deepslate',
      u: '#forge:ingots/allthemodium',
      b: '#forge:ingots/netherite'
    },
    Item.of('allthemodium:allthemodium_upgrade_smithing_template'),
    'smithing/allthemodium_upgrade_smithing_template'
  )

  replaceShaped(event,
    [
      'fuf',
      'fbf',
      'fuf'
    ],
    {
      f: 'allthemodium:ancient_stone',
      u: '#forge:ingots/vibranium',
      b: '#forge:ingots/allthemodium'
    },
    Item.of('allthemodium:vibranium_upgrade_smithing_template'),
    'smithing/vibranium_upgrade_smithing_template'
  )

  replaceShaped(event,
    [
      'fuf',
      'fbf',
      'fuf'
    ],
    {
      f: 'minecraft:end_stone',
      u: '#forge:ingots/unobtainium',
      b: '#forge:ingots/vibranium'
    },
    Item.of('allthemodium:unobtainium_upgrade_smithing_template'),
    'smithing/unobtainium_upgrade_smithing_template'
  )

  replaceShaped(event, [
    ' b ',
    'beb',
    ' b '
  ], {
    e: 'meatsalad:infused_ender_pearl',
    b: '#forge:nuggets/allthemodium'
  }, Item.of('allthemodium:teleport_pad'))

  removeRecipes(event, [
    'allthemodium:allthemodium_gear',
    'allthemodium:vibranium_gear',
    'allthemodium:unobtainium_gear',
    'allthemodium:allthemodium_plate',
    'allthemodium:vibranium_plate',
    'allthemodium:unobtainium_plate',
    'allthemodium:raw_allthemodium_block',
    'allthemodium:raw_vibranium_block',
    'allthemodium:raw_unobtainium_block',
  ])
})
