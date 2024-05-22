ServerEvents.chestLootTables(event => {
  const BookStages = {
    early: { 
      enchantLevels: [
        global.EnchantLevels['10'],
        global.EnchantLevels['20'],
      ],
      conditions: [global.earlyStageCondition]
    },
    mid: {
      enchantLevels: [
        global.EnchantLevels['20'],
        global.EnchantLevels['30'],
        global.EnchantLevels['40'],
      ],
      conditions: [global.midStageCondition]
    },
    late: {
      enchantLevels: [
        global.EnchantLevels['40'],
        global.EnchantLevels['50'],
        global.EnchantLevels['60'],
      ],
      conditions: [global.lateStageCondition]
    },
    end: {
      enchantLevels: [
        global.EnchantLevels['60'],
        global.EnchantLevels['70'],
        global.EnchantLevels['80'],
      ],
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
              return { 
                functions: [global.enchantFunction(enchantLevel.value, treasureAllowed)],
                conditions: enchantLevel.conditions
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
