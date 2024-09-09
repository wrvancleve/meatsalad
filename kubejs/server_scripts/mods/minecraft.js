ServerEvents.chestLootTables(event => {
  event.modify('minecraft:ancient_city', table => {
    addAffixItemLootPool(table, 'random_treasure')
  })

  event.modify('minecraft:village/village_armorer', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      const templateTypes = [
        'coating',
        'lining',
        'shield',
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'ring',
        'bracelet'
      ]
      templateTypes.forEach(type => {
        addStack(pool, { item: `silentgear:${type}_template` })
      })
    })
  })

  event.modify('minecraft:village/village_fletcher', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      const templateTypes = [
        'cord',
        'fletching',
        'bow',
        'crossbow',
        'slingshot',
        'arrow'
      ]
      templateTypes.forEach(type => {
        addStack(pool, { item: `silentgear:${type}_template` })
      })
    })
  })

  event.modify('minecraft:village/village_toolsmith', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      const templateTypes = [
        'rod',
        'tip',
        'coating',
        'grip',
        'binding',
        'pickaxe',
        'shovel',
        'axe',
        'paxel',
        'hammer',
        'excavator',
        'saw',
        'hoe',
        'mattock',
        'prospector_hammer',
        'sickle',
        'shears',
        'fishing_rod'
      ]
      templateTypes.forEach(type => {
        addStack(pool, { item: `silentgear:${type}_template` })
      })
    })
  })

  event.modify('minecraft:village/village_weaponsmith', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      const templateTypes = [
        'sword',
        'katana',
        'machete',
        'spear',
        'knife',
        'dagger'
      ]
      templateTypes.forEach(type => {
        addStack(pool, { item: `silentgear:${type}_template` })
      })
    })
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
