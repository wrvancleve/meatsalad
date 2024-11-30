let addStage = (stage) => {
  Utils.server.runCommandSilent(`gamestage add @a[team=Meat] ${stage}`)
}

let addPlayerStage = (player, stage) => {
  Utils.server.runCommandSilent(`gamestage add ${player.username} ${stage}`)
}

let addCraftStage = (stage) => {
  addStage(stage)
  Utils.server.runCommandSilent(`tellraw @a[team=Meat] "§6Team Meat has unlocked the ability to craft: ${global.getReadableText(stage)}"`)
}

let addSummonStage = (stage) => {
  addStage(stage)
  Utils.server.runCommandSilent(`tellraw @a[team=Meat] "§6Team Meat has unlocked the ability to resummon ${global.getReadableText(stage)} at the Summoning Altar"`)
}

PlayerEvents.loggedIn(event => {
  const player = event.player
  if (!player.isOnScoreboardTeam('Meat')) {
    Utils.server.runCommandSilent(`team join Meat ${player.username}`)
  }
})

/*
GameStageEvents.stageAdded(event => {
  const player = event.player
  const stage = event.getStage()
  updateCuriosSlots(player)
  switch (stage) {
    case "lucky_ring":
      Utils.server.runCommandSilent(`advancement grant ${player.username} only meatsalad:stage/lucky_ring`)
      break
  }
})

GameStageEvents.stageRemoved(event => {
  const player = event.player
  const stage = event.getStage()
  updateCuriosSlots(player)
  switch (stage) {
    case "lucky_ring":
      Utils.server.runCommandSilent(`advancement revoke ${player.username} only meatsalad:stage/lucky_ring`)
      break
  }
})
*/

PlayerEvents.inventoryChanged(event => {
  const { player, item, level } = event
  switch (item.id) {
    case 'gateways:gate_pearl':
      let gateId = item.nbt.gateway
      if (gateId in GATES) {
        let gateName = gateId.split(':').pop().split('/').pop()
        let gateStage = `${gateName}_gate`
        if (!player.stages.has(gateStage)) {
          addCraftStage(gateStage)
        }
      }
      break
    case 'minecraft:netherite_upgrade_smithing_template':
      if (!player.stages.has('netherite_upgrade')) {
        addCraftStage('netherite_upgrade')
      }
      break
    case 'meatsalad:uu_matter':
      addStage('uu_matter')
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
      case 'cataclysm:kill_maledictus':
        addSummonStage('maledictus')
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
