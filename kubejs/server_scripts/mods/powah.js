ServerEvents.recipes(event => {
  // global.removeRecipes(event, [
  //   'powah:energizing/uraninite_from_ore_poor',
  //   'powah:energizing/uraninite_from_ore',
  //   'powah:energizing/uraninite_from_ore_dense',
  //   'powah:energizing/uraninite_from_raw',
  //   'powah:smelting/uraninite_from_raw_blasting',
  //   'powah:smelting/uraninite_from_raw',
  // ])

  global.energize(event,
    [
      Ingredient.of('#forge:raw_materials/uranium')
    ],
    2000,
    Item.of('powah:uraninite', 2),
    'uraninite_from_raw'
  )
  global.energize(event,
    [
      Ingredient.of('#forge:ores/uranium')
    ],
    50000,
    Item.of('powah:uraninite', 5),
    'uraninite_from_ore'
  )
})
