ServerEvents.chestLootTables(event => {
  let addGearLootPool = (table, baseWeight, baseQuality, isTreasure) => {
    let tableName = isTreasure ? 'random_treasure' : 'random'
    table.addPool(pool => {
      global.addLootTable(pool, {name: `meatsalad:chests/affix_items/${tableName}`, weight: baseWeight, quality: baseQuality})
      global.addLootTable(pool, {name: 'meatsalad:chests/parts/random', weight: baseWeight, quality: baseQuality})
      global.addLootTable(pool, {name: `meatsalad:chests/gear/${tableName}`, weight: 2 * baseWeight})
      if (!isTreasure) pool.addEmpty(4 * baseWeight)
    })
  }

  event.modify('dungeoncrawl:secret_room', table => {
    addGearLootPool(table, 15, 0.5, true)
    global.addGemLootPool(table, {weight: 15})
    global.addGatewayLootPool(table, {weight: 15})
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeoncrawl:stage_4', table => {
    addGearLootPool(table, 10, 0.5, false)
    global.addGemLootPool(table, {weight: 10})
    global.addGatewayLootPool(table, {weight: 10})
  })

  event.modify('dungeoncrawl:stage_5', table => {
    addGearLootPool(table, 15, 0.5, false)
    global.addGemLootPool(table, {weight: 15})
    global.addGatewayLootPool(table, {weight: 15})
  })

  event.modify('dungeoncrawl:treasure', table => {
    addGearLootPool(table, 15, 0.5, true)
    global.addGemLootPool(table, {weight: 15})
    global.addGatewayLootPool(table, {weight: 15})
    global.addRedHeartLootPool(table)
  })
})
