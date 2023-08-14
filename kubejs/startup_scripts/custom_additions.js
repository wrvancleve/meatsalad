global.materialProperties = {
  adamantite: {
    color: '#EC1321'
  },
  mythril: {
    color: '#64EAFB'
  }
}

global.mekStackAdditions = [
  { material: 'adamantite', color: global.materialProperties.adamantite.color },
  { material: 'mythril', color: global.materialProperties.mythril.color }
]

function snakeCaseToUpperCase(input) {
  return String(input)
    .split("_")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

const $MekanismAPI = Java.loadClass('mekanism.api.MekanismAPI')
const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

StartupEvents.registry('block', event => {
  const HARVEST_LEVEL_FIVE_TAG = 'forge:needs_harvest_level_five_tool';

  const TYPE_PROPERTIES = {
    storage_block: { 
      registry_name: '{0}_block',
      base_texture_name: 'block',
      material_type: 'metal',
      display_name: 'Block of {0}',
      type_tag: 'storage_blocks',
      material_tag: '{0}',
    },
    storage_block_raw: {
      registry_name: 'raw_{0}_block',
      base_texture_name: 'raw_block',
      material_type: 'stone',
      display_name: 'Block of Raw {0}',
      type_tag: 'storage_blocks',
      material_tag: 'raw_{0}',
    },
  }

  function makeReadableText(text) {
    let i, frags = text.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  function makeBlock(textureNamespace, type, material, hardness, resistance, harvest_level_tag) {
    let color = global.materialProperties[material].color;
    let type_properties = TYPE_PROPERTIES[type];
    let registry_name = type_properties.registry_name.replace('{0}', material);
    let base_texture_name = type_properties.base_texture_name;
    let material_type = type_properties.material_type;
    let display_name = type_properties.display_name.replace('{0}', makeReadableText(material));
    let type_tag = type_properties.type_tag;
    let material_tag = type_properties.material_tag.replace('{0}', material);    

    if (harvest_level_tag != null) {
      event.create(registry_name)
        .texture('layer0', `${textureNamespace}:block/${base_texture_name}`)
        .color(0, color)
        .displayName(display_name)
        .material(material_type)
        .hardness(hardness)
        .resistance(resistance)
        .tagBoth(`forge:${type_tag}`)
        .tagBoth(`forge:${type_tag}/${material_tag}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(harvest_level_tag)
        .requiresTool(true);
    } else {
      event.create(registry_name)
        .texture('layer0', `${textureNamespace}:block/${base_texture_name}`)
        .color(0, color)
        .displayName(display_name)
        .material(material_type)
        .hardness(hardness)
        .resistance(resistance)
        .tagBoth(`forge:${type_tag}`)
        .tagBoth(`forge:${type_tag}/${material_tag}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
    }
  }

  /*
  event.create('end_neutronium_ore')
      .displayName('End Neutronium Ore')
      .material('stone')
      .hardness(3.0)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('forge:needs_harvest_level_five_tool')
      .requiresTool(true);
  */
  event.create('neutronium_block')
      .displayName('Block of Neutronium')
      .material('metal')
      .hardness(5.0)
      .resistance(6.0)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBoth('forge:storage_blocks/neutronium')
      .tagBoth('forge:storage_blocks')
      .requiresTool(true);
  
  event.create('starmetal_block')
    .displayName('Block of Starmetal')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBoth('forge:storage_blocks/starmetal')
    .tagBoth('forge:storage_blocks')
    .requiresTool(true);
  event.create('shellite_block')
    .displayName('Block of Shellite')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBoth('forge:storage_blocks/shellite')
    .tagBoth('forge:storage_blocks')
    .requiresTool(true);
  event.create('dragonsteel_block')
    .displayName('Block of Dragonsteel')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBoth('forge:storage_blocks/dragonsteel')
    .tagBoth('forge:storage_blocks')
    .requiresTool(true);
  /*
  event.create('end_adamantite_ore')
    .displayName('End Adamantite Ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:ores/adamantite')
    .tagBoth('forge:ores')
    .requiresTool(true);
  */
  event.create('adamantite_basalt_ore')
    .displayName('Basalt Adamantite Ore')
    .model('kubejs:block/adamantite_basalt_ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:ores/adamantite')
    .tagBoth('forge:ores')
    .requiresTool(true);
  event.create('adamantite_blackstone_ore')
    .displayName('Blackstone Adamantite Ore')
    .model('kubejs:block/adamantite_blackstone_ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:ores/adamantite')
    .tagBoth('forge:ores')
    .requiresTool(true);
  /*
  event.create('raw_adamantite_block')
    .displayName('Block of Raw Adamantite')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .requiresTool(true);
  */
  makeBlock({base: 'kubejs'}, 'storage_block_raw', 'adamantite', 70.0, 1200.0, HARVEST_LEVEL_FIVE_TAG);
  /*
  event.create('end_mythril_ore')
    .displayName('End Mythril Ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:ores/mythril')
    .tagBoth('forge:ores')
    .requiresTool(true);
  */
  event.create('mythril_basalt_ore')
    .displayName('Basalt Mythril Ore')
    .model('kubejs:block/mythril_basalt_ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:ores/mythril')
    .tagBoth('forge:ores')
    .requiresTool(true);
  event.create('mythril_blackstone_ore')
    .displayName('Blackstone Mythril Ore')
    .model('kubejs:block/mythril_blackstone_ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:ores/mythril')
    .tagBoth('forge:ores')
    .requiresTool(true);
  makeBlock({base: 'kubejs'}, 'storage_block_raw', 'mythril', 70.0, 1200.0, HARVEST_LEVEL_FIVE_TAG);
  /*
  event.create('raw_mythril_block')
    .displayName('Block of Raw Mythril')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .requiresTool(true);
  event.create('adamantite_block')
    .displayName('Block of Adamantite')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .requiresTool(true);
  event.create('mythril_block')
    .displayName('Block of Mythril')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .requiresTool(true);
  */
  makeBlock({base: 'kubejs'}, 'storage_block', 'adamantite', 70.0, 1200.0, HARVEST_LEVEL_FIVE_TAG);
  makeBlock({base: 'kubejs'}, 'storage_block', 'mythril', 70.0, 1200.0, HARVEST_LEVEL_FIVE_TAG);
  event.create('uru_block')
    .displayName('Block of Uru')
    .material('metal')
    .hardness(70.0)
    .resistance(1200.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:storage_blocks/uru')
    .tagBoth('forge:storage_blocks')
    .requiresTool(true);
  event.create('ultima_block')
    .displayName('Block of Ultima')
    .material('metal')
    .hardness(70.0)
    .resistance(1200.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .tagBoth('forge:storage_blocks/ultimate')
    .tagBoth('forge:storage_blocks')
    .requiresTool(true);
})

StartupEvents.registry('item', event => {
  const OVERLAY_TYPES = ['shard', 'clump', 'crystal', 'dirty_dust'];

  function getDisplayName(type, material) {
    let materialDisplay = material.charAt(0).toUpperCase() + material.substr(1).toLowerCase();
    if (type == 'raw_material') {
      return `Raw ${materialDisplay}`;
    } else {
      let i, frags = type.split('_');
      for (i=0; i<frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }
      return `${materialDisplay} ${frags.join(' ')}`;
    }
  }

  function makeItem(material, type, material_tag, rarity, glow) {
    if (material_tag == null) {
      material_tag = material;
    }
    if (rarity == null) {
      rarity = 'common'
    }
    if (glow == null) {
      glow = false
    }

    event.create(`${material}_${type}`)
      .displayName(getDisplayName(type, material))
      .tag(`forge:${type}s`)
      .tag(`forge:${type}s/${material_tag}`)
      .rarity(rarity).glow(glow)
  }

  function makeTexturedItem(textureNamespace, tagNamespace, type, material, color, rarity, glow) {
    if (rarity == null) {
      rarity = 'common'
    }
    if (glow == null) {
      glow = false
    }
    if (OVERLAY_TYPES.includes(type)) {
      event.create(`${material}_${type}`)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .texture('layer2', `${textureNamespace}:item/${type}_overlay`)
        .color(1, color)
        .displayName(getDisplayName(type, material))
        .tag(`${tagNamespace}:${type}s`)
        .tag(`${tagNamespace}:${type}s/${material}`)
        .rarity(rarity).glow(glow)
    } else {
      event.create(`${material}_${type}`)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .color(1, color)
        .displayName(getDisplayName(type, material))
        .tag(`${tagNamespace}:${type}s`)
        .tag(`${tagNamespace}:${type}s/${material}`)
        .rarity(rarity).glow(glow)
    }
  }

  /*
  event.create('adamantite').displayName('Adamantite').rarity('rare').glow(true);
  event.create('damascus').displayName('Damascus').rarity('rare').glow(true);
  event.create('orichalcum').displayName('Orichalcum').rarity('epic').glow(true);
  event.create('orichalcum_plus').displayName('Orichalcum+').rarity('epic').glow(true);
  event.create('neutronium_shard').displayName('Neutronium Shard').rarity('epic');
  event.create('neutronium_dust').displayName('Neutronium Dust').rarity('epic');
  event.create('neutronium_dirty_dust').displayName('Neutronium Dirty Dust').rarity('epic');
  event.create('neutronium_clump').displayName('Neutronium Clump').rarity('epic');
  event.create('neutronium_crystal').displayName('Neutronium Crystal').rarity('epic');
  event.create('raw_neutronium').displayName('Raw Neutronium').rarity('epic');
  event.create('neutronium_ingot').displayName('Neutronium Ingot').rarity('epic');
  event.create('neutronium_nugget').displayName('Neutronium Nugget').rarity('epic');
  event.create('neutronium_gear').displayName('Neutronium Gear').rarity('epic');
  event.create('neutronium_plate').displayName('Neutronium Plate').rarity('epic');
  */

  event.create('amethyst_dust').displayName('Amethyst Dust').tag('forge:dusts/amethyst').tag('forge:dusts');
  
  const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
  const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')
  const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')
  const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
  const SLURRY = new $SlurryDeferredRegister('kubejs')
  
  INFUSETYPE.register('dimensional_shard', 0xBCF2F0)
  INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())

  event.create('dimensional_shard_dust').displayName('Dimensional Shard Dust');

  const manualMaterials = [
    {name: 'enhanced_alloy'},
    {name: 'shiny_alloy'},
    {name: 'iridium_alloy'},
    {name: 'starmetal', rarity: 'rare'},
    {name: 'shellite'},
    {name: 'dragonsteel', rarity: 'uncommon'},
  ]
  manualMaterials.forEach(material => {
    let material_name = material.name;
    let material_tag = material.material_tag ?? material_name;
    let types = material.types ?? ['ingot', 'nugget'];
    let rarity = material.rarity;
    let glow = material.glow;
    types.forEach(type => {
      makeItem(material_name, type, material_tag, rarity, glow)
    })
  });

  /*
  event.create('starmetal_ingot').displayName('Starmetal Ingot').tag('forge:ingots/starmetal').tag('forge:ingots').rarity('rare');
  event.create('starmetal_nugget').displayName('Starmetal Nugget').tag('forge:nuggets/starmetal').tag('forge:nuggets').rarity('rare');

  event.create('shellite_dust').displayName('Shellite Dust').tag('forge:dusts/shellite').tag('forge:dusts');
  event.create('shellite_ingot').displayName('Shellite Ingot').tag('forge:ingots/shellite').tag('forge:ingots');
  event.create('shellite_nugget').displayName('Shellite Nugget').tag('forge:nuggets/shellite').tag('forge:nuggets');

  event.create('dragonsteel_dust').displayName('Dragonsteel Dust').tag('forge:dusts/dragonsteel').tag('forge:dusts').rarity('uncommon');
  event.create('dragonsteel_ingot').displayName('Dragonsteel Ingot').tag('forge:ingots/dragonsteel').tag('forge:ingots').rarity('uncommon');
  event.create('dragonsteel_nugget').displayName('Dragonsteel Nugget').tag('forge:nuggets/dragonsteel').tag('forge:nuggets').rarity('uncommon');
  */

  global.mekStackAdditions.forEach(entry => {
    makeTexturedItem('mekanism', 'mekanism', 'shard', entry.material, entry.color);
    event.create(`${entry.material}_dust`)
      .displayName(getDisplayName('dust', entry.material))
      .tag('forge:dusts')
      .tag(`forge:dusts/${entry.material}`)
    makeTexturedItem('mekanism', 'mekanism', 'dirty_dust', entry.material, entry.color);
    makeTexturedItem('mekanism', 'mekanism', 'clump', entry.material, entry.color);
    makeTexturedItem('mekanism', 'mekanism', 'crystal', entry.material, entry.color);
    event.create(`raw_${entry.material}`)
      .displayName(getDisplayName('raw_material', entry.material))
      .tag('forge:raw_materials')
      .tag(`forge:raw_materials/${entry.material}`)
    event.create(`${entry.material}_ingot`)
      .displayName(getDisplayName('ingot', entry.material))
      .tag('forge:ingots')
      .tag(`forge:ingots/${entry.material}`)
    event.create(`${entry.material}_nugget`)
      .displayName(getDisplayName('nugget', entry.material))
      .tag('forge:nuggets')
      .tag(`forge:nuggets/${entry.material}`)
    makeTexturedItem('kubejs', 'forge', 'gear', entry.material, entry.color);
    makeTexturedItem('kubejs', 'forge', 'plate', entry.material, entry.color);

    SLURRY.register(entry.material, (slurryBuilder) => slurryBuilder.ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS()))
    //SLURRY.register(`clean_${entry.material}`, $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
    //SLURRY.register(`dirty_${entry.material}`, $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
  })
  SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
  //SLURRY.register($EventBuses.getModEventBus('kubejs').get())

  /*
  event.create('adamantite_shard').displayName('Adamantite Shard');
  event.create('adamantite_dust').displayName('Adamantite Dust');
  event.create('adamantite_dirty_dust').displayName('Adamantite Dirty Dust');
  event.create('adamantite_clump').displayName('Adamantite Clump');
  event.create('adamantite_crystal').displayName('Adamantite Crystal');
  event.create('raw_adamantite').displayName('Raw Adamantite');
  event.create('adamantite_ingot').displayName('Adamantite Ingot');
  event.create('adamantite_nugget').displayName('Adamantite Nugget');
  */
  //event.create('adamantite_gear').displayName('Adamantite Gear');
  //event.create('adamantite_plate').displayName('Adamantite Plate');

  /*
  event.create('mythril_shard').displayName('Mythril Shard');
  event.create('mythril_dust').displayName('Mythril Dust');
  event.create('mythril_dirty_dust').displayName('Mythril Dirty Dust');
  event.create('mythril_clump').displayName('Mythril Clump');
  event.create('mythril_crystal').displayName('Mythril Crystal');
  event.create('raw_mythril').displayName('Raw Mythril');
  event.create('mythril_ingot').displayName('Mythril Ingot');
  event.create('mythril_nugget').displayName('Mythril Nugget');
  
  event.create('mythril_gear').displayName('Mythril Gear');
  event.create('mythril_plate').displayName('Mythril Plate');

  event.create('vibranium_tyrian_steel_ingot').displayName('Vibranium-Tyrian Steel Ingot').tag("forge:ingots/vibranium_tyrian_steel").tag("forge:ingots").rarity('uncommon');
  event.create('unobtainium_tyrian_steel_ingot').displayName('Unobtainium-Tyrian Steel Ingot').tag("forge:ingots/unobtainium_tyrian_steel").tag("forge:ingots").rarity('uncommon');
  */

  event.create('oblivion_shard').displayName('Oblivion Shard').rarity('uncommon');
  event.create('dark_matter').displayName('Dark Matter').rarity('rare');
  event.create('infused_dark_matter').displayName('Infused Dark Matter').rarity('rare');
  event.create('draconic_infused_dark_matter').displayName('Draconic Infused Dark Matter').rarity('rare').glow(true);

  event.create('crystalline_powder').displayName('Crystalline Powder').rarity('rare');
  event.create('eternal_crystal').displayName('Eternal Crystal').rarity('epic');
  event.create('infused_eternal_crystal').displayName('Infused Eternal Crystal').rarity('epic');
  event.create('draconic_infused_eternal_crystal').displayName('Draconic Infused Eternal Crystal').rarity('epic').glow(true);

  event.create('nether_core').displayName('Nether Core').rarity('rare').glow(true);
  event.create('ender_core').displayName('Ender Core').rarity('epic').glow(true);
  event.create('chaos_core').displayName('Chaos Core').rarity('epic').glow(true);

  const manualEpicMaterials = [
    {name: 'uru'},
    {name: 'neutronium', types: ['ingot', 'nugget', 'gear', 'plate']},
    {name: 'ultima', material_tag: 'ultimate'},
  ]
  manualEpicMaterials.forEach(epicMaterial => {
    let material_name = epicMaterial.name;
    let material_tag = epicMaterial.material_tag ?? material_name;
    let types = epicMaterial.types ?? ['ingot', 'nugget'];
    let rarity = 'rare';
    let glow = false;
    types.forEach(type => {
      makeItem(material_name, type, material_tag, rarity, glow)
    })
  })

  /*
  event.create('uru_ingot').displayName('Uru Ingot').tag("forge:ingots/uru").tag("forge:ingots").rarity('epic').glow(true);
  event.create('uru_nugget').displayName('Uru Nugget').tag("forge:nuggets/uru").tag("forge:nuggets").rarity('epic').glow(true);
  */

  event.create('manifest_illusion').displayName('Manifest Illusion').rarity('rare').glow(true);
  event.create('ender_star').displayName('Ender Star').rarity('rare').glow(true);
  event.create('ender_star_fragment').displayName('Ender Star Fragment').rarity('rare');
  event.create('warden_heart').displayName('Warden Heart').rarity('rare').glow(true);
  event.create('dragon_soul').displayName('Dragon Soul').rarity('epic').glow(true);

  event.create('uu_matter').displayName('UU-Matter').rarity('epic').glow(true);
  event.create('cosmic_shelling').displayName('Cosmic Shelling').rarity('epic').glow(true);
  event.create('chaos_crystal').displayName('Chaos Crystal').rarity('epic').glow(true);
  event.create('chaos_shard').displayName('Chaos Shard').rarity('epic').glow(true);

  /*
  event.create('ultima_ingot').displayName('Ultima Ingot').tag("forge:ingots/ultimate").tag("forge:ingots").rarity('epic').glow(true);
  event.create('ultima_nugget').displayName('Ultima Nugget').tag("forge:nuggets/ultimate").tag("forge:nuggets").rarity('epic').glow(true);
  */  

  event.create('infinity_fabric').displayName('Infinity Fabric').rarity('epic').glow(true);
  event.create('infinity_fiber').displayName('Infinity Fiber').rarity('epic').glow(true);
})
