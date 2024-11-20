const boostClass = (player, className) => {
  if (!player.stages.has(className)) {
    Utils.server.runCommandSilent(`puffish_skills category unlock ${player.username} meatsalad:${className}`)
    Utils.server.runCommandSilent(`gamestage add ${player.username} ${className}`)
    player.tell(Text.gold(`You have unlocked the ${global.getReadableText(className)} skill tree!`))
  } else {
    Utils.server.runCommandSilent(`puffish_skills points add ${player.username} meatsalad:${className} 1`)
  }
}

ItemEvents.rightClicked(event => {
  const player = event.player
  switch (event.item) {
    case 'meatsalad:archer_boost':
      if (player.shiftKeyDown) {
        Utils.server.runCommandSilent(`puffish_skills points add ${player.username} meatsalad:combat 1`)
        if (!player.isCreative()) {event.item.count--}
      } else {
        player.mainHandItem.count = 0
        player.giveInHand(Item.of('meatsalad:mage_boost'))
      }
      event.cancel()
      break
    case 'meatsalad:mage_boost':
      if (player.shiftKeyDown) {
        boostClass(player, 'mage')
        if (!player.isCreative()) {event.item.count--}
      } else {
        player.mainHandItem.count = 0
        player.giveInHand(Item.of('meatsalad:warrior_boost'))
      }
      event.cancel()
      break
    case 'meatsalad:warrior_boost':
      if (player.shiftKeyDown) {
        Utils.server.runCommandSilent(`puffish_skills points add ${player.username} meatsalad:combat 1`)
        if (!player.isCreative()) {event.item.count--}
      } else {
        player.mainHandItem.count = 0
        player.giveInHand(Item.of('meatsalad:archer_boost'))
      }
      event.cancel()
      break
    case 'meatsalad:reset_skill_token':
      Utils.server.runCommandSilent(`puffish_skills skills reset ${player.username} meatsalad:combat`)
      player.tell(Text.gold('Your skill tree was been reset!'))
      if (!player.isCreative()) {event.item.count--}
      event.cancel()
      break
  }
})
