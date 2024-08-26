ServerEvents.tags('item', event => {
  event.add('silentgear:grader_catalysts/tier5', 'meatsalad:eternal_crystalline_powder')
  event.add('silentgear:starlight_charger_catalysts/tier5', 'meatsalad:eternal_crystal_shard')
  event.add('silentgear:starlight_charger_pillars/tier5', 'meatsalad:abiding_alloy_block')
})

ServerEvents.tags('block', event => {
  event.add('silentgear:starlight_charger_pillars/tier5', 'meatsalad:abiding_alloy_block')
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
  energize(event,
    [
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:infused_ender_pearl'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
    ],
    20000,
    Item.of('meatsalad:incomplete_gate_pearl')
  )
  energize(event,
    [
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:incomplete_gate_pearl'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
    ],
    30000,
    Item.of('meatsalad:incomplete_large_gate_pearl')
  )

  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:magic` }).strongNBT(), [
    'AAA',
    'GeG',
    'AAA'
  ], {
    A: 'irons_spellbooks:arcane_essence',
    G: '#forge:storage_blocks/copper',
    e: 'meatsalad:incomplete_large_gate_pearl',
  }).stage('magic_gate').id('meatsalad:magic_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:stronghold` }).strongNBT(), [
    'BRB',
    'GeG',
    'SSS'
  ], {
    B: 'minecraft:bone',
    R: 'minecraft:rotten_flesh',
    G: '#forge:storage_blocks/iron',
    e: 'meatsalad:incomplete_large_gate_pearl',
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
    e: 'meatsalad:incomplete_large_gate_pearl',
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
    e: 'meatsalad:incomplete_large_gate_pearl',
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

  let hypermatterEnergize = (type) => {
    energize(event,
      [
        Ingredient.of('meatsalad:perfect_crystal'),
        Ingredient.of('meatsalad:chaos_shard'),
        Ingredient.of(`meatsalad:${type}_chunk`),
        Ingredient.of(`meatsalad:${type}_chunk`),
        Ingredient.of('meatsalad:chaos_shard'),
        Ingredient.of('meatsalad:abiding_alloy_ingot'),
      ],
      100000000,
      Item.of(`meatsalad:${type}_hypermatter`)
    )
  }

  hypermatterEnergize('arcanis')
  hypermatterEnergize('maestris')
  hypermatterEnergize('sentis')
  hypermatterEnergize('stalgaris')
  hypermatterEnergize('velocis')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      '    C    ',
      '   CeC   ',
      'C CsSEC C',
      'CCmvpuaCC',
      'CTSDUDSIC',
      'CIaupvmTC',
      ' CCWSVCC ',
      '   CAC   ',
      '    C    '
    ],
    key: {
      C: Ingredient.of('meatsalad:chaos_shard'),
      e: Ingredient.of('minecraft:dragon_egg'),
      s: Ingredient.of('quark:dragon_scale'),
      S: Ingredient.of('#forge:storage_blocks/starmetal'),
      E: Ingredient.of('progressivebosses:elder_guardian_spike'),
      v: Ingredient.of('allthemodium:vibranium_allthemodium_alloy_block'),
      p: Ingredient.of('allthemodium:unobtainium_allthemodium_alloy_block'),
      u: Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block'),
      T: Ingredient.of('#forge:storage_blocks/tyrian_steel'),
      a: Ingredient.of('#forge:storage_blocks/adamantite'),
      m: Ingredient.of('#forge:storage_blocks/mythril'),
      D: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      U: Ingredient.of('extendedcrafting:ultimate_singularity'),
      I: Ingredient.of('#forge:storage_blocks/iridium'),
      W: Ingredient.of('apotheosis:warden_tendril'),
      V: Ingredient.of('meatsalad:vulcanite'),
      A: Ingredient.of('cataclysm:abyssal_egg'),
    },
    result: Item.of('meatsalad:eternal_crystal')
  }).id('meatsalad:eternal_crystal')

  smash(event, Ingredient.of('meatsalad:eternal_crystal'), Item.of('meatsalad:eternal_crystal_shard', 32))
  smash(event, Ingredient.of('meatsalad:eternal_crystal_shard'), Item.of('meatsalad:eternal_crystalline_powder', 16))

  nucleosynthesize(event,
    {mod: 'minecraft', item: 'ender_pearl'}, // Input
    {mod: 'meatsalad', item: 'mystery_goo'} // Output
  )

  nucleosynthesize(event,
    {mod: 'meatsalad', item: 'infused_ender_pearl'}, // Input
    {mod: 'meatsalad', item: 'dark_matter'} // Output
  )

  nucleosynthesize(event,
    {mod: 'meatsalad', item: 'mystery_goo'}, // Input
    {mod: 'meatsalad', item: 'uu_matter'} // Output
  )

  nucleosynthesize(event,
    {tag: '#forge:ingots/uranium'}, // Input
    {mod: 'meatsalad', item: 'neutronium_ingot'} // Output
  )

  nucleosynthesize(event,
    {mod: 'meatsalad', item: 'perfect_crystal'}, // Input
    {mod: 'meatsalad', item: 'eternal_crystal'} // Output
  )

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'd     d',
      ' T d T ',
      '  AMB  ',
      '  NDE  ',
      '  d d  '
    ],
    key: {
      d: Ingredient.of('meatsalad:infused_diamond'),
      T: Ingredient.of('minecraft:totem_of_undying'),
      A: Ingredient.of('allthemodium:ancient_soulberries'),
      M: Ingredient.of('meatsalad:mystery_goo'),
      B: Ingredient.of('silentgear:nether_banana'),
      N: Ingredient.of('minecraft:nether_star'),
      D: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      E: Ingredient.of('meatsalad:ender_star'),
    },
    result: Item.of('meatsalad:manifest_illusion')
  }).id('meatsalad:manifest_illusion')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' XXX ',
      'ALTGP',
      'RJDZS',
      ' XOX ',
      '  X  '
    ],
    key: {
      X: Ingredient.of('meatsalad:chaos_shard'),
      A: Ingredient.of('#forge:gems/aquamarine'),
      L: Ingredient.of('#forge:gems/lapis'),
      T: Ingredient.of('#forge:gems/topaz'),
      G: Ingredient.of('#forge:gems/garnet'),
      P: Ingredient.of('#forge:gems/peridot'),
      R: Ingredient.of('#forge:gems/ruby'),
      J: Ingredient.of('#forge:gems/jade'),
      D: Ingredient.of('meatsalad:infused_diamond'),
      Z: Ingredient.of('#forge:gems/tanzanite'),
      S: Ingredient.of('#forge:gems/sapphire'),
      O: Ingredient.of('#forge:gems/onyx'),
    },
    result: Item.of('meatsalad:perfect_crystal')
  }).id('meatsalad:perfect_crystal')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' O     O ',
      ' OO   OO ',
      ' OeO OeeO',
      ' OeeOeeO ',
      'OeDAeADO ',
      ' ODLSMDO ',
      'OeeADAeeO',
      ' OOeeeOO ',
      '   OOO   '
    ],
    key: {
      S: Ingredient.of('meatsalad:cosmic_shelling'),
      L: Ingredient.of('meatsalad:lost_illusion'),
      M: Ingredient.of('meatsalad:manifest_illusion'),
      A: Ingredient.of('#forge:storage_blocks/abiding_alloy'),
      D: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      O: Ingredient.of('meatsalad:oblivion_shard'),
      e: Ingredient.of('meatsalad:eternal_crystal_shard')
    },
    result: Item.of('meatsalad:infinity_fabric')
  }).id('meatsalad:infinity_fabric')

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
    'gpg',
    'aUu',
    'vgm'
  ], {
    g: 'meatsalad:mystery_goo',
    p: 'meatsalad:maestris_hypermatter',
    a: 'meatsalad:stalgaris_hypermatter',
    U: 'meatsalad:uu_matter',
    u: 'meatsalad:sentis_hypermatter',
    v: 'meatsalad:arcanis_hypermatter',
    m: 'meatsalad:velocis_hypermatter',
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

  // Enchanted Books
  const ENCHANTS = {
    'minecraft:protection': { currentMax: 9, newMax: 15 },
    'minecraft:fire_protection': { currentMax: 9, newMax: 15 },
    'minecraft:feather_falling': { currentMax: 7, newMax: 10 },
    'minecraft:blast_protection': { currentMax: 9, newMax: 15 },
    'minecraft:projectile_protection': { currentMax: 9, newMax: 15 },
    'minecraft:respiration': { currentMax: 4, newMax: 8 },
    'minecraft:thorns': { currentMax: 4, newMax: 8 },
    'minecraft:depth_strider': { currentMax: 4, newMax: 8 },
    'minecraft:frost_walker': { currentMax: 2, newMax: 5 },
    'minecraft:soul_speed': { currentMax: 4, newMax: 8 },
    'minecraft:swift_sneak': { currentMax: 4, newMax: 8 },
    'minecraft:sharpness': { currentMax: 9, newMax: 15 },
    'minecraft:smite': { currentMax: 9, newMax: 15 },
    'minecraft:bane_of_arthropods': { currentMax: 9, newMax: 15 },
    'minecraft:knockback': { currentMax: 4, newMax: 8 },
    'minecraft:fire_aspect': { currentMax: 4, newMax: 8 },
    'minecraft:looting': { currentMax: 4, newMax: 8 },
    'minecraft:sweeping': { currentMax: 7, newMax: 10 },
    'minecraft:efficiency': { currentMax: 9, newMax: 15 },
    'minecraft:unbreaking': { currentMax: 4, newMax: 8 },
    'minecraft:fortune': { currentMax: 4, newMax: 8 },
    'minecraft:power': { currentMax: 9, newMax: 15 },
    'minecraft:punch': { currentMax: 4, newMax: 8 },
    'minecraft:luck_of_the_sea': { currentMax: 4, newMax: 8 },
    'minecraft:lure': { currentMax: 4, newMax: 8 },
    'minecraft:loyalty': { currentMax: 4, newMax: 8 },
    'minecraft:impaling': { currentMax: 9, newMax: 15 },
    'minecraft:riptide': { currentMax: 4, newMax: 8 },
    'minecraft:quick_charge': { currentMax: 4, newMax: 8 },
    'minecraft:piercing': { currentMax: 7, newMax: 10 },
    'apotheosis:berserkers_fury': { currentMax: 2, newMax: 5 },
    'apotheosis:crescendo': { currentMax: 4, newMax: 8 },
    'apotheosis:earths_boon': { currentMax: 2, newMax: 5 },
    'apotheosis:icy_thorns': { currentMax: 4, newMax: 8 },
    'apotheosis:knowledge': { currentMax: 2, newMax: 5 },
    'apotheosis:natures_blessing': { currentMax: 4, newMax: 8 },
    'apotheosis:reflective': { currentMax: 4, newMax: 8 },
    'apotheosis:scavenger': { currentMax: 2, newMax: 5 },
    'apotheosis:shield_bash': { currentMax: 4, newMax: 8 },
    'apotheosis:spearfishing': { currentMax: 4, newMax: 8 },
    'apotheosis:bane_of_illagers': { currentMax: 9, newMax: 15 },
    'apotheosis:capturing': { currentMax: 2, newMax: 5 },
    'cofh_core:holding': { currentMax: 9, newMax: 15 },
    'ensorcellation:magic_protection': { currentMax:9, newMax: 15 },
    //'ensorcellation:fire_rebuke': { currentMax: 6, newMax: 10 },
    'ensorcellation:frost_aspect': { currentMax: 4, newMax: 8 },
    'ensorcellation:leech': { currentMax: 4, newMax: 8 },
    //'ensorcellation:magic_edge': { currentMax: 7, newMax: 10 },
    'ensorcellation:vorpal': { currentMax: 4, newMax: 8 },
    'ensorcellation:hunter': { currentMax: 4, newMax: 8 },
    'ensorcellation:trueshot': { currentMax: 4, newMax: 8 },
    'ensorcellation:angler': { currentMax: 7, newMax: 10 },
    'ensorcellation:phalanx': { currentMax: 9, newMax: 15 },
  }

  for (let [enchant, enchantProps] of Object.entries(ENCHANTS)) {
    let currentMax = enchantProps.currentMax
    let newMax = enchantProps.newMax
    /*
    for (let level = currentMax + 2; level <= newMax; level += 1) {
      event.custom({
        type: 'cataclysm:weapon_fusion',
        /*
        base: {item: 'meatsalad:eternal_crystal_shard'},
        addition: Item.of('minecraft:enchanted_book').enchant(enchant, level - 1).strongNBT(),
        result: Item.of('minecraft:enchanted_book').enchant(enchant, level).strongNBT()
        
      }).id(`meatsalad:fusion/${enchant.split(':').pop()}_level_${level}_enchanted_book`)
    }
    */
    event.custom({
      type: 'cataclysm:weapon_fusion',
      base: Item.of('minecraft:enchanted_book').enchant(enchant, currentMax).strongNBT(),
      addition: {item: 'meatsalad:eternal_crystal_shard'},
      result: Item.of('quark:ancient_tome', `{StoredEnchantments:[{id:"${enchant}",lvl:${currentMax}s}]}`)//.strongNBT()
    }).id(`meatsalad:fusion/${enchant.split(':').pop()}_ancient_tome`)
  }

  let awakenedUpgrade = (base_ingot, hypermatter, awakened_ingot) => {
    event.custom({
      type: 'minecraft:smithing_transform',
      template: Item.of('meatsalad:awakened_upgrade_smithing_template'),
      base: Ingredient.of(base_ingot),
      addition: Item.of(hypermatter),
      result: Item.of(awakened_ingot)
    }).id(`meatsalad:smithing/${awakened_ingot.split(':').pop()}`)
  }

  awakenedUpgrade('#forge:ingots/adamantite', 'meatsalad:stalgaris_hypermatter', 'meatsalad:awakened_adamantite_ingot')
  awakenedUpgrade('#forge:ingots/allthemodium', 'meatsalad:maestris_hypermatter', 'meatsalad:awakened_palladium_ingot')
  awakenedUpgrade('#forge:ingots/mythril', 'meatsalad:velocis_hypermatter', 'meatsalad:awakened_mythril_ingot')
  awakenedUpgrade('#forge:ingots/unobtainium', 'meatsalad:sentis_hypermatter', 'meatsalad:awakened_unobtainium_ingot')
  awakenedUpgrade('#forge:ingots/vibranium', 'meatsalad:arcanis_hypermatter', 'meatsalad:awakened_vibranium_ingot')
})
