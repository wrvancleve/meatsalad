ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    'ERE',
    'RIR',
    'NNN'
  ], {
    E: 'minecraft:ender_eye',
    R: 'ae2:wireless_booster',
    I: 'kubejs:infinity_fiber',
    N: '#forge:ingots/netherite'
  }, 'aeinfinitybooster', 'infinity_card');
})