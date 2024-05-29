//priority: 80

ServerEvents.chestLootTables(event => {
  const netherStageCondition = getWorldStageCondition({nether: true})
  const otherStageCondition = getWorldStageCondition({other: true})
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
        { id: 'meatsalad:shulker', conditions: [endStageCondition] },
        { id: 'gateways:hellish_fortress', conditions: [getWorldStageCondition({nether: true})] },
      ]
    },
    // epic: {
    //   weight: 20.0,
    //   quality: 2.5,
    //   conditions: [endStageCondition],
    //   gates: [
    //     { id: '', conditions: [endStageCondition] },
    //   ]
    // }
  }

  // Create gate rarity tables
  for (let [rarity, rarityProps] of Object.entries(Gates)) {
    event.addChest(`meatsalad:gates/${rarity}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        addDynamic(pool,
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
      addDynamic(pool,
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

  // Create supreme gate loot
  event.addChest('meatsalad:gates/supreme', table => {
    addStackLootPool(table, {item: 'meatsalad:dark_matter', min: 2, max: 3})
    table.addPool(pool => {
      pool.rolls = [2,3]
      addStack(pool, {item: 'apotheosis:mythic_material', min: 3, max: 12}, {weight: 85})
      addStack(pool, {item: 'apotheosis:ancient_material', max: 4}, {weight: 15, quality: 0.5})
    })
    addStackLootPool(table, {item: 'apotheosis:ancient_material', max: 4})
    table.addPool(pool => {
      pool.rolls = [2,3]
      addLootTable(pool, {type: 'gems', name: 'mythic', weight: 85})
      addLootTable(pool, {type: 'gems', name: 'ancient', weight: 15, quality: 0.5})
    })
    table.addPool(pool => {
      pool.rolls = [2,3]
      addStack(pool, {item: 'irons_spellbooks:legendary_ink', max: 4}, {weight: 2})
      addStack(pool, {item: 'irons_spellbooks:ancient_knowledge_fragment', max: 3}, {weight: 1})
    })
    addGemLootPool(table, {name: 'ancient', weight: null})
    addAncientTomeLootPool(table, {name: 'random_reversed', weight: null})
    table.addPool(pool => {
      pool.rolls = 1
      addStack(pool, {item: 'minecraft:enchanted_golden_apple'}, {weight: 285})
      addStack(pool, {item: 'mekanism:pellet_plutonium'}, {weight: 9, quality: 0.5})
      addStack(pool, {item: 'mekanism:pellet_polonium'}, {weight: 4.5, quality: 0.5})
      addStack(pool, {item: 'mekanism:pellet_antimatter'}, {weight: 1.5, quality: 0.5})
    })
  })
})
