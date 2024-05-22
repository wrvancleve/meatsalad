//priority: 190
ServerEvents.recipes(event => {
  const storageRecipes = [
    {
      type: 'thermal:press',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'press/packing3x3/{0}_block_from_ingots',
        'press/packing3x3/{0}_block_from_gems',
      ],
      json: {
        ingredients: [
          { tag: '{0}', count: 9 },
          { item: 'thermal:press_packing_3x3_die' }
        ],
        result: [ { item: '{0}' } ]
      }
    },
    {
      type: 'minecraft:crafting_shaped',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        '{0}_block_from_ingots',
        '{0}_block_from_gems',
      ],
      json: {
        key: {
          a: { tag: '{0}' }
        },
        pattern: [
          'aaa',
          'aaa',
          'aaa'
        ],
        result: { item: '{0}' }
      }
    },
  ]

  global.unify(event, 'forge:storage_blocks/', storageRecipes)

  const rawStorageRecipes = [
    {
      type: 'thermal:press',
      target: 'forge:raw_materials/{0}',
      id: 'press/packing3x3/{0}_raw_block_from_raw_materials',
      json: {
        ingredients: [
          { tag: '{0}', count: 9 },
          { item: 'thermal:press_packing_3x3_die' }
        ],
        result: [ { item: '{0}' } ]
      }
    },
    {
      type: 'minecraft:crafting_shaped',
      target: 'forge:raw_materials/{0}',
      id: '{0}_raw_block_from_raw_materials',
      json: {
        key: {
          a: { tag: '{0}' }
        },
        pattern: [
          'aaa',
          'aaa',
          'aaa'
        ],
        result: { item: '{0}' }
      }
    },
  ]

  global.unify(event, 'forge:storage_blocks/raw_', rawStorageRecipes)
})
