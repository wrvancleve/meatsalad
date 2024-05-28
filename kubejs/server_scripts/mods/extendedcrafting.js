ServerEvents.recipes(event => {
  let componentSmelting = (type, material, materialType) => {
    let result = Item.of(`extendedcrafting:${type}_component`)
    let recipeId = `${type}_component`
    let energy = 16000

    event.custom({
      type: 'thermal:smelter',
      ingredients: [
        Ingredient.of('#forge:plates/steel'),
        Item.of('extendedcrafting:luminessence'),
        { tag: `forge:${materialType}s/${material}`, count: 2 }
      ],
      result: [result],
      energy: energy
    }).id(`meatsalad:smelter/${recipeId}`)
    energize(event,
      [
        Ingredient.of('#forge:plates/steel'),
        Ingredient.of('extendedcrafting:luminessence'),
        Ingredient.of(`#forge:${materialType}s/${material}`),
        Ingredient.of(`#forge:${materialType}s/${material}`)
      ],
      energy,
      result,
      recipeId
    )
  }
  let catalystSmelting = (type) => {
    let result = Item.of(`extendedcrafting:${type}_catalyst`)
    let recipeId = `${type}_catalyst`
    let energy = 16000

    event.custom({
      type: 'thermal:smelter',
      ingredients: [
        Item.of(`extendedcrafting:${type}_component`).withCount(4),
        { tag: 'forge:plates/steel', count: 1 }
      ],
      result: [result],
      energy: energy
    }).id(`meatsalad:smelter/${recipeId}`)
    energize(event,
      [
        Ingredient.of(`extendedcrafting:${type}_component`),
        Ingredient.of(`extendedcrafting:${type}_component`),
        Ingredient.of(`extendedcrafting:${type}_component`),
        Ingredient.of(`extendedcrafting:${type}_component`),
        Ingredient.of('#forge:plates/steel')
      ],
      energy,
      result,
      recipeId
    )
  }
  let craftingTable = (type, material, previousTable) => {
    replaceShaped(event, [
      'oao',
      'tbt',
      'oso'
    ], {
      a: `extendedcrafting:${type}_catalyst`,
      o: `extendedcrafting:${type}_component`,
      t: previousTable,
      b: `#forge:storage_blocks/${material}`,
      s: '#forge:plates/steel'
    }, Item.of(`extendedcrafting:${type}_table`))
  }
  let autoCraftingTable = (type) => {
    replaceShaped(event, [
      'srs',
      'ctc',
      'srs'
    ], {
      s: '#forge:plates/steel',
      r: 'extendedcrafting:redstone_component',
      c: 'extendedcrafting:crystaltine_component',
      t: `extendedcrafting:${type}_table`
    }, Item.of(`extendedcrafting:${type}_auto_table`))
  }

  removeRecipes(event, [
    'extendedcrafting:pedestal',
    'extendedcrafting:black_iron_block',
    'extendedcrafting:black_iron_block_uncraft',
    'extendedcrafting:flux_star_block',
    'extendedcrafting:flux_star_block_uncraft',
    'extendedcrafting:ender_star_block',
    'extendedcrafting:ender_star_block_uncraft',
    'extendedcrafting:ender_star',
    'extendedcrafting:enhanced_ender_ingot',
    'extendedcrafting:enhanced_ender_ingot_block',
    'extendedcrafting:enhanced_ender_ingot_uncraft',
    'extendedcrafting:enhanced_ender_catalyst',
    'extendedcrafting:enhanced_ender_component',
    'extendedcrafting:ender_ingot',
    'extendedcrafting:ender_ingot_block_uncraft',
    'extendedcrafting:ender_ingot_recraft',
    'extendedcrafting:ender_ingot_block',
    'extendedcrafting:ender_component',
    'extendedcrafting:ender_catalyst',
    'extendedcrafting:frame',
    'extendedcrafting:crafting_core',
    'extendedcrafting:ender_ingot_uncraft',
    'extendedcrafting:luminessence',
    'extendedcrafting:black_iron_slate',
    'extendedcrafting:basic_component',
    'extendedcrafting:basic_catalyst',
    'extendedcrafting:advanced_component',
    'extendedcrafting:advanced_catalyst',
    'extendedcrafting:elite_component',
    'extendedcrafting:elite_catalyst',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:ultimate_catalyst',
    'extendedcrafting:the_ultimate_block',
    'extendedcrafting:the_ultimate_block_uncraft',
    'extendedcrafting:the_ultimate_ingot_recraft',
    'extendedcrafting:the_ultimate_ingot_uncraft',
    'extendedcrafting:the_ultimate_component',
    'extendedcrafting:the_ultimate_catalyst',
    'extendedcrafting:black_iron_ingot',
    'extendedcrafting:black_iron_ingot_recraft',
    'extendedcrafting:black_iron_ingot_uncraft',
    'extendedcrafting:redstone_ingot',
    'extendedcrafting:redstone_catalyst',
    'extendedcrafting:redstone_component',
    'extendedcrafting:redstone_ingot_block',
    'extendedcrafting:redstone_ingot_block_uncraft',
    'extendedcrafting:redstone_ingot_recraft',
    'extendedcrafting:redstone_ingot_uncraft',
    'extendedcrafting:enhanced_redstone_ingot_block',
    'extendedcrafting:enhanced_redstone_ingot_block_uncraft',
    'extendedcrafting:enhanced_redstone_ingot_recraft',
    'extendedcrafting:enhanced_redstone_ingot_uncraft',
    'extendedcrafting:enhanced_redstone_catalyst',
    'extendedcrafting:enhanced_redstone_component',
    'extendedcrafting:crystaltine_component',
    'extendedcrafting:crystaltine_catalyst',
    'extendedcrafting:guide_book',
  ])

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      { tag: 'forge:dusts/glowstone', count: 2 },
      { tag: 'forge:dusts/redstone', count: 1 },
      { tag: 'forge:gunpowder', count: 1 }
    ],
    result: [Item.of('extendedcrafting:luminessence').withCount(2)],
    energy: 16000
  }).id('meatsalad:smelter/luminessence')
  energize(event,
    [
      Ingredient.of('#forge:dusts/glowstone'),
      Ingredient.of('#forge:dusts/glowstone'),
      Ingredient.of('#forge:dusts/redstone'),
      Ingredient.of('#forge:gunpowder')
    ],
    16000,
    Item.of('extendedcrafting:luminessence').withCount(2)
  )

  const tiers = [
    { name: 'redstone', material: 'redstone', materialType: 'dust', hasCatalyst: false },
    { name: 'crystaltine', material: 'crystaltine', hasCatalyst: false },
    { name: 'basic', material: 'iron', previousTable: 'minecraft:crafting_table' },
    { name: 'advanced', material: 'gold', previousTable: 'extendedcrafting:basic_table' },
    { name: 'elite', material: 'diamond', materialType: 'gem', previousTable: 'extendedcrafting:advanced_table' },
    { name: 'ultimate', material: 'emerald', materialType: 'gem', previousTable: 'extendedcrafting:elite_table' },
  ]
  tiers.forEach(tier => {
    let materialType = tier.materialType ?? 'ingot'
    let hasCatalyst = tier.hasCatalyst ?? true
    let previousTable = tier.previousTable
    componentSmelting(tier.name, tier.material, materialType)
    if (hasCatalyst) {
      catalystSmelting(tier.name)
    }
    if (previousTable != null) {
      craftingTable(tier.name, tier.material, previousTable)
      autoCraftingTable(tier.name)
    }
  })
})
