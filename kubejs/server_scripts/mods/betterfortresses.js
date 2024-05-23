ServerEvents.chestLootTables(event => {
  event.modify('betterfortresses:extra', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:hall', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:keep', table => {
    global.addGearLootPool(table, 5, 0.5, true, false)
    global.addEyeLootPool(table, 'nether', 5)
    global.addGatewayLootPool(table, {weight: 5})
    global.addRedHeartLootPool(table, 5)
  })

  event.modify('betterfortresses:puzzle', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:quarters', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:storage', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:worship', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })
})
