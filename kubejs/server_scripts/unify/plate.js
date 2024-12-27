//priority:110
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'create:pressing',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'pressing/{0}_plate_from_ingots',
        'pressing/{0}_plate_from_gems',
      ],
      json: {
        ingredients: [
          { tag: '{0}' },
        ],
        results: [ { item: '{0}' } ]
      }
    },
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

  unify(event, 'forge:plates/', recipes)
})
