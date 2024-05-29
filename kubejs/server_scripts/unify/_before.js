//priority: 300

const JsonObject = Java.loadClass('com.google.gson.JsonObject')
const JsonArray = Java.loadClass('com.google.gson.JsonArray')
const JsonPrimitive = Java.loadClass('com.google.gson.JsonPrimitive')

function getArray(object) {
  if (object.constructor === Array) {
    return object
  } else {
    return [object]
  }
}

global['auTags'] = []

// global['loaded'] = {
//   Mek_Loaded: Platform.isLoaded('mekanism'),
//   Thermal_Loaded: Platform.isLoaded('thermal'),
//   ATO_Loaded: Platform.isLoaded('alltheores'),
// }

// global['alloys'] = [
//   'steel',
//   'invar',
//   'electrum',
//   'bronze',
//   'enderium',
//   'lumium',
//   'signalum',
//   'constantan',
//   'brass'
// ]

const getRecipeInputKey = function (recipeType, recipeJson) {
  let inputKeys
  switch (recipeType) {
    case 'minecraft:crafting_shaped':
      inputKeys = ['key']
      break
    case 'minecraft:crafting_shapeless':
    case 'thermal:crystallizer':
      inputKeys = ['ingredients']
      break
    case 'mekanism:enriching':
    case 'mekanism:crushing':
      inputKeys = ['input']
      break
    case 'thermal:smelter':
    case 'thermal:press':
      inputKeys = ['ingredients', 'ingredient']
      break
    case 'mekanism:purifying':
    case 'mekanism:injecting':
      inputKeys = ['itemInput']
      break
    default:
      inputKeys = ['ingredient']
      break
  }

  for (let inputKey of inputKeys) {
    let inputValue
    if (recipeJson instanceof JsonObject) {
      inputValue = recipeJson.get(inputKey)
    } else {
      inputValue = recipeJson[inputKey]
    }
    if (inputValue) {
      return inputKey
    }
  }
}

const getIngredients = function* (ingredients, filler) {
  if (ingredients instanceof JsonArray) {
    for (var i = 0; i < ingredients.size(); i++) {
      yield* getIngredients(ingredients.get(i), filler)
    }
  } else if (ingredients instanceof Array) {
    for (let ingredient of ingredients) {
      yield* getIngredients(ingredient, filler)
    }
  } else if (ingredients instanceof JsonObject) {
    if (ingredients.has('tag')) {
      yield filler
        ? ingredients.get('tag').getAsString().replace('{0}', filler) + "" // + "" is for a bug
        : ingredients.get('tag').getAsString() + "" // + "" is for a bug
    } else if (ingredients.has('item')) {
      yield filler
        ? ingredients.get('item').getAsString().replace('{0}', filler) + "" // + "" is for a bug
        : ingredients.get('item').getAsString() + "" // + "" is for a bug
    } else {
      for (let ingredientKey of ingredients.keySet().toArray()) {
        yield* getIngredients(ingredients.get(ingredientKey), filler)
      }
    }
  } else if (ingredients instanceof Object) {
    if (ingredients.tag) {
      yield filler ? ingredients.tag.replace('{0}', filler) : ingredients.tag
    } else if (ingredients.item) {
      yield filler ? ingredients.item.replace('{0}', filler) : ingredients.item 
    } else {
      yield* getIngredients(Object.values(ingredients), filler)
    }
  } else if (ingredients instanceof JsonPrimitive) {
    if (ingredients.isString()) {
      yield filler ? ingredients.getAsString().replace('{0}', filler) : ingredients.getAsString()
    }
  }
}

const finalizeComponent = function (component, filler) {
  if (component.constructor === Array) {
    return component.map(c => finalizeComponent(c, filler))
  } else if (component.constructor === String) {
    return component.replace('{0}', filler)
  } else if (component.constructor === Object) {
    let newComponent = Object.assign({}, component)
    if (newComponent.tag) {
      newComponent.tag = newComponent.tag.replace('{0}', filler)
    } else if (newComponent.item) {
      newComponent.item = newComponent.item.replace('{0}', filler)
    } else {
      for (let newComponentProp of Object.keys(newComponent)) {
        newComponent[newComponentProp] = finalizeComponent(newComponent[newComponentProp], filler)
      }
    }
    return newComponent
  }
  return component
}

const unify = function (event, unifyTag, unifyRecipes) {
  const GEM_MATERIALS = [
    'amethyst',
    'apatite',
    'certus_quartz',
    'cinnabar',
    'diamond',
    'dimensional_shard',
    'emerald',
    'fluorite',
    'lapis',
    'niter',
    'peridot',
    'quartz',
    'ruby',
    'sapphire',
    'sulfur',
  ]
  const RECIPE_KEYS = {
    'minecraft:crafting_shaped': {
      input: 'key',
      output: 'result'
    },
    'minecraft:crafting_shapeless': {
      input: 'ingredients',
      output: 'result'
    },
    'minecraft:smelting': {
      input: 'ingredient',
      output: 'result'
    },
    'minecraft:blasting': {
      input: 'ingredient',
      output: 'result'
    },
    'mekanism:crushing': {
      input: 'input',
      output: 'output'
    },
    'mekanism:enriching': {
      input: 'input',
      output: 'output'
    },
    'mekanism:purifying': {
      input: 'itemInput',
      output: 'output'
    },
    'mekanism:injecting': {
      input: 'itemInput',
      output: 'output'
    },
    'thermal:pulverizer': {
      input: 'ingredient',
      output: 'result'
    },
    'thermal:smelter': {
      input: 'ingredient',
      output: 'result'
    },
    'thermal:press': {
      input: 'ingredients',
      output: 'result'
    },
    'thermal:crystallizer': {
      input: 'ingredients',
      output: 'result'
    },
  }

  const UnifyHandler = {
    materials: {},
    recipes: {},
    preExistingRecipes: {},
    addRecipe: function (recipe) {
      const recipeType = recipe.type
      if (recipeType in this.recipes === false) this.recipes[recipeType] = {}

      const recipeTargets = getArray(recipe.target)
      const hasMultipleIds = recipe.id instanceof Array
      const hasMultipleJsons = recipe.json instanceof Array
      let recipeExclude = new Set()
      if (recipe.exclude) {
        if (recipe.exclude instanceof RegExp) {
          recipeExclude = recipe.exclude
        } else {
          recipe.exclude.forEach(exclusion => {
            if (exclusion === 'gems') {
              GEM_MATERIALS.forEach(gem => {
                recipeExclude.add(gem)
              })
            } else {
              recipeExclude.add(exclusion)
            }
          })
        }
      }

      for (let i = 0; i < recipeTargets.length; i++) {
        this.recipes[recipeType][recipeTargets[i]] = {
          id: hasMultipleIds ? recipe.id[i] : recipe.id,
          exclude: recipeExclude,
          json: hasMultipleJsons ? recipe.json[i] : recipe.json
        }
      }
    },
    addMaterial: function (material) {
      const materialTag = `${unifyTag}${material}`
      const preferredItem = AlmostUnified.getPreferredItemForTag(materialTag)
      if (preferredItem.isEmpty()) {
        console.log(`${materialTag} has no entries`)
        return
      }
      this.materials[preferredItem.id] = material
      
      // Start material's preExistingRecipes
      this.preExistingRecipes[material] = {}
      const targetChecks = {}
      for (let [recipeType, recipesInType] of Object.entries(this.recipes)) {
        this.preExistingRecipes[material][recipeType] = {}
        for (let [target, recipeProps] of Object.entries(recipesInType)) {
          let isMaterialExcluded = recipeProps.exclude instanceof RegExp
            ? recipeProps.exclude.test(material)
            : recipeProps.exclude.has(material)
          if (!isMaterialExcluded) {
            let targetMaterial = finalizeComponent(target, material)
            let hasTargetCheckOccurred = targetMaterial in targetChecks
            let targetCheck = hasTargetCheckOccurred
              ? targetChecks[targetMaterial]
              : !AlmostUnified.getPreferredItemForTag(targetMaterial).isEmpty()
            if (targetCheck) {
              this.preExistingRecipes[material][recipeType][target] = false
            }
            if (!hasTargetCheckOccurred) targetChecks[targetMaterial] = targetCheck
          }
        }
      }
    },
    unify: function () {
      // Setup function to compare recipes
      function compareIngredients(recipeIngredients, testIngredients) {
        const requiredIngredients = new Set(recipeIngredients)
        testIngredients.forEach(testIngredient => {
          requiredIngredients.delete(testIngredient)
        })
        return requiredIngredients.size === 0
      }

      // First fill pre-existing recipes
      for (let [recipeType, recipesInType] of Object.entries(this.recipes)) {
        event.forEachRecipe({type: recipeType}, recipe => {
          let recipeJson = recipe.json
          for (let result of getIngredients(recipeJson.get(RECIPE_KEYS[recipeType].output))) {
            let material = this.materials[result]
            if (material) {
              for (let [target, recipeProps] of Object.entries(recipesInType)) {
                // Create target string
                let targetMaterial = finalizeComponent(target, material)
                let recipeIngredients = recipeProps.json[getRecipeInputKey(recipeType, recipeProps.json)]
                recipeIngredients = Array.from(getIngredients(recipeIngredients, targetMaterial))

                let testIngredients = recipeJson.get(getRecipeInputKey(recipeType, recipeJson))
                testIngredients = Array.from(getIngredients(testIngredients))

                if (compareIngredients(recipeIngredients, testIngredients)) {
                  this.preExistingRecipes[material][recipeType][target] = true
                }
              }
            }
          }
        })
      }

      // Create missing recipes
      for (let [preferredItem, material] of Object.entries(this.materials)) {
        for (let [recipeType, recipesInType] of Object.entries(this.recipes)) {
          let materialPreExistingRecipes = this.preExistingRecipes[material][recipeType]
          for (let [target, recipeProps] of Object.entries(recipesInType)) {
            if (target in materialPreExistingRecipes && !materialPreExistingRecipes[target]) {
              // Finalize recipe
              let recipeJson = recipeProps.json
              let ingredientsKey = getRecipeInputKey(recipeType, recipeJson)
              let resultsKey = RECIPE_KEYS[recipeType].output
              let targetMaterial = finalizeComponent(target, material)
              let missingRecipe = Object.assign({}, recipeJson)
              missingRecipe[ingredientsKey] = finalizeComponent(missingRecipe[ingredientsKey], targetMaterial)
              missingRecipe[resultsKey] = finalizeComponent(missingRecipe[resultsKey], preferredItem)

              // Create recipe
              let recipeBuilder
              switch (recipeType) {
                case 'minecraft:crafting_shapeless':
                  recipeBuilder = event.shapeless(missingRecipe[resultsKey], missingRecipe[ingredientsKey])
                  break
                case 'minecraft:crafting_shaped':
                  recipeBuilder = event.shaped(missingRecipe[resultsKey], missingRecipe['pattern'], missingRecipe[ingredientsKey])
                  break
                case 'minecraft:smelting':
                  recipeBuilder = event.smelting(missingRecipe[resultsKey], missingRecipe[ingredientsKey]).xp(missingRecipe.experience)
                  break
                case 'minecraft:blasting':
                  recipeBuilder = event.blasting(missingRecipe[resultsKey], missingRecipe[ingredientsKey]).xp(missingRecipe.experience)
                  break
                default:
                  missingRecipe['type'] = recipeType
                  recipeBuilder = event.custom(missingRecipe)
                  break
              }
              let recipeId = finalizeComponent(recipeProps.id, material)
              recipeBuilder = recipeBuilder.id(`meatsalad:${recipeId}`)
            }
          }
        }
      }
    }
  }

  // Add recipes
  unifyRecipes.forEach(recipe => {
    UnifyHandler.addRecipe(recipe)
  })

  // Add materials
  const unifyTagTester = new RegExp(unifyTag)
  global.auTags.forEach(unifyTagString => {
    if (unifyTagTester.test(unifyTagString)) {
      let material = unifyTagString.replace(unifyTag, '')
      if (!material.startsWith('raw_')) {
        UnifyHandler.addMaterial(material)
      }
    }
  })

  // Perform unify
  UnifyHandler.unify()
}

ServerEvents.recipes(event => {
  global.auTags = AlmostUnified.getTags()

  let pack = (input, output) => {
    const inputAlias = input.split(':')[1].split('_').pop()
    const outputItem = output.split(':')[1]
    event.shaped(output, 
      [
        'NNN',
        'NNN',
        'NNN'
      ], 
      {
        N: input
      }
    ).id(`meatsalad:${outputItem}_from_${inputAlias}s`)
    event.custom({
      type: 'thermal:press',
      ingredients: [
        { item: input, count: 9 },
        { item: 'thermal:press_packing_3x3_die' }
      ],
      result: [ { item: output } ]
    }).id(`meatsalad:press/packing3x3/${outputItem}_from_${inputAlias}s`)
  }
  let unpack = (input, output) => {
    const inputAlias = input.split(':')[1].split('_').pop()
    const outputItem = output.split(':')[1]
    event.shapeless(`9x ${output}`, input).id(`meatsalad:${outputItem}s_from_${inputAlias}`)
    event.custom({
      type: 'thermal:press',
      ingredients: [
        { item: input },
        { item: 'thermal:press_unpacking_die' }
      ],
      result: [ { item: output, count: 9 } ]
    }).id(`meatsalad:press/unpacking/${outputItem}_from_${inputAlias}s`)
  }
  let crush = (input, output) => {
    const recipeId = `${output.id.split(':').pop()}_from_${input.id.split(':').pop()}`
    event.custom({
      type: 'mekanism:crushing',
      input: {
        ingredient: input
      },
      output: output
    }).id(`meatsalad:crushing/${recipeId}`)
  }

  // Misc recipes
  pack('meatsalad:chaos_shard', 'meatsalad:chaos_crystal')
  unpack('meatsalad:chaos_crystal', 'meatsalad:chaos_shard')
  pack('meatsalad:ender_star_fragment', 'meatsalad:ender_star')
  unpack('meatsalad:ender_star', 'meatsalad:ender_star_fragment')
  pack('meatsalad:infinity_fiber', 'meatsalad:infinity_fabric')
  unpack('meatsalad:infinity_fabric', 'meatsalad:infinity_fiber')

  // Missing crushing recipes
  const missingCrushRecipes = [
    {
      input: Item.of('minecraft:blaze_rod'),
      output: Item.of('minecraft:blaze_powder', 3)
    },
    {
      input: Item.of('thermal:basalz_rod'),
      output: Item.of('thermal:basalz_powder', 3)
    },
    {
      input: Item.of('thermal:blitz_rod'),
      output: Item.of('thermal:blitz_powder', 3)
    },
    {
      input: Item.of('thermal:blizz_rod'),
      output: Item.of('thermal:blizz_powder', 3)
    },
    {
      input: Item.of('minecraft:ender_pearl'),
      output: Item.of('thermal:ender_pearl_dust')
    },
  ]
  missingCrushRecipes.forEach(missingCrushRecipe => {
    crush(missingCrushRecipe.input, missingCrushRecipe.output)
  })
})
