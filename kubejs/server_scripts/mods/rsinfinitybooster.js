ServerEvents.recipes(event => {
  replaceShaped(event, [
    'BIB',
    'IEI',
    'BIB'
  ], {
    B: 'rsinfinitybooster:infinity_card',
    I: 'meatsalad:infinity_fiber',
    E: 'minecraft:ender_eye'
  }, Item.of('rsinfinitybooster:dimension_card'))
})
