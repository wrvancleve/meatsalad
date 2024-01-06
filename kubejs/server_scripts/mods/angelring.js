ServerEvents.recipes(event => {
  event.remove({ id: 'angelring:energetic_angel_ring' })
  event.remove({ id: 'angelring:leadstone_angel_ring' })
  event.remove({ id: 'angelring:hardened_angel_ring' })
  event.remove({ id: 'angelring:reinforced_angel_ring' })
  event.remove({ id: 'angelring:resonant_angel_ring' })

  global.replaceShaped(event, [
    'GDG',
    'DED',
    'GDG'
  ], {
    G: 'minecraft:ghast_tear',
    D: '#forge:storage_blocks/diamond',
    E: '#forge:elytra'
  }, 'angelring', 'diamond_ring');

  global.replaceShaped(event, [
    'IPI',
    'PDP',
    'UPU'
  ], {
    I: 'kubejs:infinity_fiber',    
    P: '#forge:storage_blocks/palladium',
    D: 'angelring:diamond_ring',
    U: Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:unobtainium"}`).strongNBT()
  }, 'angelring', 'angel_ring');
})