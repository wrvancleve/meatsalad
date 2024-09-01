ItemEvents.rightClicked(event => {
  if (event.item == 'meatsalad:level_up_skill_token') {
    Utils.server.runCommandSilent(`/puffish_skills points add ${event.player.username} meatsalad:combat 1`)
    if (!event.player.isCreative()) {event.item.count--}
    event.cancel()
  } else if (event.item == 'meatsalad:reset_skill_token') {
    Utils.server.runCommandSilent(`/puffish_skills skills reset ${event.player.username} meatsalad:combat`)
    Utils.server.runCommandSilent(`gamestage remove ${event.player.username} free_charm_1`)
    Utils.server.runCommandSilent(`gamestage remove ${event.player.username} mage_ring_1`)
    event.player.tell(Text.gold('Your skill tree was been reset!'))
    if (!event.player.isCreative()) {event.item.count--}
    event.cancel()
  }
})
