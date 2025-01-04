ServerEvents.recipes(event => {
  event.shaped('summoningrituals:altar', [
    'CSC',
    'PEP',
    'WGW'
  ], {
    C: '#minecraft:candles',
    S: 'minecraft:wither_skeleton_skull',
    P: '#forge:ingots/allthemodium',
    E: 'minecraft:enchanting_table',
    W: '#minecraft:planks',
    G: 'meatsalad:mystery_goo'
  }).id('meatsalad:altar')
  energize(event,
    [
      Ingredient.of('minecraft:obsidian'),
      Ingredient.of('minecraft:obsidian'),
      Ingredient.of('summoningrituals:altar'),
      Ingredient.of('minecraft:obsidian'),
      Ingredient.of('minecraft:obsidian'),
    ],
    100000,
    Item.of('summoningrituals:indestructible_altar'),
  )
})
