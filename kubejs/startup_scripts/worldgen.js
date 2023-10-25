WorldgenEvents.remove(event => {
  event.removeFeatureById('underground_ores', [
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
})

WorldgenEvents.add(event => {
  const { anchors } = event
  event.addOre((ore) => {
    ore.id = "kubejs:end_adamantite"
    ore.biomes = ['nullscape:void_barrens']
    ore.addTarget('minecraft:basalt', 'kubejs:adamantite_basalt_ore')
    ore.addTarget('minecraft:blackstone', 'kubejs:adamantite_blackstone_ore')
    ore.size(3)
    ore.count([3,5])
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
    ore.count([3,5])
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
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_cinnabar"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
    ore.size(5)
    ore.count(1)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_niter"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:niter_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_sulfur"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
    ore.size(7)
    ore.count(2)
    ore.squared()
    ore.uniformHeight(48, 143)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_bort"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'silentgear:bort_ore')
    ore.addTarget('minecraft:deepslate', 'silentgear:deepslate_bort_ore')
    ore.size(3)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(1, 111)
  })
  event.addOre((ore) => {
    ore.id = "kubejs:mining_crimson_iron"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:netherrack', 'silentgear:crimson_iron_ore')
    ore.size(7)
    ore.count(3)
    ore.squared()
    ore.uniformHeight(-63, 0)
  })
})
