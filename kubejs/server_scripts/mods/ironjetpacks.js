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

  // e.shaped(Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(), [
  //   ' A ',
  //   'BCB',
  //   ' A '
  // ], {
  //   A: '#forge:storage_blocks/redstone',
  //   B: 'allthemodium:unobtainium_block',
  //   C: 'powah:battery_nitro'
  // }).id('kubejs:ironjetpacks_creative_cell')

  // e.shaped(Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(), [
  //   'ABA',
  //   'BCB',
  //   'ADA'
  // ], {
  //   A: 'allthemodium:unobtainium_block',
  //   B: 'powah:nitro_crystal_block',
  //   C: Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(),
  //   D: 'ironfurnaces:unobtainium_furnace'
  // }).id('kubejs:ironjetpacks_creative_thruster')

  // e.shaped(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }), [
  //   'ACA',
  //   'BDB',
  //   'AEA'
  // ], {
  //   A: 'allthemodium:unobtainium_block',
  //   B: 'mekanism:sps_casing',
  //   C: 'powah:reactor_nitro',
  //   D: 'mekanism:ultimate_induction_cell',
  //   E: 'powah:reactor_nitro'
  // }).id('kubejs:ironjetpacks_creative_capacator')

  event.shaped(Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:creative" }).strongNBT(), [
    'III',
    'IJI',
    'III'
  ], {
    I: 'meatsalad:infinity_fiber',
    J: Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:unobtainium" }).weakNBT(),
  }).id('meatsalad:creative_jetpack')
})
