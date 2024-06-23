LevelEvents.loaded(event => {
  event.level.runCommandSilent('team add Meat')
  event.level.runCommandSilent('team modify Meat friendlyFire false')
})
