ServerEvents.recipes(event => {
  event.remove({ id: 'apotheosis:ender_lead' })
  event.remove({ id: 'apotheosis:sigil_of_socketing' })
  event.remove({ id: 'apotheosis:gem_cutting_table' })

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: 1250,
    gasInput: {
      amount: 5,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: Ingredient.of('apotheosis:mythic_material')
    },
    output: Item.of('apotheosis:ancient_material')
  }).id('meatsalad:nucleosynthesizing/ancient_material')
})