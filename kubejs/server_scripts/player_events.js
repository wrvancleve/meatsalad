let addStage = (stage) => {
  Utils.server.runCommandSilent(`gamestage add @a[team=Meat] ${stage}`)
}

let addPlayerStage = (player, stage) => {
  Utils.server.runCommandSilent(`gamestage add ${player.username} ${stage}`)
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
    player.give(Item.of(`meatsalad:${global.randomGet(['archer', 'mage', 'warrior'])}_boost`));
  }
})

const GEAR_TYPES = {
  axe: {
    group: "harvest_tool",
    parts: ["axe_head"]
  },
  excavator: {
    group: "harvest_tool",
    parts: ["excavator_head"]
  },
  hammer: {
    group: "harvest_tool",
    parts: ["hammer_head"]
  },
  mattock: {
    group: "harvest_tool",
    parts: ["mattock_head"]
  },
  paxel: {
    group: "harvest_tool",
    parts: ["paxel_head"]
  },
  pickaxe: {
    group: "harvest_tool",
    parts: ["pickaxe_head"]
  },
  saw: {
    group: "harvest_tool",
    parts: ["saw_blade"]
  },
  shears: {
    group: "harvest_tool",
    parts: ["shears_blades"]
  },
  shovel: {
    group: "harvest_tool",
    parts: ["shovel_head"]
  },
  sickle: {
    group: "harvest_tool",
    parts: ["sickle_blade"]
  },

  dagger: {
    group: "melee_weapon",
    parts: ["dagger_blade"]
  },
  katana: {
    group: "melee_weapon",
    parts: ["katana_blade"]
  },
  knife: {
    group: "melee_weapon",
    parts: ["knife_blade"]
  },
  machete: {
    group: "melee_weapon",
    parts: ["machete_blade"]
  },
  spear: {
    group: "melee_weapon",
    parts: ["spear_tip"]
  },
  sword: {
    group: "melee_weapon",
    parts: ["sword_blade"]
  },

  bow: {
    group: "ranged_weapon",
    parts: ["bow_limbs"]
  },
  crossbow: {
    group: "ranged_weapon",
    parts: ["crossbow_limbs"]
  },
  slingshot: {
    group: "ranged_weapon",
    parts: ["slingshot_limbs"]
  },

  boots: {
    group: "armor",
    parts: ["boot_plates"]
  },
  chestplate: {
    group: "armor",
    parts: ["chestplate_plates"]
  },
  helmet: {
    group: "armor",
    parts: ["helmet_plates"]
  },
  leggings: {
    group: "armor",
    parts: ["legging_plates"]
  },
}

let hasGear = (item, gearClass, gearMaterial) => {
  const itemId = item.id
  const itemNBT = item.getNbt()
  if (itemId.endsWith(gearClass)) {
    if (!itemNBT.contains('SGear_Data')) return false
    if (!(itemNBT.get('SGear_Data')).contains('Construction')) return false
    if (!(itemNBT.get('SGear_Data').get('Construction')).contains('Parts')) return false
    let gearTypeInfo = GEAR_TYPES[gearClass]
    let itemGearParts = itemNBT.get('SGear_Data').get('Construction').get('Parts')
    for (let itemGearPart of itemGearParts) {
      let itemGearPartId = itemGearPart['ID'].split(":").pop()
      if (gearTypeInfo.parts.includes(itemGearPartId)) {
        let itemGearMaterials = itemGearPart['Item']['tag']['Materials']
        for (let itemGearMaterial of itemGearMaterials) {
          let itemGearMaterialId = itemGearMaterial['ID'].split(":").pop()
          if (itemGearMaterialId == gearMaterial) {
            return true
          }
        }
      }
    }
  }
  return false
}

PlayerEvents.tick(event => {
  const player = event.player

  /*
  {
        "timeout": 10,
        "helditem": "silentgear:pickaxe{Damage:0,SGear_Data:{Construction:{Parts:[{ID:\"silentgear:pickaxe_head\",Item:{Count:1b,id:\"silentgear:pickaxe_head\",tag:{Damage:0,Materials:[{ID:\"meatsalad:adamantite\"}]}}}]}}}",
        "gamestage": "adamantite",
        "potion": "minecraft:slowness,10,255",
        "command": "title @s actionbar {\"text\":\"You struggle to wield this item!\",\"bold\":true,\"color\":\"red\"}"
    }
  */

  const currentHasLockedGearEquipped = player.persistentData.getBoolean("has_locked_gear_equipped") || false
  if (!currentHasLockedGearEquipped && player.age % 5 != 0) return
  const { mainHandItem, offHandItem, headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = player
  let newHasLockedGearEquipped = false
  if (mainHandItem) {
    if (hasGear(mainHandItem, 'pickaxe', 'adamantite')) {
      if (!player.stages.has('adamantite_harvest_tool')) {
        newHasLockedGearEquipped = true
      }
    }
    /*
    if (hasGear(mainHandItem, 'pickaxe', 'mythril')) {
      console.log(`Player is holding mythril pickaxe`)
    }
    if (hasGear(mainHandItem, 'sword', 'adamantite')) {
      console.log(`Player is holding adamantite sword`)
    }
    */
  }
  if (newHasLockedGearEquipped) {
    player.potionEffects.add('minecraft:slowness', 10 * 20, 255, false, true)
    player.potionEffects.add('minecraft:blindness', 10 * 20, 255, false, true)
    player.modifyAttribute('minecraft:generic.attack_damage', 'locked_gear_equipped', -1, 'multiply_total')
    player.modifyAttribute('minecraft:generic.attack_speed', 'locked_gear_equipped', -1, 'multiply_total')
    player.modifyAttribute('attributeslib:mining_speed', 'locked_gear_equipped', -1, 'multiply_total')
    player.persistentData.putBoolean("has_locked_gear_equipped", true)
    Utils.server.runCommandSilent(`title ${player.username} actionbar {"text":"You struggle to wield this item!","bold":true,"color":"red"}`)
  } else if (currentHasLockedGearEquipped) {
    player.removeEffect('minecraft:slowness')
    player.removeEffect('minecraft:blindness')
    player.removeAttribute('minecraft:generic.attack_damage', 'locked_gear_equipped')
    player.removeAttribute('minecraft:generic.attack_speed', 'locked_gear_equipped')
    player.removeAttribute('attributeslib:mining_speed', 'locked_gear_equipped')
    player.persistentData.putBoolean("has_locked_gear_equipped", false)
    Utils.server.runCommandSilent(`title ${player.username} actionbar ""`)
  }
})

const BRACELET_STAGES = [
]
const CHARM_STAGES = [
  'free_charm_1'
]
const RING_STAGES = [
  'mage_ring_1'
]

const updateCuriosSlots = (player) => {
  let braceletSlots = 1
  BRACELET_STAGES.forEach(braceletStage => {
    if (player.stages.has(braceletStage)) {
      braceletSlots += 1
    }
  })
  Utils.server.runCommandSilent(`curios set bracelet ${player.username} ${braceletSlots}`)

  let charmSlots = 1
  CHARM_STAGES.forEach(charmStage => {
    if (player.stages.has(charmStage)) {
      charmSlots += 1
    }
  })
  Utils.server.runCommandSilent(`curios set charm ${player.username} ${charmSlots}`)

  let ringSlots = 1
  RING_STAGES.forEach(ringStage => {
    if (player.stages.has(ringStage)) {
      ringSlots += 1
    }
  })
  Utils.server.runCommandSilent(`curios set ring ${player.username} ${ringSlots}`)
}

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
