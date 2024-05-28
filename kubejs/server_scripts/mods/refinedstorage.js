ServerEvents.recipes(event => {
  // quartz_enriched_iron
  event.remove({ id: 'refinedstorage:quartz_enriched_iron' })
  energize(event,
    [
      Ingredient.of('minecraft:iron_ingot'),
      Ingredient.of('minecraft:iron_ingot'),
      Ingredient.of('minecraft:iron_ingot'),
      Ingredient.of('minecraft:quartz'),
    ],
    12000,
    Item.of('refinedstorage:quartz_enriched_iron', 4)
  )
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          { tag: 'forge:ingots/iron' },
          { tag: 'forge:dusts/iron' },
        ],
        count: 3
      },
      {
        value: [
          { tag: 'forge:gems/quartz' },
          { tag: 'forge:dusts/quartz' },
        ],
        count: 1
      }
    ],
    result: [Item.of('refinedstorage:quartz_enriched_iron', 4)],
    energy: 12000
  }).id('meatsalad:smelter/quartz_enriched_iron')


  // processor_binding
  event.remove({ id: 'refinedstorage:processor_binding' })
  energize(event,
    [
      Ingredient.of('#forge:string'),
      Ingredient.of('#forge:slimeballs'),
      Ingredient.of('#forge:string')
    ],
    8000,
    Item.of('refinedstorage:processor_binding', 8)
  )
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        tag: 'forge:string',
        count: 2
      },
      {
        tag: 'forge:slimeballs',
        count: 1
      }
    ],
    result: [Item.of('refinedstorage:processor_binding', 8)],
    energy: 8000
  }).id('meatsalad:smelter/processor_binding')

  // silicon
  event.remove({ id: 'refinedstorage:silicon' })
  energize(event,
    [
      Ingredient.of('minecraft:quartz')
    ],
    12000,
    Item.of('refinedstorage:silicon')
  )
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        tag: 'forge:gems/quartz',
        count: 1
      }
    ],
    result: [Item.of('refinedstorage:silicon')],
    energy: 12000
  }).id('meatsalad:smelter/silicon')
})
