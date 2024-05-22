ServerEvents.chestLootTables(event => {
  event.modify('betterstrongholds:library_md', table => {
    global.addBlueprintLootPool(table, {weight: null})
    global.addAncientTomeLootPool(table, {weight: global.defaultStrongholdAncientTomeWeight})
  })

  event.modify('betterstrongholds:grand_library', table => {
    global.addBlueprintLootPool(table, {name: 'permanent', weight: null})
  })

  event.modify('betterstrongholds:treasure', table => {
    global.addGemLootPool(table)
    global.addRedHeartLootPool(table)
  })
})
