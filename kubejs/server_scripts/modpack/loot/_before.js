//priority: 90

const getEnchantStageCondition = (enchantStageFlags) => {
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

const shelfStageCondition = getEnchantStageCondition({hellshelf: false})
const hellshelfStageCondition = getEnchantStageCondition({hellshelf: true, deepshelf: false, endshelf: false})
const deepshelfStageCondition = getEnchantStageCondition({deepshelf: true})
const endshelfStageCondition = getEnchantStageCondition({endshelf: true})

const EnchantLevels = {
  '10': { value: 10, conditions: [shelfStageCondition] },
  '20': { value: 20, conditions: [shelfStageCondition] },
  '30': { value: 30, conditions: [shelfStageCondition] },
  '40': { value: 40, conditions: [hellshelfStageCondition] },
  '50': { value: 50, conditions: [hellshelfStageCondition] },
  '60': { value: 60, conditions: [deepshelfStageCondition] },
  '70': { value: 70, conditions: [deepshelfStageCondition] },
  '80': { value: 80, conditions: [endshelfStageCondition] },
}

const getEnchantLevels = (min, max, useFirstCondition) => {
  useFirstCondition = useFirstCondition ?? true
  const enchantLevels = []
  for (let i = min; i <= max; i += 10) {
    if (i == min && !useFirstCondition) {
      enchantLevels.push({ value: i })
    } else {
      enchantLevels.push(EnchantLevels[`${i}`])
    }
  }
  return enchantLevels
}
