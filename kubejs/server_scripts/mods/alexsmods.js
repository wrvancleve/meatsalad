ServerEvents.tags('item', event => {
  event.remove('forge:heart', 'alexsmobs:soul_heart')
})

ServerEvents.recipes(event => {
  global.removeRecipes(event, [
    'alexsmobs:hemolymph_blaster',
    'alexsmobs:mosquito_larva',
    'alexsmobs:transmutation_table',
  ])
})

ServerEvents.entityLootTables(event => {
  event.modifyEntity('crimson_mosquito_fly_full', table => {
    table.clearPools()
    global.addStackLootPool(table, {item: 'alexsmobs:mosquito_larva'})
  })

  event.modifyEntity('crimson_mosquito_fly', table => {
    table.clearPools()
    table.addPool(pool => {
      pool.addCondition({
        condition: 'random_chance_with_looting',
        chance: 0.5,
        looting_multiplier: 0.03
      })
      global.addStack(pool, {item: 'alexsmobs:mosquito_larva'})
    })
  })

  event.modifyEntity('crimson_mosquito_full', table => {
    table.clearPools()
    global.addStackLootPool(table, {item: 'alexsmobs:mosquito_larva'})
  })

  event.modifyEntity('crimson_mosquito', table => {
    table.clearPools()
    table.addPool(pool => {
      pool.addCondition({
        condition: 'random_chance_with_looting',
        chance: 0.5,
        looting_multiplier: 0.03
      })
      global.addStack(pool, {item: 'alexsmobs:mosquito_larva'})
    })
  })

  event.modifyEntity('alexsmobs:enderiophage', table => {
    table.clearPools()
    global.addStackLootPool(table, {item: 'alexsmobs:capsid'})
  })

  event.modifyEntity('alexsmobs:mimicube', table => {
    table.clearPools()
    global.addStackLootPool(table,
      { item: 'alexsmobs:mimicream' },
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

  event.modifyEntity('alexsmobs:void_worm', table => {
    table.clearPools()
    global.addStackLootPool(table, {item: 'alexsmobs:void_worm_eye'})
  })
})
