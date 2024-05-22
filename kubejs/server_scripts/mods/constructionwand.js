ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    ' IU',
    ' SI',
    'S  '
  ], {
    I: 'meatsalad:infinity_fiber',
    U: '#forge:ingots/unobtainium',
    S: '#balm:wooden_rods'
  }, Item.of('constructionwand:infinity_wand'))
})
