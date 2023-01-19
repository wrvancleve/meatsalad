//priority: 1000
onEvent('tags.blocks', e => {
  //e.add('create:passive_boiler_heaters', 'allthemodium:soul_lava_block')
})

onEvent('tags.items', e => {
  e.add('forge:storage_blocks/raw_crimson_iron', 'silentgear:raw_crimson_iron_block');
  e.add('forge:raw_ores/crimson_iron', 'silentgear:raw_crimson_iron');
  e.add('forge:raw_materials/crimson_iron', 'silentgear:raw_crimson_iron');
  e.add('forge:dusts/crimson_iron', 'silentgear:crimson_iron_dust');
  e.add('forge:storage_blocks/raw_azure_silver', 'silentgear:raw_azure_silver_block');
  e.add('forge:raw_ores/azure_silver', 'silentgear:raw_azure_silver');
  e.add('forge:raw_materials/azure_silver', 'silentgear:raw_azure_silver');
  e.add('forge:dusts/azure_silver', 'silentgear:azure_silver_dust');
  e.add('forge:dusts/netherite', 'alltheores:netherite_dust');

  // fix raw block crafting for other mods
  mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))

  atmMetals.forEach(metal => e.add(`forge:storage_blocks/raw_${metal}`, `allthemodium:raw_${metal}_block`));
  e.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  e.add('forge:rods/metal', atmMetals.map(metal => `allthemodium:${metal}_rod`));
  e.add('forge:rods/all_metal', '#forge:rods/metal');
  e.add('forge:plates', atmMetals.map(metal => `allthemodium:${metal}_plate`))

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')

  e.add('minecraft:logs', [/allthemodium:stripped_\w+_log/])
  e.add('forge:stripped_logs', [/allthemodium:stripped_\w+_log/])
})

onEvent('tags.entity_types', e => {
  e.add('industrialforegoing:mob_duplicator_blacklist',['allthemodium:piglich'])
})
