//priority: 400

global['removeRecipes'] = (event, ids) => {
  ids.forEach(id => {
    event.remove({ id: id })
  })
}

global['replaceShaped'] = (event, pattern, key, result, oldRecipeId) => {
  let [mod, itemId] = result.getId().split(':')
  if (oldRecipeId == null) oldRecipeId = itemId
  event.remove({ id: `${mod}:${oldRecipeId || itemId}` })
  event.shaped(result, pattern, key).id(`meatsalad:${itemId}`)
}

const popProp = (object, prop, defaultValue) => {
  if (object == null) return defaultValue
  const propValue = object[prop] ?? defaultValue
  delete object[prop]
  return propValue
}

global['addStack'] = (pool, stack, stackProps) => {
  if (stack.count == null) stack.count = 1
  const min = popProp(stack, 'min', 1)
  const max = popProp(stack, 'max', 1)
  const weight = popProp(stackProps, 'weight', 1.0)
  const quality = popProp(stackProps, 'quality', 0.0)
  const poolEntry = {
    type: 'placebo:stack_entry',
    weight: weight,
    quality: quality,
    min: min,
    max: max,
    stack: stack
  }
  for (let stackProp in stackProps) { 
    poolEntry[stackProp] = stackProps[stackProp]
  }
  pool.addEntry(poolEntry)
}

global['addStackLootPool'] = (lootBuilder, stack, stackProps) => {
  lootBuilder.addPool(pool => {
    global.addStack(pool, stack, stackProps)
    if (stackProps != null && stackProps.weight != null) pool.addEmpty(100 - stackProps.weight)
  })
}

global['addDynamic'] = (pool, constants, dimensions) => {
  dimensions.forEach(dimension => {
    let poolEntry = {}
    for (let constantProp in constants) { 
      poolEntry[constantProp] = constants[constantProp]
    }
    for (let dimensionProp in dimension) { 
      poolEntry[dimensionProp] = dimension[dimensionProp]
    }
    if (poolEntry.weight == null) poolEntry.weight = 1.0
    if (poolEntry.quality == null) poolEntry.quality = 0.0
    if (poolEntry.type === 'placebo:stack_entry' && poolEntry.stack.count == null) {
      poolEntry.stack.count = 1
    }
    pool.addEntry(poolEntry)
  })
}

const readTable = (table, defaultWeight, defaultQuality) => {
  if (!(table instanceof Object)) {
    if (defaultWeight) {
      return [table, {weight: defaultWeight, quality: defaultQuality}]
    } else {
      return [table, {}]
    }
  }

  const tableName = table.type != null ? `meatsalad:chests/${table.type}/${table.name}` : table.name
  delete table.type
  delete table.name
  if (defaultWeight != null && table.weight === undefined) {
    table.weight = defaultWeight
    if (defaultQuality != null && table.quality === undefined) table.quality = defaultQuality
  }
  return [tableName, table]
}

global['addLootTable'] = (pool, table) => {
  const [tableName, tableProps] = readTable(table)
  const lootTableEntry = {
    type: 'minecraft:loot_table',
    name: tableName
  }
  for (let tableProp in tableProps) {
    lootTableEntry[tableProp] = tableProps[tableProp]
  }
  if (lootTableEntry.weight == null) lootTableEntry.weight = 1.0
  if (lootTableEntry.quality == null) lootTableEntry.quality = 0.0
  pool.addEntry(lootTableEntry)
}

global['addLootTablePool'] = (lootBuilder, table, rolls, bonusRolls) => {
  lootBuilder.addPool(pool => {
    pool.rolls = rolls || 1
    if (bonusRolls) pool.bonusRolls = bonusRolls
    global.addLootTable(pool, table)
  })
}

let addCustomLootPool = (lootBuilder, type, table, rolls, bonusRolls, defaultTableName, defaultWeight, defaultQuality) => {
  if (defaultWeight === undefined) defaultWeight = global.config.defaultRandomWeight
  if (defaultQuality === undefined) defaultQuality = global.config.defaultRandomQuality
  let [tableName, tableProps] = readTable(table, defaultWeight, defaultQuality)
  if (tableName == null) tableName = defaultTableName
  lootBuilder.addPool(pool => {
    pool.rolls = rolls || 1
    if (bonusRolls) pool.bonusRolls = bonusRolls

    if (tableProps != null && tableProps.weight != null) pool.addEmpty(100 - tableProps.weight)
    const customLootTable = {type: type, name: tableName}
    for (let tableProp in tableProps) {
      customLootTable[tableProp] = tableProps[tableProp]
    }
    global.addLootTable(pool, customLootTable)
  })
}

global['addGemLootPool'] = (lootBuilder, gemTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'gems', gemTable, rolls, bonusRolls, 'random')
}

global['addAffixItemLootPool'] = (lootBuilder, affixItemTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'affix_items', affixItemTable, rolls, bonusRolls, 'random')
}

global['addAncientTomeLootPool'] = (lootBuilder, ancientTomeTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'ancient_tomes', ancientTomeTable, rolls, bonusRolls, 'random')
}

global['addBlueprintLootPool'] = (lootBuilder, blueprintTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'blueprints', blueprintTable, rolls, bonusRolls, 'random')
}

global['addGatewayLootPool'] = (lootBuilder, gatewayTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'gates', gatewayTable, rolls, bonusRolls, 'random')
}

global['addPartLootPool'] = (lootBuilder, partTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'parts', partTable, rolls, bonusRolls, 'random')
}

global['addRedHeartLootPool'] = (lootBuilder, weight, quality) => {
  if (weight === undefined) weight = global.config.redHeartWeight
  if (quality === undefined) quality = global.config.redHeartQuality
  lootBuilder.addPool(pool => {
    const stackProps = {}
    if (weight != null) {
      pool.addEmpty(100 - weight)
      stackProps.weight = weight
    }
    if (quality != null) stackProps.quality = quality
    global.addStack(pool, {item: 'bhc:red_heart'}, stackProps)
  })
}

global.addGearLootPool = (table, baseWeight, baseQuality, isTreasure, isGuaranteed) => {
  let tableName = isTreasure ? 'random_treasure' : 'random'
  table.addPool(pool => {
    global.addLootTable(pool, {name: `meatsalad:chests/affix_items/${tableName}`, weight: baseWeight * 2, quality: baseQuality})
    global.addLootTable(pool, {name: 'meatsalad:chests/parts/random', weight: baseWeight, quality: baseQuality})
    global.addLootTable(pool, {name: `meatsalad:chests/gear/${tableName}`, weight: baseWeight * 3})
    if (!isGuaranteed) pool.addEmpty(100 - (6 * baseWeight))
  })
}

global.addEyeLootPool = (lootBuilder, eye, weight) => {
  lootBuilder.addPool(pool => {
    const eyeCondition = {
      condition: 'minecraft:entity_properties',
      entity: 'this',
      predicate: {
        type_specific: {
          type: 'player',
          advancements: {}
        }
      }
    }
    eyeCondition.predicate.type_specific.advancements[`endrem:main/${eye}_eye`] = false
    const stackProps = {
      conditions: [eyeCondition]
    }
    if (weight != null) stackProps.weight = weight

    global.addStack(pool, { item: `endrem:${eye}_eye` }, stackProps)
    if (weight != null) pool.addEmpty(100 - weight)
  })
}

global['enchantFunction'] = (levels, treasureAllowed) => {
  return {
    function: 'minecraft:enchant_with_levels',
    levels: levels,
    treasure: treasureAllowed ?? false
  }
}

global['energize'] = (event, ingredients, energy, result, recipeId) => {
  if (recipeId == null) recipeId = result.getId().split(':')[1]
  event.custom({
    type: 'powah:energizing',
    ingredients: ingredients,
    energy: energy,
    result: result
  }).id(`meatsalad:energizing/${recipeId}`)
}

global['nucleosynthesize'] = (event, input, output, duration, gasAmount) => {
  let inputCount = input.count || 1
  let inputIngredient = null
  if (input.tag != null) {
    inputIngredient = Ingredient.of(input.tag)
  } else {
    if (input.data != null) {
      inputIngredient = Item.of(`${input.mod}:${input.item}`, inputCount, input.data).strongNBT()
    } else {
      inputIngredient = Item.of(`${input.mod}:${input.item}`, inputCount)
    }
  }

  let outputCount = output.count || 1
  let outputItem = null
  if (output.data != null) {
    outputItem = Item.of(`${output.mod}:${output.item}`, outputCount, output.data).strongNBT()
  } else {
    outputItem = Item.of(`${output.mod}:${output.item}`, outputCount)
  }

  let recipeName = output.recipeName || output.item

  if (duration == null) duration = 1250
  if (gasAmount == null) gasAmount = 5

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: duration,
    gasInput: {
      amount: gasAmount,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: inputIngredient
    },
    output: outputItem
  }).id(`meatsalad:nucleosynthesizing/${recipeName}`)
}

global['getStageCondition'] = (name, value) => {
  const stageCondition = {
    condition: 'minecraft:entity_properties',
    entity: 'this',
    predicate: {
      type_specific: {
        type: 'player',
        advancements: {}
      }
    }
  }
  stageCondition.predicate.type_specific.advancements[name] = value
  return stageCondition
}

global['getWorldStageCondition'] = (worldStageFlags) => {
  let hasNetherStage
  let hasOtherStage
  let hasEndStage
  if (typeof worldStageFlags == 'boolean') {
    hasNetherStage = worldStageFlags
    hasOtherStage = worldStageFlags
    hasEndStage = worldStageFlags
  } else {
    hasNetherStage = worldStageFlags.nether
    hasOtherStage = worldStageFlags.other
    hasEndStage = worldStageFlags.end
  }

  const stageAdvancements = {}
  if (hasNetherStage != null) {
    stageAdvancements['meatsalad:stage/the_nether'] = hasNetherStage
  }
  if (hasOtherStage != null) {
    stageAdvancements['meatsalad:stage/the_other'] = hasOtherStage
  }
  if (hasEndStage != null) {
    stageAdvancements['meatsalad:stage/the_end'] = hasEndStage
  }

  return {
    condition: 'minecraft:entity_properties',
    entity: 'this',
    predicate: {
      type_specific: {
        type: 'player',
        advancements: stageAdvancements
      }
    }
  }
}

global['earlyStageCondition'] = global.getWorldStageCondition(false)
global['midStageCondition'] = global.getWorldStageCondition({nether: true, other: false, end: false})
global['lateStageCondition'] = global.getWorldStageCondition({other: true, end: false})
global['endStageCondition'] = global.getWorldStageCondition({end: true})
