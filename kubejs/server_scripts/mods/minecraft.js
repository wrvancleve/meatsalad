ServerEvents.chestLootTables(event => {
  event.modify('minecraft:ancient_city', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
    global.addEyeLootPool(table, 'old', 30)
  })

  event.modify('minecraft:bastion_bridge', table => {
    global.addAffixItemLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('minecraft:bastion_hoglin_stable', table => {
    global.addAffixItemLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('minecraft:bastion_other', table => {
    global.addAffixItemLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('minecraft:bastion_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
    global.addEyeLootPool(table, 'cursed')
  })

  event.modify('minecraft:end_city_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addAncientTomeLootPool(table)
    global.addRedHeartLootPool(table)
    global.addStackLootPool(table, {item: 'meatsalad:dark_matter'}, {weight: global.config.darkMatterWeight, quality: global.config.darkMatterQuality})
  })

  event.modify('minecraft:nether_bridge', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('minecraft:stronghold_corridor', table => {
    global.addAffixItemLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('minecraft:stronghold_crossing', table => {
    global.addAffixItemLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('minecraft:stronghold_library', table => {
    global.addBlueprintLootPool(table, {weight: null})
    global.addAncientTomeLootPool(table, {weight: global.defaultStrongholdAncientTomeWeight})
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
        global.addStack(pool, { item: `silentgear:${type}_template` })
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
        global.addStack(pool, { item: `silentgear:${type}_template` })
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
        global.addStack(pool, { item: `silentgear:${type}_template` })
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
        global.addStack(pool, { item: `silentgear:${type}_template` })
      })
    })
  })
})

ServerEvents.entityLootTables(event => {
  event.modifyEntity('minecraft:elder_guardian', table => {
    global.addStackLootPool(table, {item: 'progressivebosses:elder_guardian_spike'})
    global.addEyeLootPool(table, 'guardian', 50)
  })
})

ServerEvents.recipes(event => {
  global.replaceShaped(event,
    [
      'fuf',
      'ubu',
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
