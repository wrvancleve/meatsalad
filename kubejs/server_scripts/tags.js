//priority: 2000
ServerEvents.tags('block', event => {
  function addForge(blockType, material, itemId) {
    event.add(`forge:${blockType}s/${material}`, itemId);
    event.add(`forge:${blockType}s`, itemId);
    //event.add(`forge:${blockType}s/${material}`, `#forge:${blockType}s`);
  }
})

ServerEvents.tags('item', event => {
  function addForge(itemType, material, itemId) {
    event.add(`forge:${itemType}s/${material}`, itemId);
    event.add(`forge:${itemType}s`, itemId);
    //event.add(`forge:${itemType}s/${material}`, `#forge:${itemType}s`);
  }

  //event.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
  //event.add('forge:storage_blocks/raw_crimson_iron', 'silentgear:raw_crimson_iron_block');
  //event.add('forge:raw_ores/crimson_iron', 'silentgear:raw_crimson_iron');
  //event.add('forge:raw_materials/crimson_iron', 'silentgear:raw_crimson_iron');
  //event.add('forge:dusts/crimson_iron', 'silentgear:crimson_iron_dust');
  //event.add('forge:storage_blocks/raw_azure_silver', 'silentgear:raw_azure_silver_block');
  //event.add('forge:raw_ores/azure_silver', 'silentgear:raw_azure_silver');
  //event.add('forge:raw_materials/azure_silver', 'silentgear:raw_azure_silver');
  //event.add('forge:dusts/azure_silver', 'silentgear:azure_silver_dust');
  //event.add('forge:dusts/netherite', 'alltheores:netherite_dust');
  //event.add('forge:raw_ores/iron', 'minecraft:raw_iron');
  //event.add('forge:raw_ores/copper', 'minecraft:raw_copper');
  //event.add('forge:raw_ores/gold', 'minecraft:raw_gold');
  //event.add('forge:ingots/vibranium_tyrian_steel', 'kubejs:vibranium_tyrian_steel_ingot');
  //event.add('forge:ingots/unobtainium_tyrian_steel', 'kubejs:unobtainium_tyrian_steel_ingot');
  
  //event.add('forge:nether_bookshelves', 'quark:crimson_bookshelf');
  //event.add('forge:nether_bookshelves', 'quark:warped_bookshelf');

  //event.add('forge:other_bookshelves', 'allthemodium:ancient_bookshelf');
  //event.add('forge:other_bookshelves', 'allthemodium:soul_bookshelf');
  //event.add('forge:other_bookshelves', 'allthemodium:demonic_bookshelf');

  // fix raw block crafting for other mods
  //mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))

  //atmMetals.forEach(metal => e.add(`forge:storage_blocks/raw_${metal}`, `allthemodium:raw_${metal}_block`));
  //event.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  //event.add('forge:rods/metal', atmMetals.map(metal => `allthemodium:${metal}_rod`));
  //event.add('forge:rods/all_metal', '#forge:rods/metal');
  //event.add('forge:plates', atmMetals.map(metal => `allthemodium:${metal}_plate`))

  //event.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')

  //event.add('minecraft:logs', [/allthemodium:stripped_\w+_log/])
  //event.add('forge:stripped_logs', [/allthemodium:stripped_\w+_log/])

  const mysteryGooReplications = [
    'industrialforegoing:laser_lens0',
    'industrialforegoing:laser_lens1',
    'industrialforegoing:laser_lens2',
    'industrialforegoing:laser_lens3',
    'industrialforegoing:laser_lens4',
    'industrialforegoing:laser_lens5',
    'industrialforegoing:laser_lens6',
    'industrialforegoing:laser_lens7',
    'industrialforegoing:laser_lens8',
    'industrialforegoing:laser_lens9',
    'industrialforegoing:laser_lens10',
    'industrialforegoing:laser_lens11',
    'industrialforegoing:laser_lens12',
    'industrialforegoing:laser_lens13',
    'industrialforegoing:laser_lens14',
    'industrialforegoing:laser_lens15',
    'cataclysm:abyss_eye',
    'cataclysm:flame_eye',
    'cataclysm:mech_eye',
    'cataclysm:monstrous_eye',
    'cataclysm:void_eye',
    'alexsmobs:mysterious_worm'
  ];
  for (let mysteryGooReplication of mysteryGooReplications) {
    event.add('meatsalad:mystery_goo_replication', mysteryGooReplication);
  }

  //event.remove('balm:ingots', 'allthemodium:allthemodium_ingot')

  const allTheModiumItems = [
    {type: 'ore', item: 'allthemodium:allthemodium_ore'},
    {type: 'ore', item: 'allthemodium:allthemodium_slate_ore'},
    {type: 'raw_material', item: 'allthemodium:raw_allthemodium'},
    {type: 'raw_ore', item: 'allthemodium:raw_allthemodium'},
    {type: 'ingot', item: 'allthemodium:allthemodium_ingot'},
    {type: 'storage_block', item: 'allthemodium:allthemodium_block'},
    {type: 'nugget', item: 'allthemodium:allthemodium_nugget'},
    {type: 'dust', item: 'allthemodium:allthemodium_dust'},
    {type: 'dirty_dust', item: 'allthemodium:dirty_allthemodium_dust'},
    {type: 'clump', item: 'allthemodium:allthemodium_clump'},
    {type: 'shard', item: 'allthemodium:allthemodium_shard'},
    {type: 'crystal', item: 'allthemodium:allthemodium_crystal'},
    {type: 'plate', item: 'allthemodium:allthemodium_plate'},
    {type: 'gear', item: 'allthemodium:allthemodium_gear'},
    {type: 'rod', item: 'allthemodium:allthemodium_rod'},
  ]
  const mekanismTagTypes = ['dirty_dust', 'clump', 'crystal', 'shard'];
  for (let allTheModiumItem of allTheModiumItems) {
    let type = allTheModiumItem.type;
    let item = allTheModiumItem.item;
    if (mekanismTagTypes.includes(type)) {
      event.add(`mekanism:${type}s/palladium`, item)
    } else {
      event.add(`forge:${type}s/palladium`, item)
    }
  }
  event.add('forge:storage_blocks/raw_palladium', 'allthemodium:raw_allthemodium_block')

  event.remove('curios:angelring', 'angelring:angel_ring')
  event.add('curios:ring', 'angelring:angel_ring')

  event.remove('curios:heartamulet', 'bhc:heart_amulet')
  event.add('curios:necklace', 'bhc:heart_amulet')
  
  event.remove('curios:heartamulet', 'bhc:soul_heart_amulet')
  event.add('curios:necklace', 'bhc:soul_heart_amulet')

  event.remove('curios:belt', 'thermal:satchel')

  event.remove('curios:head', 'industrialforegoing:meat_feeder')

  event.add('forge:rubber', 'thermal:rubber')
  event.add('forge:rubber', 'industrialforegoing:dryrubber')

  // Silent Gear Main Materials
  const silentGearMainMaterials = [
    '#forge:ingots/aluminum',
    'minecraft:amethyst_shard',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    'minecraft:basalt',
    'minecraft:blackstone',
    '#forge:ingots/blaze_gold',
    '#forge:ingots/brass',
    '#forge:ingots/bronze',
    '#forge:ingots/copper',
    '#forge:ingots/crimson_iron',
    '#forge:ingots/crimson_steel',
    '#forge:gems/diamond',
    '#forge:ingots/electrum',
    '#forge:gems/emerald',
    '#forge:end_stones',
    '#forge:ingots/enderium',
    'silentgear:fine_silk_cloth',
    'minecraft:flint',
    '#forge:ingots/gold',
    '#forge:ingots/invar',
    '#forge:ingots/iron',
    '#forge:gems/lapis',
    '#forge:ingots/lead',
    '#forge:leather',
    '#forge:ingots/lumium',
    '#forge:netherrack',
    'silentgear:netherwood_planks',
    '#forge:ingots/nickel',
    '#forge:obsidian',
    '#forge:ingots/osmium',
    'minecraft:phantom_membrane',
    '#forge:ingots/platinum',
    '#forge:gems/quartz',
    '#forge:ingots/refined_glowstone',
    '#forge:ingots/refined_iron',
    '#forge:ingots/refined_obsidian',
    '#forge:ingots/signalum',
    '#forge:ingots/silver',
    '#forge:ingots/steel',
    '#forge:cobblestone',
    'minecraft:terracotta',
    '#forge:ingots/tin',
    '#forge:ingots/tyrian_steel',
    '#forge:ingots/uranium',
    '#forge:ingots/zinc',

    '#forge:ingots/adamantite',
    '#forge:ingots/palladium',
    '#forge:ingots/mythril',
    '#forge:ingots/ultimate',
    '#forge:ingots/unobtainium',
    '#forge:ingots/vibranium',
    '#forge:ingots/awakened_adamantite',
    '#forge:ingots/awakened_palladium',
    '#forge:ingots/awakened_mythril',
    '#forge:ingots/awakened_unobtainium',
    '#forge:ingots/awakened_vibranium',
  ]
  silentGearMainMaterials.forEach(silentGearMainMaterial => event.add(`silentgear:materials/main`, silentGearMainMaterial));

  // Silent Gear Rod Materials
  [
    '#forge:ingots/aluminum',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    'minecraft:bamboo',
    'minecraft:basalt',
    'minecraft:blackstone',
    '#forge:ingots/blaze_gold',
    '#forge:rods/blaze',
    'minecraft:bone_block',
    '#forge:ingots/brass',
    '#forge:ingots/bronze',
    '#forge:ingots/copper',
    '#forge:ingots/crimson_iron',
    '#forge:ingots/crimson_steel',
    '#forge:gems/diamond',
    '#forge:ingots/electrum',
    '#forge:gems/emerald',
    'minecraft:end_rod',
    '#forge:end_stones',
    '#forge:ingots/enderium',
    'minecraft:flint',
    '#forge:ingots/gold',
    '#forge:ingots/invar',
    '#forge:ingots/iron',
    '#forge:ingots/lead',
    '#forge:ingots/lumium',
    '#forge:netherrack',
    'silentgear:netherwood_planks',
    '#forge:ingots/nickel',
    '#forge:obsidian',
    '#forge:ingots/osmium',
    '#forge:ingots/platinum',
    '#forge:gems/quartz',
    '#forge:ingots/refined_glowstone',
    '#forge:ingots/refined_iron',
    '#forge:ingots/refined_obsidian',
    '#forge:ingots/signalum',
    '#forge:ingots/silver',
    '#forge:ingots/steel',
    '#forge:cobblestone',
    'minecraft:terracotta',
    '#forge:ingots/tin',
    '#forge:ingots/tyrian_steel',
    '#forge:ingots/uranium',
  ].forEach(silentGearRodMaterial => event.add(`silentgear:materials/rod`, silentGearRodMaterial));

  // Silent Gear Tip Materials
  [
    'minecraft:amethyst_shard',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    '#forge:ingots/blaze_gold',
    '#forge:ingots/crimson_iron',
    '#forge:ingots/crimson_steel',
    '#forge:gems/diamond',
    '#forge:gems/emerald',
    '#forge:dusts/glowstone',
    '#forge:ingots/gold',
    '#forge:ingots/iron',
    '#forge:gems/lapis',
    '#forge:gems/quartz',
    '#forge:dusts/redstone',
    '#forge:ingots/refined_glowstone',
    '#forge:ingots/refined_obsidian',
    '#forge:ingots/tyrian_steel',
    
    '#forge:ingots/adamantite',
    '#forge:ingots/palladium',
    '#forge:ingots/mythril',
    '#forge:ingots/unobtainium',
    '#forge:ingots/vibranium',
  ].forEach(silentGearTipMaterial => event.add(`silentgear:materials/tip`, silentGearTipMaterial));

  // Silent Gear Grip Materials
  [
    'silentgear:fine_silk_cloth',
    '#forge:leather',
    'minecraft:phantom_membrane',
  ].forEach(silentGearGripMaterial => event.add(`silentgear:materials/grip`, silentGearGripMaterial));

  // Silent Gear Adornment Materials
  [
    'minecraft:amethyst_shard',
    '#forge:gems/diamond',
    '#forge:gems/emerald',
    'minecraft:flint',
    '#forge:gems/lapis',
    '#forge:gems/prismarine',
    '#forge:gems/quartz',
    '#forge:gems/ruby',
    '#forge:gems/sapphire',
    '#forge:gems/peridot',
  ].forEach(silentGearAdornmentMaterial => event.add(`silentgear:materials/adornment`, silentGearAdornmentMaterial));

  // Silent Gear Lining Materials
  [
    'silentgear:fine_silk_cloth',
    '#forge:leather',
    'minecraft:phantom_membrane',
    'minecraft:slime_block',
  ].forEach(silentGearLiningMaterial => event.add(`silentgear:materials/lining`, silentGearLiningMaterial));

  // Silent Gear Binding Materials
  [
    'silentgear:fine_silk',
    'silentgear:flax_string',
    'silentgear:fluffy_string',
    'silentgear:sinew_fiber',
    'minecraft:vine',
  ].forEach(silentGearBindingMaterial => event.add(`silentgear:materials/binding`, silentGearBindingMaterial));

  // Silent Gear Coating Materials
  [
    '#forge:ingots/blaze_gold',
    '#forge:ingots/gold',
    'minecraft:netherite_ingot',
    '#forge:gems/prismarine',

    'quark:dragon_scale',
    'kubejs:infinity_fabric',
  ].forEach(silentGearCoatingMaterial => event.add(`silentgear:materials/coating`, silentGearCoatingMaterial));
  
  // Silent Gear Cord Materials
  [
    'silentgear:fine_silk',
    'silentgear:flax_string',
    'silentgear:fluffy_string',
    'silentgear:sinew_fiber',
  ].forEach(silentGearCordMaterial => event.add(`silentgear:materials/cord`, silentGearCordMaterial));

  // Silent Gear Fletching Materials
  [
    '#forge:feathers',
    '#minecraft:leaves',
    '#forge:paper',

    'quark:dragon_scale',
  ].forEach(silentGearFletchingMaterial => event.add(`silentgear:materials/fletching`, silentGearFletchingMaterial));
})

ServerEvents.tags('entity_type', event => {
  event.add('industrialforegoing:mob_duplicator_blacklist',['allthemodium:piglich'])
})
