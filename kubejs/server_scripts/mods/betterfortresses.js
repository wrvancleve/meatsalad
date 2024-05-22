ServerEvents.chestLootTables(event => {
  event.modify('betterfortresses:extra', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:hall', table => {
    global.addEyeLootPool(table, 'nether', 30)
  })

  event.modify('betterfortresses:keep', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addEyeLootPool(table, 'nether', 5)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
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
