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
        count: 4
      }
    ],
    result: [Item.of('silentgear:blaze_gold_ingot')],
    energy: 16000
  }).id('meatsalad:smelter/blaze_gold_ingot');

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
  }).id('meatsalad:smelter/crimson_steel_ingot');

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
    energy: 16000
  }).id('meatsalad:smelter/azure_electrum_ingot');

  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          { tag: 'forge:ingots/crimson_steel' },
          { tag: 'forge:dusts/crimson_steel' },
        ],
        count: 1
      },
      {
        value: [
          { tag: 'forge:ingots/azure_electrum' },
          { tag: 'forge:dusts/azure_electrum' },
        ],
        count: 1
      },
      {
        tag: 'forge:ingots/shellite',
        count: 1
      }
    ],
    result: [Item.of('silentgear:tyrian_steel_ingot')],
    energy: 16000
  }).id('meatsalad:smelter/tyrian_steel_ingot');

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