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
  const server = event.server
  const currentStages = server.persistentData.getString('stages') || ""
  for (let stage of currentStages.split(",")) {
    if (!player.stages.has(stage)) {
      addPlayerStage(player, stage)
    }
  }
})

const TEAM_STAGES = new Set([
  "the_nether",
  "netherite_upgrade",
  "blaze_gate",
  "enderman_gate",
  "slime_gate",
  "basalz_gate",
  "blitz_gate",
  "blizz_gate",
  "creeper_gate",
  "hellish_fortress_gate",
  "magic_gate",
  "magma_cube_gate",
  "otherside_gate",
  "outer_end_gate",
  "shulker_gate",
  "skeleton_gate",
  "spider_gate",
  "stronghold_gate",
  "witch_gate",
  "wither_skeleton_gate",
  "zombie_gate",
  "the_other",
  "the_end",
  "ender_guardian",
  "the_harbinger",
  "ignis",
  "maledictus",
  "netherite_monstrosity",
  "ancient_remnant",
  "uu_matter",
  "herobrine",
])

GameStageEvents.stageAdded(event => {
  const server = event.server
  const stage = event.getStage() + ''
  if (TEAM_STAGES.has(stage)) {
    const currentStages = server.persistentData.getString('stages') || ""
    const currentStageList = currentStages.split(",")
    if (!currentStageList.includes(stage)) {
      currentStageList.push(stage)
      server.persistentData.putString('stages', currentStageList.join(","))
    }
  }
})

/*
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
      Utils.server.runCommandSilent(`decstages add ${player.username} ${stage}`)
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
