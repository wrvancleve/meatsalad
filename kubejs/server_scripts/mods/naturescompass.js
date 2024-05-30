ServerEvents.recipes(event => {
  replaceShaped(event, [
    'rsr',
    'LCL',
    'RLR'
  ], {
    r: 'minecraft:repeater',
    L: '#minecraft:logs',
    s: '#minecraft:saplings',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, Item.of('naturescompass:naturescompass'), 'natures_compass')
})
