ServerEvents.recipes(event => {
  replaceShaped(event, [
    'rLr',
    'dCd',
    'RdR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    d: '#forge:gems/diamond',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, Item.of('adfinders:gem_finder'))

  replaceShaped(event, [
    'rLr',
    'gCg',
    'RgR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    g: '#forge:ingots/gold',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, Item.of('adfinders:metal_finder'))

  replaceShaped(event, [
    'rLr',
    'iCi',
    'RiR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    i: '#forge:ingots/iron',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, Item.of('adfinders:mineral_finder'))
})
