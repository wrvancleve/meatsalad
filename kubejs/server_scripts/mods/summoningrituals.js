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
})
