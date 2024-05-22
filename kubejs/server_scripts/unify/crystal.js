//priority: 200
ServerEvents.recipes(event => {
  let crystalFromSlurry = (material) => {
    event.custom({
      type: 'mekanism:crystallizing',
      chemicalType: 'slurry',
      input: {
        amount: 200,
        slurry: `kubejs:clean_${material}`
      },
      output: {
        item: `meatsalad:${material}_crystal`
      }
    }).id(`meatsalad:crystallizing/${material}_crystal_from_slurry`);
  }

  global.mekStackAdditions.forEach(entry => {
    let material = entry.material
    crystalFromSlurry(material)
  })
})
