//priority: 80

ServerEvents.chestLootTables(event => {
  const BookStages = {
    early: { 
      enchantLevels: getEnchantLevels(10, 20),
      conditions: [earlyStageCondition]
    },
    mid: {
      enchantLevels: getEnchantLevels(20, 40),
      conditions: [midStageCondition]
    },
    late: {
      enchantLevels: getEnchantLevels(40, 60, false),
      conditions: [lateStageCondition]
    },
    end: {
      enchantLevels: getEnchantLevels(60, 80, false),
      conditions: [endStageCondition]
    }
  }

  const treasureAllowedValues = [false, true]

  // Create each enchanted book stage loot tables
  for (let [bookStage, bookStageProps] of Object.entries(BookStages)) {
    treasureAllowedValues.forEach(treasureAllowed => {
      let treasureSuffix = treasureAllowed ? '_treasure' : ''
      event.addChest(`meatsalad:enchanted_books/${bookStage}${treasureSuffix}`, table => {
        table.addPool(pool => {
          pool.rolls = 1.0
          addDynamic(pool,
            {
              type: 'placebo:stack_entry',
              min: 1,
              max: 1,
              stack: {
                item: 'minecraft:book'
              }
            }, 
            bookStageProps.enchantLevels.map(enchantLevel => {
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

  // Create final random tables
  treasureAllowedValues.forEach(treasureAllowed => {
    let treasureSuffix = treasureAllowed ? '_treasure' : ''
    event.addChest(`meatsalad:enchanted_books/random${treasureSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        addDynamic(pool,
          {
            type: 'minecraft:loot_table'
          }, 
          Object.keys(BookStages).map(bookStage => {
            return { 
              name: `meatsalad:chests/enchanted_books/${bookStage}${treasureSuffix}`,
              conditions: BookStages[bookStage].conditions
            }
          })
        )
      })
    })
  })
})
