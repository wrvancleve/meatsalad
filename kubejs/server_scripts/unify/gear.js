//priority:100
ServerEvents.recipes(event => {
  let gearTags = global.auTags.filter(function (val) {
    return /forge:gears/.test(val)
  })
  gearTags.forEach(gearTagString => {
    let material = gearTagString.replace('forge:gears/', '')
    let gear = AlmostUnified.getPreferredItemForTag(gearTagString)
    if (gear.isEmpty()) {
      console.log(`${material} does not have a gear tag entry`)
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
            if (gear.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              ingotTag.withCount(4).toJson(),
              Ingredient.of('thermal:press_gear_die').toJson(),
            ],
            result: [gear.toJson()],
          }).id(`meatsalad:machines/press/press_${material}_ingot_to_gear`)
        }
      }
    }
  })
})
