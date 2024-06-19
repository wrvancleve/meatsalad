let addStage = (player, stage) => {
  Utils.server.runCommandSilent(`gamestage add ${player.username} ${stage}`)
  player.tell('You have unlocked the ability to craft: ' + global.getReadableText(stage))
}

const GATES = [
  'gateways:hellish_fortress',
  'meatsalad:stronghold',
  'meatsalad:magic',
  'meatsalad:otherside',
  'meatsalad:outer_end',
  //'gateways:overworldian_nights',
]

PlayerEvents.inventoryChanged((event) => {
  const { player, item, level } = event
  if (item.id == 'gateways:gate_pearl') {
    GATES.forEach(gateId => {
      let gateName = gateId.split(':').pop().split('/').pop()
      let gateStage = `${gateName}_gate`
      if (item.isNBTEqual(Item.of('gateways:gate_pearl', 1, { gateway: gateId }))
        && !player.stages.has(gateStage)) {
        addStage(player, gateStage)
      }
    })
  }
})
