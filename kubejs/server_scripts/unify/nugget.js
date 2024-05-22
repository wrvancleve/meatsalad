//priority: 140
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:press',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'press/unpacking/{0}_nuggets_from_ingot',
        'press/unpacking/{0}_nuggets_from_gem',
      ],
      json: {
        ingredients: [
          { tag: '{0}' },
          { item: 'thermal:press_unpacking_die' },
        ],
        result: [ { item: '{0}', count: 9 } ]
      }
    },
    {
      type: 'minecraft:crafting_shapeless',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        '{0}_nuggets_from_ingot',
        '{0}_nuggets_from_gem',
      ],
      json: {
        result: { item: '{0}', count: 9 },
        ingredients: [
          { tag: '{0}' }
        ]
      }
    },
  ]

  global.unify(event, 'forge:nuggets/', recipes)
})
