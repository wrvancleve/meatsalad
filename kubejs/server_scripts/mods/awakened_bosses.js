
ServerEvents.recipes(event => {
  function fullRemove(id) {
    event.remove({ input: id })
    event.remove({ output: id })
  }

  fullRemove('awakened_bosses:herobrine_block')
  fullRemove('awakened_bosses:herobrine_ingot')
  fullRemove('awakened_bosses:herobrine_nugget')
  fullRemove('awakened_bosses:herobrine_a_helmet')
  fullRemove('awakened_bosses:herobrine_a_chestplate')
  fullRemove('awakened_bosses:herobrine_a_leggings')
  fullRemove('awakened_bosses:herobrine_a_boots')
  fullRemove('awakened_bosses:herobrine_sword')
  fullRemove('awakened_bosses:herobrine_pickaxe')
  fullRemove('awakened_bosses:herobrine_axe')
  fullRemove('awakened_bosses:herobrine_shovel')
  fullRemove('awakened_bosses:herobrine_hoe')

  event.remove({ id: 'awakened_bosses:herobrine_blue_recipe' })
  energize(event,
    [
      Ingredient.of('#forge:dyes/blue'),
      Ingredient.of('#forge:storage_blocks/diamond'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:draconic_infused_dark_matter')
    ],
    5000000,
    Item.of('awakened_bosses:herobrine_blue')
  )

  event.remove({ id: 'awakened_bosses:herobrine_cyan_recipe' })
  energize(event,
    [
      Ingredient.of('#forge:dyes/cyan'),
      Ingredient.of('#forge:storage_blocks/diamond'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:draconic_infused_dark_matter')
    ],
    5000000,
    Item.of('awakened_bosses:herobrine_cyan')
  )
})
