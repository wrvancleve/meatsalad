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
              {tag: ingotTagString, count: 4},
              Ingredient.of('thermal:press_gear_die').toJson(),
            ],
            result: [gear.toJson()],
          }).id(`meatsalad:machines/press/press_${material}_ingot_to_gear`)
        }
      }
    }
  })

  /*
  const gearFrom = [
    'mythril',
    'adamantite',
    'neutronium'
  ]
  gearFrom.forEach(material => {
    let gear = AlmostUnified.getPreferredItemForTag(`forge:gears/${material}`);
    event.shaped(gear.toJson(), [' I ', 'INI', ' I '], {
      I: `#forge:ingots/${material}`,
      N: '#forge:nuggets/iron'
    }).id(`meatsalad:${material}_gear_from_ingots`)
  })
  */
})
