ServerEvents.chestLootTables(event => {
  event.modify('betterjungletemples:treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })
})
