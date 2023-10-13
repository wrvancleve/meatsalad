ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({ id: id });
    })
  }

  removeRecipes([
    'thermal:smelting/cured_rubber_from_smelting',
    'thermal:machines/smelter/smelter_cured_rubber'
  ])

  event.custom({
    type: 'minecraft:smelting',
    ingredient: {
      tag: 'forge:rubber'
    },
    result: 'thermal:cured_rubber',
    experience: 0.2,
    cookingtime: 200
  }).id('meatsalad:cured_rubber_smelting');
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        tag: 'forge:rubber',
        count: 2
      },
      {
        value: [
          {
            tag: 'forge:gems/sulfur'
          },
          {
            tag: 'forge:dusts/sulfur'
          }
        ],
        count: 1
      }
    ],
    result: [
      {
        item: 'thermal:cured_rubber',
        count: 4
      }
    ]
  }).id('meatsalad:smelter/cured_rubber');
})
