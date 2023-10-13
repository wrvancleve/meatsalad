WorldgenEvents.remove(event => {
  event.removeFeatureById('underground_ores', [
    //"allthemodium:allthemodium_ore",
    "allthemodium:vibranium_ore",
    "rftoolsbase:dimshard_dimensions",
    "rftoolsbase:dimshard_end",
    "rftoolsbase:dimshard_nether",
    "rftoolsbase:dimshard_overworld",
    "thermal:apatite_ore",
    "thermal:cinnabar_ore",
    "thermal:lead_ore",
    "thermal:nickel_ore",
    "thermal:niter_ore",
    "thermal:silver_ore",
    "thermal:sulfur_ore",
    "thermal:tin_ore",
  ])
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
    ore.biomes = ['nullscape:void_barrens']
    ore.addTarget('minecraft:basalt', 'kubejs:adamantite_basalt_ore')
    ore.addTarget('minecraft:blackstone', 'kubejs:adamantite_blackstone_ore')
    ore.size(3)
    ore.count([1,3])
        .squared()
        .triangleHeight(
            anchors.aboveBottom(8),
            anchors.belowTop(8)
        )
    ore.noSurface = 1.0
    ore.worldgenLayer = 'underground_ores'
    //ore.chance = 3
  })
  event.addOre((ore) => {
    ore.id = "kubejs:end_mythril"
    ore.biomes = ['nullscape:void_barrens']
    ore.addTarget('minecraft:basalt', 'kubejs:mythril_basalt_ore')
    ore.addTarget('minecraft:blackstone', 'kubejs:mythril_blackstone_ore')
    ore.size(3)
    ore.count([1,3])
        .squared()
        .triangleHeight(
            anchors.aboveBottom(8),
            anchors.belowTop(8)
        )
    ore.noSurface = 1.0
    ore.worldgenLayer = 'underground_ores'
    //ore.chance = 3
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_apatite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:apatite_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
    ore.size(9)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(65, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_cinnabar"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
    ore.size(5)
    ore.count(1)
    ore.squared()
    ore.uniformHeight(65, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_niter"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:niter_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(65, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_sulfur"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(65, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_bort"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'silentgear:bort_ore')
    ore.addTarget('minecraft:deepslate', 'silentgear:deepslate_bort_ore')
    ore.size(3)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(65, 254)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_crimson_iron"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:netherrack', 'silentgear:crimson_iron_ore')
    ore.size(7)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(0, 64)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_azure_silver"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:end_stone', 'silentgear:azure_silver_ore')
    ore.size(7)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(-64, 0)
  })
  /*
  event.addOre((ore) => {
    ore.id = "kubejs:mining_adamantite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:end_stone', 'kubejs:end_adamantite_ore')
    ore.size(3)
    ore.count([1, 3])
    ore.squared()
    ore.uniformHeight(-64, 0)
    ore.chance = 3
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_mythril"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:end_stone', 'kubejs:end_mythril_ore')
    ore.size(3)
    ore.count([1, 3])
    ore.squared()
    ore.uniformHeight(-64, 0)
    ore.chance = 3
  })
  */
  /*
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
  */
})
