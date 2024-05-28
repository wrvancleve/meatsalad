ServerEvents.chestLootTables(event => {
  event.modify('betterdeserttemples:library', table => {
    addBlueprintLootPool(table, {weight: null})
    addAncientTomeLootPool(table)
  })
})
