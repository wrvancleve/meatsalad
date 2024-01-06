ServerEvents.recipes(event => {
  event.remove({ id: 'explorerscompass:explorers_compass' })
  event.shaped('explorerscompass:explorerscompass', [
    'NAN',
    'ACA',
    'NAN'
  ], {
    A: '#forge:ingots/palladium',
    N: '#forge:ingots/netherite',
    C: 'naturescompass:naturescompass',
  }).id('meatsalad:explorerscompass');
})