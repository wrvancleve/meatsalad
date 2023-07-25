ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    'iii',
    'isi',
    'iii'
  ], {
    i: 'kubejs:infinity_fiber',
    s: 'minecraft:stick'
  }, 'dankstorage', '6_to_7');

  global.replaceShaped(event, [
    'iii',
    'idi',
    'iii'
  ], {
    i: 'kubejs:infinity_fiber',
    d: 'dankstorage:dank_6'
  }, 'dankstorage', 'dank_7', '7');
})