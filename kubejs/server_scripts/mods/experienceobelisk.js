ServerEvents.recipes(event => {
  removeRecipes(event, [
    'experienceobelisk:cognitive_flux',
    'experienceobelisk:cognitive_flux_alternate',
  ])

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        tag: 'minecraft:soul_fire_base_blocks',
        count: 1
      },
      {
        tag: 'forge:gems/quartz',
        count: 1
      },
      {
        tag: 'forge:gems/lapis',
        count: 1
      }
    ],
    result: [Item.of('experienceobelisk:cognitive_flux', 4)],
    energy: 12000
  }).id('meatsalad:smelter/cognitive_flux')
})
