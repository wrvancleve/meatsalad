ServerEvents.chestLootTables(event => {
  event.modify('dungeoncrawl:secret_room', table => {
    global.addGearLootPool(table, 5, 0.5, true, true)
    global.addGemLootPool(table, {weight: 15})
    global.addGatewayLootPool(table, {weight: 15})
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeoncrawl:stage_4', table => {
    global.addGearLootPool(table, 5, 0.5, false, false)
    global.addGemLootPool(table, {weight: 10})
    global.addGatewayLootPool(table, {weight: 10})
  })

  event.modify('dungeoncrawl:stage_5', table => {
    global.addGearLootPool(table, 5, 0.5, false, false)
    global.addGemLootPool(table, {weight: 15})
    global.addGatewayLootPool(table, {weight: 15})
  })

  event.modify('dungeoncrawl:treasure', table => {
    global.addGearLootPool(table, 5, 0.5, true, true)
    global.addGemLootPool(table, {weight: 15})
    global.addGatewayLootPool(table, {weight: 15})
    global.addRedHeartLootPool(table)
  })
})
