ServerEvents.chestLootTables(event => {
  event.modify('betterstrongholds:library_md', table => {
    addBlueprintLootPool(table, {weight: null})
    addAncientTomeLootPool(table)
  })

  event.modify('betterstrongholds:grand_library', table => {
    addBlueprintLootPool(table, {name: 'permanent', weight: null})
  })

  event.modify('betterstrongholds:treasure', table => {
    addGemLootPool(table)
    addRedHeartLootPool(table)
  })
})
