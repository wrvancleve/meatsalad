ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    "GWG",
    "PPP"
  ], {
    G: '#forge:nuggets/gold',
    W: 'waystones:warp_dust',
    P: '#forge:paper'
  }, 'waystones', 'return_scroll');

  global.replaceShaped(event, [
    "GWG",
    "GEG",
    "PPP"
  ], {
    G: '#forge:nuggets/gold',
    W: 'waystones:warp_dust',
    E: 'kubejs:infused_ender_pearl',
    P: '#forge:paper'
  }, 'waystones', 'bound_scroll');

  global.replaceShaped(event, [
    "WWW",
    "GEG",
    "PPP"
  ], {
    W: 'waystones:warp_dust',
    G: '#forge:nuggets/gold',
    E: 'kubejs:infused_ender_pearl',
    P: '#forge:paper'
  }, 'waystones', 'warp_scroll');

  global.replaceShaped(event, [
    "SWS",
    "WEW",
    "SWS"
  ], {
    S: 'minecraft:stone_bricks',
    W: 'waystones:warp_dust',
    E: 'kubejs:infused_ender_pearl'
  }, 'waystones', 'warp_plate');
  
  global.replaceShaped(event, [
    "WEW",
    "EDE",
    "WEW"
  ], {
    W: 'waystones:warp_dust',
    E: '#balm:emeralds',
    D: 'kubejs:infused_dark_matter'
  }, 'waystones', 'warp_stone');

  event.remove({ id: 'waystones:warp_dust' });

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          { tag: 'forge:ender_pearls' },
          { tag: 'forge:dusts/ender_pearl' },
        ],
        count: 1
      },
      {
        value: [
          { tag: 'forge:gems/amethyst' },
          { tag: 'forge:dusts/amethyst' },
        ],
        count: 1
      }
    ],
    result: [Item.of('waystones:warp_dust')],
    energy: 8000
  }).id('meatsalad:smelter/warp_dust');
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      {tag: 'forge:ender_pearls'},
      {tag: 'forge:gems/amethyst'}
    ],
    energy: 8000,
    result: {
      item: 'waystones:warp_dust'
    }
  }).id('meatsalad:energizing/warp_dust');
})