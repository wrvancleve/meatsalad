ServerEvents.recipes(event => {
  event.remove({ id: 'angelring:diamond_ring' })
  event.remove({ id: 'angelring:energetic_angel_ring' })
  event.remove({ id: 'angelring:leadstone_angel_ring' })
  event.remove({ id: 'angelring:hardened_angel_ring' })
  event.remove({ id: 'angelring:reinforced_angel_ring' })
  event.remove({ id: 'angelring:resonant_angel_ring' })

  event.remove({ id: 'angelring:angel_ring' })
  event.shaped('angelring:angel_ring', [
    'FIF',
    'GDG',
    'NGN'
  ], {
    F: 'minecraft:feather',
    I: 'kubejs:infinity_fabric',
    G: '#forge:storage_blocks/gold',
    D: 'angelring:diamond_ring',
    N: 'minecraft:nether_star',
  })
})