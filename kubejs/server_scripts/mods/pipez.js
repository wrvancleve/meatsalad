ServerEvents.recipes(event => {
  replaceShaped(event, [
    ' I ',
    ' FI',
    'I  '
  ], {
    I: '#forge:ingots/iron',
    F: 'minecraft:flint'
  }, Item.of('pipez:wrench'))
})
