//priority:110
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:press',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'press/{0}_plate_from_ingots',
        'press/{0}_plate_from_gems',
      ],
      json: {
        ingredients: [
          { tag: '{0}' },
        ],
        result: [ { item: '{0}' } ]
      }
    },
  ]

  global.unify(event, 'forge:plates/', recipes)
})
