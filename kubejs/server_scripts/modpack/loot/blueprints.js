//priority: 80

ServerEvents.chestLootTables(event => {
  event.addChest('meatsalad:blueprints/temporary', table => {
    addStackLootPool(table, {item: 'silentgear:template_board', max: 5})
  })

  event.addChest('meatsalad:blueprints/permanent', table => {
    addStackLootPool(table, {item: 'silentgear:blueprint_paper', max: 5})
  })

  event.addChest('meatsalad:blueprints/random', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      addLootTable(pool, {type: 'blueprints', name: 'temporary', conditions: [getWorldStageCondition({other: false})]})
      addLootTable(pool, {type: 'blueprints', name: 'permanent', conditions: [getWorldStageCondition({nether: true})]})
    })
  })
})
