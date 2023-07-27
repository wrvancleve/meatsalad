ServerEvents.recipes(event => {
  let infusion = (input, outputItemSuffix) => {
    event.shaped(`kubejs:infused_${outputItemSuffix}`, [
      'DDD',
      'DID',
      'DDD'
    ], {
      D: 'kubejs:infused_dimensional_shard',
      I: input
    }).id(`meatsalad:${outputItemSuffix}`);
  }
  let draconicInfusion = (input, outputItemSuffix) => {
    event.shaped(`kubejs:draconic_infused_${outputItemSuffix}`, [
      'DDD',
      'DID',
      'DDD'
    ], {
      D: 'kubejs:draconic_infused_dimensional_shard',
      I: input
    }).id(`meatsalad:draconic_infused_${outputItemSuffix}`);
  }

  event.custom({
    type: 'apotheosis:enchanting',
    conditions: [{
      type: 'apotheosis:module',
      module: 'enchantment'
    }],
    input: {
      item: 'rftoolsbase:dimensionalshard'
    },
    requirements: {
      eterna: 40.0,
      quanta: 100.0,
      arcana: 100.0
    },
    max_requirements: {
      eterna: 40.0,
      quanta: 100.0,
      arcana: 100.0
    },
    display_level: 5,
    result: {
      item: `kubejs:infused_dimensional_shard`,
      count: 1
    }
  }).id('meatsalad:enchanting/infused_dimensional_shard')

  event.custom({
    type: 'apotheosis:enchanting',
    conditions: [{
      type: 'apotheosis:module',
      module: 'enchantment'
    }],
    input: {
      item: 'rftoolsbase:dimensionalshard'
    },
    requirements: {
      eterna: 50.0,
      quanta: 8.5,
      arcana: 32.5
    },
    max_requirements: {
      eterna: 50.0,
      quanta: 13.5,
      arcana: 37.5
    },
    result: {
      item: 'kubejs:draconic_infused_dimensional_shard',
      count: 1
    }
  }).id('meatsalad:enchanting/draconic_infused_dimensional_shard')

  infusion('#forge:gems/diamond', 'diamond');
  infusion('minecraft:ender_pearl', 'ender_pearl');
  draconicInfusion('#forge:gems/diamond', 'diamond');
  draconicInfusion('minecraft:ender_pearl', 'ender_pearl');
  draconicInfusion('kubejs:oblivion_shard', 'oblivion_shard')
  draconicInfusion('kubejs:dark_matter', 'dark_matter')
  draconicInfusion('kubejs:eternal_crystal', 'eternal_crystal')

  event.shaped('kubejs:warden_heart', [
    "ESE",
    "STS",
    "ESE"
  ], {
    E: 'minecraft:echo_shard',
    S: 'minecraft:sculk_catalyst',
    T: 'apotheosis:warden_tendril'
  }).id('meatsalad:warden_heart');
  
  event.shaped('8x kubejs:crystalline_powder', [
    'RDA',
    'GCG',
    'PDS'
  ], {
    R: '#forge:dusts/ruby',
    D: 'kubejs:dimensional_shard_dust',
    A: '#forge:dusts/amethyst',
    G: 'silentgear:glittery_dust',
    C: 'silentgear:crushed_shulker_shell',
    P: '#forge:dusts/peridot',
    S: '#forge:dusts/sapphire'    
  }).id('meatsalad:crystalline_powder');

  event.shaped('kubejs:oblivion_shard', [
    ' OA',
    'OMO',
    'AO '
  ], {
    O: 'minecraft:obsidian',
    A: '#forge:storage_blocks/amethyst',
    M: 'quark:myalite_crystal'
  }).id('meatsalad:oblivion_shard');

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

  event.shaped('kubejs:cosmic_shelling', [
    'fEl',
    'SUS',
    'eNi'
  ], {
    f: 'minecraft:fire_charge',
    E: 'kubejs:ender_star',
    l: 'thermal:lightning_charge',
    S: 'ae2:quantum_entangled_singularity',
    U: 'kubejs:uu_matter',
    e: 'thermal:earth_charge',
    N: 'minecraft:nether_star',
    i: 'thermal:ice_charge',
  }).id('meatsalad:cosmic_shelling');

  event.shaped('kubejs:dragon_soul', [
    'BBB',
    'SES',
    'BBB'
  ], {
    B: 'minecraft:dragon_breath',
    S: 'quark:dragon_scale',
    E: 'minecraft:dragon_egg'
  }).id('meatsalad:dragon_soul');

  event.shaped('kubejs:nether_core', [
    'CDC',
    'DSD',
    'CDC'
  ], {
    C: '#forge:storage_blocks/crimson_iron',
    D: 'minecraft:blaze_rod',
    S: 'minecraft:nether_star'
  }).id('meatsalad:nether_core');

  event.shaped('kubejs:ender_core', [
    'ASA',
    'SES',
    'ASA'
  ], {
    A: '#forge:storage_blocks/azure_silver',
    S: 'minecraft:shulker_shell',
    E: 'kubejs:ender_star'
  }).id('meatsalad:ender_core');

  event.shaped('kubejs:chaos_core', [
    'VCM',
    'NDE',
    'ACU'
  ], {
    V: '#forge:storage_blocks/vibranium',
    C: 'kubejs:chaos_shard',
    M: '#forge:storage_blocks/mythril',
    N: 'kubejs:nether_core',
    D: 'kubejs:draconic_infused_dark_matter',
    E: 'kubejs:ender_core',
    A: '#forge:storage_blocks/adamantite',
    U: '#forge:storage_blocks/unobtainium'
  }).id('meatsalad:chaos_core');
})