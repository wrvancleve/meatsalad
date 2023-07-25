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
  event.create('neutronium_block')
      .displayName('Block of Neutronium')
      .material('metal')
      .hardness(5.0)
      .resistance(6.0)
      .tagBlock('minecraft:mineable/pickaxe')
      .requiresTool(true);
  */
  event.create('starmetal_block')
    .displayName('Block of Starmetal')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(true);
  event.create('shellite_block')
    .displayName('Block of Shellite')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(true);
  event.create('dragonsteel_block')
    .displayName('Block of Dragonsteel')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(true);
  event.create('end_adamantite_ore')
    .displayName('End Adamantite Ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
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
  event.create('end_mythril_ore')
    .displayName('End Mythril Ore')
    .material('stone')
    .hardness(5.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
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
  event.create('vibranium_tyrian_steel_block')
    .displayName('Block of Vibranium-Tyrian Steel')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .requiresTool(true);
  event.create('unobtainium_tyrian_steel_block')
    .displayName('Block of Unobtainium-Tyrian Steel')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
    .requiresTool(true);
  event.create('ultima_block')
    .displayName('Block of Ultima')
    .material('metal')
    .hardness(5.0)
    .resistance(6.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_harvest_level_five_tool')
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

  function makeItem(textureNamespace, tagNamespace, type, material, color) {
    if (OVERLAY_TYPES.includes(type)) {
      event.create(`${material}_${type}`)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .texture('layer2', `${textureNamespace}:item/${type}_overlay`)
        .color(1, color)
        .displayName(getDisplayName(type, material))
        .tag(`${tagNamespace}:${type}s`)
        .tag(`${tagNamespace}:${type}s/${material}`)
    } else {
      event.create(`${material}_${type}`)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .color(1, color)
        .displayName(getDisplayName(type, material))
        .tag(`${tagNamespace}:${type}s`)
        .tag(`${tagNamespace}:${type}s/${material}`)
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

  event.create('amethyst_dust').displayName('Amethyst Dust');

  event.create('starmetal_ingot').displayName('Starmetal Ingot').rarity('rare');
  event.create('starmetal_nugget').displayName('Starmetal Nugget').rarity('rare');

  event.create('shellite_dust').displayName('Shellite Dust');
  event.create('shellite_ingot').displayName('Shellite Ingot');
  event.create('shellite_nugget').displayName('Shellite Nugget');

  event.create('dragonsteel_dust').displayName('Dragonsteel Dust').rarity('uncommon');
  event.create('dragonsteel_ingot').displayName('Dragonsteel Ingot').rarity('uncommon');
  event.create('dragonsteel_nugget').displayName('Dragonsteel Nugget').rarity('uncommon');

  global.mekStackAdditions.forEach(entry => {
    makeItem('mekanism', 'mekanism', 'shard', entry.material, entry.color);
    makeItem('kubejs', 'forge', 'dust', entry.material, entry.color);
    makeItem('mekanism', 'mekanism', 'dirty_dust', entry.material, entry.color);
    makeItem('mekanism', 'mekanism', 'clump', entry.material, entry.color);
    makeItem('mekanism', 'mekanism', 'crystal', entry.material, entry.color);
    makeItem('kubejs', 'forge', 'raw_material', entry.material, entry.color);
    makeItem('kubejs', 'forge', 'ingot', entry.material, entry.color);
    makeItem('kubejs', 'forge', 'nugget', entry.material, entry.color);
    makeItem('kubejs', 'forge', 'gear', entry.material, entry.color);
    makeItem('kubejs', 'forge', 'plate', entry.material, entry.color);
    const SlurryRegistry = $MekanismAPI.slurryRegistry()
    SlurryRegistry['register(java.lang.String,java.lang.Object)'](`clean_${entry.material}`, $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
    SlurryRegistry['register(java.lang.String,java.lang.Object)'](`dirty_${entry.material}`, $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
  })

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
  */
  //event.create('mythril_gear').displayName('Mythril Gear');
  //event.create('mythril_plate').displayName('Mythril Plate');

  event.create('vibranium_tyrian_steel_ingot').displayName('Vibranium-Tyrian Steel Ingot').rarity('uncommon');
  event.create('unobtainium_tyrian_steel_ingot').displayName('Unobtainium-Tyrian Steel Ingot').rarity('uncommon');

  event.create('oblivion_shard').displayName('Oblivion Shard').rarity('uncommon');
  event.create('dark_matter').displayName('Dark Matter').rarity('rare').glow(true);

  event.create('ancient_powder').displayName('Ancient Powder').rarity('rare').glow(true);
  event.create('ancient_chorus_chunk').displayName('Ancient Chorus Chunk').rarity('rare').glow(true);

  event.create('heart_of_the_deep').displayName('Heart of the Deep').rarity('rare');
  event.create('manifest_illusion').displayName('Manifest Illusion').rarity('rare').glow(true);
  event.create('ender_star').displayName('Ender Star').rarity('rare').glow(true);
  event.create('ender_star_fragment').displayName('Ender Star Fragment').rarity('rare');
  event.create('warden_heart').displayName('Warden Heart').rarity('rare').glow(true);
  event.create('dragon_soul').displayName('Dragon Soul').rarity('epic').glow(true);

  event.create('uu_matter').displayName('UU-Matter').rarity('epic').glow(true);
  event.create('cosmic_shelling').displayName('Cosmic Shelling').rarity('epic').glow(true);
  event.create('chaos_crystal').displayName('Chaos Crystal').rarity('epic').glow(true);
  event.create('chaos_shard').displayName('Chaos Shard').rarity('epic').glow(true);
  event.create('ultima_ingot').displayName('Ultima Ingot').rarity('epic').glow(true);
  event.create('ultima_nugget').displayName('Ultima Nugget').rarity('epic').glow(true);
  event.create('infinity_fabric').displayName('Infinity Fabric').rarity('epic').glow(true);
  event.create('infinity_fiber').displayName('Infinity Fiber').rarity('epic').glow(true);
})
