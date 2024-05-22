ServerEvents.tags('item', event => {
  event.remove('forge:heart', 'alexsmobs:soul_heart')
})

ServerEvents.recipes(event => {
  global.removeRecipes(event, [
    'alexsmobs:hemolymph_blaster',
    'alexsmobs:mosquito_larva',
    'alexsmobs:transmutation_table',
  ])
})
