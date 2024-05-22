ServerEvents.chestLootTables(event => {
  event.modify('betterdeserttemples:library', table => {
    global.addBlueprintLootPool(table, {weight: null})
    global.addAncientTomeLootPool(table)
  })
})
