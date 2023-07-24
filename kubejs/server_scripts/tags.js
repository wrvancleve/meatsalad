//priority: 2000
ServerEvents.tags('block', event => {
  function addForge(blockType, material, itemId) {
    event.add(`forge:${blockType}s/${material}`, itemId);
    event.add(`forge:${blockType}s`, itemId);
    //event.add(`forge:${blockType}s/${material}`, `#forge:${blockType}s`);
  }

  addForge('storage_block', 'dragonsteel', 'kubejs:dragonsteel_block');
  addForge('storage_block', 'shellite', 'kubejs:shellite_block');
  addForge('storage_block', 'starmetal', 'kubejs:starmetal_block');
  addForge('storage_block', 'ultimate', 'kubejs:ultima_block');
  addForge('storage_block', 'unobtainium_tyrian_steel', 'kubejs:unobtainium_tyrian_steel_block');
  addForge('storage_block', 'vibranium_tyrian_steel', 'kubejs:vibranium_tyrian_steel_block');

  // Harvest Levels
  /*
  event.add('forge:needs_netherite_tool', '#forge:ores/vibranium');
  event.add('forge:needs_harvest_level_five_tool', '#forge:ores/azure_silver');
  event.add('forge:needs_harvest_level_five_tool', '#forge:ores/unobtainium');
  */
  event.add('forge:ores/vibranium', '#forge:needs_netherite_tool');
  event.add('forge:ores/azure_silver', '#forge:needs_harvest_level_five_tool');
  event.add('forge:ores/unobtainium', '#forge:needs_harvest_level_five_tool');
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

  // Amethyst
  addForge('dust', 'amethyst', 'kubejs:amethyst_dust');

  // Dragonsteel
  addForge('dust', 'dragonsteel', 'kubejs:dragonsteel_dust');
  addForge('ingot', 'dragonsteel', 'kubejs:dragonsteel_ingot');
  addForge('nugget', 'dragonsteel', 'kubejs:dragonsteel_nugget');
  addForge('storage_block', 'dragonsteel', 'kubejs:dragonsteel_block');

  // Shellite
  addForge('dust', 'shellite', 'kubejs:shellite_dust');
  addForge('ingot', 'shellite', 'kubejs:shellite_ingot');
  addForge('nugget', 'shellite', 'kubejs:shellite_nugget');
  addForge('storage_block', 'shellite', 'kubejs:shellite_block');

  // Starmetal
  addForge('ingot', 'starmetal', 'kubejs:starmetal_ingot');
  addForge('nugget', 'starmetal', 'kubejs:starmetal_nugget');
  addForge('storage_block', 'starmetal', 'kubejs:starmetal_block');

  // Ultima
  addForge('ingot', 'ultimate', 'kubejs:ultima_ingot');
  addForge('nugget', 'ultimate', 'kubejs:ultima_nugget');
  addForge('storage_block', 'ultimate', 'kubejs:ultima_block');

  // Unobtainium Tyrian Steel
  addForge('ingot', 'unobtainium_tyrian_steel', 'kubejs:unobtainium_tyrian_steel_ingot');
  addForge('storage_block', 'unobtainium_tyrian_steel', 'kubejs:unobtainium_tyrian_steel_block');

  // Vibranium Tyrian Steel
  addForge('ingot', 'vibranium_tyrian_steel', 'kubejs:vibranium_tyrian_steel_ingot');
  addForge('storage_block', 'vibranium_tyrian_steel', 'kubejs:vibranium_tyrian_steel_block');

  // Harvest Levels
  /*
  event.add('forge:harvest_level_five', '#forge:ingots/vibranium');
  event.add('forge:harvest_level_six', '#forge:ingots/unobtainium');
  event.add('forge:harvest_level_six', '#forge:ingots/azure_silver');
  event.add('forge:harvest_level_six', '#forge:ingots/azure_electrum');
  event.add('forge:harvest_level_six', '#forge:ingots/tyrian_steel');
  event.add('forge:harvest_level_six', '#forge:ingots/vibranium_tyrian_steel');
  event.add('forge:harvest_level_six', '#forge:ingots/unobtainium_tyrian_steel');
  */
  event.add('forge:ingots/vibranium', '#forge:harvest_level_five');
  event.add('forge:ingots/unobtainium', '#forge:harvest_level_six');
  event.add('forge:ingots/azure_silver', '#forge:harvest_level_six');
  event.add('forge:ingots/azure_electrum', '#forge:harvest_level_six');
  event.add('forge:ingots/tyrian_steel', '#forge:harvest_level_six');
  event.add('forge:ingots/vibranium_tyrian_steel', '#forge:harvest_level_six');
  event.add('forge:ingots/unobtainium_tyrian_steel', '#forge:harvest_level_six');

  const mysteryGooReplications = [
    'kubejs:cosmic_shelling',
    'kubejs:warden_heart',
    'kubejs:oblivion_shard',
    'kubejs:dragon_soul',
    'kubejs:ancient_chorus_chunk',
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
    'industrialforegoing:laser_lens15'
  ];
  for (let mysteryGooReplication of mysteryGooReplications) {
    event.add('meatsalad:mystery_goo_replication', mysteryGooReplication);
  }

  event.remove('balm:ingots', 'allthemodium:allthemodium_ingot')

  // Silent Gear Main Materials
  const silentGearMainMaterials = [
    'minecraft:amethyst_shard',
    '#forge:ingots/aluminum',
    '#forge:ingots/iron',
    '#forge:ingots/platinum',
    '#forge:gems/diamond',
    'minecraft:phantom_membrane',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    //'minecraft:barrier',
  ]
  silentGearMainMaterials.forEach(silentGearMainMaterial => event.add(`silentgear:parts/main`, silentGearMainMaterial));

  // Silent Gear Rod Materials
  [
    '#forge:ingots/aluminum',
    '#forge:ingots/iron',
    '#forge:ingots/platinum',
    '#forge:gems/diamond',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    'minecraft:bamboo',
  ].forEach(silentGearRodMaterial => event.add(`silentgear:parts/rod`, silentGearRodMaterial));

  // Silent Gear Tip Materials
  [
    'minecraft:amethyst_shard',
    '#forge:ingots/iron',
    '#forge:gems/diamond',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
  ].forEach(silentGearTipMaterial => event.add(`silentgear:parts/tip`, silentGearTipMaterial));

  // Silent Gear Grip Materials
  [
    'minecraft:phantom_membrane',
  ].forEach(silentGearGripMaterial => event.add(`silentgear:parts/grip`, silentGearGripMaterial));

  // Silent Gear Adornment Materials
  [
    'minecraft:amethyst_shard',
    '#forge:gems/diamond',
  ].forEach(silentGearAdornmentMaterial => event.add(`silentgear:parts/adornment`, silentGearAdornmentMaterial));

  // Silent Gear Lining Materials
  [
    'minecraft:phantom_membrane',
  ].forEach(silentGearLiningMaterial => event.add(`silentgear:parts/lining`, silentGearLiningMaterial));

  // Silent Gear Binding Materials
  [
    'silentgear:sinew_fiber',
  ].forEach(silentGearBindingMaterial => event.add(`silentgear:parts/binding`, silentGearBindingMaterial));

  // Silent Gear Cord Materials
  [
    'silentgear:sinew_fiber',
  ].forEach(silentGearCordMaterial => event.add(`silentgear:parts/cord`, silentGearCordMaterial));
})

ServerEvents.tags('entity_type', event => {
  event.add('industrialforegoing:mob_duplicator_blacklist',['allthemodium:piglich'])
})
