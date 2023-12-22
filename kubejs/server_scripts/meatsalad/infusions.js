ServerEvents.recipes(event => {
  let infusion = (input, outputMod, outputName) => {
    event.custom({
      type: 'mekanism:metallurgic_infusing',
      chemicalInput: { amount: 80, infuse_type: 'kubejs:dimensional_shard' },
      itemInput: { ingredient: Ingredient.of(input).toJson() },
      output: Item.of(`${outputMod}:${outputName}`)
    }).id(`meatsalad:metallurgic_infusing/${outputName}`)
  }
  let draconicInfusion = (mod, infusedItem) => {
    event.custom({
      type: 'apotheosis:enchanting',
      conditions: [{
        type: 'apotheosis:module',
        module: 'enchantment'
      }],
      input: {
        item: `${mod}:${infusedItem}`
      },
      requirements: {
        eterna: 50.0,
        quanta: 8.5,
        arcana: 32.5
      },
      max_requirements: {
        eterna: 50.0,
        quanta: 13.5,
        arcana: 37.5
      },
      result: {
        item: `kubejs:draconic_${infusedItem}`,
        count: 1
      }
    }).id(`meatsalad:enchanting/draconic_${infusedItem}`)
  }

  event.custom({
    type: 'mekanism:infusion_conversion',
    input: { ingredient: [{ item: 'kubejs:dimensional_shard' }] },
    output: { amount: 10, infuse_type: 'kubejs:dimensional_shard' }
  }).id('meatsalad:infusion_conversion/dimensional_shard/from_shard')

  infusion('#forge:gems/diamond', 'kubejs', 'infused_diamond');
  infusion('minecraft:ender_pearl', 'kubejs', 'infused_ender_pearl');
  infusion('kubejs:dark_matter', 'kubejs', 'infused_dark_matter')
  infusion('kubejs:eternal_crystal', 'kubejs', 'infused_eternal_crystal')
  draconicInfusion('kubejs', 'infused_dark_matter')
  draconicInfusion('kubejs', 'infused_eternal_crystal')
})