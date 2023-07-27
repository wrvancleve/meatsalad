ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:diamond_gear' })
  event.remove({ id: 'industrialforegoing:gold_gear' })
  event.remove({ id: 'industrialforegoing:iron_gear' })

  global.replaceShaped(event, [
    'PNP',
    'IMI',
    'VRV'
  ], {
    P: '#forge:plastic',
    N: 'minecraft:netherite_pickaxe',
    I: '#forge:ores/iron',
    M: '#industrialforegoing:machine_frame/advanced',
    V: '#forge:gears/vibranium',
    R: '#forge:dusts/redstone'
  }, 'industrialforegoing', 'ore_laser_base');
})