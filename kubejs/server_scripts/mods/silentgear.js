ServerEvents.tags('block', event => {
  event.add('forge:needs_vibranium_tool', 'silentgear:azure_silver_ore')
})

ServerEvents.tags('item', event => {
  const silentGearMainMaterials = [
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    '#forge:ingots/blaze_gold',
    '#forge:ingots/brass',
    '#forge:ingots/bronze',
    '#forge:ingots/crimson_iron',
    '#forge:ingots/crimson_steel',
    '#forge:gems/diamond',
    '#forge:ingots/electrum',
    '#forge:gems/emerald',
    '#forge:ingots/enderium',
    '#forge:ingots/gold',
    '#forge:ingots/invar',
    '#forge:ingots/iron',
    '#forge:leather',
    '#forge:ingots/lumium',
    'silentgear:netherwood_planks',
    '#forge:obsidian',
    '#forge:ingots/platinum',
    '#forge:ingots/refined_obsidian',
    '#forge:ingots/signalum',
    '#forge:ingots/silver',
    '#forge:ingots/steel',
    '#forge:cobblestone',
    '#forge:ingots/tyrian_steel',

    '#forge:ingots/adamantite',
    '#forge:ingots/allthemodium',
    '#forge:gems/peridot',
    '#forge:ingots/mythril',
    '#forge:gems/ruby',
    '#forge:gems/sapphire',
    '#forge:ingots/unobtainium',
    '#forge:ingots/vibranium',
  ]
  silentGearMainMaterials.forEach(silentGearMainMaterial =>
    event.add(`silentgear:materials/main`, silentGearMainMaterial)
  )

  // Silent Gear Rod Materials
  const silentGearRodMaterials = [
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    '#forge:ingots/blaze_gold',
    '#forge:ingots/brass',
    '#forge:ingots/bronze',
    '#forge:ingots/crimson_iron',
    '#forge:ingots/crimson_steel',
    '#forge:gems/diamond',
    '#forge:ingots/electrum',
    '#forge:gems/emerald',
    '#forge:ingots/enderium',
    '#forge:ingots/gold',
    '#forge:ingots/invar',
    '#forge:ingots/iron',
    '#forge:ingots/lumium',
    'silentgear:netherwood_planks',
    '#forge:obsidian',
    '#forge:ingots/platinum',
    '#forge:gems/quartz',
    '#forge:ingots/refined_obsidian',
    '#forge:ingots/signalum',
    '#forge:ingots/silver',
    '#forge:ingots/steel',
    '#forge:cobblestone',
    '#forge:ingots/tyrian_steel',

    '#forge:gems/peridot',
    '#forge:gems/ruby',
    '#forge:gems/sapphire',
  ]
  silentGearRodMaterials.forEach(silentGearRodMaterial =>
    event.add(`silentgear:materials/rod`, silentGearRodMaterial)
  )

  const silentGearTipMaterials = [
    'minecraft:amethyst_shard',
    '#forge:ingots/azure_electrum',
    '#forge:ingots/azure_silver',
    '#forge:ingots/blaze_gold',
    '#forge:ingots/crimson_iron',
    '#forge:ingots/crimson_steel',
    '#forge:gems/diamond',
    '#forge:gems/emerald',
    '#forge:ingots/gold',
    '#forge:ingots/iron',
    '#forge:gems/lapis',
    '#forge:ingots/lumium',
    '#forge:gems/quartz',
    '#forge:dusts/redstone',
    '#forge:ingots/refined_obsidian',
    '#forge:ingots/tyrian_steel',

    '#forge:gems/peridot',
    '#forge:ingots/platinum',
    '#forge:gems/ruby',
    '#forge:gems/sapphire',
    '#forge:ingots/allthemodium',
    '#forge:ingots/unobtainium',
    '#forge:ingots/vibranium',
  ]
  silentGearTipMaterials.forEach(silentGearTipMaterial =>
    event.add(`silentgear:materials/tip`, silentGearTipMaterial)
  )

  const silentGearGripMaterials = [
    'silentgear:fine_silk_cloth',
    '#forge:leather',
    'minecraft:phantom_membrane',
  ]
  silentGearGripMaterials.forEach(silentGearGripMaterial =>
    event.add(`silentgear:materials/grip`, silentGearGripMaterial)
  )

  const silentGearAdornmentMaterials = [
    'minecraft:amethyst_shard',
    '#forge:gems/diamond',
    '#forge:gems/emerald',
    'minecraft:flint',
    '#forge:gems/lapis',
    '#forge:gems/prismarine',
    '#forge:gems/quartz',

    '#forge:gems/peridot',
    '#forge:gems/ruby',
    '#forge:gems/sapphire',
  ]
  silentGearAdornmentMaterials.forEach(silentGearAdornmentMaterial =>
    event.add(`silentgear:materials/adornment`, silentGearAdornmentMaterial)
  )

  const silentGearLiningMaterials = [
    'silentgear:fine_silk_cloth',
    '#forge:leather',
    'minecraft:phantom_membrane',
    'minecraft:slime_block',

    'alexsmobs:mimicream',
    'irons_spellbooks:magic_cloth',
  ]
  silentGearLiningMaterials.forEach(silentGearLiningMaterial =>
    event.add(`silentgear:materials/lining`, silentGearLiningMaterial)
  )

  const silentGearBindingMaterials = [
    'silentgear:fine_silk',
    'silentgear:flax_string',
    'silentgear:fluffy_string',
    'silentgear:sinew_fiber',
    'minecraft:vine',
  ]
  silentGearBindingMaterials.forEach(silentGearBindingMaterial =>
    event.add(`silentgear:materials/binding`, silentGearBindingMaterial)
  )

  const silentGearCoatingMaterials = [
    '#forge:ingots/blaze_gold',
    '#forge:ingots/gold',
    'minecraft:netherite_ingot',
    '#forge:gems/prismarine',

    'minecraft:echo_shard',
    'quark:dragon_scale',
    'meatsalad:vulcanite',
    'meatsalad:infinity_fabric',
  ]
  silentGearCoatingMaterials.forEach(silentGearCoatingMaterial =>
    event.add(`silentgear:materials/coating`, silentGearCoatingMaterial)
  )

  const silentGearCordMaterials = [
    'silentgear:fine_silk',
    'silentgear:flax_string',
    'silentgear:fluffy_string',
    'silentgear:sinew_fiber',
  ]
  silentGearCordMaterials.forEach(silentGearCordMaterial =>
    event.add(`silentgear:materials/cord`, silentGearCordMaterial)
  )

  const silentGearFletchingMaterials = [
    '#forge:feathers',
    '#minecraft:leaves',
    '#forge:paper',

    'quark:dragon_scale',
  ]
  silentGearFletchingMaterials.forEach(silentGearFletchingMaterial =>
    event.add(`silentgear:materials/fletching`, silentGearFletchingMaterial)
  )
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

  replaceShaped(event, [
    'QGQ',
    'PDP',
    'PBP'
  ], {
    Q: '#forge:storage_blocks/quartz',
    G: '#forge:glass/colorless',
    P: 'minecraft:polished_blackstone',
    D: 'meatsalad:dark_matter',
    B: '#forge:storage_blocks/blaze_gold'
  }, Item.of('silentgear:starlight_charger'))
})
