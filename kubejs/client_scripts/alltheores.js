JEIEvents.hideItems(event => {
  event.hide([
    'alltheores:bronze_ore_hammer',
    'alltheores:copper_ore_hammer',
    'alltheores:invar_ore_hammer',
    'alltheores:iron_ore_hammer',
    'alltheores:platinum_ore_hammer',
    /alltheores:nether_.+ore/,
    /alltheores:end_.+ore/,
    /alltheores:.+_rod/
  ])
})
