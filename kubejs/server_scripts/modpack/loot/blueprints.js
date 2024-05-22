ServerEvents.chestLootTables(event => {
  event.addChest('meatsalad:blueprints/temporary', table => {
    global.addStackLootPool(table, {item: 'silentgear:template_board', max: 5})
  })

  event.addChest('meatsalad:blueprints/permanent', table => {
    global.addStackLootPool(table, {item: 'silentgear:blueprint_paper', max: 5})
  })

  event.addChest('meatsalad:blueprints/random', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      global.addLootTable(pool, {type: 'blueprints', name: 'temporary', conditions: [global.getWorldStageCondition({other: false})]})
      global.addLootTable(pool, {type: 'blueprints', name: 'permanent', conditions: [global.getWorldStageCondition({nether: true})]})
    })
  })
})
