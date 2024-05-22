ServerEvents.tags('item', event => {
  event.remove('curios:angelring', 'angelring:angel_ring')
  event.add('curios:ring', 'angelring:angel_ring')
})

ServerEvents.recipes(event => {
  global.removeRecipes(event, [
    'angelring:energetic_angel_ring',
    'angelring:leadstone_angel_ring',
    'angelring:hardened_angel_ring',
    'angelring:reinforced_angel_ring',
    'angelring:resonant_angel_ring',
  ])

  global.replaceShaped(event, [
    'IPI',
    'PDP',
    'UPU'
  ], {
    I: 'meatsalad:infinity_fiber',
    P: '#forge:storage_blocks/allthemodium',
    D: 'angelring:diamond_ring',
    U: Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:unobtainium"}`).strongNBT()
  }, Item.of('angelring:angel_ring'))
})
