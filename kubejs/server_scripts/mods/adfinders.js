ServerEvents.recipes(event => {
  event.remove({ id: 'adfinders:gem_finder' })
  event.remove({ id: 'adfinders:metal_finder' })
  event.remove({ id: 'adfinders:mineral_finder' })
})