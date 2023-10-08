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
  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'kubejs:uu_matter' },
    outputs: [
      { item: "awakened_bosses:herobrine_blue", count: 1 }
    ],
    inputs: [
      { tag: "forge:dyes/blue" },
      { tag: "forge:storage_blocks/diamond" }
    ],
    recipe_time: 200,
    block_below: { block: 'extendedcrafting:nether_star_block' }
  }).id('meatsalad:summoning/herobrine_blue');

  event.remove({ id: 'awakened_bosses:herobrine_cyan_recipe' });
  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'kubejs:uu_matter' },
    outputs: [
      { item: "awakened_bosses:herobrine_cyan", count: 1 }
    ],
    inputs: [
      { tag: "forge:dyes/cyan" },
      { tag: "forge:storage_blocks/diamond" }
    ],
    recipe_time: 200,
    block_below: { block: 'extendedcrafting:nether_star_block' }
  }).id('meatsalad:summoning/herobrine_cyan');
})
