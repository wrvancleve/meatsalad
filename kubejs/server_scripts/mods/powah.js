ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({id: id});
    })
  }

  removeRecipes([
    'powah:energizing/uraninite_from_ore_poor',
    'powah:energizing/uraninite_from_ore',
    'powah:energizing/uraninite_from_ore_dense',
    'powah:energizing/uraninite_from_raw',
    'powah:smelting/uraninite_from_raw_blasting',
    'powah:smelting/uraninite_from_raw'
  ])

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { tag: 'forge:raw_materials/uranium' }
    ],
    energy: 2000,
    result: {
      item: 'powah:uraninite',
      count: 2
    }
  }).id('meatsalad:energizing/uraninite_from_raw')
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { tag: 'forge:ores/uranium' }
    ],
    energy: 50000,
    result: {
      item: 'powah:uraninite',
      count: 5
    }
  }).id('meatsalad:energizing/uraninite_from_ore')
})