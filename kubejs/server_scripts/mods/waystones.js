ServerEvents.recipes(event => {
  replaceShaped(event, [
    "GWG",
    "PPP"
  ], {
    G: '#forge:nuggets/gold',
    W: 'waystones:warp_dust',
    P: '#forge:paper'
  }, Item.of('waystones:return_scroll'))

  replaceShaped(event, [
    "GWG",
    "GEG",
    "PPP"
  ], {
    G: '#forge:nuggets/gold',
    W: 'waystones:warp_dust',
    E: 'meatsalad:infused_ender_pearl',
    P: '#forge:paper'
  }, Item.of('waystones:bound_scroll'))

  replaceShaped(event, [
    "WWW",
    "GEG",
    "PPP"
  ], {
    W: 'waystones:warp_dust',
    G: '#forge:nuggets/gold',
    E: 'meatsalad:infused_ender_pearl',
    P: '#forge:paper'
  }, Item.of('waystones:warp_scroll'))

  replaceShaped(event, [
    "SWS",
    "WEW",
    "SWS"
  ], {
    S: 'minecraft:stone_bricks',
    W: 'waystones:warp_dust',
    E: 'meatsalad:infused_ender_pearl'
  }, Item.of('waystones:warp_plate'))

  replaceShaped(event, [
    "WEW",
    "EDE",
    "WEW"
  ], {
    W: 'waystones:warp_dust',
    E: '#balm:emeralds',
    D: 'meatsalad:infused_dark_matter'
  }, Item.of('waystones:warp_stone'))

  event.remove({ id: 'waystones:warp_dust' })

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
  }).id('meatsalad:smelter/warp_dust')
  energize(event,
    [
      Ingredient.of('#forge:ender_pearls'),
      Ingredient.of('#forge:gems/amethyst')
    ],
    8000,
    Item.of('waystones:warp_dust')
  )
})
