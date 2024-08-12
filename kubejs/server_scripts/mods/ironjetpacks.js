ServerEvents.tags('item', event => {
  event.remove('curios:body', 'ironjetpacks:jetpack')
  event.add('curios:back', 'ironjetpacks:jetpack')
})

ServerEvents.recipes(event => {
  let createThrusterRecipe = (name, material, material_type, coil) => {
    event.shaped(Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:${name}"}`), [
      'MCM',
      'CFC',
      'MFM'
    ], {
      M: `#forge:${material_type}s/${material}`,
      C: coil,
      F: 'minecraft:fire_charge'
    }).id(`meatsalad:${name}_thruster`)
  }

  createThrusterRecipe('diamond', 'diamond', 'gem', 'ironjetpacks:basic_coil')
  createThrusterRecipe('netherite', 'netherite', 'ingot', 'ironjetpacks:basic_coil')
  createThrusterRecipe('palladium', 'allthemodium', 'ingot', 'ironjetpacks:advanced_coil')
  createThrusterRecipe('vibranium', 'vibranium', 'ingot', 'ironjetpacks:elite_coil')
  createThrusterRecipe('unobtainium', 'unobtainium', 'ingot', 'ironjetpacks:ultimate_coil')
})
