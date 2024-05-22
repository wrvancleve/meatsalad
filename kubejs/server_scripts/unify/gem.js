//priority: 150
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:press',
      target: 'forge:storage_blocks/{0}',
      id: 'press/unpacking/{0}_from_block',
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
      id: 'press/packing3x3/{0}_from_nuggets',
      json: {
        ingredients: [
          { tag: '{0}', count: 9 },
          { item: 'thermal:press_packing_3x3_die' }
        ],
        result: [ { item: '{0}' } ]
      }
    },
    {
      type: 'thermal:pulverizer',
      target: 'forge:ores/{0}',
      id: 'pulverizer/{0}_from_ore',
      json: {
        ingredient: { tag: '{0}' },
        result: [
          {
            item: '{0}',
            chance: 2.5
          },
          {
            item: 'minecraft:gravel',
            chance: 0.2
          }
        ],
        experience: 0.5
      }
    },
    {
      type: 'thermal:smelter',
      target: 'forge:ores/{0}',
      id: 'smelter/{0}_from_ore',
      json: {
        ingredient: {
          tag: '{0}'
        },
        result: [
          {
            item: '{0}',
            chance: 1.5
          },
          {
            item: 'thermal:rich_slag',
            chance: 0.15
          }
        ],
        experience: 0.5
      }
    },
    {
      type: 'thermal:smelter',
      target: 'forge:plates/{0}',
      id: 'smelter/{0}_from_plate',
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
      id: 'smelter/{0}_from_gear',
      json: {
        ingredient: {
          tag: '{0}'
        },
        result: [{ item: '{0}', chance: 4.0 }],
        experience: 0.0
      }
    },
    {
      type: 'thermal:crystallizer',
      target: 'forge:dusts/{0}',
      id: 'crystallizer/{0}_from_dust',
      json: {
        ingredients: [
          { fluid: 'minecraft:water', amount: 2000 },
          { tag: '{0}' }
        ],
        result: [ { item: '{0}' } ]
      }
    },
    {
      type: 'mekanism:enriching',
      target: 'forge:ores/{0}',
      id: 'enriching/{0}_from_ore',
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'mekanism:enriching',
      target: 'forge:dusts/{0}',
      id: 'enriching/{0}_from_dust',
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}' }
      }
    },
    {
      type: 'minecraft:crafting_shapeless',
      target: 'forge:storage_blocks/{0}',
      id: '{0}_from_block',
      exclude: ['amethyst'],
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
      id: '{0}_from_nuggets',
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
      target: 'forge:ores/{0}',
      id: 'smelting/{0}_from_ore',
      json: {
        cookingtime: 200,
        experience: 1.0,
        ingredient: { tag: '{0}' },
        result: '{0}'
      }
    },
    {
      type: 'minecraft:blasting',
      target: 'forge:ores/{0}',
      id: 'blasting/{0}_from_ore',
      json: {
        cookingtime: 100,
        experience: 1.0,
        ingredient: { tag: '{0}' },
        result: '{0}'
      }
    },
  ]

  global.unify(event, 'forge:gems/', recipes)

  // Missing amethyst processing
  event.shapeless(
    '4x minecraft:amethyst_shard',
    [
      '#forge:storage_blocks/amethyst',
      'thermal:earth_charge'
    ]
  ).id('meatsalad:earth_charge/amethyst_from_block')
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: { tag: 'forge:storage_blocks/amethyst' },
    result: [{ item: 'minecraft:amethyst_shard', count: 4 }]
  }).id('meatsalad:pulverizer/amethyst_from_block')
  event.custom({
    type: 'mekanism:enriching',
    input: {
      ingredient: { tag: 'forge:storage_blocks/amethyst' }
    },
    output: { item: 'minecraft:amethyst_shard', count: 4 }
  }).id('meatsalad:enriching/amethyst_from_block')
})
