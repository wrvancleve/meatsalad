ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    'NAN',
    'ACA',
    'NAN'
  ], {
    A: '#forge:ingots/allthemodium',
    N: '#forge:ingots/netherite',
    C: 'naturescompass:naturescompass',
  }, Item.of('explorerscompass:explorerscompass'), 'explorers_compass')
})
