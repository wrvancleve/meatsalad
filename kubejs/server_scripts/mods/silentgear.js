ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({ id: id });
    })
  }

  let salvage = (mod, item, results) => {
    event.custom({
      type: "silentgear:salvaging",
      ingredient: Item.of(`${mod}:${item}`).toJson(),
      results: results
    }).id(`meatsalad:salvaging/${item}`);
  }

  event.remove({ not: { id: 'silentgear:pebble' }, input: '#forge:hammers' })
  removeRecipes([
    'silentgear:azure_electrum_ingot',
    'silentgear:blaze_gold_ingot',
    'silentgear:crimson_steel_ingot',
    'silentgear:crushed_shulker_shell',
    'silentgear:metal_alloyer',
    'silentgear:metal_press',
    'silentgear:recrystallizer',
    'silentgear:refabricator',
    'silentgear:claymore_template',
    'silentgear:claymore_blueprint',
    'silentgear:greatsword_template',
    'silentgear:greatsword_blueprint',
    'silentgear:scimitar_template',
    'silentgear:scimitar_blueprint',
    'silentgear:template_board',
    'silentgear:blueprint_paper',
  ])

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

  // allthemodium Salvaging
  salvage('allthemodium', 'allthemodium_pickaxe', [
    Item.of('allthemodium:allthemodium_ingot').withCount(3).toJson(),
    Item.of('minecraft:stick').withCount(2).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_sword', [
    Item.of('allthemodium:allthemodium_ingot').withCount(2).toJson(),
    Item.of('minecraft:stick').toJson()
  ]);
  salvage('allthemodium', 'allthemodium_axe', [
    Item.of('allthemodium:allthemodium_ingot').withCount(3).toJson(),
    Item.of('minecraft:stick').withCount(2).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_hoe', [
    Item.of('allthemodium:allthemodium_ingot').withCount(2).toJson(),
    Item.of('minecraft:stick').withCount(2).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_shovel', [
    Item.of('allthemodium:allthemodium_ingot').withCount(1).toJson(),
    Item.of('minecraft:stick').withCount(2).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_helmet', [
    Item.of('allthemodium:allthemodium_ingot').withCount(5).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_chestplate', [
    Item.of('allthemodium:allthemodium_ingot').withCount(8).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_leggings', [
    Item.of('allthemodium:allthemodium_ingot').withCount(7).toJson()
  ]);
  salvage('allthemodium', 'allthemodium_boots', [
    Item.of('allthemodium:allthemodium_ingot').withCount(4).toJson()
  ]);

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

ServerEvents.chestLootTables(event => {
  event.modify('minecraft:village/village_armorer', table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      [
        'coating',
        'lining',
        'shield',
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'ring',
        'bracelet'
      ].forEach(type => {
        global.addSingleItem(pool, `silentgear:${type}_template`, 1, global.getNotOtherCondition());
        global.addSingleItem(pool, `silentgear:${type}_blueprint`, 1, global.getOtherCondition());
      })
    });
  });

  event.modify('minecraft:village/village_fletcher', table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      [
        'cord',
        'fletching',
        'bow',
        'crossbow',
        'slingshot',
        'arrow'
      ].forEach(type => {
        global.addSingleItem(pool, `silentgear:${type}_template`, 1, global.getNotOtherCondition());
        global.addSingleItem(pool, `silentgear:${type}_blueprint`, 1, global.getOtherCondition());
      })
    });
  });

  event.modify('minecraft:village/village_toolsmith', table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      [
        'rod',
        'tip',
        'coating',
        'grip',
        'binding',
        'pickaxe',
        'shovel',
        'axe',
        'paxel',
        'hammer',
        'excavator',
        'saw',
        'hoe',
        'mattock',
        'prospector_hammer',
        'sickle',
        'shears',
        'fishing_rod'
      ].forEach(type => {
        global.addSingleItem(pool, `silentgear:${type}_template`, 1, global.getNotOtherCondition());
        global.addSingleItem(pool, `silentgear:${type}_blueprint`, 1, global.getOtherCondition());
      })
    });
  });

  event.modify('minecraft:village/village_weaponsmith', table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      [
        'sword',
        'katana',
        'machete',
        'claymore',
        'scimitar',
        'spear',
        'knife',
        'dagger'
      ].forEach(type => {
        global.addSingleItem(pool, `silentgear:${type}_template`, 1, global.getNotOtherCondition());
        global.addSingleItem(pool, `silentgear:${type}_blueprint`, 1, global.getOtherCondition());
      })
    });
  });
})
