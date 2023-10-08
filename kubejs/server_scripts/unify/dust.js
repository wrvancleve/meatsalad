//priority: 200
ServerEvents.recipes(event => {
  let process = (input, output, id) => {
    event.custom({
      type: "thermal:pulverizer",
      ingredient: Ingredient.of(input).toJson(),
      result: [Item.of(output).withCount(1).toJson()]
    }).id(`meatsalad:pulverizer/${id}`);
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: Ingredient.of(input).toJson()
      },
      output: Item.of(output).withCount(1).toJson()
    }).id(`meatsalad:crushing/${id}`);
    event.shapeless(
      output,
      [ 
        input,
        'thermal:earth_charge'
      ]
    ).id(`meatsalad:earth_charge/${id}`);
  }

  let dustTags = global.auTags.filter(function (val) {
    return /forge:dusts/.test(val)
  })
  dustTags.forEach(dustTagString => {
    let materialType = dustTagString.replace('forge:dusts/', '')
    let dust = AlmostUnified.getPreferredItemForTag(dustTagString)
    if (dust.isEmpty()) {
      console.log(`${materialType} does not have a dust tag entry`)
      return
    }
    if (global.gemCheck(materialType)) {
      return
    }
    let material = global.gemCheck(materialType)
      ? AlmostUnified.getPreferredItemForTag(`forge:gems/${materialType}`)
      : AlmostUnified.getPreferredItemForTag(`forge:ingots/${materialType}`)
    let ore = AlmostUnified.getPreferredItemForTag(`forge:ores/${materialType}`);
    let raw_material = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${materialType}`);

    // Thermal Pulverizing
    let pulverizer = {
      material: false,
      ore: false,
      raw: false
    }
    event.forEachRecipe({ type: "thermal:pulverizer" }, recipe => {
      let recipeJson = recipe.json
      recipeJson.get('result').forEach(item => {
        if (dust.equalsIgnoringCount(Item.of(item))) {
          let input = recipeJson.get('ingredient')
          if (!material.isEmpty() && global.ingredientCheck(material, input)) {
            pulverizer.material = true
          } else if (!ore.isEmpty() && global.ingredientCheck(ore, input)) {
            pulverizer.ore = true
          } else if (!raw_material.isEmpty() && global.ingredientCheck(raw_material, input)) {
            pulverizer.raw = true
          }
        }
      })
    })
    let pulverizerRecipe = {
      type: "thermal:pulverizer",
      ingredient: {},
      result: []
    }
    if (!material.isEmpty() && !pulverizer.material) {
      let materialRecipe = pulverizerRecipe
      materialRecipe.ingredient = Ingredient.of(`#forge:ingots/${materialType}`).toJson()
      materialRecipe.result = dust.withCount(1).toJson()
      event.custom(materialRecipe).id(`meatsalad:pulverizer/${materialType}_dust_from_ingot`)
    }
    if (!ore.isEmpty() && !pulverizer.ore) {
      let oreRecipe = pulverizerRecipe
      oreRecipe.ingredient = Ingredient.of(`#forge:ores/${materialType}`).toJson()
      oreRecipe.result = dust.withCount(2).toJson()
      event.custom(oreRecipe).id(`meatsalad:pulverizer/${materialType}_dust_from_ore`)
    }
    if (!raw_material.isEmpty() && !pulverizer.raw) {
      let rawRecipe = pulverizerRecipe
      rawRecipe.ingredient = Ingredient.of(`#forge:raw_materials/${materialType}`).toJson()
      rawRecipe.result = dust.withCount(2).toJson()
      event.custom(rawRecipe).id(`meatsalad:pulverizer/${materialType}_dust_from_raw_material`)
    }

    // Mekanism Crushing
    let crushing = {
      material: false,
      ore: false,
      raw: false
    }
    event.forEachRecipe({ type: "mekanism:crushing" }, recipe => {
      let recipeJson = recipe.json
      if (dust.equalsIgnoringCount(Item.of(recipeJson.get('output')))) {
        let input = recipeJson.get('input').get('ingredient')
        if (!material.isEmpty() && global.ingredientCheck(material, input)) {
          crushing.material = true
        } else if (!ore.isEmpty() && global.ingredientCheck(ore, input)) {
          crushing.ore = true
        } else if (!raw_material.isEmpty() && global.ingredientCheck(raw_material, input)) {
          crushing.raw = true
        }
      }
    })
    let crushingRecipe = {
      type: "mekanism:crushing",
      input: {
        ingredient: {}
      },
      output: {}
    }
    if (!material.isEmpty() && !crushing.material) {
      let materialRecipe = crushingRecipe
      materialRecipe.input.ingredient = Ingredient.of(`#forge:ingots/${materialType}`).toJson()
      materialRecipe.output = dust.withCount(1).toJson()
      event.custom(materialRecipe).id(`meatsalad:crushing/${materialType}_dust_from_ingot`)
    }
    if (!ore.isEmpty() && !crushing.ore) {
      let oreRecipe = crushingRecipe
      oreRecipe.input.ingredient = Ingredient.of(`#forge:ores/${materialType}`).toJson()
      oreRecipe.output = dust.withCount(2).toJson()
      event.custom(oreRecipe).id(`meatsalad:crushing/${materialType}_dust_from_ore`)
    }
    if (!raw_material.isEmpty() && !crushing.raw) {
      let rawRecipe = crushingRecipe
      rawRecipe.input.ingredient = Ingredient.of(`#forge:raw_materials/${materialType}`).toJson()
      rawRecipe.output = dust.withCount(2).toJson()
      event.custom(rawRecipe).id(`meatsalad:crushing/${materialType}_dust_from_raw_material`)
    }
  });

  // Need ruby, etc... from ore
  const gemsNeedingDust = [
    'amethyst',
    'ruby',
    'sapphire',
    'peridot',
  ]
  gemsNeedingDust.forEach(gemMaterial => {
    let dust = AlmostUnified.getPreferredItemForTag(`forge:dusts/${gemMaterial}`)
    event.custom({
      type: "thermal:pulverizer",
      ingredient: Ingredient.of(`#forge:gems/${gemMaterial}`).toJson(),
      result: [dust.withCount(1)]
    }).id(`meatsalad:pulverizer/${gemMaterial}_dust_from_gem`);
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: Ingredient.of(`#forge:gems/${gemMaterial}`).toJson()
      },
      output: dust.withCount(1).toJson()
    }).id(`meatsalad:crushing/${gemMaterial}_dust_from_gem`);
    event.shapeless(
      dust.withCount(1),
      [ 
        `#forge:gems/${gemMaterial}`,
        'thermal:earth_charge'
      ]
    ).id(`meatsalad:earth_charge/${gemMaterial}_dust_from_gem`);
  })

  process('rftoolsbase:dimensionalshard', 'kubejs:dimensional_shard_dust', 'dimensional_shard_dust_from_shard')
})