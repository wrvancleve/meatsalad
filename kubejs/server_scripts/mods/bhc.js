ServerEvents.tags('item', event => {
  event.remove('curios:heartamulet', 'bhc:heart_amulet')
  event.add('curios:necklace', 'bhc:heart_amulet')
  
  event.remove('curios:heartamulet', 'bhc:soul_heart_amulet')
  event.add('curios:necklace', 'bhc:soul_heart_amulet')
})

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'bhc:smelting/blue_heart_melted',
    'bhc:smelting/green_heart_melted',
    'bhc:smelting/red_heart_melted',
    'bhc:smelting/yellow_heart_melted',
    'bhc:blade_of_vitality',
    'bhc:blue_heart',
    'bhc:blue_heart_canister',
    'bhc:blue_heart_melted',
    'bhc:god_apple',
    'bhc:green_heart',
    'bhc:green_heart_canister',
    'bhc:green_heart_melted',
    'bhc:green_heart_melted_reversed',
    'bhc:red_heart',
    'bhc:red_heart_melted_reversed',
    'bhc:yellow_heart',
    'bhc:yellow_heart_canister',
    'bhc:yellow_heart_melted',
    'bhc:yellow_heart_melted_reversed'
  ])

  event.shapeless('bhc:blue_heart_canister', [
    'bhc:blue_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('meatsalad:blue_heart_canister')
  event.shapeless('bhc:green_heart_canister', [
    'bhc:green_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('meatsalad:green_heart_canister')
  event.shapeless('bhc:yellow_heart_canister', [
    'bhc:yellow_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('meatsalad:yellow_heart_canister')
})
