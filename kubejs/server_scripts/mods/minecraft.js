ServerEvents.chestLootTables(event => {
  event.modify('minecraft:ancient_city', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('minecraft:bastion_bridge', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('minecraft:bastion_hoglin_stable', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('minecraft:bastion_other', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('minecraft:bastion_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('minecraft:end_city_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addAncientTomeLootPool(table)
    addRedHeartLootPool(table)
    addStackLootPool(table, {item: 'meatsalad:dark_matter'}, {weight: global.config.darkMatterWeight, quality: global.config.darkMatterQuality})
  })

  event.modify('minecraft:stronghold_corridor', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('minecraft:stronghold_crossing', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('minecraft:stronghold_library', table => {
    addBlueprintLootPool(table, {weight: null})
    addAncientTomeLootPool(table)
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
  replaceShaped(event,
    [
      'fuf',
      'fbf',
      'fuf'
    ],
    {
      f: 'minecraft:netherrack',
      u: '#forge:ingots/netherite',
      b: '#forge:gems/diamond'
    },
    Item.of('minecraft:netherite_upgrade_smithing_template')
  )
})
