ServerEvents.tags('item', event => {
  event.add('silentgear:grader_catalysts/tier4', 'meatsalad:crystalline_powder')
})

ServerEvents.recipes(event => {
  event.shaped('4x meatsalad:dimensional_shard', [
    'deg',
    'irX',
    'qCc'
  ], {
    d: '#forge:gems/diamond',
    e: '#forge:gems/emerald',
    g: '#forge:ingots/gold',
    i: '#forge:ingots/iron',
    r: 'minecraft:redstone',
    X: 'minecraft:glowstone_dust',
    q: '#forge:gems/quartz',
    C: 'minecraft:prismarine_shard',
    c: '#forge:gems/amethyst',
  }).id('meatsalad:dimensional_shard')

  // Gates
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:magic` }).strongNBT(), [
    'AAA',
    'GeG',
    'AAA'
  ], {
    
    A: 'irons_spellbooks:arcane_essence',
    G: '#forge:storage_blocks/copper',
    e: 'meatsalad:infused_ender_pearl',
  }).stage('magic_gate').id('meatsalad:magic_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:stronghold` }).strongNBT(), [
    'BRB',
    'GeG',
    'SSS'
  ], {
    B: 'minecraft:bone',
    R: 'minecraft:rotten_flesh',
    G: '#forge:storage_blocks/iron',
    e: 'meatsalad:infused_ender_pearl',
    S: 'minecraft:stone_bricks'
  }).stage('stronghold_gate').id('meatsalad:stronghold_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:otherside` }).strongNBT(), [
    'BWB',
    'GeG',
    'SSS'
  ], {
    B: 'bhc:wither_bone',
    W: 'minecraft:wither_skeleton_skull',
    G: '#forge:storage_blocks/diamond',
    e: 'meatsalad:infused_ender_pearl',
    S: 'allthemodium:ancient_stone'
  }).stage('otherside_gate').id('meatsalad:otherside_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:outer_end` }).strongNBT(), [
    'PSP',
    'GeG',
    'EEE'
  ], {
    P: 'minecraft:popped_chorus_fruit',
    S: 'minecraft:shulker_shell',
    G: '#forge:storage_blocks/diamond',
    e: 'meatsalad:infused_ender_pearl',
    E: 'minecraft:end_stone'
  }).stage('outer_end_gate').id('meatsalad:outer_end_gate')
  
  energize(event,
    [
      Ingredient.of('#forge:ingots/tyrian_steel'),
      Ingredient.of('#forge:ingots/refined_obsidian'),
      Ingredient.of('#forge:ingots/starmetal'),
      Ingredient.of('#forge:ingots/refined_glowstone'),
      Ingredient.of('#forge:ingots/iridium'),
      Ingredient.of('#forge:ingots/neutronium'),
    ],
    20000000,
    Item.of('meatsalad:abiding_alloy_ingot')
  )

  event.custom({
    type: 'thermal:crystallizer',
    ingredients: [
      {
        'fluid': 'industrialforegoing:ether_gas',
        'amount': 1000
      },
      {
        item: 'meatsalad:crystalline_powder'
      }
    ],
    result: [{
      item: 'meatsalad:eternal_crystal',
      count: 1
    }],
    energy: 5000
  }).id('meatsalad:crystallizer/eternal_crystal')

  nucleosynthesize(event,
    {mod: 'alexsmobs', item: 'mimicream'}, // Input
    {mod: 'meatsalad', item: 'uu_matter'} // Output
  )

  nucleosynthesize(event,
    {tag: '#forge:ingots/uranium'}, // Input
    {mod: 'meatsalad', item: 'neutronium_ingot'} // Output
  )

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'd     d',
      ' V d P ',
      '  FNC  ',
      '  DMI  ',
      '  d d  '
    ],
    key: {
      d: Ingredient.of('meatsalad:infused_diamond'),
      N: Ingredient.of('minecraft:nether_star'),
      M: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      D: Ingredient.of('minecraft:dragon_egg'),
      I: Ingredient.of('meatsalad:vulcanite'),
      V: Ingredient.of('alexsmobs:void_worm_eye'),
      P: Ingredient.of('allthemodium:piglich_heart'),
      F: Ingredient.of('alexsmobs:farseer_arm'),
      C: Ingredient.of('alexsmobs:dropbear_claw'),
    },
    result: Item.of('meatsalad:manifest_illusion')
  }).id('meatsalad:manifest_illusion')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'd     d',
      ' D d S ',
      ' eHEkC ',
      ' AsMhW ',
      '   d   '
    ],
    key: {
      d: Ingredient.of('meatsalad:infused_diamond'),
      E: Ingredient.of('meatsalad:ender_star'),
      M: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      A: Ingredient.of('cataclysm:abyssal_egg'),
      W: Ingredient.of('apotheosis:warden_tendril'),
      D: Ingredient.of('quark:dragon_scale'),
      S: Ingredient.of('progressivebosses:elder_guardian_spike'),
      e: Ingredient.of('minecraft:echo_shard'),
      C: Ingredient.of('alexsmobs:mosquito_larva'),
      H: Ingredient.of('alexsmobs:soul_heart'),
      k: Ingredient.of('alexsmobs:skreecher_soul'),
      s: Ingredient.of('alexsmobs:straddlite'),
      h: Ingredient.of('minecraft:shulker_shell'),
    },
    result: Item.of('meatsalad:lost_illusion')
  }).id('meatsalad:lost_illusion')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' O     O ',
      ' OO   OO ',
      ' OeO OeeO',
      ' OaeOevO ',
      'OeDACADO ',
      ' ODLSMDO ',
      'OeuACAmeO',
      ' OOepeOO ',
      '   OOO   '
    ],
    key: {
      S: Ingredient.of('meatsalad:cosmic_shelling'),
      C: Ingredient.of('meatsalad:chaos_shard'),
      L: Ingredient.of('meatsalad:lost_illusion'),
      M: Ingredient.of('meatsalad:manifest_illusion'),
      a: Ingredient.of('#forge:storage_blocks/crimson_steel'),
      m: Ingredient.of('#forge:storage_blocks/azure_electrum'),
      v: Ingredient.of('#forge:storage_blocks/vibranium'),
      u: Ingredient.of('#forge:storage_blocks/unobtainium'),
      p: Ingredient.of('#forge:storage_blocks/allthemodium'),
      A: Ingredient.of('#forge:storage_blocks/abiding_alloy'),
      D: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      O: Ingredient.of('meatsalad:oblivion_shard'),
      e: Ingredient.of('meatsalad:draconic_infused_eternal_crystal')
    },
    result: Item.of('meatsalad:infinity_fabric')
  }).id('meatsalad:infinity_fabric')

  event.shaped('8x meatsalad:crystalline_powder', [
    'RDA',
    'aUc',
    'PDS'
  ], {
    R: '#forge:dusts/ruby',
    D: 'meatsalad:dimensional_shard_dust',
    A: '#forge:dusts/amethyst',
    a: '#forge:dusts/apatite',
    U: 'allthemodium:ancient_soulberries',
    c: '#forge:dusts/cinnabar',
    P: '#forge:dusts/peridot',
    S: '#forge:dusts/sapphire',
  }).id('meatsalad:crystalline_powder');

  event.shaped('meatsalad:oblivion_shard', [
    ' OA',
    'OMO',
    'AO '
  ], {
    O: 'minecraft:obsidian',
    A: '#forge:storage_blocks/amethyst',
    M: 'quark:myalite_crystal'
  }).id('meatsalad:oblivion_shard');

  event.shaped('meatsalad:cosmic_shelling', [
    'FAL',
    'AUA',
    'EAI'
  ], {
    U: 'meatsalad:uu_matter',
    F: 'minecraft:fire_charge',
    L: 'thermal:lightning_charge',
    E: 'thermal:earth_charge',
    I: 'thermal:ice_charge',
    A: '#forge:ingots/abiding_alloy'
  }).id('meatsalad:cosmic_shelling');

  event.shaped('16x pipez:infinity_upgrade', [
    'ABA',
    'BCB',
    'ADA'
  ], {
    A: '#forge:ingots/unobtainium',
    B: 'minecraft:redstone_block',
    C: 'pipez:ultimate_upgrade',
    D: 'meatsalad:infinity_fiber'
  }).id('meatsalad:pipez_infinity_upgrade')
  event.shaped('thermal:machine_efficiency_creative_augment', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: '#forge:ingots/unobtainium',
    B: 'thermal:lightning_charge',
    C: 'thermal:energy_cell',
    D: 'thermal:upgrade_augment_3',
    E: 'meatsalad:infinity_fiber'
  }).id('meatsalad:thermal_machine_efficiency_creative_augment')
  event.shaped('powah:energy_cell_creative', [
    'UIU',
    'CDC',
    'UIU'
  ], {
    U: '#forge:storage_blocks/unobtainium',
    I: 'meatsalad:infinity_fiber',
    C: 'powah:energy_cell_nitro',
    D: 'powah:dielectric_casing'
  }).id('meatsalad:powah_energy_cell_creative')
  event.shaped('mekanism:creative_fluid_tank', [
    'ISI',
    'SUS',
    'ISI'
  ], {
    I: 'meatsalad:infinity_fiber',
    S: '#forge:ingots/iron',
    U: 'mekanism:ultimate_fluid_tank'
  }).id('meatsalad:mekanism_creative_fluid_tank')
  event.shaped('mekanism:creative_chemical_tank', [
    'ISI',
    'SUS',
    'ISI'
  ], {
    I: 'meatsalad:infinity_fiber',
    S: '#forge:ingots/osmium',
    U: 'mekanism:ultimate_chemical_tank'
  }).id('meatsalad:mekanism_creative_chemical_tank')
})
