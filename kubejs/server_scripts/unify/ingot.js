//priority: 150
ServerEvents.recipes(event => {
  let ingotTags = global.auTags.filter(function (val) {
    return /forge:ingots/.test(val)
  })
  ingotTags.forEach(ingotTagString => {
    let materialType = ingotTagString.replace('forge:ingots/', '')
    let ingot = AlmostUnified.getPreferredItemForTag(ingotTagString)
    if (ingot.isEmpty()) {
      console.log(`${materialType} does not have an ingot tag entry`)
      return
    }
    let isAlloy = global.alloys.includes(materialType)
    let storageTag = Ingredient.of(`#forge:storage_blocks/${materialType}`)
    if (!AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/${materialType}`).isEmpty()) {
      if (global.loaded.Thermal_Loaded) {
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (ingot.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              storageTag.toJson(),
              Ingredient.of('thermal:press_unpacking_die').toJson(),
            ],
            result: [ingot.withCount(9).toJson()],
          }).id(`meatsalad:machines/press/unpacking/press_${materialType}_unpacking`)
        }
      }
      
      let nuggetsTagString = `forge:nuggets/${materialType}`;
      if (!AlmostUnified.getPreferredItemForTag(nuggetsTagString).isEmpty()) {
        if (global.loaded.Thermal_Loaded) {
          // Check if thermal multiservo press recipe exists and add it if not
          let count = 0
          event.forEachRecipe({ type: 'thermal:press' }, recipe => {
            let recipeJson = recipe.json
            recipeJson.get('result').forEach(item => {
              if (ingot.equalsIgnoringCount(Item.of(item))) {
                count++
              }
            })
          })
          if (count == 0) {
            event.custom({
              type: 'thermal:press',
              ingredients: [
                {tag: nuggetsTagString, count: 9},
                Ingredient.of('thermal:press_packing_3x3_die').toJson(),
              ],
              result: [ingot.toJson()],
            }).id(`meatsalad:machines/press/packing3x3/press_${materialType}_nugget_packing`)
          }
        }
      }
    }
  });

  const gemsToOres = [
    'peridot',
    'ruby',
    'sapphire',
    'bort'
  ]
  gemsToOres.forEach(material => {
    let gem = AlmostUnified.getPreferredItemForTag(`forge:gems/${material}`);
    event.smelting(gem.toJson(), `#forge:ores/${material}`).xp(1.0).id(`meatsalad:smelting/${material}_from_ore`)
    event.blasting(gem.toJson(), `#forge:ores/${material}`).xp(1.0).id(`meatsalad:blasting/${material}_from_ore`)
    event.custom({
      type: "thermal:pulverizer",
      ingredient: Ingredient.of(`#forge:ores/${material}`).toJson(),
      result: [
        {
          item: gem.toItemString().slice(1, -1),
          chance: 2.5
        },
        {
          item: 'minecraft:gravel',
          chance: 0.2
        }
      ]
    }).id(`meatsalad:pulverizer/${material}_from_ore`)
    event.custom({
      type: "mekanism:enriching",
      input: {
        ingredient: Ingredient.of(`#forge:ores/${material}`).toJson()
      },
      output: gem.withCount(2).toJson()
    }).id(`meatsalad:enriching/${material}_from_ore`)
  })

  const dustSmeltings = [
    'starmetal',
    'mythril',
    'adamantite',
  ]
  dustSmeltings.forEach(material => {
    let ingot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`);
    event.smelting(ingot.toJson(), `#forge:dusts/${material}`).xp(1.0).id(`meatsalad:smelting/${material}_ingot_from_dust`)
    event.blasting(ingot.toJson(), `#forge:dusts/${material}`).xp(1.0).id(`meatsalad:blasting/${material}_ingot_from_dust`)
  })

  const ingotsFrom = [
    /*
    'titanium',
    'cobalt',
    'uru',
    */
    'starmetal',
    'adamantite',
    'mythril',
    'neutronium',
    //'ultimate'
  ]
  ingotsFrom.forEach(material => {
    let ingot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`);
    event.shapeless(ingot.withCount(9).toJson(), `#forge:storage_blocks/${material}`).id(`meatsalad:${material}_ingots_from_block`)
    
    if (!AlmostUnified.getPreferredItemForTag(`forge:nuggets/${material}`).isEmpty()) {
      event.shaped(ingot.toJson(), ['NNN', 'NNN', 'NNN'], {
        N: `#forge:nuggets/${material}`
      }).id(`meatsalad:${material}_ingot_from_nuggets`)
    }
  })
})