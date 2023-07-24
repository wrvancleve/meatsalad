ServerEvents.recipes(event => {
  event.remove({ input: '#alltheores:ore_hammers' })
  event.remove({ id: 'alltheores:bronze_ore_hammer' })
  event.remove({ id: 'alltheores:copper_ore_hammer' })
  event.remove({ id: 'alltheores:invar_ore_hammer' })
  event.remove({ id: 'alltheores:iron_ore_hammer' })
  event.remove({ id: 'alltheores:platinum_ore_hammer' })
})