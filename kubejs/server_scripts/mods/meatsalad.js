ServerEvents.recipes(event => {
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

  /*
    'SDAVXUMDS',
    'SDAVGUMDS',
    'SDAVXUMDS',
  */
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
      D: {tag: 'forge:ingots/dragonsteel'},
      G: {item: 'alexsmobs:mimicream'}
    },
    result: {
      item: 'kubejs:ultima_ingot',
      count: 1
    }
  }).id('meatsalad:ultima_ingot')

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
})