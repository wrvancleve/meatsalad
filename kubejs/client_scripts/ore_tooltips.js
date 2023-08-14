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
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: 128 to 320)').gold()
  ]);

  addOreTooltip('iron', [
    Text.of('Overworld: Any Biome (Y: -63 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -24 to 320)').gold()
  ]);

  addOreTooltip('copper', [
    Text.of('Overworld: Any Biome (Y: -16 to 112)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ]);

  addOreTooltip('gold', [
    Text.of('Overworld: Any Biome (Y: -63 to 32)').gold(),
    Text.of('Nether: Any Biome (Y: 10 to 117)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -54 to 310)').gold()
  ]);

  addOreTooltip('redstone', [
    Text.of('Overworld: Any Biome (Y: -63 to 15)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 15)').gold()
  ]);

  addOreTooltip('emerald', [
    Text.of('Overworld: Mountain & Windswept Hill Biomes (Y: -16 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('lapis', [
    Text.of('Overworld: Any Biome (Y: -63 to 64)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 64)').gold()
  ]);

  addOreTooltip('diamond', [
    Text.of('Overworld: Any Biome (Y: -63 to 16)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('quartz', [
    Text.of('Nether: Any Biome (Y: 10 to 117)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 64)').gold(),
    Text.of('The Other: Any Biome (Y: -54 to 310)').gold()
  ]);

  addOreTooltip('netherite_scrap', [
    Text.of('Nether: Any Biome (Y: 8 to 22)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 64)').gold()
  ]);

  addOreTooltip('aluminum', [
    Text.of('Overworld: Any Biome (Y: 50 to 120)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ]);

  addOreTooltip('lead', [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('nickel', [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('osmium', [
    Text.of('Overworld: Any Biome (Y: -63 to 36)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('platinum', [
    Text.of('Overworld: Any Biome (Y: -63 to 36)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('silver', [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('tin', [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('uranium', [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('zinc', [
    Text.of('Overworld: Any Biome (Y: -63 to 126)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ]);

  addOreTooltip('iridium', [
    Text.of('Overworld: Any Biome (Y: 5 to 69)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ]);

  addOreTooltip('ruby', [
    Text.of('Overworld: Any Biome (Y: -63 to 228)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('sapphire', [
    Text.of('Overworld: Any Biome (Y: -63 to 296)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('peridot', [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('fluorite', [
    Text.of('Overworld: Any Biome (Y: -63 to 23)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('crimson_iron', [
    Text.of('Nether: Any Biome (Y: 10 to 245)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 64)').gold()
  ]);

  addOreTooltip('cinnabar', [
    Text.of('Overworld: Any Biome (Y: -16 to 48)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('niter', [
    Text.of('Overworld: Any Biome (Y: -16 to 64)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  addOreTooltip('sulfur', [
    Text.of('Overworld: Any Biome (Y: -16 to 32)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold()
  ]);

  /*
  addOreTooltip('vibranium', [
    Text.of('The Other: Any Biome (Y: 0 to 40)').gold()
  ]);
  */

  /*
  addOreTooltip('unobtainium', [
    Text.of('The End: End Highlands Biome (Y: Any)').gold()
  ]);
  */

  addOreTooltip('azure_silver', [
    Text.of('The End: Any Biome (Y: 16 to 92)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold()
  ]);

  addOreTooltip('adamantite', [
    Text.of('The End: Any Biome (Y: 0 to 96)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold()
  ]);

  addOreTooltip('mythril', [
    Text.of('The End: Any Biome (Y: 0 to 96)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold()
  ]);
})
