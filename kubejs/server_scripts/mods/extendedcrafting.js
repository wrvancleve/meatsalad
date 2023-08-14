ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({id: id});
    })
  }
  let componentSmelting = (type, material, materialType) => {
    event.custom({
      type: 'thermal:smelter',
      ingredients: [
        Ingredient.of('#forge:plates/steel'),
        Item.of('extendedcrafting:luminessence'),
        {tag: `forge:${materialType}s/${material}`, count: 2}
      ],
      result: [Item.of(`extendedcrafting:${type}_component`)],
      energy: 16000
    }).id(`meatsalad:smelter/${type}_component`);
  }
  let catalystSmelting = (type) => {
    event.custom({
      type: 'thermal:smelter',
      ingredients: [
        Item.of(`extendedcrafting:${type}_component`).withCount(4),
        {tag: 'forge:plates/steel', count: 1}
      ],
      result: [Item.of(`extendedcrafting:${type}_catalyst`)],
      energy: 16000
    }).id(`meatsalad:smelter/${type}_catalyst`);
  }
  let craftingTable = (type, material, previousTable) => {
    event.shaped(Item.of(`extendedcrafting:${type}_table`), [
      'oao',
      'tbt',
      'oso'
    ], {
      a: Item.of(`extendedcrafting:${type}_catalyst`),
      o: Item.of(`extendedcrafting:${type}_component`),
      t: Item.of(previousTable),
      b: Ingredient.of(`#forge:storage_blocks/${material}`),
      s: Ingredient.of('#forge:plates/steel'),
    }).id(`meatsalad:${type}_table`);
  }
  let autoCraftingTable = (type) => {
    event.shaped(Item.of(`extendedcrafting:${type}_auto_table`), [
      'srs',
      'ctc',
      'srs'
    ], {
      s: Ingredient.of('#forge:plates/steel'),
      r: Item.of('extendedcrafting:redstone_component'),
      c: Item.of('extendedcrafting:crystaltine_component'),
      t: Item.of(`extendedcrafting:${type}_table`)    
    }).id(`meatsalad:${type}_auto_table`);
  }

  removeRecipes([
    'extendedcrafting:pedestal',
    'extendedcrafting:black_iron_block',
    'extendedcrafting:black_iron_block_uncraft',
    'extendedcrafting:flux_star_block',
    'extendedcrafting:flux_star_block_uncraft',
    'extendedcrafting:ender_star_block',
    'extendedcrafting:ender_star_block_uncraft',
    'extendedcrafting:ender_star',
    'extendedcrafting:enhanced_ender_ingot',
    'extendedcrafting:enhanced_ender_ingot_block',
    'extendedcrafting:enhanced_ender_ingot_uncraft',
    'extendedcrafting:enhanced_ender_catalyst',
    'extendedcrafting:enhanced_ender_component',
    'extendedcrafting:ender_ingot',
    'extendedcrafting:ender_ingot_block_uncraft',
    'extendedcrafting:ender_ingot_recraft',
    'extendedcrafting:ender_ingot_block',
    'extendedcrafting:ender_component',
    'extendedcrafting:ender_catalyst',
    'extendedcrafting:frame',
    'extendedcrafting:crafting_core',
    'extendedcrafting:ender_ingot_uncraft',
    'extendedcrafting:luminessence',
    'extendedcrafting:black_iron_slate',
    'extendedcrafting:basic_component',
    'extendedcrafting:basic_catalyst',
    'extendedcrafting:advanced_component',
    'extendedcrafting:advanced_catalyst',
    'extendedcrafting:elite_component',
    'extendedcrafting:elite_catalyst',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:ultimate_catalyst',
    'extendedcrafting:the_ultimate_block',
    'extendedcrafting:the_ultimate_block_uncraft',
    'extendedcrafting:the_ultimate_ingot_recraft',
    'extendedcrafting:the_ultimate_ingot_uncraft',
    'extendedcrafting:the_ultimate_component',
    'extendedcrafting:the_ultimate_catalyst',
    'extendedcrafting:black_iron_ingot',
    'extendedcrafting:black_iron_ingot_recraft',
    'extendedcrafting:black_iron_ingot_uncraft',
    'extendedcrafting:redstone_ingot',
    'extendedcrafting:redstone_catalyst',
    'extendedcrafting:redstone_component',
    'extendedcrafting:redstone_ingot_block',
    'extendedcrafting:redstone_ingot_block_uncraft',
    'extendedcrafting:redstone_ingot_recraft',
    'extendedcrafting:redstone_ingot_uncraft',
    'extendedcrafting:enhanced_redstone_ingot_block',
    'extendedcrafting:enhanced_redstone_ingot_block_uncraft',
    'extendedcrafting:enhanced_redstone_ingot_recraft',
    'extendedcrafting:enhanced_redstone_ingot_uncraft',
    'extendedcrafting:enhanced_redstone_catalyst',
    'extendedcrafting:enhanced_redstone_component',
    'extendedcrafting:basic_table',
    'extendedcrafting:advanced_table',
    'extendedcrafting:elite_table',
    'extendedcrafting:ultimate_table',
    'extendedcrafting:basic_auto_table',
    'extendedcrafting:advanced_auto_table',
    'extendedcrafting:elite_auto_table',
    'extendedcrafting:ultimate_auto_table',
    'extendedcrafting:crystaltine_component',
    'extendedcrafting:crystaltine_catalyst',
    'extendedcrafting:guide_book',
  ])

  global.replaceShaped(event, [
    ' Y ',
    ' S ',
    'NNN'
  ], {
    Y: '#forge:storage_blocks/ender_eye',
    N: '#forge:storage_blocks/enderium',
    S: 'kubejs:ender_star'
  }, 'extendedcrafting', 'ender_alternator');

  global.replaceShaped(event, [
    'EEE',
    'NCN',
    'NNN'
  ], {
    E: 'minecraft:ender_eye',
    C: 'minecraft:crafting_table',
    N: '#forge:storage_blocks/enderium'    
  }, 'extendedcrafting', 'ender_crafter');

  global.replaceShaped(event, [
    'SRS',
    'CEC',
    'SRS'
  ], {
    S: '#forge:plates/steel',
    R: 'extendedcrafting:redstone_component',
    C: 'extendedcrafting:crystaltine_component',
    E: 'extendedcrafting:ender_crafter'    
  }, 'extendedcrafting', 'auto_ender_crafter');

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {tag: 'forge:dusts/glowstone', count: 2},
      {tag: 'forge:dusts/redstone', count: 1},
      {tag: 'forge:gunpowder', count: 1}
    ],
    result: [Item.of('extendedcrafting:luminessence').withCount(2).toJson()],
    energy: 16000
  }).id('meatsalad:smelter/luminessence');

  const tiers = [
    {name: 'redstone', material: 'redstone', materialType: 'dust', hasCatalyst: false},
    {name: 'crystaltine', material: 'crystaltine', hasCatalyst: false},
    {name: 'basic', material: 'iron', previousTable: 'minecraft:crafting_table'},
    {name: 'advanced', material: 'gold', previousTable: 'extendedcrafting:basic_table'},
    {name: 'elite', material: 'diamond', materialType: 'gem', previousTable: 'extendedcrafting:advanced_table'},
    {name: 'ultimate', material: 'emerald', materialType: 'gem', previousTable: 'extendedcrafting:elite_table'},
  ]
  tiers.forEach(tier => {
    let materialType = tier.materialType ?? 'ingot';
    let hasCatalyst = tier.hasCatalyst ?? true;
    let previousTable = tier.previousTable;
    componentSmelting(tier.name, tier.material, materialType);
    if (hasCatalyst) {
      catalystSmelting(tier.name);
    }
    if (previousTable != null) {
      craftingTable(tier.name, tier.material, previousTable);
      autoCraftingTable(tier.name);
    }
  })
})
