let addStage = (stage) => {
  Utils.server.runCommandSilent(`gamestage add @a[team=Meat] ${stage}`)
}

let addCraftStage = (stage) => {
  addStage(stage)
  Utils.server.runCommandSilent(`tellraw @a[team=Meat] "Team Meat has unlocked the ability to craft: ${global.getReadableText(stage)}"`)
}

let addSummonStage = (stage) => {
  addStage(stage)
  Utils.server.runCommandSilent(`tellraw @a[team=Meat] "Team Meat has unlocked the ability to resummon ${global.getReadableText(stage)} at the Summoning Altar"`)
}

const GATES = [
  'gateways:basic/blaze',
  'gateways:hellish_fortress',
  'meatsalad:stronghold',
  'meatsalad:magic',
  'meatsalad:otherside',
  'meatsalad:outer_end',
  //'gateways:overworldian_nights',
]

PlayerEvents.loggedIn(event => {
  const player = event.player
  if (!player.isOnScoreboardTeam('Meat')) {
    Utils.server.runCommandSilent(`team join Meat ${player.username}`)
  }
})

PlayerEvents.inventoryChanged(event => {
  const { player, item, level } = event
  switch (item.id) {
    case 'gateways:gate_pearl':
      GATES.forEach(gateId => {
        let gateName = gateId.split(':').pop().split('/').pop()
        let gateStage = `${gateName}_gate`
        if (item.isNBTEqual(Item.of('gateways:gate_pearl', 1, { gateway: gateId }))
          && !player.stages.has(gateStage)) {
          addCraftStage(gateStage)
        }
      })
      break
    case 'minecraft:netherite_upgrade_smithing_template':
      if (!player.stages.has('netherite_upgrade')) {
        addCraftStage('netherite_upgrade')
      }
      break
    case 'allthemodium:allthemodium_upgrade_smithing_template':
      if (!player.stages.has('palladium_upgrade')) {
        addCraftStage('palladium_upgrade')
      }
      break
    case 'allthemodium:vibranium_upgrade_smithing_template':
      if (!player.stages.has('vibranium_upgrade')) {
        addCraftStage('vibranium_upgrade')
      }
      break
    case 'allthemodium:unobtainium_upgrade_smithing_template':
      if (!player.stages.has('unobtainium_upgrade')) {
        addCraftStage('unobtainium_upgrade')
      }
      break
  }
})

PlayerEvents.advancement(event => {
  let player = event.player
  let advancement = event.getAdvancement() + ''
  if (advancement.startsWith('meatsalad:stage/')) {
    let stage = advancement.split('/')[1]
    if (!player.stages.has(stage)) {
      Utils.server.runCommandSilent(`gamestage add ${player.username} ${stage}`)
    }
  } else {
    switch (advancement) {
      case 'cataclysm:kill_ender_guardian':
        addSummonStage('ender_guardian')
        break
      case 'cataclysm:kill_harbinger':
        addSummonStage('the_harbinger')
        break
      case 'cataclysm:kill_ignis':
        addSummonStage('ignis')
        break
      case 'cataclysm:kill_monstrosity':
        addSummonStage('netherite_monstrosity')
        break
      case 'cataclysm:kill_remnant':
        addSummonStage('ancient_remnant')
        break
      case 'awakened_bosses:herobrine_dead':
        addStage('herobrine')
        break
    }
  }
})
