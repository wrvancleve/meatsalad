//priority: 190
ServerEvents.recipes(event => {
  let storageTags = global.auTags.filter(function (val) {
    return /forge:storage_blocks/.test(val)
  })
  storageTags.forEach(storageTagString => {
    let material = storageTagString.replace('forge:storage_blocks/', '')
    let raw = false
    if (/raw_/.test(material)) {
      raw = true
      material = material.replace('raw_', '')
    }
    let storage = AlmostUnified.getPreferredItemForTag(storageTagString)
    if (storage.isEmpty()) {
      console.log(`${material} does not have a storage_blocks tag entry`)
      return
    }
    let ingotTagString = `forge:ingots/${material}`
    if (AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      ingotTagString = `forge:gems/${material}`
    }
    if (raw) {
      ingotTagString = `forge:raw_materials/${material}`
    }
    if (!AlmostUnified.getPreferredItemForTag(ingotTagString).isEmpty()) {
      let ingotTag = Ingredient.of(`#${ingotTagString}`)
      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'thermal:press' }, recipe => {
          let recipeJson = recipe.json
          recipeJson.get('result').forEach(item => {
            if (storage.equalsIgnoringCount(Item.of(item))) {
              count++
            }
          })
        })
        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              ingotTag.withCount(9).toJson(),
              Ingredient.of('thermal:press_packing_3x3_die').toJson(),
            ],
            result: [storage.toJson()],
          }).id(`meatsalad:machines/press/packing3x3/press_${raw ? 'raw_' : ''}${material}_packing`)
        }
      }
    }
  })
})