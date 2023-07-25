WorldgenEvents.remove(event => {
  event.removeFeatureById('underground_ores', [
    "allthemodium:allthemodium_ore",
    "allthemodium:vibranium_ore",
    "thermal:apatite_ore",
    "thermal:cinnabar_ore",
    "thermal:lead_ore",
    "thermal:nickel_ore",
    "thermal:niter_ore",
    "thermal:silver_ore",
    "thermal:sulfur_ore",
    "thermal:tin_ore",
  ])
  event.printFeatures()
})

WorldgenEvents.add(event => {
  const { anchors } = event
  /*
  event.addOre((ore) => {
    ore.id = "kubejs:end_neutronium"
    ore.biomes = ['minecraft:end_highlands', 'minecraft:end_midlands', 'minecraft:end_barrens']
    ore.addTarget('minecraft:end_stone', 'kubejs:end_neutronium_ore')
    ore.size(3)
    ore.count([1,3])
        .squared()
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
            anchors.aboveBottom(8),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
            anchors.absolute(96)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )
    ore.noSurface = 1.0
    ore.worldgenLayer = 'underground_ores'
    ore.chance = 3
  })
  */
  event.addOre((ore) => {
    ore.id = "kubejs:end_adamantite"
    ore.biomes = ['minecraft:end_highlands', 'minecraft:end_midlands', 'minecraft:end_barrens']
    ore.addTarget('minecraft:end_stone', 'kubejs:end_adamantite_ore')
    ore.size(3)
    ore.count([1,3])
        .squared()
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
            anchors.aboveBottom(8),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
            anchors.absolute(96)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )
    ore.noSurface = 1.0
    ore.worldgenLayer = 'underground_ores'
    ore.chance = 3
  })
  event.addOre((ore) => {
    ore.id = "kubejs:end_mythril"
    ore.biomes = ['minecraft:end_highlands', 'minecraft:end_midlands', 'minecraft:end_barrens']
    ore.addTarget('minecraft:end_stone', 'kubejs:end_mythril_ore')
    ore.size(3)
    ore.count([1,3])
        .squared()
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
            anchors.aboveBottom(8),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
            anchors.absolute(96)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )
    ore.noSurface = 1.0
    ore.worldgenLayer = 'underground_ores'
    ore.chance = 3
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_apatite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:apatite_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
    ore.size(9)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_cinnabar"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
    ore.size(5)
    ore.count(1)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_niter"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:niter_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_sulfur"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(64, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_silentgear_crimson_iron"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:netherrack', 'silentgear:crimson_iron_ore')
    ore.size(7)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(0, 65)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_silentgear_azure_silver"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:end_stone', 'silentgear:azure_silver_ore')
    ore.size(7)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(-64, 1)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_ato_iridium"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:iridium_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:deepslate_iridium_ore')
    ore.size(5)
    ore.count(1)
    ore.squared()
    ore.uniformHeight(-64, 254)
  })
})
