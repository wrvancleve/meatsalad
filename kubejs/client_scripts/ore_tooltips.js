ItemEvents.tooltip(event => {
  let addOreTooltip = (name, tooltips) => {
    Ingredient.of(`#forge:ores/${name}`).stacks.forEach(ore => {
      if (ore.id != 'minecraft:barrier') {
        event.add(ore, tooltips);
      }
    });
    Ingredient.of(`#forge:raw_materials/${name}`).stacks.forEach(ore => {
      if (ore.id != 'minecraft:barrier') {
        event.add(ore, tooltips);
      }
    });
  };

  addOreTooltip('coal', [
    Text.of('Overworld: Any Biome (Y: 0 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: 128 to 320)').gold()
  ]);

  addOreTooltip('iron', [
    Text.of('Overworld: Any Biome (Y: -63 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -24 to 320)').gold()
  ]);

  addOreTooltip('copper', [
    Text.of('Overworld: Any Biome (Y: -16 to 112)').gold(),
    Text.of('Mining Dimension: (Y: 48 to 207)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ]);

  addOreTooltip('gold', [
    Text.of('Overworld: Any Biome (Y: -63 to 32)').gold(),
    Text.of('Nether: Any Biome (Y: 10 to 117)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 127)').gold(),
    Text.of('The Other: Any Biome (Y: -54 to 310)').gold()
  ]);

  addOreTooltip('redstone', [
    Text.of('Overworld: Any Biome (Y: -63 to 15)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 15)').gold()
  ]);

  addOreTooltip('emerald', [
    Text.of('Overworld: Mountain & Windswept Hill Biomes (Y: -16 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('lapis', [
    Text.of('Overworld: Any Biome (Y: -63 to 64)').gold(),
    Text.of('Mining Dimension: (Y: 16 to 143)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 64)').gold()
  ]);

  addOreTooltip('diamond', [
    Text.of('Overworld: Any Biome (Y: -63 to 16)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 95)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('quartz', [
    Text.of('Nether: Any Biome (Y: 10 to 117)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold(),
    Text.of('The Other: Any Biome (Y: -54 to 310)').gold()
  ]);

  addOreTooltip('netherite_scrap', [
    Text.of('Nether: Any Biome (Y: 8 to 22)').gold(),
    Text.of('Mining Dimension: (Y: -55 to -39)').gold()
  ]);

  addOreTooltip('aluminum', [
    Text.of('Overworld: Any Biome (Y: 50 to 120)').gold(),
    Text.of('Mining Dimension: (Y: 112 to 207)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ]);

  addOreTooltip('lead', [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold()
  ]);

  addOreTooltip('nickel', [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold()
  ]);

  addOreTooltip('osmium', [
    Text.of('Overworld: Any Biome (Y: -63 to 36)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold()
  ]);

  addOreTooltip('platinum', [
    Text.of('Overworld: Any Biome (Y: -63 to 36)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: 1 to 143)').gold()
  ]);

  addOreTooltip('silver', [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold()
  ]);

  addOreTooltip('tin', [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 207)').gold()
  ]);

  addOreTooltip('uranium', [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: -7 to 175)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 196)').gold()
  ]);

  addOreTooltip('zinc', [
    Text.of('Overworld: Any Biome (Y: -63 to 126)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 175)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ]);

  addOreTooltip('iridium', [
    Text.of('Overworld: Mountain Biomes (Y: 5 to 69)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('ruby', [
    Text.of('Overworld: Mountain Biomes (Y: -63 to 228)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 228)').gold()
  ]);

  addOreTooltip('sapphire', [
    Text.of('Overworld: Mountain Biomes (Y: -63 to 296)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 296)').gold()
  ]);

  addOreTooltip('peridot', [
    Text.of('Overworld: Mountain Biomes (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 196)').gold()
  ]);

  addOreTooltip('fluorite', [
    Text.of('Overworld: Any Biome (Y: -63 to 23)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold()
  ]);

  addOreTooltip('crimson_iron', [
    Text.of('Nether: Any Biome (Y: 10 to 245)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold()
  ]);

  addOreTooltip('apatite', [
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ]);

  addOreTooltip('cinnabar', [
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ]);

  addOreTooltip('niter', [
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ]);

  addOreTooltip('sulfur', [
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ]);

  addOreTooltip('bort', [
    Text.of('Overworld: Any Biome (Y: -60 to 10)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold()
  ]);

  addOreTooltip('azure_silver', [
    Text.of('The End: Any Biome (Y: 8 to 376)').gold()
  ]);

  addOreTooltip('adamantite', [
    Text.of('The End: Void Barrens Biomes (Y: 8 to 376)').gold()
  ]);

  addOreTooltip('mythril', [
    Text.of('The End: Void Barrens Biomes (Y: 8 to 376)').gold()
  ]);

  addOreTooltip('arcane_salvage', [
    Text.of('Overworld: Any Biome (Y: -63 to -38)').gold()
  ]);
})

JEIEvents.information(event => {
  let addOreInformation = (name, tooltips) => {
    Ingredient.of(`#forge:ores/${name}`).stacks.forEach(ore => {
      if (ore.id != 'minecraft:barrier') {
        event.addItem(ore, tooltips);
      }
    });
    Ingredient.of(`#forge:raw_materials/${name}`).stacks.forEach(ore => {
      if (ore.id != 'minecraft:barrier') {
        event.addItem(ore, tooltips);
      }
    });
  };

  addOreInformation('coal', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: 0 to 320)'),
    Text.of('    Mining Dimension: (Y: 1 to 247)'),
    Text.of('    The Other: Any Biome (Y: 128 to 320)')
  ]);

  addOreInformation('iron', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 320)'),
    Text.of('    Mining Dimension: (Y: 1 to 247)'),
    Text.of('    The Other: Any Biome (Y: -24 to 320)')
  ]);

  addOreInformation('copper', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -16 to 112)'),
    Text.of('    Mining Dimension: (Y: 48 to 207)'),
    Text.of('    The Other: Any Biome (Y: -16 to 112)')
  ]);

  addOreInformation('gold', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 32)'),
    Text.of('    Nether: Any Biome (Y: 10 to 117)'),
    Text.of('    Mining Dimension: (Y: -63 to 127)'),
    Text.of('    The Other: Any Biome (Y: -54 to 310)')
  ]);

  addOreInformation('redstone', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 15)'),
    Text.of('    Mining Dimension: (Y: 1 to 111)'),
    Text.of('    The Other: Any Biome (Y: -63 to 15)')
  ]);

  addOreInformation('emerald', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Mountain & Windswept Hill Biomes (Y: -16 to 320)'),
    Text.of('    Mining Dimension: (Y: 1 to 247)'),
    Text.of('    The Other: Any Biome (Y: -63 to 129)')
  ]);

  addOreInformation('lapis', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 64)'),
    Text.of('    Mining Dimension: (Y: 16 to 143)'),
    Text.of('    The Other: Any Biome (Y: -63 to 64)')
  ]);

  addOreInformation('diamond', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 16)'),
    Text.of('    Mining Dimension: (Y: 1 to 95)'),
    Text.of('    The Other: Any Biome (Y: -63 to 129)')
  ]);

  addOreInformation('quartz', [
    Text.of('Ore Generation:'),
    Text.of('    Nether: Any Biome (Y: 10 to 117)'),
    Text.of('    Mining Dimension: (Y: -63 to 0)'),
    Text.of('    The Other: Any Biome (Y: -54 to 310)')
  ]);

  addOreInformation('netherite_scrap', [
    Text.of('Ore Generation:'),
    Text.of('    Nether: Any Biome (Y: 8 to 22)'),
    Text.of('    Mining Dimension: (Y: -55 to -39)')
  ]);

  addOreInformation('aluminum', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: 50 to 120)'),
    Text.of('    Mining Dimension: (Y: 112 to 207)'),
    Text.of('    The Other: Any Biome (Y: -16 to 112)')
  ]);

  addOreInformation('lead', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 56)'),
    Text.of('    Mining Dimension: (Y: 1 to 143)')
  ]);

  addOreInformation('nickel', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 56)'),
    Text.of('    Mining Dimension: (Y: 1 to 143)')
  ]);

  addOreInformation('osmium', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 36)'),
    Text.of('    Mining Dimension: (Y: 1 to 111)')
  ]);

  addOreInformation('platinum', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 36)'),
    Text.of('    Mining Dimension: (Y: 65 to 247)'),
    Text.of('    The Other: Any Biome (Y: 1 to 143)')
  ]);

  addOreInformation('silver', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 56)'),
    Text.of('    Mining Dimension: (Y: 1 to 143)')
  ]);

  addOreInformation('tin', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 196)'),
    Text.of('    Mining Dimension: (Y: 1 to 207)')
  ]);

  addOreInformation('uranium', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 196)'),
    Text.of('    Mining Dimension: (Y: -7 to 175)'),
    Text.of('    The Other: Any Biome (Y: -63 to 196)')
  ]);

  addOreInformation('zinc', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 126)'),
    Text.of('    Mining Dimension: (Y: 1 to 175)'),
    Text.of('    The Other: Any Biome (Y: -16 to 112)')
  ]);

  addOreInformation('iridium', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Mountain Biomes (Y: 5 to 69)'),
    Text.of('    Mining Dimension: (Y: 1 to 143)'),
    Text.of('    The Other: Any Biome (Y: -63 to 129)')
  ]);

  addOreInformation('ruby', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Mountain Biomes (Y: -63 to 228)'),
    Text.of('    Mining Dimension: (Y: 1 to 247)'),
    Text.of('    The Other: Any Biome (Y: -63 to 228)')
  ]);

  addOreInformation('sapphire', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Mountain Biomes (Y: -63 to 296)'),
    Text.of('    Mining Dimension: (Y: 1 to 247)'),
    Text.of('    The Other: Any Biome (Y: -63 to 296)')
  ]);

  addOreInformation('peridot', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Mountain Biomes (Y: -63 to 196)'),
    Text.of('    Mining Dimension: (Y: 1 to 247)'),
    Text.of('    The Other: Any Biome (Y: -63 to 196)')
  ]);

  addOreInformation('fluorite', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to 23)'),
    Text.of('    Mining Dimension: (Y: 1 to 111)')
  ]);

  addOreInformation('crimson_iron', [
    Text.of('Ore Generation:'),
    Text.of('    Nether: Any Biome (Y: 10 to 245)'),
    Text.of('    Mining Dimension: (Y: -63 to 0)')
  ]);

  addOreInformation('apatite', [
    Text.of('Ore Generation:'),
    Text.of('    Mining Dimension: (Y: 48 to 143)')
  ]);

  addOreInformation('cinnabar', [
    Text.of('Ore Generation:'),
    Text.of('    Mining Dimension: (Y: 48 to 143)')
  ]);

  addOreInformation('niter', [
    Text.of('Ore Generation:'),
    Text.of('    Mining Dimension: (Y: 48 to 143)')
  ]);

  addOreInformation('sulfur', [
    Text.of('Ore Generation:'),
    Text.of('    Mining Dimension: (Y: 48 to 143)')
  ]);

  addOreInformation('bort', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -60 to 10)'),
    Text.of('    Mining Dimension: (Y: 1 to 111)')
  ]);

  addOreInformation('azure_silver', [
    Text.of('Ore Generation:'),
    Text.of('    The End: Any Biome (Y: 8 to 376)')
  ]);

  addOreInformation('adamantite', [
    Text.of('Ore Generation:'),
    Text.of('    The End: Void Barrens Biomes (Y: 8 to 376)')
  ]);

  addOreInformation('mythril', [
    Text.of('Ore Generation:'),
    Text.of('    The End: Void Barrens Biomes (Y: 8 to 376)')
  ]);

  addOreInformation('arcane_salvage', [
    Text.of('Ore Generation:'),
    Text.of('    Overworld: Any Biome (Y: -63 to -38)')
  ]);
})
