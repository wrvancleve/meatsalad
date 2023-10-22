ServerEvents.recipes(event => {
  event.remove({ not: { id: 'silentgear:pebble' }, input: '#forge:hammers' })
  event.remove({ id: 'silentgear:azure_electrum_ingot' })
  event.remove({ id: 'silentgear:blaze_gold_ingot' })
  event.remove({ id: 'silentgear:crimson_steel_ingot' })
  event.remove({ id: 'silentgear:crushed_shulker_shell' })
  event.remove({ id: 'silentgear:metal_alloyer' })
  event.remove({ id: 'silentgear:metal_press' })
  event.remove({ id: 'silentgear:recrystallizer' })
  event.remove({ id: 'silentgear:refabricator' })

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
    energy: 16000
  }).id('meatsalad:smelter/blaze_gold_ingot');
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      {tag: 'forge:ingots/gold'},
      {item: 'minecraft:blaze_powder'},
      {item: 'minecraft:blaze_powder'}
    ],
    energy: 16000,
    result: {
      item: 'silentgear:blaze_gold_ingot'
    }
  }).id('meatsalad:energizing/blaze_gold_ingot');

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
    energy: 120000
  }).id('meatsalad:smelter/crimson_steel_ingot');
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      {tag: 'forge:ingots/crimson_iron'},
      {tag: 'forge:ingots/crimson_iron'},
      {tag: 'forge:rods/blaze'},
      {item: 'minecraft:magma_cream'}
    ],
    energy: 120000,
    result: {
      item: 'silentgear:crimson_steel_ingot'
    }
  }).id('meatsalad:energizing/crimson_steel_ingot');

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
    energy: 300000
  }).id('meatsalad:smelter/azure_electrum_ingot');
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      {tag: 'forge:ingots/azure_silver'},
      {tag: 'forge:ingots/azure_silver'},
      {tag: 'forge:ingots/gold'},
      {tag: 'forge:ender_pearls'}
    ],
    energy: 300000,
    result: {
      item: 'silentgear:azure_electrum_ingot'
    }
  }).id('meatsalad:energizing/azure_electrum_ingot');

  event.custom({
    type: "thermal:pulverizer",
    ingredient: Item.of('minecraft:shulker_shell').toJson(),
    result: [Item.of('silentgear:crushed_shulker_shell').withCount(2).toJson()]
  }).id('meatsalad:pulverizer/crushed_shulker_shell');
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: Item.of('minecraft:shulker_shell').toJson()
    },
    output: Item.of('silentgear:crushed_shulker_shell').withCount(2).toJson()
  }).id('meatsalad:crushing/crushed_shulker_shell');

  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_pickaxe').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(3).toJson(),
      Item.of('minecraft:stick').withCount(2).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_pickaxe');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_sword').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(2).toJson(),
      Item.of('minecraft:stick').toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_sword');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_axe').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(3).toJson(),
      Item.of('minecraft:stick').withCount(2).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_axe');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_hoe').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(2).toJson(),
      Item.of('minecraft:stick').withCount(2).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_hoe');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_shovel').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(1).toJson(),
      Item.of('minecraft:stick').withCount(2).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_shovel');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_helmet').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(5).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_helmet');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_chestplate').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(8).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_chestplate');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_leggings').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(7).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_leggings');
  event.custom({
    type: "silentgear:salvaging",
    ingredient: Item.of('allthemodium:allthemodium_boots').toJson(),
    results: [
      Item.of('allthemodium:allthemodium_ingot').withCount(4).toJson()
    ]
  }).id('meatsalad:salvaging/allthemodium_boots');

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      {tag: 'forge:ingots/crimson_steel'},
      {tag: 'forge:ingots/azure_electrum'},
      {item: 'silentgear:crushed_shulker_shell'},
      {item: 'minecraft:netherite_scrap'},
    ],
    energy: 1000000,
    result: {
      item: 'silentgear:tyrian_steel_ingot'
    }
  }).id('meatsalad:energizing/tyrian_steel_ingot');

  global.replaceShaped(event, [
    "NII",
    "APB",
    "IIE"
  ], {
    N: 'silentgear:nether_star_fragment',
    I: '#forge:dusts/iron',
    A: '#forge:dusts/azure_electrum',
    P: '#forge:dusts/platinum',
    B: '#forge:dusts/blaze_gold',
    E: 'kubejs:ender_star_fragment'
  }, 'silentgear', 'starmetal_dust');

  global.replaceShaped(event, [
    'QGQ',
    'PDP',
    'PBP'
  ], {
    Q: '#forge:storage_blocks/quartz',
    G: '#forge:glass/colorless',
    P: 'minecraft:polished_blackstone',
    D: 'kubejs:dark_matter',
    B: '#forge:storage_blocks/blaze_gold'
  }, 'silentgear', 'starlight_charger');
})