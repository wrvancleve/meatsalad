ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    ' IU',
    ' SI',
    'S  '
  ], {
    I: 'kubejs:infinity_fiber',
    U: '#forge:ingots/unobtainium',
    S: '#balm:wooden_rods'
  }, 'constructionwand', 'infinity_wand');
})
