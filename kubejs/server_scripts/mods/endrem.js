ServerEvents.recipes(event => {
  function fullRemove(id) {
    event.remove({ input: id })
    event.remove({ output: id })
  }

  fullRemove('endrem:witch_pupil')
  fullRemove('endrem:exotic_eye')
  fullRemove('endrem:cold_eye')
  fullRemove('endrem:cryptic_eye')
  fullRemove('endrem:undead_eye')
  fullRemove('endrem:undead_soul')
  fullRemove('endrem:rogue_eye')
})