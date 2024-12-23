const addPlayerStage = (player, stage) => {
  Utils.server.runCommandSilent(`gamestage add ${player.username} ${stage}`)
  Utils.server.runCommandSilent(`decstages add ${player.username} ${stage}`)
}

const getPersistedStageList = (server) => {
  const persistedStagesString = server.persistentData.getString('stages') || ""
  const persistedStages = []
  for (let persistedStage of persistedStagesString.split(",")) {
    if (persistedStage) {
      persistedStages.push(persistedStage + "")
    }
  }
  return persistedStages
}

const addTeamStage = (server, stage) => {
  const currentStages = getPersistedStageList(server)
  if (currentStages.includes(stage)) return false
  Utils.server.runCommandSilent(`gamestage add @a[team=Meat] ${stage}`)
  Utils.server.runCommandSilent(`decstages add @a[team=Meat] ${stage}`)
  currentStages.push(stage)
  server.persistentData.putString('stages', currentStages.join(","))
  return true
}

const addCraftStage = (server, stage) => {
  if (addTeamStage(server, stage)) {
    Utils.server.runCommandSilent(`tellraw @a[team=Meat] "§6Team Meat has unlocked the ability to craft: ${global.getReadableText(stage)}"`)
  }
}

const addSummonStage = (server, stage) => {
  if (addTeamStage(server, stage)) {
    Utils.server.runCommandSilent(`tellraw @a[team=Meat] "§6Team Meat has unlocked the ability to resummon ${global.getReadableText(stage)} at the Summoning Altar"`)
  }
}

PlayerEvents.loggedIn(event => {
  const player = event.player
  if (!player.isOnScoreboardTeam('Meat')) {
    Utils.server.runCommandSilent(`team join Meat ${player.username}`)
  }
  for (let stage of getPersistedStageList(event.server)) {
    if (!player.stages.has(stage)) {
      addPlayerStage(player, stage)
    }
  }
})

const WORLD_STAGES = new Set([
  "the_nether",
  "the_other",
  "the_end",
])

GameStageEvents.stageAdded(event => {
  const player = event.player
  const stage = event.getStage() + ''
  if (WORLD_STAGES.has(stage)) {
    Utils.server.runCommandSilent(`advancement grant ${player.username} only meatsalad:stage/${stage}`)
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
  const { player, item, server } = event
  switch (item.id) {
    case 'gateways:gate_pearl':
      const gateId = item.nbt.gateway
      if (gateId in GATES) {
        const gateName = gateId.split(':').pop().split('/').pop()
        const gateStage = `${gateName}_gate`
        addCraftStage(server, gateStage)
      }
      break
    case 'minecraft:netherite_upgrade_smithing_template':
      addCraftStage(server, 'netherite_upgrade')
      break
    case 'meatsalad:uu_matter':
      addTeamStage(server, 'uu_matter')
      break
  }
})

PlayerEvents.advancement(event => {
  const player = event.player
  const server = event.server
  const advancement = event.getAdvancement() + ''
  if (advancement.startsWith('meatsalad:stage/')) {
    const stage = advancement.split('/')[1]
    addTeamStage(server, stage)
  } else {
    switch (advancement) {
      case 'cataclysm:kill_ender_guardian':
        addSummonStage(server, 'ender_guardian')
        break
      case 'cataclysm:kill_harbinger':
        addSummonStage(server, 'the_harbinger')
        break
      case 'cataclysm:kill_ignis':
        addSummonStage(server, 'ignis')
        break
      case 'cataclysm:kill_maledictus':
        addSummonStage(server, 'maledictus')
        break
      case 'cataclysm:kill_monstrosity':
        addSummonStage(server, 'netherite_monstrosity')
        break
      case 'cataclysm:kill_remnant':
        addSummonStage(server, 'ancient_remnant')
        break
      case 'awakened_bosses:herobrine_dead':
        addTeamStage(server, 'herobrine')
        break
    }
  }
})
