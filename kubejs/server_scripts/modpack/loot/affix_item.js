ServerEvents.chestLootTables(event => {
  const AffixStages = {
    early: {
      min_rarity: 'common',
      max_rarity: 'rare',
      enchantLevels: [global.EnchantLevels['20']],
      conditions: [global.earlyStageCondition]
    },
    mid: {
      min_rarity: 'uncommon',
      max_rarity: 'epic',
      enchantLevels: global.getEnchantLevels(20, 60),
      conditions: [global.getWorldStageCondition({nether: true, end: false})]
    },
    end: {
      min_rarity: 'rare',
      max_rarity: 'mythic',
      enchantLevels: global.getEnchantLevels(60, 80, false),
      conditions: [global.endStageCondition]
    }
  }

  const treasureAllowedValues = [false, true]

  // Create each affix stage loot tables
  for (let [affixStage, affixStageProps] of Object.entries(AffixStages)) {
    treasureAllowedValues.forEach(treasureAllowed => {
      let treasureSuffix = treasureAllowed ? '_treasure' : ''
      event.addChest(`meatsalad:affix_items/${affixStage}${treasureSuffix}`, table => {
        table.addPool(pool => {
          pool.rolls = 1.0
          global.addDynamic(pool,
            {
              type: 'apotheosis:random_affix_item',
              min_rarity: affixStageProps.min_rarity,
              max_rarity: affixStageProps.max_rarity
            }, 
            affixStageProps.enchantLevels.map(enchantLevel => {
              let entry = { 
                functions: [global.enchantFunction(enchantLevel.value, treasureAllowed)]
              }
              if (enchantLevel.conditions) entry.conditions = enchantLevel.conditions
              return entry
            })
          )
        })
      })
    })
  }

  // Create final random tables
  treasureAllowedValues.forEach(treasureAllowed => {
    let treasureSuffix = treasureAllowed ? '_treasure' : ''
    event.addChest(`meatsalad:affix_items/random${treasureSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        global.addDynamic(pool,
          {
            type: 'minecraft:loot_table'
          }, 
          Object.keys(AffixStages).map(affixStage => {
            return { 
              name: `meatsalad:chests/affix_items/${affixStage}${treasureSuffix}`,
              conditions: AffixStages[affixStage].conditions
            }
          })
        )
      })
    })
  })
})
