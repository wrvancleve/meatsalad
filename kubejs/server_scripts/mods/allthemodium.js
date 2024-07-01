ServerEvents.tags('block', event => {
  event.remove('forge:needs_allthemodium_tool', 'allthemodium:unobtainium_ore')
  event.add('forge:needs_vibranium_tool', 'allthemodium:unobtainium_ore')

  event.add('forge:ores', 'allthemodium:allthemodium_ore')
  event.add('forge:ores', 'allthemodium:allthemodium_slate_ore')
  event.add('forge:ores', 'allthemodium:unobtainium_ore')
  event.add('forge:ores', 'allthemodium:other_vibranium_ore')
})

ServerEvents.tags('item', event => {
  event.add('forge:ores', 'allthemodium:allthemodium_ore')
  event.add('forge:ores', 'allthemodium:allthemodium_slate_ore')
  event.add('forge:ores', 'allthemodium:unobtainium_ore')
  event.add('forge:ores', 'allthemodium:other_vibranium_ore')
})

ServerEvents.recipes(event => {
  function removeItems(ids) {
    ids.forEach(id => {
      event.remove([{ input: id }, { output: id }])
    })
  }

  removeItems([
    // 'allthemodium:allthemodium_sword',
    // 'allthemodium:allthemodium_pickaxe',
    // 'allthemodium:allthemodium_axe',
    // 'allthemodium:allthemodium_shovel',
    // 'allthemodium:allthemodium_hoe',
    // 'allthemodium:allthemodium_helmet',
    // 'allthemodium:allthemodium_chestplate',
    // 'allthemodium:allthemodium_leggings',
    // 'allthemodium:allthemodium_boots',
    'allthemodium:allthemodium_rod',
    'allthemodium:allthemodium_apple',
    'allthemodium:allthemodium_carrot',

    // 'allthemodium:vibranium_sword',
    // 'allthemodium:vibranium_pickaxe',
    // 'allthemodium:vibranium_axe',
    // 'allthemodium:vibranium_shovel',
    // 'allthemodium:vibranium_hoe',
    // 'allthemodium:vibranium_helmet',
    // 'allthemodium:vibranium_chestplate',
    // 'allthemodium:vibranium_leggings',
    // 'allthemodium:vibranium_boots',
    'allthemodium:vibranium_rod',

    // 'allthemodium:unobtainium_sword',
    // 'allthemodium:unobtainium_pickaxe',
    // 'allthemodium:unobtainium_axe',
    // 'allthemodium:unobtainium_shovel',
    // 'allthemodium:unobtainium_hoe',
    // 'allthemodium:unobtainium_helmet',
    // 'allthemodium:unobtainium_chestplate',
    // 'allthemodium:unobtainium_leggings',
    // 'allthemodium:unobtainium_boots',
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
    'allthemodium:alloy_axe',
    'allthemodium:alloy_shovel',
    'allthemodium:alloy_pick',
    'allthemodium:alloy_paxel',
  ])

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
    'allthemodium:smithing/allthemodium_upgrade_smithing_template',
    'allthemodium:smithing/vibranium_upgrade_smithing_template',
    'allthemodium:smithing/unobtainium_upgrade_smithing_template',
  ])

  event.shaped('allthemodium:allthemodium_upgrade_smithing_template', [
    'fuf',
    'fbf',
    'fuf'
  ], {
    f: 'minecraft:deepslate',
    u: '#forge:ingots/allthemodium',
    b: '#forge:ingots/netherite',
  }).stage('palladium_upgrade').id('meatsalad:allthemodium_upgrade_smithing_template')

  event.shaped('allthemodium:vibranium_upgrade_smithing_template', [
    'fuf',
    'fbf',
    'fuf'
  ], {
    f: 'allthemodium:ancient_stone',
    u: '#forge:ingots/vibranium',
    b: '#forge:ingots/allthemodium',
  }).stage('vibranium_upgrade').id('meatsalad:vibranium_upgrade_smithing_template')

  event.shaped('allthemodium:unobtainium_upgrade_smithing_template', [
    'fuf',
    'fbf',
    'fuf'
  ], {
    f: 'minecraft:end_stone',
    u: '#forge:ingots/unobtainium',
    b: '#forge:ingots/vibranium',
  }).stage('unobtainium_upgrade').id('meatsalad:unobtainium_upgrade_smithing_template')

  replaceShaped(event, [
    ' b ',
    'beb',
    ' b '
  ], {
    e: 'meatsalad:infused_ender_pearl',
    b: '#forge:nuggets/allthemodium'
  }, Item.of('allthemodium:teleport_pad'))
})
