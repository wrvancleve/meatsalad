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
    'apatite',
    'cinnabar',
    'ruby',
    'sapphire',
    'peridot',
  ]
  gemsNeedingDust.forEach(gemMaterial => {
    let dust = AlmostUnified.getPreferredItemForTag(`forge:dusts/${gemMaterial}`)
    if (gemMaterial !== 'apatite' && gemMaterial !== 'cinnabar') {
      event.custom({
        type: "thermal:pulverizer",
        ingredient: Ingredient.of(`#forge:gems/${gemMaterial}`).toJson(),
        result: [dust.withCount(1)]
      }).id(`meatsalad:pulverizer/${gemMaterial}_dust_from_gem`);
    }
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: Ingredient.of(`#forge:gems/${gemMaterial}`).toJson()
      },
      output: dust.withCount(1).toJson()
    }).id(`meatsalad:crushing/${gemMaterial}_dust_from_gem`);
    if (gemMaterial !== 'apatite' && gemMaterial !== 'cinnabar') {
      event.shapeless(
        dust.withCount(1),
        [ 
          `#forge:gems/${gemMaterial}`,
          'thermal:earth_charge'
        ]
      ).id(`meatsalad:earth_charge/${gemMaterial}_dust_from_gem`);
    }
  })

  const dustsNeedingCrushing = [
    {input: 'minecraft:ender_pearl', mod: 'thermal', item: 'ender_pearl_dust'},
    {input: 'thermal:niter', mod: 'thermal', item: 'niter_dust'},
    {input: 'thermal:sulfur', mod: 'thermal', item: 'sulfur_dust'}
  ]
  dustsNeedingCrushing.forEach(dustCrushing => {
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: Ingredient.of(dustCrushing.input).toJson()
      },
      output: Item.of(`${dustCrushing.mod}:${dustCrushing.item}`).withCount(1).toJson()
    }).id(`meatsalad:crushing/${dustCrushing.item}`);
  })

  const dustsNeedingPulverizing = [
    {input: '#forge:gems/certus_quartz', mod: 'ae2', item: 'certus_quartz_dust'},
    {input: '#forge:gems/fluix', mod: 'ae2', item: 'fluix_dust'},
    {input: 'ae2:sky_stone_block', mod: 'ae2', item: 'sky_dust'},
  ]
  dustsNeedingPulverizing.forEach(dustPulverizing => {
    event.custom({
      type: "thermal:pulverizer",
      ingredient: Ingredient.of(dustPulverizing.input).toJson(),
      result: [Item.of(`${dustPulverizing.mod}:${dustPulverizing.item}`).withCount(1)]
    }).id(`meatsalad:pulverizer/${dustPulverizing.item}`);
  })

  // Add missing amethyst processing
  event.shapeless(
    '4x minecraft:amethyst_shard',
    [ 
      '#forge:storage_blocks/amethyst',
      'thermal:earth_charge'
    ]
  ).id('meatsalad:earth_charge/amethyst_shard');
  event.custom({
    type: "thermal:pulverizer",
    ingredient: Ingredient.of('#forge:storage_blocks/amethyst').toJson(),
    result: [Item.of('minecraft:amethyst_shard').withCount(4)]
  }).id('meatsalad:pulverizer/amethyst_shard');
  event.custom({
    type: "mekanism:enriching",
    input: {
      ingredient: Ingredient.of('#forge:storage_blocks/amethyst').toJson()
    },
    output: Item.of('minecraft:amethyst_shard').withCount(4).toJson()
  }).id('meatsalad:enriching/amethyst_shard')
  
  process('kubejs:dimensional_shard', 'kubejs:dimensional_shard_dust', 'dimensional_shard_dust_from_shard')
})