ServerEvents.recipes(event => {
    function fullRemove(id) {
      event.remove({ input: id })
      event.remove({ output: id })
    }

    fullRemove('progressivebosses:nether_star_shard')
  })