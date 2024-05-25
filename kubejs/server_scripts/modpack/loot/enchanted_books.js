ServerEvents.chestLootTables(event => {
  const BookStages = {
    early: { 
      enchantLevels: global.getEnchantLevels(10, 20),
      conditions: [global.earlyStageCondition]
    },
    mid: {
      enchantLevels: global.getEnchantLevels(20, 40),
      conditions: [global.midStageCondition]
    },
    late: {
      enchantLevels: global.getEnchantLevels(40, 60, false),
      conditions: [global.lateStageCondition]
    },
    end: {
      enchantLevels: global.getEnchantLevels(60, 80, false),
      conditions: [global.endStageCondition]
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
          global.addDynamic(pool,
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
    event.addChest(`meatsalad:enchanted_books/random${treasureSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        global.addDynamic(pool,
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
