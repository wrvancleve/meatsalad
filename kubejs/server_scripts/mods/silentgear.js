ServerEvents.tags('item', event => {
  const GEAR_MATERIALS = {
    main: [
      '#forge:ingots/azure_electrum',
      '#forge:ingots/azure_silver',
      '#forge:ingots/blaze_gold',
      '#forge:ingots/bronze',
      '#forge:ingots/crimson_iron',
      '#forge:ingots/crimson_steel',
      '#forge:gems/diamond',
      '#forge:ingots/gold',
      '#forge:ingots/iron',
      '#forge:leather',
      'silentgear:netherwood_planks',
      '#forge:obsidian',
      '#forge:ingots/platinum',
      '#forge:ingots/refined_obsidian',
      '#forge:ingots/steel',
      '#forge:cobblestone',
      '#forge:ingots/tyrian_steel',
  
      '#forge:ingots/allthemodium',
      '#forge:ingots/unobtainium',
      '#forge:ingots/vibranium',
    ],
    rod: [
      '#forge:ingots/brass',
      '#forge:ingots/bronze',
      '#forge:ingots/electrum',
      '#forge:ingots/enderium',
      '#forge:ingots/invar',
      '#forge:ingots/iron',
      '#forge:ingots/lumium',
      'silentgear:netherwood_planks',
      '#forge:ingots/platinum',
      '#forge:gems/quartz',
      '#forge:ingots/signalum',
      '#forge:ingots/silver',
      '#forge:ingots/steel',
      '#forge:cobblestone',
    ],
    tip: [
      'minecraft:amethyst_shard',
      '#forge:gems/diamond',
      '#forge:gems/emerald',
      '#forge:gems/lapis',
      '#forge:gems/quartz',
      '#forge:dusts/redstone',
  
      '#forge:gems/aquamarine',
      '#forge:gems/jade',
      '#forge:gems/peridot',
      '#forge:gems/ruby',
      '#forge:gems/sapphire',
      '#forge:gems/topaz',
    ],
    grip: [
      'silentgear:fine_silk_cloth',
      '#forge:leather',
      'minecraft:phantom_membrane',
    ],
    adornment: [
      'minecraft:amethyst_shard',
      '#forge:gems/diamond',
      '#forge:gems/emerald',
      '#forge:gems/lapis',
      '#forge:gems/prismarine',
      '#forge:gems/quartz',
  
      '#forge:gems/peridot',
      '#forge:gems/ruby',
      '#forge:gems/sapphire',
    ],
    lining: [
      'silentgear:fine_silk_cloth',
      '#forge:leather',
      'minecraft:phantom_membrane',
      'minecraft:slime_block',
  
      'irons_spellbooks:magic_cloth',
    ],
    binding: [
      'silentgear:fine_silk',
      'silentgear:flax_string',
      'silentgear:fluffy_string',
      'silentgear:sinew_fiber',
      'minecraft:vine',
    ],
    coating: [
      '#forge:ingots/blaze_gold',
      '#forge:ingots/gold',
      'minecraft:netherite_ingot',
      '#forge:gems/prismarine',
  
      'minecraft:echo_shard',
      'quark:dragon_scale',
      'meatsalad:vulcanite',
      'meatsalad:infinity_fabric',
    ],
    cord: [
      'silentgear:fine_silk',
      'silentgear:flax_string',
      'silentgear:fluffy_string',
      'silentgear:sinew_fiber',
    ],
    fletching: [
      '#forge:feathers',
      '#minecraft:leaves',
      '#forge:paper',
  
      'quark:dragon_scale',
    ]
  }
  for (let [type, material] of Object.entries(GEAR_MATERIALS)) {
    event.add(`silentgear:materials/${type}`, material)
  }
})

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'silentgear:azure_electrum_ingot',
    'silentgear:blaze_gold_ingot',
    'silentgear:crimson_steel_ingot',
    'silentgear:crushed_shulker_shell',
    'silentgear:metal_alloyer',
    'silentgear:metal_press',
    'silentgear:recrystallizer',
    'silentgear:refabricator',
    'silentgear:template_board',
    'silentgear:blueprint_paper',
    'silentgear:coating_smithing_template',
    'silentgear:coating_smithing_template_duplication',
    'silentgear:red_card_upgrade',
    'silentgear:salvager'
  ])

  event.remove({ not: { id: 'silentgear:pebble' }, input: '#forge:hammers' })

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          { tag: 'forge:ingots/gold' },
          { tag: 'forge:dusts/gold' },
        ],
        count: 1
      },
      {
        item: 'minecraft:blaze_powder',
        count: 2
      }
    ],
    result: [Item.of('silentgear:blaze_gold_ingot')],
    energy: 12000
  }).id('meatsalad:smelter/blaze_gold_ingot')
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemicalInput: { amount: 10, infuse_type: 'mekanism:gold' },
    itemInput: { ingredient: Ingredient.of('minecraft:blaze_rod').toJson() },
    output: Item.of('silentgear:blaze_gold_ingot')
  }).id('meatsalad:metallurgic_infusing/blaze_gold_ingot')
  energize(event,
    [
      Ingredient.of('#forge:ingots/gold'),
      Ingredient.of('minecraft:blaze_powder'),
      Ingredient.of('minecraft:blaze_powder')
    ],
    12000,
    Item.of('silentgear:blaze_gold_ingot')
  )

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          { tag: 'forge:ingots/crimson_iron' },
          { tag: 'forge:dusts/crimson_iron' },
        ],
        count: 2
      },
      {
        tag: 'forge:rods/blaze',
        count: 1
      },
      {
        item: 'minecraft:magma_cream',
        count: 1
      }
    ],
    result: [Item.of('silentgear:crimson_steel_ingot')],
    energy: 16000
  }).id('meatsalad:smelter/crimson_steel_ingot')
  energize(event,
    [
      Ingredient.of('#forge:ingots/crimson_iron'),
      Ingredient.of('#forge:ingots/crimson_iron'),
      Ingredient.of('#forge:rods/blaze'),
      Ingredient.of('minecraft:magma_cream')
    ],
    16000,
    Item.of('silentgear:crimson_steel_ingot')
  )

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          { tag: 'forge:ingots/azure_silver' },
          { tag: 'forge:dusts/azure_silver' },
        ],
        count: 2
      },
      {
        value: [
          { tag: 'forge:ingots/gold' },
          { tag: 'forge:dusts/gold' },
        ],
        count: 1
      },
      {
        value: [
          { tag: 'forge:ender_pearls' },
          { tag: 'forge:dusts/ender_pearl' },
        ],
        count: 1
      }
    ],
    result: [Item.of('silentgear:azure_electrum_ingot')],
    energy: 20000
  }).id('meatsalad:smelter/azure_electrum_ingot')
  energize(event,
    [
      Ingredient.of('#forge:ingots/azure_silver'),
      Ingredient.of('#forge:ingots/azure_silver'),
      Ingredient.of('#forge:ingots/gold'),
      Ingredient.of('#forge:ender_pearls')
    ],
    20000,
    Item.of('silentgear:azure_electrum_ingot')
  )

  event.custom({
    type: "thermal:pulverizer",
    ingredient: Item.of('minecraft:shulker_shell').toJson(),
    result: [Item.of('silentgear:crushed_shulker_shell').withCount(2).toJson()]
  }).id('meatsalad:pulverizer/crushed_shulker_shell')
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: Item.of('minecraft:shulker_shell').toJson()
    },
    output: Item.of('silentgear:crushed_shulker_shell').withCount(2).toJson()
  }).id('meatsalad:crushing/crushed_shulker_shell')

  energize(event,
    [
      Ingredient.of('#forge:ingots/crimson_steel'),
      Ingredient.of('#forge:ingots/azure_electrum'),
      Ingredient.of('silentgear:crushed_shulker_shell'),
      Ingredient.of('minecraft:netherite_scrap')
    ],
    32000,
    Item.of('silentgear:tyrian_steel_ingot')
  )

  replaceShaped(event, [
    "NII",
    "APB",
    "IIE"
  ], {
    N: 'silentgear:nether_star_fragment',
    I: '#forge:dusts/iron',
    A: '#forge:dusts/azure_electrum',
    P: '#forge:dusts/platinum',
    B: '#forge:dusts/blaze_gold',
    E: 'meatsalad:ender_star_fragment'
  }, Item.of('silentgear:starmetal_dust'))
})
