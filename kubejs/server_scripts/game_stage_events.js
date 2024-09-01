GameStageEvents.stageAdded(event => {
  const player = event.player
  const stage = event.getStage()
  switch (stage) {
    case 'free_charm_1':
      Utils.server.runCommandSilent(`curios add charm ${player.username} 1`)
      event.player.tell(Text.gold('You have gained one additional charm slot!'))
      break
    case 'mage_ring_1':
      Utils.server.runCommandSilent(`curios add ring ${player.username} 1`)
      event.player.tell(Text.gold('You have gained one additional ring slot!'))
      break
  }
})

GameStageEvents.stageRemoved(event => {
  const player = event.player
  const stage = event.getStage()
  switch (stage) {
    case 'free_charm_1':
      Utils.server.runCommandSilent(`curios remove charm ${player.username} 1`)
      break
    case 'mage_ring_1':
      Utils.server.runCommandSilent(`curios remove ring ${player.username} 1`)
      break
  }
})
