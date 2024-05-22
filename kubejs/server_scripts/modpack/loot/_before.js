global['getEnchantStageCondition'] = (enchantStageFlags) => {
  let hasHellshelfStage
  let hasDeepshelfStage
  let hasEndshelfStage
  if (typeof enchantStageFlags == "boolean") {
    hasHellshelfStage = enchantStageFlags
    hasDeepshelfStage = enchantStageFlags
    hasEndshelfStage = enchantStageFlags
  } else {
    hasHellshelfStage = enchantStageFlags.hellshelf
    hasDeepshelfStage = enchantStageFlags.deepshelf
    hasEndshelfStage = enchantStageFlags.endshelf
  }

  const stageAdvancements = {}
  if (hasHellshelfStage != null) {
    stageAdvancements["meatsalad:stage/hellshelf"] = hasHellshelfStage
  }
  if (hasDeepshelfStage != null) {
    stageAdvancements["meatsalad:stage/deepshelf"] = hasDeepshelfStage
  }
  if (hasEndshelfStage != null) {
    stageAdvancements["meatsalad:stage/endshelf"] = hasEndshelfStage
  }

  return {
    condition: "minecraft:entity_properties",
    entity: "this",
    predicate: {
      type_specific: {
        type: "player",
        advancements: stageAdvancements
      }
    }
  }
}

global['shelfStageCondition'] = global.getEnchantStageCondition(false)
global['hellshelfStageCondition'] = global.getEnchantStageCondition({hellshelf: true, deepshelf: false, endshelf: false})
global['deepshelfStageCondition'] = global.getEnchantStageCondition({deepshelf: true})
global['endshelfStageCondition'] = global.getEnchantStageCondition({endshelf: true})

global['EnchantLevels'] = {
  '10': { value: 10, conditions: [global.shelfStageCondition] },
  '20': { value: 20, conditions: [global.shelfStageCondition] },
  '30': { value: 30, conditions: [global.shelfStageCondition] },
  '40': { value: 40, conditions: [global.hellshelfStageCondition] },
  '50': { value: 50, conditions: [global.hellshelfStageCondition] },
  '60': { value: 60, conditions: [global.deepshelfStageCondition] },
  '70': { value: 70, conditions: [global.deepshelfStageCondition] },
  '80': { value: 80, conditions: [global.endshelfStageCondition] },
}
