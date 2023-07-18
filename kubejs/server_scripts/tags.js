//priority: 1000
ServerEvents.tags('block', event => {
  //event.add('create:passive_boiler_heaters', 'allthemodium:soul_lava_block')
})

ServerEvents.tags('item', event => {
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
