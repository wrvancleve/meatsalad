ServerEvents.recipes(event => {
    function fullRemove(id) {
      event.remove({ input: id })
      event.remove({ output: id })
    }

    fullRemove('upgrade_aquatic:elder_eye')
})