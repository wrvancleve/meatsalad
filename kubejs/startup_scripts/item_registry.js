global.mekStackAdditions = [
  { material: 'adamantite', color: '#EC1321' },
  { material: 'mythril', color: '#64EAFB' },
  { material: 'crimson_iron', color:'#fc9aad', onlyMekItems: true },
  { material: 'azure_silver', color:'#e89ffc', onlyMekItems: true }
]

StartupEvents.registry('item', event => {
  const OVERLAY_TYPES = ['shard', 'clump', 'crystal', 'dirty_dust']
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
    gem: {
      registry_name: '{0}',
      display_name: '{0}',
      type_tag: 'forge:gems',
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

  let createItem = (name, rarity, glow, display_name) => {
    let registry_name = `meatsalad:${name}`
    if (rarity == null) rarity = 'common'
    if (glow == null) glow = false
    if (display_name == null) display_name = global.getReadableText(name)

    return event.create(registry_name).rarity(rarity).glow(glow).displayName(display_name)
  }
  
  let createTaggedItem = (material, type, rarity, glow) => {
    let type_properties = TYPE_PROPERTIES[type]
    let item_name = type_properties.registry_name.replace('{0}', material)
    let display_name = type_properties.display_name.replace('{0}', global.getReadableText(material))
    let type_tag = type_properties.type_tag
    let material_tag = type_properties.material_tag.replace('{0}', material)  
    if (material_tag == null) material_tag = material

    return createItem(item_name, rarity, glow, display_name)
      .tag(type_tag)
      .tag(`${type_tag}/${material_tag}`)
  }

  let createLayeredItem = (textureNamespace, material, type, color, rarity, glow) => {
    if (OVERLAY_TYPES.includes(type)) {
      return createTaggedItem(material, type, rarity, glow)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .texture('layer2', `${textureNamespace}:item/${type}_overlay`)
        .color(1, color)
    } else {
      return createTaggedItem(material, type, rarity, glow)
        .texture('layer0', `mekanism:item/empty`)
        .texture('layer1', `${textureNamespace}:item/${type}`)
        .color(1, color)
    }
  }

  let createMaterials = (materials) => {
    materials.forEach(material => {
      let material_name = material.name
      let types = material.types ?? ['ingot', 'nugget']
      let rarity = material.rarity
      let glow = material.glow
      types.forEach(type => {
        createTaggedItem(material_name, type, rarity, glow)
      })
    })
  }

  const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
  const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')
  const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')
  const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
  const SLURRY = new $SlurryDeferredRegister('kubejs')
  
  INFUSETYPE.register('dimensional_shard', 0xBCF2F0)
  INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())

  createTaggedItem('amethyst', 'dust')

  createTaggedItem('dimensional_shard', 'gem')
  createTaggedItem('dimensional_shard', 'dust')
  createItem('infused_diamond')
  createItem('infused_ender_pearl')

  global.mekStackAdditions.forEach(entry => {
    let onlyMekItems = entry.onlyMekItems ?? false
    createLayeredItem('mekanism', entry.material, 'shard', entry.color)
    if (!onlyMekItems) createTaggedItem(entry.material, 'dust')
    createLayeredItem('mekanism', entry.material, 'dirty_dust', entry.color)
    createLayeredItem('mekanism', entry.material, 'clump', entry.color)
    createLayeredItem('mekanism', entry.material, 'crystal', entry.color)
    if (!onlyMekItems) createTaggedItem(entry.material, 'raw_material')
    if (!onlyMekItems) createTaggedItem(entry.material, 'ingot')
    if (!onlyMekItems) createTaggedItem(entry.material, 'nugget')
    //createTexturedItem('kubejs', entry.material, 'gear', entry.color)
    //createTexturedItem('kubejs', entry.material, 'plate', entry.color)

    SLURRY.register(entry.material, (slurryBuilder) => slurryBuilder.ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS()))
    //SLURRY.register(`clean_${entry.material}`, $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
    //SLURRY.register(`dirty_${entry.material}`, $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).color(Color.of(entry.color).getRgbJS())))
  })
  SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())

  createItem('oblivion_shard', 'uncommon')
  createItem('dark_matter', 'rare')
  createItem('infused_dark_matter', 'rare')
  createItem('draconic_infused_dark_matter', 'rare', true)

  createItem('crystalline_powder', 'rare')
  createItem('eternal_crystal', 'epic')
  createItem('infused_eternal_crystal', 'epic')
  createItem('draconic_infused_eternal_crystal', 'epic', true)

  createMaterials([
    {name: 'starmetal', rarity: 'rare', types: ['ingot'] },
    {name: 'neutronium', rarity: 'rare' },
    {name: 'abiding_alloy', rarity: 'rare', types: ['ingot'] }
  ])

  createItem('vulcanite', 'rare', true)
  createItem('ender_star', 'rare', true)
  createItem('ender_star_fragment', 'rare')

  createItem('lost_illusion', 'epic', true)
  createItem('manifest_illusion', 'epic', true)

  createItem('uu_matter', 'epic', true, 'UU-Matter')
  createItem('cosmic_shelling', 'epic', true)
  createItem('chaos_crystal', 'epic', true)
  createItem('chaos_shard', 'epic', true)

  createItem('infinity_fabric', 'epic', true)
  createItem('infinity_fiber', 'epic', true)
})
