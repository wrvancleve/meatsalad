/*
ServerEvents.recipes(event => {
  let enderCrafting = (pattern, key, mod, item, count) => {
    if (!count) {
      count = 1;
    }
    event.custom({
      type: 'extendedcrafting:shaped_ender_crafter',
      pattern: pattern,
      key: key,
      result: {
        item: `${mod}:${item}`,
        count: count
      }
    }).id(`meatsalad:${item}`);
  }

  
  enderCrafting([
    'ESE',
    'STS',
    'ESE'
  ], {
    E: Item.of('minecraft:echo_shard'),
    S: Item.of('minecraft:sculk_catalyst'),
    T: Item.of('apotheosis:warden_tendril')
  }, 'kubejs', 'warden_heart');
  

  enderCrafting([
    'RDA',
    'GCG',
    'PDS'
  ], {
    R: Ingredient.of('#forge:dusts/ruby'),
    D: Item.of('kubejs:dimensional_shard_dust'),
    A: Ingredient.of('#forge:dusts/amethyst'),
    G: Item.of('silentgear:glittery_dust'),
    C: Item.of('silentgear:crushed_shulker_shell'),
    P: Ingredient.of('#forge:dusts/peridot'),
    S: Ingredient.of('#forge:dusts/sapphire')
  }, 'kubejs', 'crystalline_powder', 8);

  enderCrafting([
    ' OA',
    'OMO',
    'AO '
  ], {
    O: Item.of('minecraft:obsidian'),
    A: Ingredient.of('#forge:storage_blocks/amethyst'),
    M: Item.of('quark:myalite_crystal')
  }, 'kubejs', 'oblivion_shard');

  /*
  enderCrafting([
    'BBB',
    'SES',
    'BBB'
  ], {
    B: Item.of('minecraft:dragon_breath'),
    S: Item.of('quark:dragon_scale'),
    E: Item.of('minecraft:dragon_egg')
  }, 'kubejs', 'dragon_soul');

  enderCrafting([
    'CSC',
    'DNM',
    'CHC'
  ], {
    C: Ingredient.of('#forge:storage_blocks/crimson_iron'),
    S: Item.of('alexsmobs:straddlite'),
    D: Item.of('alexsmobs:dropbear_claw'),
    N: Item.of('minecraft:nether_star'),
    M: Item.of('alexsmobs:mosquito_larva'),
    H: Item.of('alexsmobs:soul_heart')
  }, 'kubejs', 'nether_core');

  enderCrafting([
    'APA',
    'FEF',
    'ASA'
  ], {
    A: Ingredient.of('#forge:storage_blocks/azure_silver'),
    P: Item.of('minecraft:ender_pearl'),
    F: Item.of('alexsmobs:farseer_arm'),
    E: Item.of('kubejs:ender_star'),
    S: Item.of('minecraft:shulker_shell')
  }, 'kubejs', 'ender_core');

  enderCrafting([
    'fEl',
    'SUS',
    'eNi'
  ], {
    f: Item.of('minecraft:fire_charge'),
    E: Item.of('kubejs:ender_star'),
    l: Item.of('thermal:lightning_charge'),
    S: Item.of('ae2:quantum_entangled_singularity'),
    U: Item.of('kubejs:uu_matter'),
    e: Item.of('thermal:earth_charge'),
    N: Item.of('minecraft:nether_star'),
    i: Item.of('thermal:ice_charge'),
  }, 'kubejs', 'cosmic_shelling');

  enderCrafting([
    'VCM',
    'NSE',
    'ACU'
  ], {
    V: Ingredient.of('#forge:storage_blocks/vibranium'),
    C: Item.of('kubejs:chaos_shard'),
    M: Ingredient.of('#forge:storage_blocks/mythril'),
    N: Item.of('kubejs:nether_core'),
    S: Item.of('ae2:quantum_entangled_singularity'),
    E: Item.of('kubejs:ender_core'),
    A: Ingredient.of('#forge:storage_blocks/adamantite'),
    U: Ingredient.of('#forge:storage_blocks/unobtainium')
  }, 'kubejs', 'chaos_core');
})
*/