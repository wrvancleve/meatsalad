global['getReadableText'] = (text) => {
  return String(text)
    .split('_')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

StartupEvents.registry('block', event => {
  const NETHERITE_HARVEST_LEVEL_TAG = 'forge:needs_netherite_tool'
  const VIBRANIUM_HARVEST_LEVEL_TAG = 'forge:needs_vibranium_tool'
  const UNOBTAINIUM_HARVEST_LEVEL_TAG = 'forge:needs_unobtainium_tool'

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
    let type_properties = TYPE_PROPERTIES[type]
    let registry_name = type_properties.registry_name.replace('{0}', material)
    let display_name = type_properties.display_name.replace('{0}', global.getReadableText(material))
    let material_type = type_properties.material_type
    let blockHardness = hardness ?? type_properties.hardness ?? 5.0
    let blockResistance = resistance ?? type_properties.resistance ?? 6.0
    let type_tag = type_properties.type_tag
    let material_tag = type_properties.material_tag.replace('{0}', material)

    if (harvest_level_tag != null) {
      event.create(`meatsalad:${registry_name}`)
        .displayName(display_name)
        .material(material_type)
        .hardness(blockHardness)
        .resistance(blockResistance)
        .tagBoth(type_tag)
        .tagBoth(`${type_tag}/${material_tag}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(harvest_level_tag)
        .requiresTool(true)
    } else {
      event.create(`meatsalad:${registry_name}`)
        .displayName(display_name)
        .material(material_type)
        .hardness(blockHardness)
        .resistance(blockResistance)
        .tagBoth(type_tag)
        .tagBoth(`${type_tag}/${material_tag}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
    }
  }

  createBlock('adamantite', 'basalt_ore', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('adamantite', 'blackstone_ore', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('adamantite', 'storage_block_raw', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('adamantite', 'storage_block', VIBRANIUM_HARVEST_LEVEL_TAG, 70.0, 1200.0)
  createBlock('mythril', 'basalt_ore', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('mythril', 'blackstone_ore', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('mythril', 'storage_block_raw', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('mythril', 'storage_block', VIBRANIUM_HARVEST_LEVEL_TAG, 70.0, 1200.0)
  createBlock('starmetal', 'storage_block', VIBRANIUM_HARVEST_LEVEL_TAG)
  createBlock('neutronium', 'storage_block', UNOBTAINIUM_HARVEST_LEVEL_TAG)
  createBlock('abiding_alloy', 'storage_block', UNOBTAINIUM_HARVEST_LEVEL_TAG, 70.0, 1200.0)
})
