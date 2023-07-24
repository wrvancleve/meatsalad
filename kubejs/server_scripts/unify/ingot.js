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
      
      let nuggetTag = Ingredient.of(`#forge:nuggets/${materialType}`)
      if (!AlmostUnified.getPreferredItemForTag(`forge:nuggets/${materialType}`).isEmpty()) {
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
                nuggetTag.withCount(9).toJson(),
                Ingredient.of('thermal:press_packing_3x3_die').toJson(),
              ],
              result: [ingot.toJson()],
            }).id(`meatsalad:machines/press/packing3x3/press_${materialType}_nugget_packing`)
          }
        }
      }
    }
  });
})