ServerEvents.recipes(event => {
  removeRecipes(event, [
    'naturescompass:natures_compass',
  ])
})

ServerEvents.chestLootTables(event => {
  event.modify('minecraft:village/village_cartographer', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      pool.addItem('naturescompass:naturescompass')
    })
  })
})
