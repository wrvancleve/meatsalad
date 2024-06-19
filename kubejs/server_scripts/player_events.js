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
  switch (item.id) {
    case 'gateways:gate_pearl':
      GATES.forEach(gateId => {
        let gateName = gateId.split(':').pop().split('/').pop()
        let gateStage = `${gateName}_gate`
        if (item.isNBTEqual(Item.of('gateways:gate_pearl', 1, { gateway: gateId }))
          && !player.stages.has(gateStage)) {
          addStage(player, gateStage)
        }
      })
      break
    case 'minecraft:netherite_upgrade_smithing_template':
      if (!player.stages.has('netherite_upgrade')) {
        addStage(player, 'netherite_upgrade')
      }
      break
    case 'allthemodium:allthemodium_upgrade_smithing_template':
      if (!player.stages.has('allthemodium_upgrade')) {
        addStage(player, 'allthemodium_upgrade')
      }
      break
    case 'allthemodium:vibranium_upgrade_smithing_template':
      if (!player.stages.has('vibranium_upgrade')) {
        addStage(player, 'vibranium_upgrade')
      }
      break
    case 'allthemodium:unobtainium_upgrade_smithing_template':
      if (!player.stages.has('unobtainium_upgrade')) {
        addStage(player, 'unobtainium_upgrade')
      }
      break
  }
})
