ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    ' I ',
    ' FI',
    'I  '
  ], {
    I: '#forge:ingots/iron',
    F: 'minecraft:flint'
  }, Item.of('pipez:wrench'))
})
