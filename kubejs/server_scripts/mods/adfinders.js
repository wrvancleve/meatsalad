ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    'rLr',
    'dCd',
    'RdR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    d: '#forge:gems/diamond',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, 'adfinders', 'gem_finder')

  global.replaceShaped(event, [
    'rLr',
    'gCg',
    'RgR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    g: '#forge:ingots/gold',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, 'adfinders', 'metal_finder')

  global.replaceShaped(event, [
    'rLr',
    'iCi',
    'RiR'
  ], {
    r: 'minecraft:repeater',
    L: 'minecraft:lodestone',
    i: '#forge:ingots/iron',
    C: 'minecraft:compass',
    R: 'minecraft:comparator'
  }, 'adfinders', 'mineral_finder')
})