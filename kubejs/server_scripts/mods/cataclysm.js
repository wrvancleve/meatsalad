ServerEvents.recipes(event => {
  /*
  fullRemove('cataclysm:mechanical_fusion_anvil')
  */
  global.removeRecipes(event, [
    'cataclysm:abyssal_sacrifice',
    'cataclysm:abyssal_sacrifice2',
    'cataclysm:ancient_metal_block',
    'cataclysm:ancient_metal_ingot',
    'cataclysm:ancient_metal_ingot_from_nuggets',
    'cataclysm:bone_reptile_helmet',
    'cataclysm:bone_reptile_chestplate',
    'cataclysm:bulwark_of_the_flame',
    //'cataclysm:weapon_infusion/gauntlet_of_bulwark',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:ignitium_block',
    'cataclysm:ignitium_ingot',
    'cataclysm:ignitium_upgrade_smithing_template',
    'cataclysm:laser_gatling',
    'cataclysm:the_incinerator',
    'cataclysm:meat_shredder',
    'cataclysm:smithing/ignitium_helmet',
    'cataclysm:smithing/ignitium_chestplate',
    'cataclysm:smithing/ignitium_elytra_chestplate',
    'cataclysm:smithing/ignitium_leggings',
    'cataclysm:smithing/ignitium_boots',
    'cataclysm:smithing/monstrous_helm',
    'cataclysm:sticky_gloves',
    //'cataclysm:weapon_infusion/void_assault_shoulder_weapon',
    //'cataclysm:weapon_infusion/void_forge',
    'cataclysm:witherite_ingot',
    'cataclysm:witherite_block',
    'cataclysm:wither_assault_shoulder_weapon',
  ])
})

ServerEvents.entityLootTables(event => {
  event.modifyEntity('cataclysm:ancient_remnant', table => {
    global.addEyeLootPool(table, 'lost')
    global.addGemLootPool(table, {name: 'max', weight: null})
  })

  event.modifyEntity('cataclysm:deepling_brute', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:heart_of_the_sea').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
    })
  })

  event.modifyEntity('cataclysm:deepling_priest', table => {
    table.clearPools()
    global.addStackLootPool(table, {item: 'cataclysm:abyssal_sacrifice'})
  })

  event.modifyEntity('cataclysm:deepling_warlock', table => {
    table.clearPools()
  })

  event.modifyEntity('cataclysm:kobolediator', table => {
    table.clearPools()
    global.addStackLootPool(table,
      { item: 'cataclysm:koboleton_bone', min: 3, max: 5 },
      {
        functions: [{
            function: 'minecraft:looting_enchant',
            count: {
              type: 'minecraft:uniform',
              min: 0.0,
              max: 1.0
            }
        }]
      }
    )
  })

  event.modifyEntity('cataclysm:koboleton', table => {
    table.clearPools()
    global.addStackLootPool(table,
      { item: 'cataclysm:koboleton_bone', max: 2 },
      {
        functions: [{
            function: 'minecraft:looting_enchant',
            count: {
              type: 'minecraft:uniform',
              min: 0.0,
              max: 1.0
            }
        }]
      }
    )
  })

  event.modifyEntity('cataclysm:netherite_monstrosity', table => {
    table.clearPools()
    global.addStackLootPool(table, {item: 'cataclysm:infernal_forge'})
    global.addEyeLootPool(table, 'evil')
    global.addStackLootPool(table,
      { item: 'cataclysm:music_disc_netherite_monstrosity' },
      {
        conditions: [{
          condition: 'random_chance_with_looting',
          chance: 0.1,
          looting_multiplier: 0.1
        }]
      }
    )
    global.addGemLootPool(table, {name: 'max', weight: null})
  })

  event.modifyEntity('cataclysm:the_harbinger', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'cataclysm:meat_shredder' })
      global.addStack(pool, { item: 'cataclysm:laser_gatling' })
      global.addStack(pool, { item: 'cataclysm:wither_assault_shoulder_weapon' })
    })
    global.addEyeLootPool(table, 'black')
    global.addStackLootPool(table,
      { item: 'cataclysm:music_disc_the_harbinger' },
      {
        conditions: [{
          condition: 'random_chance_with_looting',
          chance: 0.1,
          looting_multiplier: 0.1
        }]
      }
    )
    global.addGemLootPool(table, {name: 'max', weight: null})
  })

  let createScalingBossTables = (boss, loot) => {
    const bossMobId = boss.split(':')[1]
    event.modifyEntity(boss, table => {
      table.clearPools()
      loot.forEach(stackPool => {
        global.addStackLootPool(table, stackPool.stack, stackPool.stackProps)
      })
      global.addStackLootPool(table, {item: 'apotheosis:mythic_material', min: 3, max: 12})
      global.addGemLootPool(table, {name: 'mythic', weight: null})
    })
    for (let i = 1; i <= 3; i++) {
      event.addEntity(boss, table => {
        table.customId = `meatsalad:${bossMobId}_${i}`
        loot.forEach(stackPool => {
          global.addStackLootPool(table, stackPool.stack, stackPool.stackProps)
        })
        table.addPool(pool => {
          global.addStack(pool, {item: 'apotheosis:mythic_material', min: 3, max: 12}, {weight: 100 - (global.config.bossAncientWeight * i)})
          global.addStack(pool, {item: 'apotheosis:ancient_material', max: 4}, {weight: global.config.bossAncientWeight * i, quality: global.config.bossAncientQuality})
        })
        table.addPool(pool => {
          global.addLootTable(pool, {type: 'gems', name: 'mythic', weight: 100 - (global.config.bossAncientWeight * i)})
          global.addLootTable(pool, {type: 'gems', name: 'ancient', weight: global.config.bossAncientWeight * i, quality: global.config.bossAncientQuality})
        })
      })
    }
  }

  const incineratorModifiers = [
    '{AttributeName:"generic.attack_damage",Amount:28,Slot:mainhand,Name:"generic.attack_damage",UUID:[I;-124413,32397,111837,-64794]}',
    '{AttributeName:"generic.attack_speed",Amount:-2.8,Slot:mainhand,Name:"generic.attack_speed",UUID:[I;-124413,32697,111837,-65394]}',
    '{AttributeName:"forge:entity_reach",Amount:2.0,Slot:"mainhand",Name:"forge:entity_reach",UUID:[I;-1434080246,1489914181,-1452003312,1592641912]}'
  ]
  const bosses = [
    {
      id: 'cataclysm:ender_guardian',
      loot: [
        { stack: { item: 'cataclysm:gauntlet_of_guard' } },
        {
          stack: { item: 'cataclysm:music_disc_ender_guardian' },
          stackProps: {
            conditions: [{
                condition: 'random_chance_with_looting',
                chance: 0.1,
                looting_multiplier: 0.1
            }]
          }
        },
        { stack: { item: 'meatsalad:ender_star' } },
      ]
    },
    {
      id: 'cataclysm:ignis',
      loot: [
        { stack: { item: 'cataclysm:bulwark_of_the_flame' } },
        { 
          stack: { 
            item: 'cataclysm:the_incinerator',
            nbt: `{AttributeModifiers:[${incineratorModifiers.join(',')}]}`
          }
        },
        {
          stack: { item: 'cataclysm:music_disc_ignis' },
          stackProps: {
            conditions: [{
                condition: 'random_chance_with_looting',
                chance: 0.1,
                looting_multiplier: 0.1
            }]
          }
        },
        { stack: { item: 'meatsalad:vulcanite' } },
      ]
    },
    {
      id: 'cataclysm:the_leviathan',
      loot: [
        { stack: { item: 'cataclysm:tidal_claws' } },
        { stack: { item: 'cataclysm:abyssal_egg' } },
        {
          stack: { item: 'cataclysm:music_disc_the_leviathan' },
          stackProps: {
            conditions: [{
                condition: 'random_chance_with_looting',
                chance: 0.1,
                looting_multiplier: 0.1
            }]
          }
        },
      ]
    },
  ]
  bosses.forEach(boss => {
    createScalingBossTables(boss.id, boss.loot)
  })
})
