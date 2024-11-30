const COAL_ITEMS = [
  'minecraft:coal_ore',
  'minecraft:deepslate_coal_ore',
  'alltheores:other_coal_ore'
]
const IRON_ITEMS = [
  'minecraft:iron_ore',
  'alltheores:other_iron_ore',
  'minecraft:deepslate_iron_ore',
  'minecraft:raw_iron'
]
const COPPER_ITEMS = [
  'minecraft:copper_ore',
  'minecraft:deepslate_copper_ore',
  'alltheores:other_copper_ore',
  'minecraft:raw_copper'
]
const GOLD_ITEMS = [
  'minecraft:deepslate_gold_ore',
  'minecraft:gold_ore',
  'alltheores:other_gold_ore',
  'minecraft:nether_gold_ore',
  'minecraft:raw_gold'
]
const REDSTONE_ITEMS = [
  'minecraft:deepslate_redstone_ore',
  'alltheores:other_redstone_ore',
  'minecraft:redstone_ore'
]
const EMERALD_ITEMS = [
  'alltheores:other_emerald_ore',
  'minecraft:emerald_ore',
  'minecraft:deepslate_emerald_ore'
]
const LAPIS_ITEMS = [
  'minecraft:deepslate_lapis_ore',
  'alltheores:other_lapis_ore',
  'minecraft:lapis_ore'
]
const DIAMOND_ITEMS = [
  'minecraft:diamond_ore',
  'alltheores:other_diamond_ore',
  'minecraft:deepslate_diamond_ore'
]
const QUARTZ_ITEMS = [
  'alltheores:other_quartz_ore',
  'minecraft:nether_quartz_ore'
]
const NETHERITE_SCRAP_ITEMS = [
  'minecraft:ancient_debris'
]
const ALUMINUM_ITEMS = [
  'alltheores:other_aluminum_ore',
  'alltheores:aluminum_ore',
  'alltheores:deepslate_aluminum_ore',
  'alltheores:raw_aluminum'
]
const LEAD_ITEMS = [
  'alltheores:lead_ore',
  'alltheores:other_lead_ore',
  'alltheores:deepslate_lead_ore',
  'alltheores:raw_lead',
]
const NICKEL_ITEMS = [
  'alltheores:other_nickel_ore',
  'alltheores:nickel_ore',
  'alltheores:deepslate_nickel_ore',
  'alltheores:raw_nickel',
]
const OSMIUM_ITEMS = [
  'alltheores:other_osmium_ore',
  'alltheores:deepslate_osmium_ore',
  'alltheores:osmium_ore',
  'alltheores:raw_osmium',
]
const PLATINUM_ITEMS = [
  'alltheores:other_platinum_ore',
  'alltheores:platinum_ore',
  'alltheores:deepslate_platinum_ore',
  'alltheores:raw_platinum'
]
const SILVER_ITEMS = [
  'alltheores:deepslate_silver_ore',
  'alltheores:silver_ore',
  'alltheores:other_silver_ore',
  'alltheores:raw_silver',
]
const TIN_ITEMS = [
  'alltheores:deepslate_tin_ore',
  'alltheores:tin_ore',
  'alltheores:other_tin_ore',
  'alltheores:raw_tin',
]
const URANIUM_ITEMS = [
  'alltheores:nether_uranium_ore',
  'alltheores:uranium_ore',
  'alltheores:deepslate_uranium_ore',
  'alltheores:other_uranium_ore',
  'alltheores:raw_uranium',
]
const ZINC_ITEMS = [
  'alltheores:zinc_ore',
  'alltheores:deepslate_zinc_ore',
  'alltheores:other_zinc_ore',
  'alltheores:raw_zinc'
]
const IRIDIUM_ITEMS = [
  'alltheores:iridium_ore',
  'alltheores:other_iridium_ore',
  'alltheores:deepslate_iridium_ore',
  'alltheores:raw_iridium'
]
const RUBY_ITEMS = [
  'alltheores:ruby_ore',
  'alltheores:deepslate_ruby_ore',
]
const SAPPHIRE_ITEMS = [
  'alltheores:deepslate_sapphire_ore',
  'alltheores:sapphire_ore',
]
const PERIDOT_ITEMS = [
  'alltheores:peridot_ore',
  'alltheores:deepslate_peridot_ore'
]
const FLUORITE_ITEMS = [
  'mekanism:deepslate_fluorite_ore',
  'mekanism:fluorite_ore'
]
const CRIMSON_IRON_ITEMS = [
  'silentgear:crimson_iron_ore',
  'silentgear:blackstone_crimson_iron_ore',
  'silentgear:raw_crimson_iron'
]
const APATITE_ITEMS = [
  'thermal:apatite_ore',
  'thermal:deepslate_apatite_ore'
]
const CINNABAR_ITEMS = [
  'thermal:deepslate_cinnabar_ore',
  'thermal:cinnabar_ore'
]
const NITER_ITEMS = [
  'thermal:niter_ore',
  'thermal:deepslate_niter_ore'
]
const SULFUR_ITEMS = [
  'thermal:sulfur_ore',
  'thermal:deepslate_sulfur_ore'
]
const AZURE_SILVER_ITEMS = [
  'silentgear:azure_silver_ore',
  'silentgear:raw_azure_silver'
]
const ARCANE_SALVAGE_ITEMS = [
  'irons_spellbooks:arcane_debris'
]
const ADAMANTITE_ITEMS = [
  'meatsalad:raw_adamantite',
  'meatsalad:adamantite_basalt_ore',
  'meatsalad:adamantite_blackstone_ore',
  'meatsalad:adamantite_end_ore'
]
const MYTHRIL_ITEMS = [
  'meatsalad:raw_mythril',
  'meatsalad:mythril_basalt_ore',
  'meatsalad:mythril_blackstone_ore',
  'meatsalad:mythril_end_ore'
]
const AQUAMARINE_ITEMS = [
  'meatsalad:aquamarine_ore',
  'meatsalad:deepslate_aquamarine_ore'
]
const JADE_ITEMS = [
  'meatsalad:jade_ore',
  'meatsalad:deepslate_jade_ore'
]
const TOPAZ_ITEMS = [
  'meatsalad:topaz_ore',
  'meatsalad:deepslate_topaz_ore'
]

ItemEvents.tooltip(event => {
  let addOreTooltips = (oreItems, tooltips) => {
    oreItems.forEach(oreItem => {
      event.add(oreItem, tooltips)
    })
  }

  addOreTooltips(COAL_ITEMS, [
    Text.of('Overworld: Any Biome (Y: 0 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: 128 to 320)').gold()
  ])

  addOreTooltips(IRON_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -24 to 320)').gold()
  ])

  addOreTooltips(COPPER_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -16 to 112)').gold(),
    Text.of('Mining Dimension: (Y: 48 to 207)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ])

  addOreTooltips(GOLD_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 32)').gold(),
    Text.of('Nether: Any Biome (Y: 10 to 117)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 127)').gold(),
    Text.of('The Other: Any Biome (Y: -54 to 310)').gold()
  ])

  addOreTooltips(REDSTONE_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 15)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 15)').gold()
  ])

  addOreTooltips(EMERALD_ITEMS, [
    Text.of('Overworld: Mountain & Windswept Hill Biomes (Y: -16 to 320)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ])

  addOreTooltips(LAPIS_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 64)').gold(),
    Text.of('Mining Dimension: (Y: 16 to 143)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 64)').gold()
  ])

  addOreTooltips(DIAMOND_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 16)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 95)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ])

  addOreTooltips(QUARTZ_ITEMS, [
    Text.of('Nether: Any Biome (Y: 10 to 117)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold(),
    Text.of('The Other: Any Biome (Y: -54 to 310)').gold()
  ])

  addOreTooltips(NETHERITE_SCRAP_ITEMS, [
    Text.of('Nether: Any Biome (Y: 8 to 22)').gold(),
    Text.of('Mining Dimension: (Y: -55 to -39)').gold()
  ])

  addOreTooltips(ALUMINUM_ITEMS, [
    Text.of('Overworld: Any Biome (Y: 50 to 120)').gold(),
    Text.of('Mining Dimension: (Y: 112 to 207)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ])

  addOreTooltips(LEAD_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold()
  ])

  addOreTooltips(NICKEL_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold()
  ])

  addOreTooltips(OSMIUM_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 36)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold()
  ])

  addOreTooltips(PLATINUM_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 36)').gold(),
    Text.of('Mining Dimension: (Y: 65 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: 1 to 143)').gold()
  ])

  addOreTooltips(SILVER_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 56)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold()
  ])

  addOreTooltips(TIN_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 207)').gold()
  ])

  addOreTooltips(URANIUM_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: -7 to 175)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 196)').gold()
  ])

  addOreTooltips(ZINC_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 126)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 175)').gold(),
    Text.of('The Other: Any Biome (Y: -16 to 112)').gold()
  ])

  addOreTooltips(IRIDIUM_ITEMS, [
    Text.of('Overworld: Mountain Biomes (Y: 5 to 69)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 143)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 129)').gold()
  ])

  addOreTooltips(RUBY_ITEMS, [
    Text.of('Overworld: Mountain Biomes (Y: -63 to 228)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 228)').gold()
  ])

  addOreTooltips(SAPPHIRE_ITEMS, [
    Text.of('Overworld: Mountain Biomes (Y: -63 to 296)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 296)').gold()
  ])

  addOreTooltips(PERIDOT_ITEMS, [
    Text.of('Overworld: Mountain Biomes (Y: -63 to 196)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold(),
    Text.of('The Other: Any Biome (Y: -63 to 196)').gold()
  ])

  addOreTooltips(FLUORITE_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to 23)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 111)').gold()
  ])

  addOreTooltips(CRIMSON_IRON_ITEMS, [
    Text.of('Nether: Any Biome (Y: 10 to 245)').gold(),
    Text.of('Mining Dimension: (Y: -63 to 0)').gold()
  ])

  addOreTooltips(APATITE_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -16 to 96)').gold(),
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ])

  addOreTooltips(CINNABAR_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -16 to 48)').gold(),
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ])

  addOreTooltips(NITER_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -16 to 64)').gold(),
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ])

  addOreTooltips(SULFUR_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -16 to 32)').gold(),
    Text.of('Mining Dimension: (Y: 48 to 143)').gold()
  ])

  addOreTooltips(AZURE_SILVER_ITEMS, [
    Text.of('The End: Any Biome (Y: 8 to 376)').gold()
  ])

  addOreTooltips(ARCANE_SALVAGE_ITEMS, [
    Text.of('Overworld: Any Biome (Y: -63 to -38)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 63)').gold(),
  ])

  addOreTooltips(ADAMANTITE_ITEMS, [
    Text.of('The End: End Highlands/Void Barrens (Y: 8 to 376)').gold()
  ])
  addOreTooltips(MYTHRIL_ITEMS, [
    Text.of('The End: End Highlands/Void Barrens (Y: 8 to 376)').gold()
  ])

  addOreTooltips(AQUAMARINE_ITEMS, [
    Text.of('Overworld: Ocean Biomes (Y: -63 to 228)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold()
  ])
  addOreTooltips(JADE_ITEMS, [
    Text.of('Overworld: Jungle Biomes (Y: -63 to 228)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold()
  ])
  addOreTooltips(TOPAZ_ITEMS, [
    Text.of('Overworld: Desert Biomes (Y: -63 to 228)').gold(),
    Text.of('Mining Dimension: (Y: 1 to 247)').gold()
  ])
})
