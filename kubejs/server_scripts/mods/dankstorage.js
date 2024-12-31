ServerEvents.recipes(event => {
  replaceShaped(event, [
    'iii',
    'isi',
    'iii'
  ], {
    i: 'meatsalad:infinity_fiber',
    s: 'minecraft:stick'
  }, Item.of('dankstorage:6_to_7'))

  replaceShaped(event, [
    'iii',
    'idi',
    'iii'
  ], {
    i: 'meatsalad:infinity_fiber',
    d: 'dankstorage:dank_6'
  }, Item.of('dankstorage:dank_7'))
})
