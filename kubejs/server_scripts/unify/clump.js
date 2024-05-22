//priority: 200
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'mekanism:purifying',
      target: 'forge:ores/{0}',
      id: 'purifying/{0}_clumps_from_ore',
      json: {
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 3 }
      }
    },
    {
      type: 'mekanism:purifying',
      target: 'forge:storage_blocks/raw_{0}',
      id: 'purifying/{0}_clumps_from_raw_block',
      json: {
        chemicalInput: {
          amount: 2,
          gas: 'mekanism:oxygen'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 18 }
      }
    },
    {
      type: 'mekanism:purifying',
      target: 'forge:raw_materials/{0}',
      id: 'purifying/{0}_clumps_from_raw',
      json: {
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'mekanism:purifying',
      target: 'mekanism:shards/{0}',
      id: 'purifying/{0}_clumps_from_shard',
      json: {
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}' }
      }
    },
  ]

  global.unify(event, 'mekanism:clumps/', recipes)
})
