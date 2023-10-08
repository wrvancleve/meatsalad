//priority:110
ServerEvents.recipes(event => {
  let plateTags = global.auTags.filter(function (val) {
    return /forge:plates/.test(val)
  })
  plateTags.forEach(plateTagString => {
    let material = plateTagString.replace('forge:plates/', '')
    let plate = AlmostUnified.getPreferredItemForTag(plateTagString)
    if (plate.isEmpty()) {
      console.log(`${material} does not have a plate tag entry`)
      return
    }
    let ingotTagString = `forge:ingots/${material}`
    if (AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      ingotTagString = `forge:gems/${material}`
    }
    if (!AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      let ingotTag = Ingredient.of(`#${ingotTagString}`)
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (plate.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredient: ingotTag.toJson(),
            result: [plate.toJson()],
          }).id(`meatsalad:machines/press/press_${material}_ingot_to_plate`)
        }
      }
    }
  })
})
