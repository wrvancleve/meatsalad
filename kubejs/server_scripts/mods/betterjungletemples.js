ServerEvents.chestLootTables(event => {
  event.modify('betterjungletemples:treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })
})
