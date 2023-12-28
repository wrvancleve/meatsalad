ServerEvents.recipes(event => {
  let processing = (material) => {
    event.custom({
      type: 'mekanism:purifying',
      chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
      },
      itemInput: {
          ingredient: {
              tag: `forge:ores/${material}`
          }
      },
      output: {
          count: 3,
          item: `kubejs:${material}_clump`
      }
    }).id(`meatsalad:processing/${material}/clump/from_raw_block`);
    event.custom({
      type: 'mekanism:purifying',
      chemicalInput: {
          amount: 2,
          gas: 'mekanism:oxygen'
      },
      itemInput: {
          ingredient: {
              tag: `forge:storage_blocks/raw_${material}`
          }
      },
      output: {
          count: 18,
          item: `kubejs:${material}_clump`
      }
    }).id(`meatsalad:processing/${material}/clump/from_raw_block`);
    event.custom({
      type: 'mekanism:purifying',
      chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
      },
      itemInput: {
          ingredient: {
              tag: `forge:raw_materials/${material}`
          }
      },
      output: {
          count: 2,
          item: `kubejs:${material}_clump`
      }
    }).id(`meatsalad:processing/${material}/clump/from_raw_ore`);
    event.custom({
      type: 'mekanism:purifying',
      chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
      },
      itemInput: {
          ingredient: {
              tag: `mekanism:shards/${material}`
          }
      },
      output: {
          item: `kubejs:${material}_clump`
      }
    }).id(`meatsalad:processing/${material}/clump/from_shard`);
    event.custom({
      type: 'mekanism:crystallizing',
      chemicalType: 'slurry',
      input: {
        amount: 200,
        slurry: `kubejs:clean_${material}`
      },
      output: {
          item: `kubejs:${material}_crystal`
      }
    }).id(`meatsalad:processing/${material}/crystal/from_slurry`);
    event.custom({
      type: 'mekanism:crushing',
      input: {
        ingredient: {
          tag: `mekanism:clumps/${material}`
        }
      },
      output: {
        item: `kubejs:${material}_dirty_dust`
      }
    }).id(`meatsalad:processing/${material}/dirty_dust/from_clump`);
    event.custom({
      type: 'mekanism:enriching',
      input: {
        ingredient: {
          tag: `mekanism:dirty_dusts/${material}`
        }
      },
      output: {
        item: `kubejs:${material}_dust`
      }
    }).id(`meatsalad:processing/${material}/dust/from_dirty_dust`);
    event.custom({
      type: 'mekanism:enriching',
      input: {
        ingredient: {
          tag: `forge:ores/${material}`
        }
      },
      output: {
        count: 2,
        item: `kubejs:${material}_dust`
      }
    }).id(`meatsalad:processing/${material}/dust/from_ore`);
    event.custom({
      type: 'mekanism:enriching',
      input: {
        ingredient: {
          tag: `forge:storage_blocks/raw_${material}`
        }
      },
      output: {
        count: 12,
        item: `kubejs:${material}_dust`
      }
    }).id(`meatsalad:processing/${material}/dust/from_raw_block`);
    event.custom({
      type: 'mekanism:enriching',
      input: {
        amount: 3,
        ingredient: {
          tag: `forge:raw_materials/${material}`
        }
      },
      output: {
        count: 4,
        item: `kubejs:${material}_dust`
      }
    }).id(`meatsalad:processing/${material}/dust/from_raw_ore`);
    event.custom({
      type: 'mekanism:injecting',
      chemicalInput: {
        amount: 1,
        gas: 'mekanism:hydrogen_chloride'
      },
      itemInput: {
        ingredient: {
          tag: `mekanism:crystals/${material}`
        }
      },
      output: {
        item: `kubejs:${material}_shard`
      }
    }).id(`meatsalad:processing/${material}/shard/from_crystal`);
    event.custom({
      type: 'mekanism:injecting',
      chemicalInput: {
        amount: 1,
        gas: 'mekanism:hydrogen_chloride'
      },
      itemInput: {
        ingredient: {
          tag: `forge:ores/${material}`
        }
      },
      output: {
        count: 4,
        item: `kubejs:${material}_shard`
      }
    }).id(`meatsalad:processing/${material}/shard/from_ore`);
    event.custom({
      type: 'mekanism:injecting',
      chemicalInput: {
        amount: 2,
        gas: 'mekanism:hydrogen_chloride'
      },
      itemInput: {
        ingredient: {
          tag: `forge:storage_blocks/raw_${material}`
        }
      },
      output: {
        count: 24,
        item: `kubejs:${material}_shard`
      }
    }).id(`meatsalad:processing/${material}/shard/from_raw_block`);
    event.custom({
      type: 'mekanism:injecting',
      chemicalInput: {
        amount: 1,
        gas: 'mekanism:hydrogen_chloride'
      },
      itemInput: {
        amount: 3,
        ingredient: {
          tag: `forge:raw_materials/${material}`
        }
      },
      output: {
        count: 8,
        item: `kubejs:${material}_shard`
      }
    }).id(`meatsalad:processing/${material}/shard/from_raw_ore`);
    event.custom({
      type: 'mekanism:washing',
      fluidInput: {
        amount: 5,
        tag: 'minecraft:water'
      },
      output: {
        amount: 1,
        slurry: `kubejs:clean_${material}`
      },
      slurryInput: {
        amount: 1,
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:processing/${material}/slurry/clean`);
    event.custom({
      type: 'mekanism:dissolution',
      gasInput: {
        amount: 1,
        gas: 'mekanism:sulfuric_acid'
      },
      itemInput: {
        ingredient: {
          tag: `forge:ores/${material}`
        }
      },
      output: {
        amount: 1000,
        chemicalType: 'slurry',
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:processing/${material}/slurry/dirty/from_ore`);
    event.custom({
      type: 'mekanism:dissolution',
      gasInput: {
        amount: 2,
        gas: 'mekanism:sulfuric_acid'
      },
      itemInput: {
        ingredient: {
          tag: `forge:storage_blocks/raw_${material}`
        }
      },
      output: {
        amount: 6000,
        chemicalType: 'slurry',
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:processing/${material}/slurry/dirty/from_raw_block`);
    event.custom({
      type: 'mekanism:dissolution',
      gasInput: {
        amount: 1,
        gas: 'mekanism:sulfuric_acid'
      },
      itemInput: {
        amount: 3,
        ingredient: {
          tag: `forge:raw_materials/${material}`
        }
      },
      output: {
        amount: 2000,
        chemicalType: 'slurry',
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:processing/${material}/slurry/dirty/from_raw_ore`);
  }

  processing('adamantite')
  processing('mythril')

  /*
  event.custom({
    type: 'mekanism:rotary',
    fluidInput: {
      amount: 1,
      fluid: 'kubejs:antimatter'
    },
    fluidOutput: {
      amount: 1,
      fluid: 'kubejs:antimatter'
    },
    gasInput: {
      amount: 1,
      gas: 'mekanism:antimatter'
    },
    gasOutput: {
      amount: 1,
      gas: 'mekanism:antimatter'
    }
  }).id('meatsalad:rotary/antimatter')
  */

  /*
  event.custom({
    type: 'ae2:transform',
    circumstance: { type: 'explosion' },
    ingredients: [
      Item.of('ae2:singularity'),
      Item.of('kubejs:draconic_infused_dark_matter')
    ],
    result: Item.of('ae2:quantum_entangled_singularity').withCount(2)
  }).id('meatsalad:transform/entangled_singularity')
  */

  /*
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      Item.of('minecraft:shulker_shell').withCount(2).toJson(),
      Ingredient.of('#forge:gems/apatite'),
      Ingredient.of('#forge:ingots/netherite')
    ],
    result: [Item.of('kubejs:shellite_ingot')],
    energy: 16000
  }).id('meatsalad:smelter/shellite_ingot');

  
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      Item.of('minecraft:dragon_breath').withCount(3).toJson(),
      Ingredient.of('#forge:gems/apatite').withCount(2).toJson(),
      Ingredient.of('#forge:ingots/netherite')
    ],
    result: [Item.of('kubejs:dragonsteel_ingot')],
    energy: 32000
  }).id('meatsalad:smelter/dragonsteel_ingot');
  */

  event.shaped('4x kubejs:dimensional_shard', [
    'deg',
    'irX',
    'qCc'
  ], {
    d: '#forge:gems/diamond',
    e: '#forge:gems/emerald',
    g: '#forge:ingots/gold',
    i: '#forge:ingots/iron',
    r: 'minecraft:redstone',
    X: 'minecraft:glowstone_dust',
    q: '#forge:gems/quartz',
    C: 'minecraft:prismarine_shard',
    c: '#forge:gems/certus_quartz',
  }).id('meatsalad:dimensional_shard');

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      {tag: 'forge:ingots/tyrian_steel'},
      {tag: 'forge:ingots/refined_obsidian'},
      {tag: 'forge:ingots/starmetal'},
      {tag: 'forge:ingots/refined_glowstone'},
      {tag: 'forge:ingots/iridium'},
      {tag: 'forge:ingots/neutronium'}
    ],
    energy: 20000000,
    result: {
      item: 'kubejs:abiding_alloy_ingot'
    }
  }).id('meatsalad:energizing/abiding_alloy_ingot');

  event.custom({
    type: 'thermal:crystallizer',
    ingredients: [
      {
        'fluid': 'industrialforegoing:ether_gas',
        'amount': 1000
      },
      {
        item: 'kubejs:crystalline_powder'
      }
    ],
    result: [{
      item: 'kubejs:eternal_crystal',
      count: 1
    }],
    energy: 5000
  }).id('meatsalad:crystallizer/eternal_crystal')

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: 1250,
    gasInput: {
      amount: 5,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: Item.of('alexsmobs:mimicream')
    },
    output: Item.of('kubejs:uu_matter')
  }).id('meatsalad:nucleosynthesizing/uu_matter')

  event.custom({
    type: 'mekanism:nucleosynthesizing',
    duration: 1250,
    gasInput: {
      amount: 5,
      gas: 'mekanism:antimatter'
    },
    itemInput: {
      ingredient: Ingredient.of('#forge:ingots/uranium')
    },
    output: Item.of('kubejs:neutronium_ingot')
  }).id('meatsalad:nucleosynthesizing/neutronium_ingot')

  /*
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'pamtdtmap',
      'uvcrArcvu',
      'uvcrArcvu',
      'pamtdtmap',
    ],
    key: {
      p: {tag: 'forge:ingots/palladium'},
      a: {tag: 'forge:ingots/adamantite'},
      m: {tag: 'forge:ingots/mythril'},
      t: {tag: 'forge:ingots/titanium'},
      d: {item: 'kubejs:infused_diamond'},
      u: {tag: 'forge:ingots/unobtainium'},
      v: {tag: 'forge:ingots/vibranium'},
      c: {tag: 'forge:ingots/cobalt'},
      r: {tag: 'forge:ingots/uru'},
      A: {tag: 'forge:ingots/abiding_alloy'}
    },
    result: {
      item: 'kubejs:ultima_ingot',
      count: 1
    }
  }).id('meatsalad:ultima_ingot')
  */

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'd     d',
      ' V d P ',
      '  FNC  ',
      '  DMI  ',
      '  d d  '
    ],
    key: {
      d: {item: 'kubejs:infused_diamond'},
      N: {item: 'minecraft:nether_star'},
      M: {item: 'kubejs:draconic_infused_dark_matter'},
      D: {item: 'minecraft:dragon_egg'},
      I: {item: 'kubejs:vulcanite'},
      V: {item: 'alexsmobs:void_worm_eye'},
      P: {item: 'allthemodium:piglich_heart'},
      F: {item: 'alexsmobs:farseer_arm'},
      C: {item: 'alexsmobs:dropbear_claw'},
    },
    result: {
      item: 'kubejs:manifest_illusion',
      count: 1
    }
  }).id('meatsalad:manifest_illusion')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'd     d',
      ' D d S ',
      ' eHEkC ',
      ' AsMhW ',
      '   d   '
    ],
    key: {
      d: {item: 'kubejs:infused_diamond'},
      E: {item: 'kubejs:ender_star'},
      M: {item: 'kubejs:draconic_infused_dark_matter'},
      A: {item: 'cataclysm:abyssal_egg'},
      W: {item: 'apotheosis:warden_tendril'},
      D: {item: 'quark:dragon_scale'},
      S: {item: 'progressivebosses:elder_guardian_spike'},
      e: {item: 'minecraft:echo_shard'},
      C: {item: 'alexsmobs:mosquito_larva'},
      H: {item: 'alexsmobs:soul_heart'},
      k: {item: 'alexsmobs:skreecher_soul'},
      s: {item: 'alexsmobs:straddlite'},
      h: {item: 'minecraft:shulker_shell'},
    },
    result: {
      item: 'kubejs:lost_illusion',
      count: 1
    }
  }).id('meatsalad:lost_illusion')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' O     O ',
      ' OO   OO ',
      ' OeO OeeO',
      ' OaeOevO ',
      'OeDACADO ',
      ' ODLSMDO ',
      'OeuACAmeO',
      ' OOepeOO ',
      '   OOO   '
    ],
    key: {
      S: {item: 'kubejs:cosmic_shelling'},
      C: {item: 'kubejs:chaos_shard'},
      L: {item: 'kubejs:lost_illusion'},
      M: {item: 'kubejs:manifest_illusion'},
      a: {tag: 'forge:storage_blocks/adamantite'},
      m: {tag: 'forge:storage_blocks/mythril'},
      v: {tag: 'forge:storage_blocks/vibranium'},
      u: {tag: 'forge:storage_blocks/unobtainium'},
      p: {tag: 'forge:storage_blocks/palladium'},
      A: {tag: 'forge:storage_blocks/abiding_alloy'},
      D: {item: 'kubejs:draconic_infused_dark_matter'},
      O: {item: 'kubejs:oblivion_shard'},
      e: {item: 'kubejs:draconic_infused_eternal_crystal'}
    },
    result: {
      item: 'kubejs:infinity_fabric',
      count: 1
    }
  }).id('meatsalad:infinity_fabric')

  event.shaped('8x kubejs:crystalline_powder', [
    'RDA',
    'aUc',
    'PDS'
  ], {
    R: '#forge:dusts/ruby',
    D: 'kubejs:dimensional_shard_dust',
    A: '#forge:dusts/amethyst',
    a: '#forge:dusts/apatite',
    U: 'allthemodium:ancient_soulberries',
    c: '#forge:dusts/cinnabar',
    P: '#forge:dusts/peridot',
    S: '#forge:dusts/sapphire',
  }).id('meatsalad:crystalline_powder');

  event.shaped('kubejs:oblivion_shard', [
    ' OA',
    'OMO',
    'AO '
  ], {
    O: 'minecraft:obsidian',
    A: '#forge:storage_blocks/amethyst',
    M: 'quark:myalite_crystal'
  }).id('meatsalad:oblivion_shard');

  event.shaped('kubejs:cosmic_shelling', [
    'FAL',
    'AUA',
    'EAI'
  ], {
    U: 'kubejs:uu_matter',
    F: 'minecraft:fire_charge',
    L: 'thermal:lightning_charge',
    E: 'thermal:earth_charge',
    I: 'thermal:ice_charge',
    A: '#forge:ingots/abiding_alloy'
  }).id('meatsalad:cosmic_shelling');

  event.shaped('16x pipez:infinity_upgrade', [
    'ABA',
    'BCB',
    'ADA'
  ], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'minecraft:redstone_block',
    C: 'pipez:ultimate_upgrade',
    D: 'kubejs:infinity_fiber'
  }).id('meatsalad:pipez_infinity_upgrade')
  event.shaped('thermal:machine_efficiency_creative_augment', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'thermal:lightning_charge',
    C: 'thermal:energy_cell',
    D: 'thermal:upgrade_augment_3',
    E: 'kubejs:infinity_fiber'
  }).id('meatsalad:thermal_machine_efficiency_creative_augment')
  event.shaped('powah:energy_cell_creative', [
    'UIU',
    'CDC',
    'UIU'
  ], {
    U: 'allthemodium:unobtainium_block',
    I: 'kubejs:infinity_fiber',
    C: 'powah:energy_cell_nitro',
    D: 'powah:dielectric_casing'
  }).id('meatsalad:powah_energy_cell_creative')
  event.shaped('mekanism:creative_fluid_tank', [
    'ISI',
    'SUS',
    'ISI'
  ], {
    I: 'kubejs:infinity_fiber',
    S: '#forge:ingots/iron',
    U: 'mekanism:ultimate_fluid_tank'
  }).id('meatsalad:mekanism_creative_fluid_tank')
  event.shaped('mekanism:creative_chemical_tank', [
    'ISI',
    'SUS',
    'ISI'
  ], {
    I: 'kubejs:infinity_fiber',
    S: '#forge:ingots/osmium',
    U: 'mekanism:ultimate_chemical_tank'
  }).id('meatsalad:mekanism_creative_chemical_tank')
})