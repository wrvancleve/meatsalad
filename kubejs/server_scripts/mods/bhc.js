ServerEvents.recipes(event => {
  event.remove({ id: 'bhc:blade_of_vitality' })
  event.remove({ id: 'bhc:red_heart_melted' });
  event.remove({ id: 'bhc:red_heart_melted_reversed' });
  event.remove({ id: 'bhc:green_heart_melted' });
  event.remove({ id: 'bhc:green_heart_melted_reversed' });
  event.remove({ id: 'bhc:blue_heart_melted' });
  event.remove({ id: 'bhc:yellow_heart_melted' });

  event.remove({ id: 'bhc:yellow_heart_canister' });
  event.shapeless('bhc:yellow_heart_canister', [
    'bhc:yellow_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('meatsalad:yellow_heart_canister');

  event.remove({ id: 'bhc:green_heart_canister' });
  event.shapeless('bhc:green_heart_canister', [
    'bhc:green_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('meatsalad:green_heart_canister');

  event.remove({ id: 'bhc:blue_heart_canister' });
  event.shapeless('bhc:blue_heart_canister', [
    'bhc:blue_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('meatsalad:blue_heart_canister');
});