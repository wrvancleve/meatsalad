ServerEvents.tags('block', event => {
  event.removeAll('forge:ore_bearing_ground/netherrack')
  event.removeAll('forge:ore_bearing_ground/ancient_stone')
  event.removeAll('forge:ore_bearing_ground/end_stone')
  event.removeAll('forge:ores_in_ground/netherrack')
  event.removeAll('forge:ores_in_ground/ancient_stone')
  event.removeAll('forge:ores_in_ground/end_stone')
})

ServerEvents.tags('item', event => {
  event.removeAll('forge:ore_bearing_ground/netherrack')
  event.removeAll('forge:ore_bearing_ground/ancient_stone')
  event.removeAll('forge:ore_bearing_ground/end_stone')
  event.removeAll('forge:ores_in_ground/netherrack')
  event.removeAll('forge:ores_in_ground/ancient_stone')
  event.removeAll('forge:ores_in_ground/end_stone')
})

ServerEvents.recipes(event => {
  event.remove({ input: '#alltheores:ore_hammers' })
})
