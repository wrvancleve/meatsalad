//priority:120
ServerEvents.recipes(event => {
  let raw_materialTags = global.auTags.filter(function (val) {
    return /forge:raw_materials/.test(val)
  })
  raw_materialTags.forEach(raw_materialTagString => {
    let material = raw_materialTagString.replace('forge:raw_materials/', '')
    let raw_material = AlmostUnified.getPreferredItemForTag(raw_materialTagString)
    if (raw_material.isEmpty()) {
      console.log(`${material} does not have a raw_material tag entry`)
      return
    }
    if (!AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${material}`).isEmpty()) {
      let rawblockTag = Ingredient.of(`#forge:storage_blocks/raw_${material}`)
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (raw_material.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              rawblockTag.toJson(),
              Ingredient.of('thermal:press_unpacking_die').toJson(),
            ],
            result: [raw_material.withCount(9).toJson()],
          }).id(`meatsalad:machines/press/unpacking/press_raw_${material}_unpacking`)
        }
      }
    }
  })
})
