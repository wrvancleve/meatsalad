ServerEvents.chestLootTables(event => {
  event.modify('ctov:village/village_library', table => {
    addBlueprintLootPool(table, {name: 'temporary', weight: null})
  })
})
