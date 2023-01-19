//priority: 997
onEvent('recipes', e => {
  let oreOverride = {
    iron: 'minecraft',
    gold: 'minecraft',
    copper: 'minecraft',
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    crimson_iron: 'silentgear',
    azure_silver: 'silentgear'
  }

  let craftOverride = {
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    crimson_iron: 'silentgear',
    azure_silver: 'silentgear'
  }
  function mekUnifyOres(metal, type) {
    let input = '';
    let inputCount = 1;
    let output = '';
    let outputCount = 1;

    if (type === 'ingot') {
      input = `#forge:ingots/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      e.remove({ id: `mekanism:processing/${metal}/dust/from_ingot` })

      e.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": Ingredient.of(input)
        },
        "output": Ingredient.of(output)
      }).id(`kubejs:mekanism/crushing/${type}_${metal}`)
      return;
    }

    if (type === 'ore') {
      input = `#forge:ores/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 2;

      e.remove({ id: `mekanism:processing/${metal}/dust/from_ore` })
    }

    if (type === 'raw_ore') {
      input = `#forge:raw_ores/${metal}`;
      inputCount = 3;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 4;

      e.remove({ id: `mekanism:processing/${metal}/dust/from_raw_ore` })
    }

    if (type === 'raw_block') {
      input = `#forge:storage_blocks/raw_${metal}`;
      inputCount = 1;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 12;

      e.remove({ id: `mekanism:processing/${metal}/dust/from_raw_block` })
    }

    if (type === 'dirty_dust') {
      input = `#mekanism:dirty_dusts/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;

      e.remove({ id: `mekanism:processing/${metal}/dust/from_dirty_dust` })
    }

    e.custom({
      "type": "mekanism:enriching",
      "input": {
        "amount": inputCount,
        "ingredient": Ingredient.of(input)
      },
      "output": {
        "item": output,
        "count": outputCount,
      }
    }).id(`kubejs:mekanism/enriching/${metal}/dust/from_${type}`)
  }

  let thermalSecondaries = {
    zinc: "copper",
    tin: "thermal:apatite",
    silver: "lead",
    iron: "nickel",
    platinum: "tin",
    copper: "gold",
    lead: "silver",
    nickel: "copper",
    gold: "thermal:cinnabar",
  }

  let thermalSmelterRawSecondaryChanceOverrides = {
    tin: 0.2
  }

  let thermalSmelterOreSecondaryChanceOverrides = {
    tin: 0.8,
    gold: 0.1
  }

  function thermalUnifySmelterDustRecipe(metal) {
    if (vanillaMetals.includes(metal)) {
      return;
    }

    if (thermalMetals.includes(metal) || thermalAlloys.includes(metal)) {
      e.remove({type: "thermal:smelter", id: `/smelter_${metal}_dust/`});
    }

    let id = `kubejs:thermal/smelter/${metal}_dust`;
    let ingredient = Ingredient.of(`#forge:dusts/${metal}`);
    let outputs = [];

    let mainResult = {"item": `${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, "count": 1};
    outputs.push(mainResult)

    e.custom({
      "type": "thermal:smelter",
      "ingredient": ingredient,
      "result": outputs,
      "energy_mod": 0.5
    }).id(id);
  }

  function thermalUnifySmelterRawRecipe(metal) {
    if (vanillaMetals.includes(metal) || thermalMetals.includes(metal)) {
      e.remove({type: "thermal:smelter", id: `/raw_${metal}/`});
    }

    let id = `kubejs:thermal/smelter/raw_${metal}`;
    let ingredient = Ingredient.of(`#forge:raw_materials/${metal}`)
    let outputs = [];

    let mainResult = {"item": `${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, "chance": 1.5, "locked": true};
    outputs.push(mainResult);

    if (metal in thermalSecondaries) {
      let extraItemName = thermalSecondaries[metal]
      let extraItem;
      let chance = 1;

      if (metal in thermalSmelterRawSecondaryChanceOverrides) {
        chance = thermalSmelterRawSecondaryChanceOverrides[metal];
      }

      if (extraItemName.includes('thermal')) {
        extraItem = Item.of(extraItemName)
      } else if (extraItemName === 'iron' || extraItemName === 'gold') {
        extraItem = Item.of(`minecraft:${extraItemName}_nugget`)
      } else {
        extraItem = Item.of(`${craftOverride[extraItemName] ?? 'alltheores'}:${extraItemName}_nugget`)
      }

      outputs.push(extraItem.withChance(chance))
    }

    e.custom({
      "type": "thermal:smelter",
      "ingredient": ingredient,
      "result": outputs,
      "experience": 0.1
    }).id(id);
  }

  function thermalUnifySmelterOreRecipe(metal) {
    if (vanillaMetals.includes(metal) || thermalMetals.includes(metal)) {
      e.remove({type: "thermal:smelter", id: `/${metal}_ore/`});
    }

    let id = `kubejs:thermal/smelter/${metal}_ore`;
    let ingredient = Ingredient.of(`#forge:ores/${metal}`);
    let outputs = [];

    let mainResult = {"item": `${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, "chance": 1.0};
    outputs.push(mainResult);

    if (metal in thermalSecondaries) {
      let extraItemName = thermalSecondaries[metal];
      let chance = 0.2;

      if (metal in thermalSmelterOreSecondaryChanceOverrides) {
        chance = thermalSmelterRawSecondaryChanceOverrides[metal];
      }

      if (extraItemName.includes('thermal')) {
        outputs.push({"item": extraItemName, "chance": chance})
      } else {
        outputs.push({"item": `${oreOverride[extraItemName] ?? 'alltheores'}:${extraItemName}_ingot`, "chance": chance})
      }
    }

    outputs.push(Item.of("thermal:rich_slag").withChance(0.2));

    e.custom({
      "type": "thermal:smelter",
      "ingredient": ingredient,
      "result": outputs,
      "experience": 0.2
    }).id(id);
  }

  function thermalUnifySmelterAlloyRecipe(metal) {
    if (thermalAlloys.includes(metal)) {
      e.remove({type: "thermal:smelter", id: `/alloy_${metal}/`})
    }
  }

  function thermalUnifySmelterMetalAll(metal) {
    thermalUnifySmelterDustRecipe(metal);
    thermalUnifySmelterRawRecipe(metal);
    thermalUnifySmelterOreRecipe(metal);
  }

  function thermalUnifySmelterAlloyAll(metal) {
    thermalUnifySmelterDustRecipe(metal);
    thermalUnifySmelterAlloyRecipe(metal);
  }

  function thermalUnifyPulverizer(metal, type) {
    let outputs = []
    let input = Ingredient.of(`#forge:${type}s/${metal}`)
    let id = `kubejs:thermal/pulverizer/${metal}_dust_from_${type}`
    let experience = 0
    let energy_mod = 1

    if (type === 'ingot') {
      e.remove({ type: 'thermal:pulverizer', id: `/${metal}_ingot_to_dust/` })
      outputs.push(Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`))
      energy_mod = 0.5
    } else if (type === 'ore') {
      e.remove({ type: 'thermal:pulverizer', id: `/${metal}_ore/` })
      outputs.push(Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`).withChance(2.0))
      if (metal in thermalSecondaries) {
        let extraItem = thermalSecondaries[metal]
        if (extraItem.includes('thermal')) {
          outputs.push(Item.of(extraItem).withChance(0.1))
        } else {
          outputs.push(Item.of(`${craftOverride[extraItem] ?? 'alltheores'}:${extraItem}_dust`).withChance(0.1))
        }
      }
      outputs.push(Item.of('minecraft:gravel').withChance(0.2))
      experience = 0.2
    } else if (type === 'raw_ore') {
      e.remove({ type: 'thermal:pulverizer', id: `/raw_${metal}/` })
      outputs.push(Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`).withChance(1.25))
      if (metal in thermalSecondaries) {
        let extraItem = thermalSecondaries[metal]
        if (extraItem.includes('thermal')) {
          outputs.push(Item.of(extraItem).withChance(0.05))
        } else {
          outputs.push(Item.of(`${craftOverride[extraItem] ?? 'alltheores'}:${extraItem}_dust`).withChance(0.05))
        }
      }
      experience = 0.1
    } else { return; }

    e.custom({
      "type": "thermal:pulverizer",
      "ingredient": input,
      "result": outputs,
      "experience": experience,
      "energy_mod": energy_mod
    }).id(id)
  }

  function thermalUnifyPress(metal, type) {
    let outputs = []
    let inputs = []
    let id = ''

    if (type === 'plate') {
      e.remove({ type: `thermal:press`, id: `/press_${metal}_ingot_to_${type}/` })
      inputs = [{ tag: `forge:ingots/${metal}` }]
      outputs = [Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_${type}`)]
      id = `kubejs:thermal/press/press_${metal}_ingot_to_${type}`
    } else if (type === 'gear') {
      e.remove({ type: `thermal:press`, id: `/press_${metal}_ingot_to_${type}/` })
      inputs = [{
        tag: `forge:ingots/${metal}`,
        count: 4
      }, {
        item: 'thermal:press_gear_die'
      }]
      outputs = [Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_${type}`)]
      id = `kubejs:thermal/press/press_${metal}_ingot_to_${type}`
    } else if (type === 'unpacking') {
      e.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:storage_blocks/${metal}`
      }, {
        item: 'thermal:press_unpacking_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, 9)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'nugget_unpacking') {
      e.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:ingots/${metal}`
      }, {
        item: 'thermal:press_unpacking_die'
      }]
      if (metal == 'copper') {
        outputs = [Item.of(`alltheores:${metal}_nugget`, 9)]
      } else {
        outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_nugget`, 9)]
      }
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'raw_unpacking') {
      e.remove({ type: `thermal:press`, id: `/press_raw_${metal}_unpacking/` })
      inputs = [{
        tag: `forge:storage_blocks/raw_${metal}`
      }, {
        item: 'thermal:press_unpacking_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:raw_${metal}`, 9)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'packing') {
      e.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:ingots/${metal}`,
        count: 9
      }, {
        item: 'thermal:press_packing_3x3_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_block`)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'nugget_packing') {
      e.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:nuggets/${metal}`,
        count: 9
      }, {
        item: 'thermal:press_packing_3x3_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'raw_packing') {
      e.remove({ type: `thermal:press`, id: `/press_raw_${metal}_packing/` })
      inputs = [{
        tag: `forge:raw_materials/${metal}`,
        count: 9
      }, {
        item: 'thermal:press_packing_3x3_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:raw_${metal}_block`)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else { return; }

    e.custom({
      "type": "thermal:press",
      "ingredients": inputs,
      "result": outputs
    }).id(id)
  }

  function blastingUnifyOres(ore) {
    //find all dust to ingot recipes, remove, and replace with a single one
    e.remove({ type: "minecraft:blasting", output: `#forge:ingots/${ore}`, input:`#forge:dusts/${ore}`})
    e.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:dusts/${ore}`).xp(0.2).id(`kubejs:blasting/${ore}_ingot_from_dust`)
    e.remove({ type: "minecraft:smelting", output: `#forge:ingots/${ore}`, input:`#forge:dusts/${ore}`})
    e.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:dusts/${ore}`).xp(0.2).id(`kubejs:smelting/${ore}_ingot_from_dust`)
    //find all ore to ingot recipes, remove, and replace with a single one
    e.remove({ type: "minecraft:blasting", output: `#forge:ingots/${ore}`, input:`#forge:ores/${ore}`})
    e.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:ores/${ore}`).xp(1.0).id(`kubejs:blasting/${ore}_ingot_from_ore`)
    e.remove({ type: "minecraft:smelting", output: `#forge:ingots/${ore}`, input:`#forge:ores/${ore}`})
    e.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:ores/${ore}`).xp(1.0).id(`kubejs:smelting/${ore}_ingot_from_ore`)
    // find all raw ore to ingot recipes, remove, and replace with a single one
    e.remove({ type: "minecraft:blasting", output: `#forge:ingots/${ore}`, input:`#forge:raw_materials/${ore}`})
    e.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:raw_materials/${ore}`).xp(0.7).id(`kubejs:blasting/${ore}_ingot_from_raw`)
    e.remove({ type: "minecraft:smelting", output: `#forge:ingots/${ore}`, input:`#forge:raw_materials/${ore}`})
    e.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:raw_materials/${ore}`).xp(0.7).id(`kubejs:smelting/${ore}_ingot_from_raw`)
  }

  atoMetals.concat(vanillaMetals, atmMetals).forEach(ore => {
    ['ore', 'raw_ore', 'ingot'].forEach(type => thermalUnifyPulverizer(ore, type));
    ['plate', 'gear', 'unpacking', 'packing', 'raw_unpacking', 'raw_packing', 'nugget_unpacking', 'nugget_packing'].forEach(type => thermalUnifyPress(ore, type));
    blastingUnifyOres(ore);
    thermalUnifySmelterMetalAll(ore);
    e.remove({ id: `thermal:parts/${ore}_gear` });
    // remove combiner recipes
    e.remove({ type: "mekanism:combining", id: `/${ore}\/ore/` });
  });

  atoAlloys.forEach(alloy => {
    ['plate', 'gear', 'unpacking', 'packing', 'nugget_unpacking', 'nugget_packing'].forEach(type => thermalUnifyPress(alloy, type));
    thermalUnifyPulverizer(alloy, 'ingot');
    thermalUnifySmelterAlloyAll(alloy);
    mekUnifyOres(alloy, 'ingot');
    e.remove({ id: `thermal:parts/${alloy}_gear` });
  });

  vanillaMetals.concat(mekanismMetals).forEach(ore => {
    ['ore', 'raw_ore', 'raw_block', 'ingot', 'dirty_dust'].forEach(type => mekUnifyOres(ore, type));
  });

  mekanismMetals.forEach(metal => {
    removeRecipeByID(e, [
      `mekanism:processing/${metal}/raw_storage_blocks/from_raw`,
      `mekanism:processing/${metal}/raw/from_raw_block`,
      `mekanism:processing/${metal}/storage_blocks/from_ingots`,
      `mekanism:processing/${metal}/ingot/from_block`,
      `mekanism:processing/${metal}/nugget/from_ingot`,
    ])
    e.remove({ output: `mekanism:ingot_${metal}` })
  });

  // Mek alloys overlapping with ATO
  ['steel', 'bronze'].forEach(metal => {
    removeRecipeByID(e, [
      `mekanism:nuggets/${metal}`,
      `mekanism:storage_blocks/${metal}`,
      `mekanism:processing/${metal}/ingot/from_nuggets`,
      `mekanism:processing/${metal}/ingot/from_block`,
      `mekanism:processing/${metal}/ingot/from_dust_smelting`,
      `mekanism:processing/${metal}/ingot/from_dust_blasting`
    ])
  });

  thermalMetals.forEach(metal => {
    removeRecipeByID(e, [
      `thermal:storage/raw_${metal}_block`,
      `thermal:storage/raw_${metal}_from_block`,
      `thermal:smelting/${metal}_ingot_from_raw_blasting`,
      `thermal:smelting/${metal}_ingot_from_raw_smelting`,
      `thermal:smelting/${metal}_ingot_from_ore_blasting`,
      `thermal:smelting/${metal}_ingot_from_ore_smelting`,
      `thermal:smelting/${metal}_ingot_from_deepslate_ore_blasting`,
      `thermal:smelting/${metal}_ingot_from_deepslate_ore_smelting`,
      `thermal:smelting/${metal}_ingot_from_dust_blasting`,
      `thermal:smelting/${metal}_ingot_from_dust_smelting`
    ])
  });

  thermalMetals.concat(thermalAlloys).forEach(metal => {
    removeRecipeByID(e, [
      `thermal:storage/${metal}_block`,
      `thermal:storage/${metal}_ingot_from_block`,
      `thermal:storage/${metal}_ingot_from_nuggets`,
      `thermal:storage/${metal}_nugget_from_ingot`,
      `thermal:smelting/${metal}_ingot_from_dust_blasting`,
      `thermal:smelting/${metal}_ingot_from_dust_smelting`,
    ])
  });

  removeRecipeByID(e, [
    'thermal:electrum_dust_2',
    'thermal:fire_charge/electrum_ingot_2',
    'thermal:constantan_dust_2',
    'thermal:fire_charge/constantan_ingot_2',
    'thermal:enderium_dust_2',
    'thermal:fire_charge/enderium_ingot_2',
    'thermal:lumium_dust_4',
    'thermal:fire_charge/lumium_ingot_4',
    'thermal:signalum_dust_4',
    'thermal:fire_charge/signalum_ingot_4',
    'thermal:invar_dust_3',
    'thermal:fire_charge/invar_ingot_3',
    'thermal:bronze_dust_4',
  ]);

  ['crimson_iron', 'azure_silver', 'iridium'].forEach(ore => {
    ['ore', 'raw_ore', 'ingot'].forEach(type => mekUnifyOres(ore, type));
    blastingUnifyOres(ore);
  });

  e.shapeless('4x alltheores:enderium_dust', [
    '3x #forge:dusts/lead',
    '#forge:dusts/platinum',
    '4x #forge:dusts/ender_pearl',
  ])

  // recipe fixes
  e.replaceOutput({}, '#forge:dusts/diamond', 'alltheores:diamond_dust')

  removeRecipeByID(e, [
    'thermal:smelting/netherite_ingot_from_dust_smelting',
    'thermal:smelting/netherite_ingot_from_dust_blasting',
    'industrialforegoing:iron_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:diamond_gear',
    `mekanism:processing/steel/ingot_to_dust`,
    'allthemodium:mek_processing/allthemodium/ingot/from_dust_smelting',
    'allthemodium:mek_processing/vibranium/ingot/from_dust_smelting',
    'allthemodium:mek_processing/unobtainium/ingot/from_dust_smelting',
    'twilightforest:uncrafting_table'
  ]);

  removeRecipeByOutput(e, [
    'silentgear:iron_rod',
  ]);
})
