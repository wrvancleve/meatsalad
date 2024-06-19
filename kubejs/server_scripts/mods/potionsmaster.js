ServerEvents.recipes(event => {
  removeRecipes(event, [
    'potionsmaster:activated_charcoal',
    'potionsmaster:allthemodium_powder',
    'potionsmaster:aluminium_powder',
    'potionsmaster:azuresilver_powder',
    'potionsmaster:blaze_powder',
    'potionsmaster:calcinatedallthemodium_powder',
    'potionsmaster:calcinatedaluminium_powder',
    'potionsmaster:calcinatedazuresilver_powder',
    'potionsmaster:calcinatedcoal_powder',
    'potionsmaster:calcinatedcopper_powder',
    'potionsmaster:calcinatedcrimsoniron_powder',
    'potionsmaster:calcinateddiamond_powder',
    'potionsmaster:calcinatedemerald_powder',
    'potionsmaster:calcinatedgold_powder',
    'potionsmaster:calcinatediron_powder',
    'potionsmaster:calcinatedlapis_powder',
    'potionsmaster:calcinatedlead_powder',
    'potionsmaster:calcinatednetherite_powder',
    'potionsmaster:calcinatednickel_powder',
    'potionsmaster:calcinatedosmium_powder',
    'potionsmaster:calcinatedplatinum_powder',
    'potionsmaster:calcinatedquartz_powder',
    'potionsmaster:calcinatedredstone_powder',
    'potionsmaster:calcinatedsilver_powder',
    'potionsmaster:calcinatedtin_powder',
    'potionsmaster:calcinatedunobtainium_powder',
    'potionsmaster:calcinateduranium_powder',
    'potionsmaster:calcinatedvibranium_powder',
    'potionsmaster:calcinatedzinc_powder',
    'potionsmaster:charcoal_powder',
    'potionsmaster:coal_powder',
    'potionsmaster:copper_powder',
    'potionsmaster:crimsoniron_powder',
    'potionsmaster:diamond_powder',
    'potionsmaster:emerald_powder',
    'potionsmaster:ender_powder',
    'potionsmaster:gold_powder',
    'potionsmaster:iron_powder',
    'potionsmaster:lapis_powder',
    'potionsmaster:lead_powder',
    'potionsmaster:netherite_powder',
    'potionsmaster:nickel_powder',
    'potionsmaster:osmium_powder',
    'potionsmaster:pestle',
    'potionsmaster:platinum_powder',
    'potionsmaster:quartz_powder',
    'potionsmaster:redstone_powder',
    'potionsmaster:silver_powder',
    'potionsmaster:tile_mortar',
    'potionsmaster:tin_powder',
    'potionsmaster:unobtainium_powder',
    'potionsmaster:uranium_powder',
    'potionsmaster:vibranium_powder',
    'potionsmaster:zinc_powder',
  ])

  let calcinate = (registry_name, material_name) => {
    material_name = material_name ?? registry_name
    energize(event,
      [
        Ingredient.of(`#forge:dusts/${material_name}`),
        Ingredient.of('#forge:dusts/ender_pearl'),
        Ingredient.of('extendedcrafting:luminessence'),
      ],
      12000,
      Item.of(`potionsmaster:calcinated${registry_name}_powder`)
    )
    event.custom({
      type: 'thermal:smelter',
      ingredients: [
        {
          value: [
            { tag: `forge:dusts/${material_name}` },
          ],
          count: 1
        },
        {
          value: [
            { tag: 'forge:dusts/ender_pearl' },
          ],
          count: 1
        },
        {
          value: [
            { item: 'extendedcrafting:luminessence' },
          ],
          count: 1
        }
      ],
      result: [Item.of(`potionsmaster:calcinated${registry_name}_powder`)],
      energy: 12000
    }).id(`meatsalad:smelter/calcinated${registry_name}_powder`)
  }

  const calcinateRecipes = [
    { name: 'allthemodium' },
    { name: 'aluminium', material: 'aluminum' },
    { name: 'azuresilver', material: 'azure_silver' },
    { name: 'coal' },
    { name: 'copper' },
    { name: 'crimsoniron', material: 'crimson_iron' },
    { name: 'diamond' },
    { name: 'emerald' },
    { name: 'gold' },
    { name: 'iron' },
    { name: 'lapis' },
    { name: 'lead' },
    { name: 'netherite' },
    { name: 'nickel' },
    { name: 'osmium' },
    { name: 'platinum' },
    { name: 'quartz' },
    { name: 'redstone' },
    { name: 'silver' },
    { name: 'tin' },
    { name: 'unobtainium' },
    { name: 'uranium' },
    { name: 'vibranium' },
    { name: 'zinc' },
  ]
  calcinateRecipes.forEach(calcinateRecipe => {
    calcinate(calcinateRecipe.name, calcinateRecipe.material)
  })
})
