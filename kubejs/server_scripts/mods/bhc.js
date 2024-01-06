ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({id: id});
    })
  }

  removeRecipes([
    'bhc:blade_of_vitality',
    'bhc:red_heart',
    'bhc:red_heart_melted',
    'bhc:smelting/red_heart_melted',
    'bhc:red_heart_melted_reversed',
    'bhc:green_heart',
    'bhc:green_heart_melted',
    'bhc:smelting/green_heart_melted',
    'bhc:green_heart_melted_reversed',
    'bhc:blue_heart',
    'bhc:blue_heart_melted',
    'bhc:smelting/blue_heart_melted',
    'bhc:yellow_heart',
    'bhc:yellow_heart_melted',
    'bhc:smelting/yellow_heart_melted',
    'bhc:god_apple'
  ])

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