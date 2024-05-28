//priority:120
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:press',
      target: 'forge:storage_blocks/raw_{0}',
      id: 'press/unpacking/raw_{0}_from_raw_block',
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
      target: 'forge:storage_blocks/raw_{0}',
      id: 'raw_{0}_from_raw_block',
      json: {
        result: { item: '{0}', count: 9 },
        ingredients: [
          { tag: '{0}' }
        ]
      }
    },
  ]

  unify(event, 'forge:raw_materials/', recipes)
})
