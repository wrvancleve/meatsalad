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
  event.custom({
    type: 'mekanism:combining',
    extraInput: {
      amount: 2,
      ingredient: { tag: 'forge:string' }
    },
    mainInput: { ingredient: { tag: 'forge:slimeballs' } },
    output: { item: 'refinedstorage:processor_binding', count: 8 }
  }).id('meatsalad:combining/processor_binding')

  // silicon
  event.remove({ id: 'refinedstorage:silicon' })
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
  event.custom({
    type: 'mekanism:enriching',
    input: {
      ingredient: { tag: 'forge:gems/quartz' }
    },
    output: { item: 'refinedstorage:silicon' }
  }).id('meatsalad:enriching/silicon')
})
