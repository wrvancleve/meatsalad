//priority: 200
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'mekanism:crushing',
      target: 'mekanism:clumps/{0}',
      id: 'crushing/{0}_dirty_dust_from_clump',
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}' }
      }
    },
  ]

  unify(event, 'mekanism:dirty_dusts/', recipes)
})
