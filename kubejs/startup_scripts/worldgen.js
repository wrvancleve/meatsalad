onEvent('worldgen.remove', e => {
  e.removeOres(ore => {
    ore.blocks = [
      'allthemodium:allthemodium_ore',
      'allthemodium:allthemodium_slate_ore',
      'allthemodium:vibranium_ore',
      'mekanism:tin_ore',
      'mekanism:deepslate_tin_ore',
      'mekanism:osmium_ore',
      'mekanism:deepslate_osmium_ore',
      'mekanism:uranium_ore',
      'mekanism:deepslate_uranium_ore',
      'mekanism:lead_ore',
      'mekanism:deepslate_lead_ore',
      'rftoolsbase:dimensionalshard_overworld',
      'rftoolsbase:dimensionalshard_nether',
      'rftoolsbase:dimensionalshard_end',
      'thermal:tin_ore',
      'thermal:deepslate_tin_ore',
      'thermal:lead_ore',
      'thermal:deepslate_lead_ore',
      'thermal:silver_ore',
      'thermal:deepslate_silver_ore',
      'thermal:nickel_ore',
      'thermal:deepslate_nickel_ore'
    ]
  })
})

onEvent('worldgen.add', event => {
/*
    event.addOre((ore) => {
    ore.id = "kubejs:mining_coal"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:coal_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_coal_ore')
    ore.size = 17
    ore.count(20)
    ore.squared()
    ore.triangleHeight(-34, 36)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_iron"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:iron_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_iron_ore')
    ore.size = 9
    ore.count([16, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_copper"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:copper_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_copper_ore')
    ore.size = 9
    ore.count([16, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_gold"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:gold_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_gold_ore')
    ore.size = 9
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_redstone"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:redstone_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_redstone_ore')
    ore.size = 8
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_emerald"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:emerald_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_emerald_ore')
    ore.size = 4
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_diamond"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:diamond_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_diamond_ore')
    ore.size = 8
    ore.count([12, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_lapis"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'minecraft:lapis_ore')
    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_lapis_ore')
    ore.size = 4
    ore.count([6, 12])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })
*/
    
  event.addOre((ore) => {
    ore.id = "kubejs:mining_certus" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'ae2:quartz_ore')
    ore.addTarget('minecraft:deepslate', 'ae2:deepslate_quartz_ore')
    ore.size = 7     // ores per cluster
    ore.count([12,20])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })
  
    event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_apatite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:apatite_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
    ore.size = 6
    ore.count([4,12])
    ore.squared()
    ore.triangleHeight(-34, 60)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_sulfur"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
    ore.size = 6
    ore.count([4,8])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_niter"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:niter_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
    ore.size = 6
    ore.count([4,8])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_cinnabar"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
    ore.size = 6
    ore.count([3,9])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })
  
  /*
    event.addOre((ore) => {
    ore.id = "kubejs:mining_iridium" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:iridium_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:iridium_slate_ore')
    ore.size = 4
    ore.count([4, 12])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_peridot" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:peridot_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:peridot_slate_ore')
    ore.size = 4
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_ruby" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:ruby_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:ruby_slate_ore')
    ore.size = 4
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_sapphire" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:sapphire_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:sapphire_slate_ore')
    ore.size = 4
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })
  
  event.addOre((ore) => {
    ore.id = "kubejs:mining_aluminum" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:aluminum_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:aluminum_slate_ore')
    ore.size = 7
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_uranium" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:uranium_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:uranium_slate_ore')
    ore.size = 6
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_lead" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:lead_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:lead_slate_ore')
    ore.size = 7
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_nickel" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:nickel_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:nickel_slate_ore')
    ore.size = 7
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_platinum" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:platinum_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:platinum_slate_ore')
    ore.size = 4
    ore.count([12, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_osmium" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:osmium_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:osmium_slate_ore')
    ore.size = 7
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_silver" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:silver_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:silver_slate_ore')
    ore.size = 6
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_tin" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:tin_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:tin_slate_ore')
    ore.size = 7
    ore.count([16, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_zinc" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:zinc_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:zinc_slate_ore')
    ore.size = 7
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_iridium" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:iridium_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:iridium_slate_ore')
    ore.size = 4
    ore.count([4, 12])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

    event.addOre((ore) => {
    ore.id = "kubejs:mining_iridium" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:deepslate', 'alltheores:iridium_slate_ore')
    ore.size(7)
    ore.count([4, 10])
    ore.squared()
    ore.triangleHeight(-64, -50)
  })

*/

  event.addOre((ore) => {
    ore.id = "kubejs:mining_peridot" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:peridot_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:peridot_slate_ore')
    ore.size = 4
    ore.count([4, 10])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_ruby" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:ruby_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:ruby_slate_ore')
    ore.size = 4
    ore.count([4, 10])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_sapphire" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'alltheores:sapphire_ore')
    ore.addTarget('minecraft:deepslate', 'alltheores:sapphire_slate_ore')
    ore.size = 4
    ore.count([4, 10])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_fluorite" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'mekanism:fluorite_ore')
    ore.addTarget('minecraft:deepslate', 'mekanism:deepslate_fluorite_ore')
    ore.size = 7
    ore.count([12, 20])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_bort" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'silentgear:bort_ore')
    ore.addTarget('minecraft:deepslate', 'silentgear:deepslate_bort_ore')
    ore.size = 4
    ore.count([6, 16])
    ore.squared()
    ore.triangleHeight(-64, 10)
  })
  
})
