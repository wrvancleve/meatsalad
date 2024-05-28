//priority: 200
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'mekanism:injecting',
      target: 'mekanism:crystals/{0}',
      id: 'purifying/{0}_shard_from_crystal',
      json: {
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}' }
      }
    },
    {
      type: 'mekanism:injecting',
      target: 'forge:ores/{0}',
      id: 'purifying/{0}_shards_from_ore',
      json: {
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 4 }
      }
    },
    {
      type: 'mekanism:injecting',
      target: 'forge:storage_blocks/raw_{0}',
      id: 'purifying/{0}_shards_from_raw_block',
      json: {
        chemicalInput: {
          amount: 2,
          gas: 'mekanism:hydrogen_chloride'
        },
        itemInput: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 24 }
      }
    },
    {
      type: 'mekanism:injecting',
      target: 'forge:raw_materials/{0}',
      id: 'purifying/{0}_shards_from_raw',
      json: {
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        itemInput: {
          amount: 3,
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 8 }
      }
    },
  ]

  unify(event, 'mekanism:shards/', recipes)
})
