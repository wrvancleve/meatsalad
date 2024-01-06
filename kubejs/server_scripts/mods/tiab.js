ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    'UUU',
    'DCD',
    'LBL'
  ], {
    U: '#forge:ingots/unobtainium',
    D: 'minecraft:diamond',
    C: 'minecraft:clock',
    L: 'minecraft:lapis_lazuli',
    B: 'minecraft:experience_bottle'
  }, 'tiab', 'time_in_a_bottle');
})