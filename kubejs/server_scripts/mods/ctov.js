ServerEvents.chestLootTables(event => {
  event.modify('ctov:village/village_library', table => {
    global.addRandomBlueprintPool(table, 1.0);
  });
})
