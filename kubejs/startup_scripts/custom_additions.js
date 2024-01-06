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

function makeReadableText(text) {
  return String(text)
    .split('_')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

const $MekanismAPI = Java.loadClass('mekanism.api.MekanismAPI')
const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

/*
StartupEvents.registry('fluid', event => {
  event.create('antimatter').thickTexture(0xA464B3).bucketColor(0xA464B3).displayName('Liquid Antimatter')
})
*/

StartupEvents.registry('block', event => {
  const HARVEST_LEVEL_NETHERITE_TAG = 'forge:needs_netherite_tool';

  const TYPE_PROPERTIES = {
    storage_block: { 
      registry_name: '{0}_block',
      material_type: 'metal',
      display_name: 'Block of {0}',
      type_tag: 'forge:storage_blocks',
      material_tag: '{0}',
    },
    storage_block_raw: {
      registry_name: 'raw_{0}_block',
      material_type: 'stone',
      display_name: 'Block of Raw {0}',
      type_tag: 'forge:storage_blocks',
      material_tag: 'raw_{0}',
    },
    basalt_ore: {
      registry_name: '{0}_basalt_ore',
      material_type: 'stone',
      display_name: 'Basalt {0} Ore',
      type_tag: 'forge:ores',
      material_tag: '{0}',
    },
    blackstone_ore: {
      registry_name: '{0}_blackstone_ore',
      material_type: 'stone',
      display_name: 'Blackstone {0} Ore',
      type_tag: 'forge:ores',
      material_tag: '{0}',
    },
  }

  function createBlock(material, type, harvest_level_tag, hardness, resistance) {
    let type_properties = TYPE_PROPERTIES[type];
    let registry_name = type_properties.registry_name.replace('{0}', material);
    let display_name = type_properties.display_name.replace('{0}', makeReadableText(material));
    let material_type = type_properties.material_type;
    let blockHardness = hardness ?? type_properties.hardness ?? 5.0;
    let blockResistance = resistance ?? type_properties.resistance ?? 6.0;
    let type_tag = type_properties.type_tag;
    let material_tag = type_properties.material_tag.replace('{0}', material);

    if (harvest_level_tag != null) {
      event.create(registry_name)
        .displayName(display_name)
        .material(material_type)
        .hardness(blockHardness)
        .resistance(blockResistance)
        .tagBoth(type_tag)
        .tagBoth(`${type_tag}/${material_tag}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(harvest_level_tag)
        .requiresTool(true);
    } else {
      event.create(registry_name)
        .displayName(display_name)
        .material(material_type)
        .hardness(blockHardness)
        .resistance(blockResistance)
        .tagBoth(type_tag)
        .tagBoth(`${type_tag}/${material_tag}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
    }
  }

  /*
  createBlock('titanium', 'storage_block');
  createBlock('cobalt', 'storage_block');
  createBlock('uru', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG);
  */
  createBlock('adamantite', 'basalt_ore', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('adamantite', 'blackstone_ore', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('adamantite', 'storage_block_raw', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('adamantite', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG, 70.0, 1200.0);
  createBlock('mythril', 'basalt_ore', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('mythril', 'blackstone_ore', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('mythril', 'storage_block_raw', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('mythril', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG, 70.0, 1200.0);
  createBlock('starmetal', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('neutronium', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG);
  createBlock('abiding_alloy', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG, 70.0, 1200.0);
  //createBlock('ultima', 'storage_block', HARVEST_LEVEL_NETHERITE_TAG, 70.0, 1200.0);
})

StartupEvents.registry('item', event => {
  const OVERLAY_TYPES = ['shard', 'clump', 'crystal', 'dirty_dust'];

  const TYPE_PROPERTIES = {
    raw_material: {
      registry_name: 'raw_{0}',
      display_name: 'Raw {0}',
      type_tag: 'forge:raw_materials',
      material_tag: '{0}',
    },
    ingot: { 
      registry_name: '{0}_ingot',
      display_name: '{0} Ingot',
      type_tag: 'forge:ingots',
      material_tag: '{0}',
    },
    dust: { 
      registry_name: '{0}_dust',
      display_name: '{0} Dust',
      type_tag: 'forge:dusts',
      material_tag: '{0}',
    },
    nugget: { 
      registry_name: '{0}_nugget',
      display_name: '{0} Nugget',
      type_tag: 'forge:nuggets',
      material_tag: '{0}',
    },
    gear: { 
      registry_name: '{0}_gear',
      display_name: '{0} Gear',
      type_tag: 'forge:gears',
      material_tag: '{0}',
    },
    plate: { 
      registry_name: '{0}_plate',
      display_name: '{0} Plate',
      type_tag: 'forge:plates',
      material_tag: '{0}',
    },
    dirty_dust: { 
      registry_name: '{0}_dirty_dust',
      display_name: '{0} Dirty Dust',
      type_tag: 'mekanism:dirty_dusts',
      material_tag: '{0}',
    },
    shard: { 
      registry_name: '{0}_shard',
      display_name: '{0} Shard',
      type_tag: 'mekanism:shards',
      material_tag: '{0}',
    },
    crystal: { 
      registry_name: '{0}_crystal',
      display_name: '{0} Crystal',
      type_tag: 'mekanism:crystals',
      material_tag: '{0}',
    },
    clump: { 
      registry_name: '{0}_clump',
      display_name: '{0} Clump',
      type_tag: 'mekanism:clumps',
      material_tag: '{0}',
    },
  }

  function createItem(material, type, rarity, glow) {
    let type_properties = TYPE_PROPERTIES[type];
    let registry_name = type_properties.registry_name.replace('{0}', material);
    let display_name = type_properties.display_name.replace('{0}', makeReadableText(material));
    let type_tag = type_properties.type_tag;
    let material_tag = type_properties.material_tag.replace('{0}', material);  
    if (material_tag == null) {
      material_tag = material;
    }
    if (rarity == null) {
      rarity = 'common'
    }
    if (glow == null) {
      glow = false
    }

    event.create(registry_name)
      .displayName(display_name)
      .tag(type_tag)
      .tag(`${type_tag}/${material_tag}`)
      .rarity(rarity).glow(glow);
  }

  function createTexturedItem(textureNamespace, material, type, color, rarity, glow) {
    let type_properties = TYPE_PROPERTIES[type];
    let registry_name = type_properties.registry_name.replace('{0}', material);
    let display_name = type_properties.display_name.replace('{0}', makeReadableText(material));
    let type_tag = type_properties.type_tag;
    let material_tag = type_properties.material_tag.replace('{0}', material);
    if (rarity == null) {
      rarity = 'common'
    }
    if (glow == null) {
      glow = false
    }

    if (OVERLAY_TYPES.includes(type)) {
      event.create(registry_name)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .texture('layer2', `${textureNamespace}:item/${type}_overlay`)
        .color(1, color)
        .displayName(display_name)
        .tag(type_tag)
        .tag(`${type_tag}/${material_tag}`)
        .rarity(rarity).glow(glow)
    } else {
      event.create(registry_name)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .color(1, color)
        .displayName(display_name)
        .tag(type_tag)
        .tag(`${type_tag}/${material_tag}`)
        .rarity(rarity).glow(glow)
    }
  }

  function createMaterials(materials) {
    materials.forEach(material => {
      let material_name = material.name;
      let types = material.types ?? ['ingot', 'nugget'];
      let rarity = material.rarity;
      let glow = material.glow;
      types.forEach(type => {
        createItem(material_name, type, rarity, glow)
      })
    });
  }

  createItem('amethyst', 'dust')
  
  const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
  const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')
  const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')
  const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
  const SLURRY = new $SlurryDeferredRegister('kubejs')
  
  INFUSETYPE.register('dimensional_shard', 0xBCF2F0)
  INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())

  event.create('dimensional_shard').displayName('Dimensional Shard');
  event.create('dimensional_shard_dust').displayName('Dimensional Shard Dust');
  event.create('infused_diamond').displayName('Infused Diamond');
  event.create('infused_ender_pearl').displayName('Infused Ender Pearl');

  /*
  createMaterials([
    {name: 'titanium'},
    {name: 'cobalt'},
    {name: 'uru'},
  ]);
  */

  global.mekStackAdditions.forEach(entry => {
    createTexturedItem('mekanism', entry.material, 'shard', entry.color);
    createItem(entry.material, 'dust')
    createTexturedItem('mekanism', entry.material, 'dirty_dust', entry.color);
    createTexturedItem('mekanism', entry.material, 'clump', entry.color);
    createTexturedItem('mekanism', entry.material, 'crystal', entry.color);
    createItem(entry.material, 'raw_material');
    createItem(entry.material, 'ingot');
    createItem(entry.material, 'nugget');
    //createTexturedItem('kubejs', entry.material, 'gear', entry.color);
    //createTexturedItem('kubejs', entry.material, 'plate', entry.color);

    SLURRY.register(entry.material, (slurryBuilder) => slurryBuilder.ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS()))
    //SLURRY.register(`clean_${entry.material}`, $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
    //SLURRY.register(`dirty_${entry.material}`, $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
  })
  SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())

  event.create('oblivion_shard').displayName('Oblivion Shard').rarity('uncommon');
  event.create('dark_matter').displayName('Dark Matter').rarity('rare');
  event.create('infused_dark_matter').displayName('Infused Dark Matter').rarity('rare');
  event.create('draconic_infused_dark_matter').displayName('Draconic Infused Dark Matter').rarity('rare').glow(true);

  event.create('crystalline_powder').displayName('Crystalline Powder').rarity('rare');
  event.create('eternal_crystal').displayName('Eternal Crystal').rarity('epic');
  event.create('infused_eternal_crystal').displayName('Infused Eternal Crystal').rarity('epic');
  event.create('draconic_infused_eternal_crystal').displayName('Draconic Infused Eternal Crystal').rarity('epic').glow(true);

  createMaterials([
    {name: 'starmetal', rarity: 'rare', types: ['ingot'] },
    {name: 'neutronium', rarity: 'rare' },
    {name: 'abiding_alloy', rarity: 'rare', types: ['ingot'] },
    //{name: 'ultima', rarity: 'rare' },
  ]);

  event.create('vulcanite').displayName('Vulcanite').rarity('rare').glow(true);
  event.create('ender_star').displayName('Ender Star').rarity('rare').glow(true);
  event.create('ender_star_fragment').displayName('Ender Star Fragment').rarity('rare');

  event.create('lost_illusion').displayName('Lost Illusion').rarity('epic').glow(true);
  event.create('manifest_illusion').displayName('Manifest Illusion').rarity('epic').glow(true);

  event.create('uu_matter').displayName('UU-Matter').rarity('epic').glow(true);
  event.create('cosmic_shelling').displayName('Cosmic Shelling').rarity('epic').glow(true);
  event.create('chaos_crystal').displayName('Chaos Crystal').rarity('epic').glow(true);
  event.create('chaos_shard').displayName('Chaos Shard').rarity('epic').glow(true);

  event.create('meatsalad:god_apple').displayName('God Apple').rarity('epic').glow(true).food(food => {
		food.hunger(20)
      .saturation(2)
      .effect('minecraft:absorption', 2400, 4, 1)
      .effect('minecraft:regeneration', 600, 4, 1)
      .effect('minecraft:fire_resistance', 6000, 0, 1)
      .effect('minecraft:resistance', 6000, 1, 1)
      .effect('minecraft:night_vision', 2400, 2, 1)
      .effect('minecraft:conduit_power', 2400, 0, 1)
      .effect('alexsmobs:lava_vision', 2400, 0, 1)
      .effect('cofh_core:panacea', 2400, 0, 1)
      .alwaysEdible()
      .fastToEat()
	})

  event.create('infinity_fabric').displayName('Infinity Fabric').rarity('epic').glow(true);
  event.create('infinity_fiber').displayName('Infinity Fiber').rarity('epic').glow(true);
})
