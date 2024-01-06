ServerEvents.recipes(event => {
  let thruster = (material, material_type, coil) => {
    event.shaped(Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:${material}"}`), [
      'MCM',
      'CDC',
      'MFM'
    ], {
      M: `#forge:${material_type}s/${material}`,
      C: coil,
      D: 'kubejs:dark_matter',
      F: 'minecraft:fire_charge'
    }).id(`meatsalad:${material}_thruster`);
  }

  event.remove({id: 'ironjetpacks:ultimate_coil'});

  thruster('diamond', 'gem', 'ironjetpacks:basic_coil')
  thruster('netherite', 'ingot', 'ironjetpacks:basic_coil')
  thruster('palladium', 'ingot', 'ironjetpacks:advanced_coil')
  thruster('vibranium', 'ingot', 'ironjetpacks:advanced_coil')
  thruster('unobtainium', 'ingot', 'ironjetpacks:elite_coil')
})