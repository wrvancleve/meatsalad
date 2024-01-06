//priority: 10

global['replaceShaped'] = function (event, pattern, key, mod, itemId, recipeId) {
  event.remove({ id: `${mod}:${recipeId != null ? recipeId : itemId}` })
  event.shaped(`${mod}:${itemId}`, pattern, key).id(`meatsalad:${itemId}`);
}

global['nucleosynthesize'] = function (event, input, output, duration, gasAmount) {
  let inputCount = input.count;
  if (inputCount == null || inputCount <= 0) {
    inputCount = 1
  }
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

  let outputCount = output.count;
  if (outputCount == null || outputCount <= 0) {
    outputCount = 1
  }
  let outputItem = null;
  if (output.data != null) {
    outputItem = Item.of(`${output.mod}:${output.item}`, outputCount, output.data).strongNBT()
  } else {
    outputItem = Item.of(`${output.mod}:${output.item}`, outputCount)
  }

  let recipeName = output.recipeName;
  if (recipeName == null) {
    recipeName = output.item
  }

  if (duration == null) {
    duration = 1250
  }

  if (gasAmount == null) {
    gasAmount = 5
  }

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

global['addSingleItem'] = function (pool, item, weight, conditions) {
  if (weight == null || weight <= 0) {
    weight = 1;
  }
  if (conditions != null) {
    pool.addEntry({
      type: 'placebo:stack_entry',
      weight: weight,
      min: 1,
      max: 1,
      stack: {
        item: item,
        count: 1
      },
      conditions: conditions
    });
  } else {
    pool.addEntry({
      type: 'placebo:stack_entry',
      weight: weight,
      min: 1,
      max: 1,
      stack: {
        item: item,
        count: 1
      }
    });
  }
}

global['getNotOtherCondition'] = function () {
  return [
    {
      condition: "minecraft:inverted",
      term: {
        condition: "gamestageconditions:stage",
        stage: "the_other"
      }
    },
    {
      condition: "minecraft:inverted",
      term: {
        condition: "gamestageconditions:stage",
        stage: "the_end"
      }
    }
  ]
}

global['getOtherCondition'] = function () {
  return [
    {
      condition: "gamestageconditions:stage",
      stage: "the_other"
    }
  ]
}

global['addRandomBlueprintPool'] = function (table, rolls) {
  table.addPool(pool => {
    pool.rolls = rolls;
    pool.addEntry({ type: 'loot_table', name: 'meatsalad:blueprints/random' });
  });
}
