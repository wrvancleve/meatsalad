StartupEvents.registry('block', event => {
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
    event.create('vibranium_tyrian_steel_block')
        .displayName('Block of Vibranium-Tyrian Steel')
        .material('metal')
        .hardness(5.0)
        .resistance(6.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
    event.create('unobtainium_tyrian_steel_block')
        .displayName('Block of Unobtainium-Tyrian Steel')
        .material('metal')
        .hardness(5.0)
        .resistance(6.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
    event.create('ultima_block')
        .displayName('Block of Ultima')
        .material('metal')
        .hardness(5.0)
        .resistance(6.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
})

StartupEvents.registry('item', event => {
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
    
    event.create('oblivion_shard').displayName('Oblivion Shard').rarity('epic');
    event.create('dark_matter').displayName('Dark Matter').rarity('epic').glow(true);
    //event.create('dark_nova_cluster').displayName('Dark Nova Cluster').rarity('epic').glow(true);
    event.create('vibranium_tyrian_steel_ingot').displayName('Vibranium-Tyrian Steel Ingot').rarity('epic');
    event.create('unobtainium_tyrian_steel_ingot').displayName('Unobtainium-Tyrian Steel Ingot').rarity('epic');
    //event.create('lost_illusion').displayName('Lost Illusion').rarity('epic').glow(true);
    event.create('manifest_illusion').displayName('Manifest Illusion').rarity('epic').glow(true);
    event.create('chaos_crystal').displayName('Chaos Crystal').rarity('epic').glow(true);
    event.create('chaos_shard').displayName('Chaos Shard').rarity('epic').glow(true);
    event.create('dragon_soul').displayName('Dragon Soul').rarity('epic').glow(true);
    event.create('ender_star_fragment').displayName('Ender Star Fragment').rarity('epic');
    event.create('ender_star').displayName('Ender Star').rarity('epic').glow(true);
    event.create('heart_of_the_deep').displayName('Heart of the Deep').rarity('epic');
    event.create('starmetal_ingot').displayName('Starmetal Ingot').rarity('epic');
    event.create('starmetal_nugget').displayName('Starmetal Nugget').rarity('epic');
    event.create('crystalized_chorus_chunk').displayName('Crystalized Chorus Chunk').rarity('rare');
    event.create('warden_heart').displayName('Warden Heart').rarity('epic').glow(true);
    event.create('cosmic_shelling').displayName('Cosmic Shelling').rarity('epic').glow(true);
    event.create('ultima_ingot').displayName('Ultima Ingot').rarity('epic').glow(true);
    event.create('ultima_nugget').displayName('Ultima Nugget').rarity('epic').glow(true);
	event.create('infinity_fabric').displayName('Infinity Fabric').rarity('epic').glow(true);
    event.create('infinity_fiber').displayName('Infinity Fiber').rarity('epic').glow(true);
})
