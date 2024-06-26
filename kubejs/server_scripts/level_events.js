LevelEvents.loaded(event => {
  Utils.server.runCommandSilent('team add Meat')
  Utils.server.runCommandSilent('team modify Meat friendlyFire false')
})
