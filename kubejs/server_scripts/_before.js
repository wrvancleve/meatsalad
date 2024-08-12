//priority: 400

const removeRecipes = (event, ids) => {
  ids.forEach(id => {
    event.remove({ id: id })
  })
}

const replaceShaped = (event, pattern, key, result, oldRecipeId) => {
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

const addStack = (pool, stack, stackProps) => {
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
  if (poolEntry.weight)
  pool.addEntry(poolEntry)
}

const addStackLootPool = (lootBuilder, stack, stackProps) => {
  lootBuilder.addPool(pool => {
    let emptyPoolWeight = 0
    if (stackProps != null && stackProps.weight) emptyPoolWeight = 100 - stackProps.weight
    addStack(pool, stack, stackProps)
    if (emptyPoolWeight) {
      pool.addEmpty(emptyPoolWeight)
    }
  })
}

const addDynamic = (pool, constants, dimensions) => {
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

  const tableName = table.type != null ? `meatsalad:${table.type}/${table.name}` : table.name
  delete table.type
  delete table.name
  if (defaultWeight != null && table.weight === undefined) {
    table.weight = defaultWeight
    if (defaultQuality != null && table.quality === undefined) table.quality = defaultQuality
  }
  return [tableName, table]
}

const addLootTable = (pool, table) => {
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

const addLootTablePool = (lootBuilder, table, rolls, bonusRolls) => {
  lootBuilder.addPool(pool => {
    pool.rolls = rolls || 1
    if (bonusRolls) pool.bonusRolls = bonusRolls
    addLootTable(pool, table)
  })
}

const addCustomLootPool = (lootBuilder, type, table, rolls, bonusRolls, defaultTableName, defaultWeight, defaultQuality) => {
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
    addLootTable(pool, customLootTable)
  })
}

const addAffixItemLootPool = (lootBuilder, affixItemTable, rolls, bonusRolls) => {
  addCustomLootPool(lootBuilder, 'gear/affixed', affixItemTable, rolls, bonusRolls, 'random')
}

const enchantFunction = (levels, treasureAllowed) => {
  return {
    function: 'minecraft:enchant_with_levels',
    levels: levels,
    treasure: treasureAllowed ?? false
  }
}

const smash = (event, input, output, recipeId) => {
  if (recipeId == null) recipeId = output.getId().split(':').pop()
  event.custom({
    type: 'mekanism:crushing',
    input: { ingredient: input },
    output: output
  }).id(`meatsalad:crushing/${recipeId}`)
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: input,
    result: output
  }).id(`meatsalad:pulverizer/${recipeId}`)
}

const energize = (event, ingredients, energy, result, recipeId) => {
  if (recipeId == null) recipeId = result.getId().split(':')[1]
  event.custom({
    type: 'powah:energizing',
    ingredients: ingredients,
    energy: energy,
    result: result
  }).id(`meatsalad:energizing/${recipeId}`)
}

const nucleosynthesize = (event, input, output, duration, gasAmount) => {
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

const getStageCondition = (name, value) => {
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

const getWorldStageCondition = (worldStageFlags) => {
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

const earlyStageCondition = getWorldStageCondition(false)
const midStageCondition = getWorldStageCondition({nether: true, other: false, end: false})
const lateStageCondition = getWorldStageCondition({other: true, end: false})
const endStageCondition = getWorldStageCondition({end: true})
