ServerEvents.tags('item', event => {
  event.add('silentgear:grader_catalysts/tier5', 'meatsalad:eternal_crystalline_powder')
  event.add('silentgear:starlight_charger_catalysts/tier5', 'meatsalad:eternal_crystal_shard')
  event.add('silentgear:starlight_charger_pillars/tier5', 'meatsalad:abiding_alloy_block')
})

ServerEvents.tags('block', event => {
  event.add('silentgear:starlight_charger_pillars/tier5', 'meatsalad:abiding_alloy_block')
})

ServerEvents.tags('mob_effect', event => {
  event.add('cataclysm:effective_for_bosses', 'meatsalad:chaos')
})

ServerEvents.recipes(event => {
  event.shaped('meatsalad:eldritch_cloth', [
    'fff',
    'fcf',
    'fff'
  ], {
    f: 'irons_spellbooks:ancient_knowledge_fragment',
    c: 'irons_spellbooks:magic_cloth',
  }).id('meatsalad:eldritch_cloth')
  

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

  const ancientCuriosUpgrades = (baseItem) => {
    const itemId = baseItem.split(":").pop()
    event.custom({
      type: 'cataclysm:weapon_fusion',
      base: {item: baseItem},
      addition: {item: 'meatsalad:lost_illusion'},
      result: {item: `meatsalad:${itemId}_plus`}
    }).id(`meatsalad:fusion/${itemId}_plus`)
    event.custom({
      type: 'cataclysm:weapon_fusion',
      base: {item: `meatsalad:${itemId}_plus`},
      addition: {item: 'meatsalad:manifest_illusion'},
      result: {item: `meatsalad:${itemId}_plus_plus`}
    }).id(`meatsalad:fusion/${itemId}_plus_plus`)
  }

  ancientCuriosUpgrades('meatsalad:lucky_ring')

  ancientCuriosUpgrades('meatsalad:arrow_damage_ring')
  ancientCuriosUpgrades('meatsalad:arrow_velocity_ring')
  ancientCuriosUpgrades('meatsalad:dodge_chance_ring')

  ancientCuriosUpgrades('irons_spellbooks:mana_ring')
  ancientCuriosUpgrades('irons_spellbooks:cooldown_ring')
  ancientCuriosUpgrades('irons_spellbooks:cast_time_ring')
  ancientCuriosUpgrades('meatsalad:spell_power_ring')

  ancientCuriosUpgrades('meatsalad:attack_damage_ring')
  ancientCuriosUpgrades('meatsalad:attack_speed_ring')
  ancientCuriosUpgrades('meatsalad:critical_damage_ring')

  ancientCuriosUpgrades('meatsalad:armor_ring')
  ancientCuriosUpgrades('meatsalad:armor_toughness_ring')
  ancientCuriosUpgrades('meatsalad:healing_ring')

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
      w: Ingredient.of('meatsalad:velocis_stone'),
      x: Ingredient.of('meatsalad:maestris_stone'),
      m: Ingredient.of('#forge:ingots/mythril'),
      p: Ingredient.of('#forge:ingots/allthemodium'),
      i: Ingredient.of('#forge:ingots/iridium'),
      h: Ingredient.of('meatsalad:sentis_stone'),
      g: Ingredient.of('#forge:ingots/refined_glowstone'),
      y: Ingredient.of('meatsalad:stalgaris_stone'),
      z: Ingredient.of('meatsalad:arcanis_stone'),
      n: Ingredient.of('#forge:ingots/netherite'),
    },
    result: Item.of('meatsalad:abiding_alloy_ingot', 4)
  }).id('meatsalad:abiding_alloy_ingot')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      '    c    ',
      '   cDc   ',
      'c cMIEc c',
      'ccaaaaacc',
      'cBadUdaCc',
      'cNaaaaaYc',
      ' ccTWScc ',
      '   cAc   ',
      '    c    '
    ],
    key: {
      c: Ingredient.of('meatsalad:chaos_shard'),
      D: Ingredient.of('minecraft:dragon_egg'),
      M: Ingredient.of('cataclysm:monstrous_horn'),
      E: Ingredient.of('progressivebosses:elder_guardian_spike'),
      d: Ingredient.of('meatsalad:draconic_infused_dark_matter'),
      U: Ingredient.of('extendedcrafting:ultimate_singularity'),
      T: Ingredient.of('apotheosis:warden_tendril'),
      S: Ingredient.of('quark:dragon_scale'),
      A: Ingredient.of('cataclysm:abyssal_egg'),
      a: Ingredient.of('#forge:ingots/abiding_alloy'),
      I: Ingredient.of('#forge:storage_blocks/ignitium'),
      B: Ingredient.of('#forge:storage_blocks/black_steel'),
      C: Ingredient.of('#forge:storage_blocks/cursium'),
      N: Ingredient.of('#forge:storage_blocks/ancient_metal'),
      Y: Ingredient.of('#forge:storage_blocks/abyssium'),
      W: Ingredient.of('#forge:storage_blocks/witherite'),
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
    {mod: 'meatsalad', item: 'manifest_illusion'}, // Input
    {mod: 'extendedcrafting', item: 'ultimate_singularity'}, // Output
    12500,
    1000
  )

  event.custom({
    type: 'apotheosis:add_sockets',
    conditions: [{
      type: "apotheosis:module",
      module: "adventure"
    }],
    input: {
      item: "meatsalad:lost_illusion"
    },
    max_sockets: 4
  }).id('meatsalad:lost_illusion_add_sockets')
  event.custom({
    type: 'apotheosis:add_sockets',
    conditions: [{
      type: "apotheosis:module",
      module: "adventure"
    }],
    input: {
      item: "meatsalad:manifest_illusion"
    },
    max_sockets: 5
  }).id('meatsalad:manifest_illusion_add_sockets')

  event.shapeless('hostilenetworks:data_model', ['hostilenetworks:data_model', "meatsalad:manifest_illusion"])
    .modifyResult((inventory, itemstack) => {
        let item = inventory.find('hostilenetworks:data_model')
        if (item.nbt == null) return itemstack
        let nbt = item.nbt
        nbt.data_model.data = 1254 // MAX VALUE
        return itemstack.withNBT(nbt)
    }).id(`meatsalad:data_model_booster`)

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

  event.shaped('pipez:infinity_upgrade', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: '#forge:ingots/unobtainium',
    B: 'minecraft:redstone_block',
    C: 'pipez:ultimate_upgrade'
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
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: ['CLC', 'HSH', 'LGL'],
    key: {
      C: Ingredient.of('create:cogwheel').toJson(),
      L: Ingredient.of('create:large_cogwheel').toJson(),
      H: Ingredient.of('create:shaft').toJson(),
      S: Ingredient.of('meatsalad:infinity_fabric').toJson(),
      G: Ingredient.of('create:gearbox').toJson()
    },
    result: Ingredient.of('create:creative_motor').toJson(),
    acceptMirrored: false
  }).id('meatsalad:creative_motor')
  event.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('create:blaze_cake').toJson(),
      Ingredient.of('meatsalad:infinity_fabric').toJson()
    ],
    results: [Ingredient.of('create:creative_blaze_cake').toJson()],
    heatRequirement: 'superheated'
  }).id('meatsalad:creative_blaze_cake')
})
