ServerEvents.chestLootTables(event => {
  event.modify('betteroceanmonuments:upper_side_chamber', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })
})
