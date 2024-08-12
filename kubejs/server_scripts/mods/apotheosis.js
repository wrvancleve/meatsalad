ServerEvents.recipes(event => {
  removeRecipes(event, [
    'apotheosis:ender_lead',
  ])

  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      {
        item: 'apotheosis:common_material'
      },
      {
        fluid_tag: 'forge:experience',
        amount: 250
      }
    ],
    result: [
      {
        item: 'apotheosis:uncommon_material'
      }
    ]
  }).id('meatsalad:fluid_encapsulating/uncommon_material')

  event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemicalInput: { amount: 30, infuse_type: 'mekanism:diamond' },
    itemInput: { ingredient: Ingredient.of('apotheosis:uncommon_material').toJson() },
    output: Item.of('apotheosis:rare_material')
  }).id('meatsalad:metallurgic_infusing/rare_material')

  energize(event,
    [
      Ingredient.of('apotheosis:rare_material'),
      Ingredient.of('minecraft:netherite_scrap')
    ],
    500000,
    Item.of('apotheosis:epic_material')
  )

  energize(event,
    [
      Ingredient.of('apotheosis:epic_material'),
      Ingredient.of('meatsalad:dark_matter')
    ],
    2500000,
    Item.of('apotheosis:mythic_material')
  )

  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: {item: 'apotheosis:mythic_material'},
    addition: {item: 'meatsalad:eternal_crystal_shard'},
    result: {item: 'apotheosis:ancient_material'}
  }).id('meatsalad:fusion/ancient_material')
})
