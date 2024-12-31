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

  createItem('mystery_goo', 'rare')

  createItem('incomplete_gate_pearl', 'rare')
  createItem('incomplete_large_gate_pearl', 'rare')

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

  createItem('eldritch_cloth', 'rare', true)

  /*
  createItem('blazing_gemstone', 'uncommon')
  createItem('pulsing_gemstone', 'uncommon')
  createItem('shocking_gemstone', 'uncommon')
  */

  // Misc Curios
  createItem('lucky_ring')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.luck', 'Lucky Ring', 10, 'addition')
    )
  createItem('lucky_ring_plus', 'epic', true, 'Lucky Ring+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/lucky_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.luck', 'Lucky Ring+', 0.5, 'multiply_total')
    )
  createItem('lucky_ring_plus_plus', 'epic', true, 'Lucky Ring++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/lucky_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.luck', 'Lucky Ring++', 1.0, 'multiply_total')
    )

  // Archer Curios
  createItem('arrow_damage_ring', 'common', false, 'Ring of Arrow Damage')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:arrow_damage', 'Arrow Damage Ring', 0.15, 'multiply_total')
    )
  createItem('arrow_damage_ring_plus', 'epic', true, 'Ring of Arrow Damage+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/arrow_damage_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:arrow_damage', 'Arrow Damage Ring+', 0.2, 'multiply_total')
    )
  createItem('arrow_damage_ring_plus_plus', 'epic', true, 'Ring of Arrow Damage++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/arrow_damage_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:arrow_damage', 'Arrow Damage Ring++', 0.3, 'multiply_total')
    )
  createItem('arrow_velocity_ring', 'common', false, 'Ring of Arrow Velocity')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:arrow_velocity', 'Arrow Velocity Ring', 0.15, 'multiply_total')
    )
  createItem('arrow_velocity_ring_plus', 'epic', true, 'Ring of Arrow Velocity+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/arrow_velocity_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:arrow_velocity', 'Arrow Velocity Ring+', 0.2, 'multiply_total')
    )
  createItem('arrow_velocity_ring_plus_plus', 'epic', true, 'Ring of Arrow Velocity++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/arrow_velocity_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:arrow_velocity', 'Arrow Velocity Ring++', 0.3, 'multiply_total')
    )
  createItem('dodge_chance_ring', 'common', false, 'Ring of Dodge Chance')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:dodge_chance', 'Dodge Chance Ring', 0.15, 'multiply_total')
    )
  createItem('dodge_chance_ring_plus', 'epic', true, 'Ring of Dodge Chance+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/dodge_chance_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:dodge_chance', 'Dodge Chance Ring+', 0.2, 'multiply_total')
    )
  createItem('dodge_chance_ring_plus_plus', 'epic', true, 'Ring of Dodge Chance++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/dodge_chance_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:dodge_chance', 'Dodge Chance Ring++', 0.3, 'multiply_total')
    )

  // Mage Curios
  createItem('mana_ring_plus', 'epic', true, 'Ring of Mana+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('irons_spellbooks:item/mana_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:max_mana', 'Mana Ring+', 250, 'addition')
    )
  createItem('mana_ring_plus_plus', 'epic', true, 'Ring of Mana++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('irons_spellbooks:item/mana_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:max_mana', 'Mana Ring++', 500, 'addition')
    )
  createItem('cooldown_ring_plus', 'epic', true, 'Ring of Recovery+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('irons_spellbooks:item/cooldown_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:cooldown_reduction', 'Recovery Ring+', 0.2, 'multiply_total')
    )
  createItem('cooldown_ring_plus_plus', 'epic', true, 'Ring of Recovery++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('irons_spellbooks:item/cooldown_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:cooldown_reduction', 'Recovery Ring++', 0.3, 'multiply_total')
    )
  createItem('cast_time_ring_plus', 'epic', true, 'Ring of Expediency+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('irons_spellbooks:item/cast_time_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:cast_time_reduction', 'Expediency Ring+', 0.2, 'multiply_total')
    )
  createItem('cast_time_ring_plus_plus', 'epic', true, 'Ring of Expediency++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('irons_spellbooks:item/cast_time_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:cast_time_reduction', 'Expediency Ring++', 0.3, 'multiply_total')
    )
  createItem('spell_power_ring', 'common', false, 'Ring of Spell Power')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:spell_power', 'Spell Power Ring', 0.15, 'multiply_total')
    )
  createItem('spell_power_ring_plus', 'epic', true, 'Ring of Spell Power+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/spell_power_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:spell_power', 'Spell Power Ring+', 0.2, 'multiply_total')
    )
  createItem('spell_power_ring_plus_plus', 'epic', true, 'Ring of Spell Power++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/spell_power_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('irons_spellbooks:spell_power', 'Spell Power Ring++', 0.3, 'multiply_total')
    )

  // Warrior Curios
  createItem('attack_damage_ring', 'common', false, 'Ring of Attack Damage')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.attack_damage', 'Attack Damage Ring', 0.15, 'multiply_total')
    )
  createItem('attack_damage_ring_plus', 'epic', true, 'Ring of Attack Damage+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/attack_damage_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.attack_damage', 'Attack Damage Ring+', 0.2, 'multiply_total')
    )
  createItem('attack_damage_ring_plus_plus', 'epic', true, 'Ring of Attack Damage++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/attack_damage_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.attack_damage', 'Attack Damage Ring++', 0.3, 'multiply_total')
    )
  createItem('attack_speed_ring', 'common', false, 'Ring of Attack Speed')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.attack_speed', 'Attack Speed Ring', 0.15, 'multiply_total')
    )
  createItem('attack_speed_ring_plus', 'epic', true, 'Ring of Attack Speed+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/attack_speed_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.attack_speed', 'Attack Speed Ring+', 0.2, 'multiply_total')
    )
  createItem('attack_speed_ring_plus_plus', 'epic', true, 'Ring of Attack Speed++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/attack_speed_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.attack_speed', 'Attack Speed Ring++', 0.3, 'multiply_total')
    )
  createItem('critical_damage_ring', 'common', false, 'Ring of Critical Damage')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:crit_damage', 'Critical Damage Ring', 0.15, 'multiply_total')
    )
  createItem('critical_damage_ring_plus', 'epic', true, 'Ring of Critical Damage+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/critical_damage_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:crit_damage', 'Critical Damage Ring+', 0.2, 'multiply_total')
    )
  createItem('critical_damage_ring_plus_plus', 'epic', true, 'Ring of Critical Damage++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/critical_damage_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:crit_damage', 'Critical Damage Ring++', 0.3, 'multiply_total')
    )
  
  // Guardian Curios
  createItem('armor_ring', 'common', false, 'Ring of Armor')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.armor', 'Armor Ring', 0.15, 'multiply_total')
    )
  createItem('armor_ring_plus', 'epic', true, 'Ring of Armor+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/armor_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.armor', 'Armor Ring+', 0.2, 'multiply_total')
    )
  createItem('armor_ring_plus_plus', 'epic', true, 'Ring of Armor++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/armor_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.armor', 'Armor Ring++', 0.3, 'multiply_total')
    )
    createItem('armor_toughness_ring', 'common', false, 'Ring of Armor Toughness')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.armor_toughness', 'Armor Toughness Ring', 0.15, 'multiply_total')
    )
  createItem('armor_toughness_ring_plus', 'epic', true, 'Ring of Armor Toughness+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/armor_toughness_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.armor_toughness', 'Armor Toughness Ring+', 0.2, 'multiply_total')
    )
  createItem('armor_toughness_ring_plus_plus', 'epic', true, 'Ring of Armor Toughness++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/armor_toughness_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('minecraft:generic.armor_toughness', 'Armor Toughness Ring++', 0.3, 'multiply_total')
    )
    createItem('healing_ring', 'common', false, 'Ring of Healing Received')
    .maxStackSize(1)
    .tag('curios:ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:healing_received', 'Healing Ring', 0.15, 'multiply_total')
    )
  createItem('healing_ring_plus', 'epic', true, 'Ring of Healing Received+')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/healing_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:healing_received', 'Healing Ring+', 0.2, 'multiply_total')
    )
  createItem('healing_ring_plus_plus', 'epic', true, 'Ring of Healing Received++')
    .maxStackSize(1)
    .tag('curios:ring')
    .texture('meatsalad:item/healing_ring')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
      .canEquip(() => true)
      .modifyAttribute('attributeslib:healing_received', 'Healing Ring++', 0.3, 'multiply_total')
    )

  createItem('mastery_essence', 'uncommon', false, 'Essence of Mastery')
  createItem('rebirth_essence', 'uncommon', false, 'Essence of Rebirth')

  createTaggedItem('abyssium', 'ingot', 'epic')
  createTaggedItem('abyssium', 'nugget', 'epic')

  createItem('sentient_processor', 'epic')

  createItem('arcanis_stone', 'epic')
  // createItem('arcanis_hypermatter', 'epic')
  createItem('maestris_stone', 'epic')
  // createItem('maestris_hypermatter', 'epic')
  createItem('sentis_stone', 'epic')
  // createItem('sentis_hypermatter', 'epic')
  createItem('stalgaris_stone', 'epic')
  // createItem('stalgaris_hypermatter', 'epic')
  createItem('velocis_stone', 'epic')
  // createItem('velocis_hypermatter', 'epic')

  createItem('dark_matter', 'rare')
  createItem('infused_dark_matter', 'rare')
  createItem('draconic_infused_dark_matter', 'rare', true)

  createItem('eternal_crystal', 'epic')
  createItem('eternal_crystal_shard', 'epic')
  createItem('eternal_crystalline_powder', 'epic')

  createMaterials([
    {name: 'aquamarine', types: ['gem', 'dust'] },
    {name: 'jade', types: ['gem', 'dust'] },
    {name: 'topaz', types: ['gem', 'dust'] },
    {name: 'starmetal', rarity: 'rare', types: ['ingot'] },
    //{name: 'neutronium', rarity: 'epic' },
    {name: 'abiding_alloy', rarity: 'epic', types: ['ingot'] },
  ])

  createItem('ender_star', 'rare', true)
  createItem('ender_star_fragment', 'rare')

  createItem('lost_illusion', 'epic', true)
  createItem('manifest_illusion', 'epic', true)

  createItem('uu_matter', 'epic', true, 'UU-Matter')
  createItem('chaos_crystal', 'rare', true)
  createItem('chaos_shard', 'rare', true)

  createItem('infinity_fabric', 'epic', true)
  createItem('infinity_fiber', 'epic', true)
})
