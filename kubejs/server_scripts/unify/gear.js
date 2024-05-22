//priority:100
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:press',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'press/{0}_gear_from_ingots',
        'press/{0}_gear_from_gems',
      ],
      json: {
        ingredients: [
          { tag: '{0}', count: 4 },
          { item: 'thermal:press_gear_die' },
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
        '{0}_gear_from_ingots',
        '{0}_gear_from_gems',
      ],
      json: {
        key: {
          I: { tag: '{0}' },
          N: { tag: 'forge:nuggets/iron' }
        },
        pattern: [
          ' I ',
          'INI',
          ' I '
        ],
        result: { item: '{0}' }
      }
    },
  ]

  global.unify(event, 'forge:gears/', recipes)
})
