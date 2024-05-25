ServerEvents.chestLootTables(event => {
  event.addChest('meatsalad:overworld/materials', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:iron_ingot', min: 2, max: 7 }, { weight: 150 })
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 2, max: 7 }, { weight: 100, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 2, max: 6 }, { weight: 50, quality: 2.0 })
    })
  })
  event.addChest('meatsalad:overworld/materials_treasure', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:iron_ingot', min: 2, max: 14 }, { weight: 150 })
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 2, max: 14 }, { weight: 100, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 4, max: 12 }, { weight: 50, quality: 2.5 })
    })
  })
  event.addChest('meatsalad:the_nether/materials', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 2, max: 7 }, { weight: 150, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:quartz', min: 2, max: 6 }, { weight: 100, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 2, max: 6 }, { weight: 50, quality: 2.5 })
    })
  })
  event.addChest('meatsalad:the_nether/materials_treasure', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 4, max: 14 }, { weight: 150, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:quartz', min: 4, max: 12 }, { weight: 100, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 4, max: 12 }, { weight: 50, quality: 3.0 })
    })
  })
  event.addChest('meatsalad:the_other/materials', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 12, max: 25 }, { weight: 175, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 12, max: 25 }, { weight: 100, quality: 1.5 })
      global.addStack(pool, { item: 'minecraft:emerald', min: 5, max: 20 }, { weight: 50, quality: 1.5 })
    })
  })
  event.addChest('meatsalad:the_other/materials_treasure', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 25, max: 50 }, { weight: 150, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 25, max: 50 }, { weight: 100, quality: 1.5 })
      global.addStack(pool, { item: 'minecraft:emerald', min: 10, max: 40 }, { weight: 50, quality: 1.5 })
    })
  })
  event.addChest('meatsalad:the_end/materials', table => {
    table.addPool(pool => {
      global.addStack(pool, { item: 'minecraft:gold_ingot', min: 4, max: 14 }, { weight: 175, quality: 1.0 })
      global.addStack(pool, { item: 'minecraft:diamond', min: 4, max: 14 }, { weight: 100, quality: 2.0 })
      global.addStack(pool, { item: 'minecraft:emerald', min: 4, max: 12 }, { weight: 50, quality: 2.0 })
    })
  })
})
