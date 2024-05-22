ServerEvents.chestLootTables(event => {
  const GearMaterials = {
    iron: {
      items: [
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots',
        'minecraft:iron_sword',
        'minecraft:iron_axe',
        'minecraft:iron_pickaxe',
        'minecraft:iron_shovel'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
      ]
    },
    gold: {
      items: [
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots',
        'minecraft:golden_sword',
        'minecraft:golden_axe',
        'minecraft:golden_pickaxe',
        'minecraft:golden_shovel'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
      ]
    },
    diamond: {
      items: [
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots',
        'minecraft:diamond_sword',
        'minecraft:diamond_axe',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_shovel'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
        global.EnchantLevels['50'],
        global.EnchantLevels['60'],
        global.EnchantLevels['70'],
        global.EnchantLevels['80'],
      ]
    },
    bow: {
      items: [
        'minecraft:bow'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
        global.EnchantLevels['50'],
        global.EnchantLevels['60'],
        global.EnchantLevels['70'],
        global.EnchantLevels['80'],
      ]
    },
    crossbow: {
      items: [
        'minecraft:crossbow'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
        global.EnchantLevels['50'],
        global.EnchantLevels['60'],
        global.EnchantLevels['70'],
        global.EnchantLevels['80'],
      ]
    },
    shield: {
      items: [
        'minecraft:shield'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
        global.EnchantLevels['50'],
        global.EnchantLevels['60'],
        global.EnchantLevels['70'],
        global.EnchantLevels['80'],
      ]
    },
    trident: {
      items: [
        'minecraft:trident'
      ],
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
        global.EnchantLevels['50'],
        global.EnchantLevels['60'],
        global.EnchantLevels['70'],
        global.EnchantLevels['80'],
      ]
    }
  }

  const treasureAllowedValues = [false, true]

  // Create type specific tables and random tables inside type
  for (let [gearType, gearTypeProps] of Object.entries(GearMaterials)) {
    treasureAllowedValues.forEach(treasureAllowed => {
      let treasureSuffix = treasureAllowed ? '_treasure' : ''
      let isSingleGearItem = gearTypeProps.items.length === 1
      if (!isSingleGearItem) {
        gearTypeProps.enchantLevels.forEach(enchantLevel => {
          event.addChest(`meatsalad:gear/${gearType}/level_${enchantLevel.value}${treasureSuffix}`, table => {
            table.addPool(pool => {
              pool.rolls = 1.0
              global.addDynamic(pool,
                {
                  type: 'placebo:stack_entry',
                  min: 1,
                  max: 1,
                  functions: [global.enchantFunction(enchantLevel.value, treasureAllowed)]
                }, 
                gearTypeProps.items.map(item => {
                  return { stack: {item: item} }
                })
              )
            })
          })
        })
      }
      event.addChest(`meatsalad:gear/${gearType}/random${treasureSuffix}`, table => {
        table.addPool(pool => {
          pool.rolls = 1.0
          if (!isSingleGearItem) {
            global.addDynamic(pool,
              {
                type: 'minecraft:loot_table'
              }, 
              gearTypeProps.enchantLevels.map(enchantLevel => {
                return {
                  name: `meatsalad:chests/gear/${gearType}/level_${enchantLevel.value}${treasureSuffix}`,
                  conditions: enchantLevel.conditions
                }
              })
            )
          } else {
            global.addDynamic(pool,
              {
                type: 'placebo:stack_entry',
                min: 1,
                max: 1,
                stack: {
                  item: gearTypeProps.items[0]
                }
              }, 
              gearTypeProps.enchantLevels.map(enchantLevel => {
                return {
                  functions: [global.enchantFunction(enchantLevel.value, treasureAllowed)],
                  conditions: enchantLevel.conditions
                }
              })
            )
          }
        })
      })
    })
  }

  // Add other gear type tables
  const otherGearTypes = ['bow', 'crossbow', 'shield'] // , 'trident'
  treasureAllowedValues.forEach(treasureAllowed => {
    let treasureSuffix = treasureAllowed ? '_treasure' : ''
    event.addChest(`meatsalad:gear/other/random${treasureSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        global.addDynamic(pool,
          {
            type: 'minecraft:loot_table'
          }, 
          otherGearTypes.map(otherGearType => {
            return { name: `meatsalad:chests/gear/${otherGearType}/random${treasureSuffix}` }
          })
        )
      })
    })
  })

  const GearStages = {
    early: {
      gears: [
        {type: 'iron', weight: 150.0, quality: 1.0},
        {type: 'gold', weight: 125.0, quality: 2.0},
        {type: 'other', weight: 75.0, quality: 1.0},
      ],
      conditions: [global.earlyStageCondition]
    },
    mid: {
      gears: [
        {type: 'iron', weight: 60.0, quality: 1.0},
        {type: 'gold', weight: 50.0, quality: 1.5},
        {type: 'diamond', weight: 20.0, quality: 2.5},
        {type: 'other', weight: 30.0, quality: 1.0},
      ],
      conditions: [global.midStageCondition]
    },
    late: {
      gears: [
        {type: 'diamond', weight: 150.0, quality: 2.0},
        {type: 'other', weight: 50.0, quality: 1.0},
      ],
      conditions: [global.lateStageCondition]
    },
    end: {
      gears: [
        {type: 'diamond', weight: 60.0, quality: 2.5},
        {type: 'other', weight: 20.0, quality: 1.0},
      ],
      conditions: [global.endStageCondition]
    }
  }

  // Create gear stage tables
  for (let [gearStage, gearStageProps] of Object.entries(GearStages)) {
    treasureAllowedValues.forEach(treasureAllowed => {
      let treasureSuffix = treasureAllowed ? '_treasure' : ''
      event.addChest(`meatsalad:gear/${gearStage}${treasureSuffix}`, table => {
        table.addPool(pool => {
          pool.rolls = 1.0
          global.addDynamic(pool,
            {
              type: 'minecraft:loot_table'
            }, 
            gearStageProps.gears.map(gear => {
              return { 
                name: `meatsalad:chests/gear/${gear.type}/random${treasureSuffix}`,
                weight: gear.weight,
                quality: gear.quality
              }
            })
          )
        })
      })
    })
  }

  // Create final random tables
  treasureAllowedValues.forEach(treasureAllowed => {
    let treasureSuffix = treasureAllowed ? '_treasure' : ''
    event.addChest(`meatsalad:gear/random${treasureSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        global.addDynamic(pool,
          {
            type: 'minecraft:loot_table'
          }, 
          Object.keys(GearStages).map(gearStage => {
            return { 
              name: `meatsalad:chests/gear/${gearStage}${treasureSuffix}`,
              conditions: GearStages[gearStage].conditions
            }
          })
        )
      })
    })
  })
})
