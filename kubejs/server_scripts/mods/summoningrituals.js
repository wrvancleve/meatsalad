ServerEvents.recipes(event => {
  event.shaped('summoningrituals:altar', [
    'CSC',
    'PEP',
    'WDW'
  ], {
    C: '#minecraft:candles',
    S: 'minecraft:wither_skeleton_skull',
    P: '#forge:ingots/allthemodium',
    E: 'minecraft:enchanting_table',
    W: '#minecraft:planks',
    D: 'meatsalad:dark_matter'
  }).id('meatsalad:altar')
})
