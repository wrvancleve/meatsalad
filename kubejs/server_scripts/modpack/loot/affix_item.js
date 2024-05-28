//priority: 80

ServerEvents.chestLootTables(event => {
  const AffixRarities = {
    common: {
      id: 'apotheosis:common',
      weight: 400,
      quality: 0.0,
      enchantLevels: getEnchantLevels(20, 80),
    },
    uncommon: {
      id: 'apotheosis:uncommon',
      weight: 320,
      quality: 3.0,
      enchantLevels: getEnchantLevels(20, 80),
    },
    rare: {
      id: 'apotheosis:rare',
      weight: 150,
      quality: 6.0,
      enchantLevels: getEnchantLevels(20, 80),
    },
    epic: {
      id: 'apotheosis:epic',
      weight: 90,
      quality: 9.0,
      enchantLevels: getEnchantLevels(20, 80),
    },
    mythic: {
      id: 'apotheosis:mythic',
      weight: 40,
      quality: 12.0,
      enchantLevels: getEnchantLevels(20, 80),
    },
  }

  const treasureAllowedValues = [false, true]

  // Create rarity specific loot tables
  for (let [rarityName, rarityProps] of Object.entries(AffixRarities)) {
    treasureAllowedValues.forEach(treasureAllowed => {
      let treasureSuffix = treasureAllowed ? '_treasure' : ''
      event.addChest(`meatsalad:affix_items/${rarityName}/random${treasureSuffix}`, table => {
        table.addPool(pool => {
          pool.rolls = 1.0
          addDynamic(pool,
            {
              type: 'apotheosis:random_affix_item',
              min_rarity: rarityProps.id,
              max_rarity: rarityProps.id,
            }, 
            rarityProps.enchantLevels.map(enchantLevel => {
              let entry = { 
                functions: [enchantFunction(enchantLevel.value, treasureAllowed)]
              }
              if (enchantLevel.conditions) entry.conditions = enchantLevel.conditions
              return entry
            })
          )
        })
      })
    })
  }

  const AffixStages = {
    early: {
      rarities: [
        'common',
        'uncommon',
        'rare'
      ],
      conditions: [earlyStageCondition]
    },
    mid: {
      rarities: [
        'uncommon',
        'rare',
        'epic',
      ],
      conditions: [getWorldStageCondition({nether: true, end: false})]
    },
    end: {
      rarities: [
        'rare',
        'epic',
        'mythic',
      ],
      conditions: [endStageCondition]
    }
  }

  // Create stage specific loot tables
  for (let [affixStage, affixStageProps] of Object.entries(AffixStages)) {
    treasureAllowedValues.forEach(treasureAllowed => {
      let treasureSuffix = treasureAllowed ? '_treasure' : ''
      event.addChest(`meatsalad:affix_items/${affixStage}${treasureSuffix}`, table => {
        table.addPool(pool => {
          pool.rolls = 1.0
          addDynamic(pool,
            {
              type: 'minecraft:loot_table'
            }, 
            affixStageProps.rarities.map(rarityName => {
              let rarityProps = AffixRarities[rarityName]
              return { 
                name: `meatsalad:chests/affix_items/${rarityName}/random${treasureSuffix}`,
                weight: rarityProps.weight,
                quality: rarityProps.quality
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
    event.addChest(`meatsalad:affix_items/random${treasureSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        addDynamic(pool,
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
