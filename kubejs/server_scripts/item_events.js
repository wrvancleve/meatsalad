ItemEvents.rightClicked(event => {
  const player = event.player
  switch (event.item) {
    case 'meatsalad:mastery_essence':
      Utils.server.runCommandSilent(`puffish_skills points add ${player.username} meatsalad:combat 1`)
      if (!player.isCreative()) {event.item.count--}
      event.cancel()
      break
    case 'meatsalad:rebirth_essence':
      Utils.server.runCommandSilent(`puffish_skills skills reset ${player.username} meatsalad:combat`)
      player.tell(Text.gold('Your skill tree has been reset!'))
      if (!player.isCreative()) {event.item.count--}
      event.cancel()
      break
  }
})
