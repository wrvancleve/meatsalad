ServerEvents.recipes(event => {
  event.shaped('summoningrituals:altar', [
    'CSC',
    'PEP',
    'WDW'
  ], {
    C: '#minecraft:candles',
    S: 'minecraft:wither_skeleton_skull',
    P: '#forge:ingots/palladium',
    E: 'minecraft:enchanting_table',
    W: '#minecraft:planks',
    D: 'kubejs:dark_matter'
  }).id('meatsalad:altar');
})