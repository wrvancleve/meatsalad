ServerEvents.chestLootTables(event => {
  event.modify('dungeoncrawl:secret_room', table => {
    addGearLootPool(table, 5, 0.5, true, true)
    addGemLootPool(table, {weight: 15})
    addGatewayLootPool(table, {weight: 15})
    addRedHeartLootPool(table)
  })

  event.modify('dungeoncrawl:stage_4', table => {
    addGearLootPool(table, 5, 0.5, false, false)
    addGemLootPool(table, {weight: 10})
    addGatewayLootPool(table, {weight: 10})
  })

  event.modify('dungeoncrawl:stage_5', table => {
    addGearLootPool(table, 5, 0.5, false, false)
    addGemLootPool(table, {weight: 15})
    addGatewayLootPool(table, {weight: 15})
  })

  event.modify('dungeoncrawl:treasure', table => {
    addGearLootPool(table, 5, 0.5, true, true)
    addGemLootPool(table, {weight: 15})
    addGatewayLootPool(table, {weight: 15})
    addRedHeartLootPool(table)
  })
})
