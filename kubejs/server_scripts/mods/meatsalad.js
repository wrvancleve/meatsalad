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
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:infused_ender_pearl'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
    ],
    20000,
    Item.of('meatsalad:incomplete_gate_pearl')
  )
  energize(event,
    [
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:incomplete_gate_pearl'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
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

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      '    u    ',
      '   UsP   ',
      '  VostV  ',
      ' UoosttP ',
      'vaowsxtmp',
      'iasshssmg',
      'iiayszmgg',
      '  innng  ',
      '    n    ',
    ],
    key: {
      u: Ingredient.of('#forge:ingots/unobtainium'),
      U: Ingredient.of('allthemodium:unobtainium_vibranium_alloy_ingot'),
      s: Ingredient.of('#forge:ingots/starmetal'),
      P: Ingredient.of('allthemodium:unobtainium_allthemodium_alloy_ingot'),
      V: Ingredient.of('allthemodium:vibranium_allthemodium_alloy_ingot'),
      o: Ingredient.of('#forge:ingots/refined_obsidian'),
      t: Ingredient.of('#forge:ingots/tyrian_steel'),
      v: Ingredient.of('#forge:ingots/vibranium'),
      a: Ingredient.of('#forge:ingots/adamantite'),
      w: Ingredient.of('meatsalad:stalgaris_hypermatter'),
      x: Ingredient.of('meatsalad:arcanis_hypermatter'),
      m: Ingredient.of('#forge:ingots/mythril'),
      p: Ingredient.of('#forge:ingots/allthemodium'),
      i: Ingredient.of('#forge:ingots/iridium'),
      h: Ingredient.of('meatsalad:sentis_hypermatter'),
      g: Ingredient.of('#forge:ingots/refined_glowstone'),
      y: Ingredient.of('meatsalad:maestris_hypermatter'),
      z: Ingredient.of('meatsalad:velocis_hypermatter'),
      n: Ingredient.of('#forge:ingots/neutronium'),
    },
    result: Item.of('meatsalad:abiding_alloy_ingot', 4)
  }).id('meatsalad:abiding_alloy_ingot')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      '    C    ',
      '   CeC   ',
      'C CsaEC C',
      'CCaaaaaCC',
      'CaaDUDaaC',
      'CaaaaaaaC',
      ' CCWaVCC ',
      '   CAC   ',
      '    C    '
    ],
    key: {
      C: Ingredient.of('meatsalad:chaos_shard'),
      e: Ingredient.of('minecraft:dragon_egg'),
      s: Ingredient.of('quark:dragon_scale'),
      E: Ingredient.of('progressivebosses:elder_guardian_spike'),
      D: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      U: Ingredient.of('extendedcrafting:ultimate_singularity'),
      W: Ingredient.of('apotheosis:warden_tendril'),
      V: Ingredient.of('meatsalad:vulcanite'),
      A: Ingredient.of('cataclysm:abyssal_egg'),
      a: Ingredient.of('#forge:ingots/abiding_alloy'),
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

  const mShaped = (result, pattern, count) => {
    const resultItem = Item.of(result, count || 1)
    let [mod, itemId] = resultItem.getId().split(':')
    event.shaped(resultItem, pattern, {
      U: { item:'meatsalad:uu_matter'}
    }).noMirror().noShrink().stage('uu_matter').id(`meatsalad:uu_matter/${itemId}`)
  }

  // Blocks
  mShaped('minecraft:dirt', [' U ', '   ', '   '], 64)
  mShaped('minecraft:grass_block', ['UUU', '   ', '   '], 64)
  mShaped('minecraft:stone', ['   ', ' U ', '   '], 64)
  mShaped('minecraft:deepslate', ['   ', 'UUU', '   '], 64)
  mShaped('minecraft:netherrack', ['   ', '   ', ' U '], 64)
  mShaped('minecraft:white_wool', ['U U', '   ', ' U '], 64)
  mShaped('minecraft:sand', ['   ', '   ', 'U  '], 64)
  mShaped('minecraft:glass', [' U ', 'U U', ' U '], 64)
  mShaped('minecraft:obsidian', ['UUU', 'UUU', '   '], 16)
  mShaped('minecraft:oak_log', ['U  ', 'U  ', '   '], 64)

  // Misc Items
  mShaped('minecraft:clay_ball', ['UU ', 'U  ', 'UU '], 48)
  mShaped('minecraft:paper', ['   ', '   ', 'UUU'], 32)
  mShaped('minecraft:redstone', ['   ', ' U ', 'UUU'], 32)
  mShaped('minecraft:lapis_lazuli', [' U ', ' U ', ' UU'], 16)
  mShaped('minecraft:coal', ['  U', 'U  ', '  U'], 32)
  mShaped('minecraft:glowstone_dust', ['U U', '  U', 'U U'], 32)
  mShaped('minecraft:slime_ball', ['U U', '   ', 'U U'], 32)
  mShaped('minecraft:bone', ['  U', ' U ', 'U  '], 32)
  mShaped('minecraft:string', ['  U', 'U  ', ' U '], 32)
  mShaped('minecraft:flint', [' U ', 'U  ', '   '], 32)
  mShaped('minecraft:feather', ['  U', ' U ', '   '], 32)
  mShaped('minecraft:leather', ['U  ', ' U ', '  U'], 32)
  mShaped('minecraft:gunpowder', ['U U', ' U ', 'U U'], 16)

  // Rare Misc Items
  mShaped('industrialforegoing:plastic', ['U U', 'U U', 'U U'], 16)
  mShaped('meatsalad:dimensional_shard', ['U U', ' UU', 'UUU'], 16)

  // Ores
  mShaped('alltheores:aluminum_ore', [' UU', 'UUU', 'UUU'], 12)
  mShaped('alltheores:lead_ore', ['UU ', 'UUU', 'UUU'], 12)
  mShaped('alltheores:nickel_ore', ['UUU', ' UU', 'UUU'], 12)
  mShaped('alltheores:osmium_ore', ['UUU', 'U U', 'UUU'], 12)
  mShaped('alltheores:platinum_ore', ['UUU', 'UU ', 'UUU'], 12)
  mShaped('alltheores:silver_ore', ['UUU', 'UUU', ' UU'], 12)
  mShaped('alltheores:tin_ore', ['UUU', 'UUU', 'U U'], 12)
  mShaped('alltheores:uranium_ore', ['UUU', 'UUU', 'UU '], 12)
  mShaped('alltheores:zinc_ore', [' UU', 'UUU', 'UU '], 12)
  mShaped('minecraft:gold_ore', [' UU', 'UUU', ' UU'], 12)
  mShaped('minecraft:iron_ore', ['UU ', 'UUU', 'UU '], 12)
  mShaped('minecraft:nether_quartz_ore', ['UUU', 'UUU', 'U U'], 12)
  mShaped('minecraft:copper_ore', ['U U', 'UUU', 'UUU'], 12)

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' e     e ',
      ' ee   ee ',
      ' eue euue',
      ' euueuue ',
      'eudauade ',
      ' edlcmde ',
      'euuadauue',
      ' eeuuuee ',
      '   eee   '
    ],
    key: {
      e: Ingredient.of('meatsalad:eternal_crystal_shard'),
      u: Ingredient.of('meatsalad:uu_matter'),
      d: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      a: Ingredient.of('#forge:storage_blocks/abiding_alloy'),
      l: Ingredient.of('meatsalad:lost_illusion'),
      c: Ingredient.of('meatsalad:chaos_crystal'),
      m: Ingredient.of('meatsalad:manifest_illusion'),
    },
    result: Item.of('meatsalad:infinity_fabric')
  }).id('meatsalad:infinity_fabric')

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
  event.shaped('refinedstorage:creative_storage_disk', [
    'GIG',
    'IDI',
    'QQQ'
  ], {
    G: '#forge:glass',
    I: 'meatsalad:infinity_fiber',
    D: 'refinedstorage:64k_storage_disk',
    Q: 'refinedstorage:quartz_enriched_iron',
  }).id('meatsalad:creative_storage_disk')
  event.shaped('refinedstorage:creative_fluid_storage_disk', [
    'GIG',
    'IDI',
    'QQQ'
  ], {
    G: '#forge:glass',
    I: 'meatsalad:infinity_fiber',
    D: 'refinedstorage:4096k_fluid_storage_disk',
    Q: 'refinedstorage:quartz_enriched_iron',
  }).id('meatsalad:creative_fluid_storage_disk')

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
      result: Item.of('quark:ancient_tome', `{StoredEnchantments:[{id:'${enchant}',lvl:${currentMax}s}]}`)//.strongNBT()
    }).id(`meatsalad:fusion/${enchant.split(':').pop()}_ancient_tome`)
  }
})
