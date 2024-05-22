ServerEvents.chestLootTables(event => {
  event.modify('ctov:village/village_library', table => {
    global.addBlueprintLootPool(table, {name: 'temporary', weight: null})
  })
})
