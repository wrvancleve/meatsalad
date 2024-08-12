ServerEvents.recipes(event => {
  replaceShaped(event, [
    'rLr',
    'SCS',
    'RSR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    S: '#minecraft:stone_bricks',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, Item.of('structurecompass:structure_compass'))
})
