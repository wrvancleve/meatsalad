ServerEvents.chestLootTables(event => {
  event.modify('minecraft:ancient_city', table => {
    addAffixItemLootPool(table, 'random_treasure')
  })
})

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'minecraft:netherite_upgrade_smithing_template'
  ])
  event.shaped('minecraft:netherite_upgrade_smithing_template', [
    'nnn',
    'nNn',
    'nnn'
  ], {
    n: 'minecraft:netherrack',
    N: '#forge:ingots/netherite',
  }).stage('netherite_upgrade').id('meatsalad:netherite_upgrade_smithing_template')
  event.shaped('2x minecraft:netherite_upgrade_smithing_template', [
    'nnn',
    'nNn',
    'nnn'
  ], {
    n: 'minecraft:netherrack',
    N: 'minecraft:netherite_upgrade_smithing_template',
  }).stage('netherite_upgrade').id('meatsalad:netherite_upgrade_smithing_template_copy')
})
