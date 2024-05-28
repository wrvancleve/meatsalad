//priority: 150
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:press',
      target: 'forge:storage_blocks/{0}',
      id: 'press/unpacking/{0}_ingots_from_block',
      json: {
        ingredients: [
          { tag: '{0}' },
          { item: 'thermal:press_unpacking_die' }
        ],
        result: [ { item: '{0}', count: 9 } ]
      }
    },
    {
      type: 'thermal:press',
      target: 'forge:nuggets/{0}',
      id: 'press/packing3x3/{0}_ingot_from_nuggets',
      json: {
        ingredients: [
          { tag: '{0}', count: 9 },
          { item: 'thermal:press_packing_3x3_die' }
        ],
        result: [ { item: '{0}' } ]
      }
    },
    {
      type: 'thermal:smelter',
      target: 'forge:ores/{0}',
      id: 'smelter/{0}_ingot_from_ore',
      json: {
        ingredient: {
          tag: '{0}'
        },
        result: [
          {
            item: '{0}',
            chance: 1
          },
          {
            item: 'thermal:rich_slag',
            chance: 0.20
          }
        ],
        experience: 0.2
      }
    },
    {
      type: 'thermal:smelter',
      target: 'forge:raw_materials/{0}',
      id: 'smelter/{0}_ingot_from_raw',
      json: {
        ingredient: {
          tag: '{0}'
        },
        result: [
          {
            item: '{0}',
            chance: 1.5
          }
        ],
        experience: 0.1
      }
    },
    {
      type: 'thermal:smelter',
      target: 'forge:plates/{0}',
      id: 'smelter/{0}_ingot_from_plate',
      json: {
        ingredient: {
          tag: '{0}'
        },
        result: [{ item: '{0}' }],
        experience: 0.0
      }
    },
    {
      type: 'thermal:smelter',
      target: 'forge:gears/{0}',
      id: 'smelter/{0}_ingots_from_gear',
      json: {
        ingredient: {
          tag: '{0}'
        },
        result: [{ item: '{0}', chance: 4.0 }],
        experience: 0.0
      }
    },
    {
      type: 'minecraft:crafting_shapeless',
      target: 'forge:storage_blocks/{0}',
      id: '{0}_ingots_from_block',
      json: {
        result: { item: '{0}', count: 9 },
        ingredients: [
          { tag: '{0}' }
        ]
      }
    },
    {
      type: 'minecraft:crafting_shaped',
      target: 'forge:nuggets/{0}',
      id: '{0}_ingot_from_nuggets',
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
    {
      type: 'minecraft:smelting',
      target: 'forge:dusts/{0}',
      id: 'smelting/{0}_ingot_from_dust',
      exclude: ['gems'],
      json: {
        cookingtime: 200,
        experience: 0.0,
        ingredient: { tag: '{0}' },
        result: '{0}'
      }
    },
    {
      type: 'minecraft:blasting',
      target: 'forge:dusts/{0}',
      id: 'blasting/{0}_ingot_from_dust',
      exclude: ['gems'],
      json: {
        cookingtime: 100,
        experience: 0.0,
        ingredient: { tag: '{0}' },
        result: '{0}'
      }
    },
  ]

  unify(event, 'forge:ingots/', recipes)
})