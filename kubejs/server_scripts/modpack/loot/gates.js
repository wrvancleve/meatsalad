ServerEvents.chestLootTables(event => {
  const netherStageCondition = global.getWorldStageCondition({nether: true})
  const otherStageCondition = global.getWorldStageCondition({other: true})
  const Gates = {
    common: {
      weight: 620.0,
      quality: 0.0,
      conditions: [netherStageCondition],
      gates: [
        { id: 'meatsalad:creeper' },
        { id: 'meatsalad:skeleton' },
        { id: 'meatsalad:spider' },
        { id: 'meatsalad:zombie' },
      ]
    },
    uncommon: { 
      weight: 250.0,
      quality: 1.5,
      conditions: [netherStageCondition],
      gates: [
        { id: 'gateways:basic/blaze', conditions: [netherStageCondition] },
        { id: 'gateways:basic/enderman', conditions: [netherStageCondition] },
        { id: 'gateways:basic/slime' },
        { id: 'meatsalad:magma_cube', conditions: [netherStageCondition] },
        { id: 'meatsalad:witch' },
        { id: 'meatsalad:wither_skeleton', conditions: [netherStageCondition] },
        { id: 'gateways:overworldian_nights' },
      ]
    },
    rare: {
      weight: 100.0,
      quality: 2.0,
      conditions: [netherStageCondition],
      gates: [
        { id: 'meatsalad:basalz', conditions: [otherStageCondition] },
        { id: 'meatsalad:blitz', conditions: [otherStageCondition] },
        { id: 'meatsalad:blizz', conditions: [otherStageCondition] },
        { id: 'meatsalad:shulker', conditions: [global.endStageCondition] },
        { id: 'gateways:hellish_fortress', conditions: [global.getWorldStageCondition({nether: true})] },
      ]
    },
    // epic: {
    //   weight: 20.0,
    //   quality: 2.5,
    //   conditions: [global.endStageCondition],
    //   gates: [
    //     { id: '', conditions: [global.endStageCondition] },
    //   ]
    // }
  }

  // Create gate rarity tables
  for (let [rarity, rarityProps] of Object.entries(Gates)) {
    event.addChest(`meatsalad:gates/${rarity}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        global.addDynamic(pool,
          {
            type: 'placebo:stack_entry',
            weight: 1,
            min: 1,
            max: 1
          },
          rarityProps.gates.map(gate => {
            let dynamicGateProps = {
              stack: {
                item: 'gateways:gate_pearl',
                nbt: `{gateway: "${gate.id}"}`
              }
            }
            if (gate.conditions) {
              dynamicGateProps.conditions = gate.conditions
            }
            return dynamicGateProps
          })
        )
      })
    })
  }

  // Create random gate table
  event.addChest('meatsalad:gates/random', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      global.addDynamic(pool,
        {
          type: 'minecraft:loot_table'
        },
        Object.keys(Gates).map(rarity => {
          let rarityProps = Gates[rarity]
          let rarityEntry = {
            name: `meatsalad:chests/gates/${rarity}`,
            weight: rarityProps.weight,
            quality: rarityProps.quality
          }
          if (rarityProps.conditions) {
            rarityEntry.conditions = rarityProps.conditions
          }
          return rarityEntry
        })
      )
    })
  })
})
