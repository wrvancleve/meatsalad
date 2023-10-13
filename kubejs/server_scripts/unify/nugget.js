//priority: 140
ServerEvents.recipes(event => {
  let nuggetTags = global.auTags.filter(function (val) {
    return /forge:nuggets/.test(val)
  })
  nuggetTags.forEach(nuggetTagString => {
    let material = nuggetTagString.replace('forge:nuggets/', '')
    let nugget = AlmostUnified.getPreferredItemForTag(nuggetTagString)
    if (nugget.isEmpty()) {
      console.log(`${material} does not have a nugget tag entry`)
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
            if (nugget.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              ingotTag.toJson(),
              Ingredient.of('thermal:press_unpacking_die').toJson(),
            ],
            result: [nugget.withCount(9).toJson()],
          }).id(`meatsalad:machines/press/unpacking/press_${material}_nugget_unpacking`)
        }
      }
    }
  });

  const nuggetsFrom = [
    'shellite',
    'mythril',
    'adamantite',
    'ultimate',
    'neutronium'
  ]
  nuggetsFrom.forEach(material => {
    let nugget = AlmostUnified.getPreferredItemForTag(`forge:nuggets/${material}`);
    event.shapeless(nugget.withCount(9).toJson(), `#forge:ingots/${material}`).id(`meatsalad:${material}_nuggets_from_ingot`)
  })
})