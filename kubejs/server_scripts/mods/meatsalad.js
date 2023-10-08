ServerEvents.recipes(event => {
  let awakening = (material) => {
    event.custom({
      type: 'summoningrituals:altar',
      catalyst: { item: 'alexsmobs:mimicream' },
      outputs: [
        { item: `kubejs:awakened_${material}_ingot`, count: 1 }
      ],
      inputs: [
        { ingredient: { tag: `forge:ingots/${material}` }, count: 2 },
        { tag: "forge:ingots/uru" },
        { tag: "forge:ingots/iridium" },
        { tag: "forge:ingots/neutronium" },
        { tag: "forge:ingots/starmetal" },
        { tag: "forge:ingots/refined_obsidian" }
      ],
      recipe_time: 200,
      block_below: { block: 'extendedcrafting:nether_star_block' }
    }).id(`meatsalad:summoning/awakened_${material}_ingot`);
  }

  event.custom({
    type: 'ae2:transform',
    circumstance: { type: 'explosion' },
    ingredients: [
      Item.of('ae2:singularity'),
      Item.of('kubejs:draconic_infused_dark_matter')
    ],
    result: Item.of('ae2:quantum_entangled_singularity').withCount(2)
  }).id('meatsalad:transform/entangled_singularity')

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      Item.of('minecraft:shulker_shell').withCount(2).toJson(),
      Ingredient.of('#forge:gems/apatite'),
      Ingredient.of('#forge:ingots/netherite')
    ],
    result: [Item.of('kubejs:shellite_ingot')],
    energy: 16000
  }).id('meatsalad:smelter/shellite_ingot');

  /*
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      Item.of('minecraft:dragon_breath').withCount(3).toJson(),
      Ingredient.of('#forge:gems/apatite').withCount(2).toJson(),
      Ingredient.of('#forge:ingots/netherite')
    ],
    result: [Item.of('kubejs:dragonsteel_ingot')],
    energy: 32000
  }).id('meatsalad:smelter/dragonsteel_ingot');
  */

  event.custom({
    type: 'thermal:crystallizer',
    ingredients: [
      {
        'fluid': 'industrialforegoing:ether_gas',
        'amount': 1000
      },
      {
        item: 'kubejs:crystalline_powder'
      }
    ],
    result: [{
      item: 'kubejs:eternal_crystal',
      count: 1
    }],
    energy: 5000
  }).id('meatsalad:crystallizer/eternal_crystal')

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: 1250,
    gasInput: {
      amount: 5,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: Item.of('alexsmobs:mimicream')
    },
    output: Item.of('kubejs:uu_matter')
  }).id('meatsalad:nucleosynthesizing/uu_matter')

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: 1250,
    gasInput: {
      amount: 5,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: Ingredient.of('#forge:ingots/tyrian_steel')
    },
    output: Item.of('kubejs:uru_ingot')
  }).id('meatsalad:nucleosynthesizing/uru_ingot')

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: 1250,
    gasInput: {
      amount: 5,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: Ingredient.of('#forge:ingots/uranium')
    },
    output: Item.of('kubejs:neutronium_ingot')
  }).id('meatsalad:nucleosynthesizing/neutronium_ingot')

  awakening('adamantite');
  awakening('mythril');
  awakening('unobtainium');
  awakening('vibranium');

  /*
    'SDAVXUMDS',
    'SDAVGUMDS',
    'SDAVXUMDS',
  
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'SAVXUMS',
      'DAVGUMD',
      'DAVGUMD',
      'SAVXUMS',
    ],
    key: {
      S: {tag: 'forge:ingots/starmetal'},
      A: {tag: 'forge:ingots/adamantite'},
      V: {tag: 'forge:ingots/vibranium'},
      X: {item: 'kubejs:draconic_infused_dark_matter'},
      U: {tag: 'forge:ingots/unobtainium'},
      M: {tag: 'forge:ingots/mythril'},
      G: {item: 'alexsmobs:mimicream'}
    },
    result: {
      item: 'kubejs:ultima_ingot',
      count: 1
    }
  }).id('meatsalad:ultima_ingot')
  */
 /*
  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'kubejs:uu_matter' },
    outputs: [
      { item: "kubejs:ultima_ingot", count: 1 }
    ],
    inputs: [
      { tag: "forge:ingots/starmetal" },
      { tag: "forge:ingots/adamantite" },
      { tag: "forge:ingots/vibranium" },
      { tag: "forge:ingots/unobtainium" },
      { tag: "forge:ingots/mythril" },
      { ingredient: { item: "kubejs:draconic_infused_dark_matter" }, count: 1 }
    ],
    recipe_time: 200,
    block_below: { block: 'extendedcrafting:nether_star_block' }
  }).id('meatsalad:summoning/ultima_ingot');
  */
  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'kubejs:uu_matter' },
    outputs: [
      { item: "kubejs:ultima_ingot", count: 1 }
    ],
    inputs: [
      { tag: "forge:ingots/awakened_adamantite" },
      { tag: "forge:ingots/awakened_vibranium" },
      { tag: "forge:ingots/awakened_unobtainium" },
      { tag: "forge:ingots/awakened_mythril" },
      { tag: "forge:ingots/uru" },
      { tag: "forge:ingots/iridium" },
      { tag: "forge:ingots/neutronium" },
      { tag: "forge:ingots/starmetal" },
      { ingredient: { item: "kubejs:draconic_infused_dark_matter" }, count: 1 }
    ],
    recipe_time: 200,
    block_below: { block: 'extendedcrafting:nether_star_block' }
  }).id('meatsalad:summoning/ultima_ingot');

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' O     O ',
      ' OO   OO ',
      ' OeO OeeO',
      ' OieOeiO ',
      'OeNPcENO ',
      ' ONvCaNO ',
      'OeUIcWUeO',
      ' OOeDeOO ',
      '   OOO   '
    ],
    key: {
      O: {item: 'kubejs:oblivion_shard'},
      v: {item: 'alexsmobs:void_worm_eye'},
      a: {item: 'cataclysm:abyssal_egg'},
      D: {item: 'kubejs:dragon_soul'},
      c: {item: 'kubejs:chaos_core'},
      C: {item: 'kubejs:cosmic_shelling'},
      P: {item: 'allthemodium:piglich_heart'},
      E: {item: 'progressivebosses:elder_guardian_spike'},
      e: {item: 'kubejs:draconic_infused_eternal_crystal'},
      W: {item: 'kubejs:warden_heart'},
      I: {item: 'kubejs:manifest_illusion'},
      U: {tag: 'forge:storage_blocks/uru'},
      N: {tag: 'forge:storage_blocks/neutronium'},
      i: {tag: 'forge:storage_blocks/iridium'}
    },
    result: {
      item: 'kubejs:infinity_fabric',
      count: 1
    }
  }).id('meatsalad:infinity_fabric')

  event.shaped('16x pipez:infinity_upgrade', ['ABA', 'BCB', 'ADA'], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'minecraft:redstone_block',
    C: 'pipez:ultimate_upgrade',
    D: 'kubejs:infinity_fiber'
  }).id('meatsalad:pipez_infinity_upgrade')
  event.shaped('thermal:machine_efficiency_creative_augment', ['ABA', 'CDC', 'AEA'], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'thermal:lightning_charge',
    C: 'thermal:energy_cell',
    D: 'thermal:upgrade_augment_3',
    E: 'kubejs:infinity_fiber'
  }).id('meatsalad:thermal_machine_efficiency_creative_augment')
  event.shaped('mekanism:creative_energy_cube', ['ATA', 'UCU', 'ATA'], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    U: 'allthemodium:unobtainium_block',
    C: 'mekanism:ultimate_energy_cube'
  }).id('meatsalad:mekanism_creative_energy_cube')
})