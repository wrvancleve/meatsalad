WorldgenEvents.remove(event => {
  event.removeFeatureById('underground_ores', [
    'allthemodium:ore_coal_lower',
    'allthemodium:ore_coal_upper',
    'allthemodium:ore_copper_large',
    'allthemodium:ore_diamond_large',
    'allthemodium:ore_emerald',
    'allthemodium:ore_gold',
    'allthemodium:ore_gold_lower',
    'allthemodium:ore_iron_small',
    'allthemodium:ore_iron_middle',
    'allthemodium:ore_iron_upper',
    'allthemodium:ore_lapis',
    'allthemodium:ore_netherite',
    'allthemodium:allthemodium_mining',
    'allthemodium:allthemodium_ore',
    'allthemodium:ore_quartz_nether',
    'allthemodium:ore_redstone',
    'allthemodium:ore_redstone_lower',
    'allthemodium:other_vibranium_ore',
    'allthemodium:vibranium_ore',
    'alltheores:ore_aluminum_placed',
    'alltheores:ore_iridium_placed',
    'alltheores:ore_lead_placed',
    'alltheores:ore_nickel_placed',
    'alltheores:ore_osmium_placed',
    'alltheores:ore_peridot_placed',
    'alltheores:ore_platinum_placed',
    'alltheores:ore_ruby_placed',
    'alltheores:ore_sapphire_placed',
    'alltheores:ore_silver_placed',
    'alltheores:ore_tin_placed',
    'alltheores:ore_uranium_placed',
    'alltheores:ore_uranium_placed_mining',
    'alltheores:ore_zinc_placed',
    'powah:uraninite_ore',
    'powah:uraninite_ore_dense',
    'powah:uraninite_ore_poor',
    'silentgear:bort_ore',
    'thermal:lead_ore',
    'thermal:nickel_ore',
    'thermal:silver_ore',
    'thermal:tin_ore',
  ])
})

/*
WorldgenEvents.add(event => {
  const { anchors } = event
  event.addOre((ore) => {
    ore.id = "meatsalad:mining_thermal_apatite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:apatite_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
    ore.size(9)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "meatsalad:mining_thermal_cinnabar"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
    ore.size(5)
    ore.count(1)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "meatsalad:mining_thermal_niter"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:niter_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "meatsalad:mining_thermal_sulfur"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "meatsalad:mining_crimson_iron"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:netherrack', 'silentgear:crimson_iron_ore')
    ore.size(7)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(-63, 0)
  })
})
*/
