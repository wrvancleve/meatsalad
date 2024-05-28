ServerEvents.chestLootTables(event => {
  event.modify('betteroceanmonuments:upper_side_chamber', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })
})
