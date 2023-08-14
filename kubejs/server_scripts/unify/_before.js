//priority: 300

global['auTags'] = [];

global['loaded'] = {
    Mek_Loaded: Platform.isLoaded('mekanism'),
    Thermal_Loaded: Platform.isLoaded('thermal'),
    ATO_Loaded: Platform.isLoaded('alltheores')
}

global['alloys'] = [
    'steel',
    'invar',
    'electrum',
    'bronze',
    'enderium',
    'lumium',
    'signalum',
    'constantan',
    'brass'
]

global['gemCheck'] = function(material) {
    return [
        'amethyst',
        'apatite',
        'certus_quartz',
        'cinnabar',
        'diamond',
        'emerald',
        'lapis',
        'niter',
        'peridot',
        'quartz',
        'ruby',
        'sapphire',
        'sulfur',
    ].includes(material);
}

global['ingredientCheck'] = function(itemstack, json) {
    if(json.has('tag')) {
        let tag = json.get('tag').getAsString()
        if (AlmostUnified.getItemIds(tag).contains(itemstack.id)) { return true }
    } else if (json.has('item')) {
        let item = json.get('item').getAsString()
        if (itemstack.id == item) { return true }
    }
    return false
}

ServerEvents.recipes(event => {
    global.auTags = AlmostUnified.getTags()

    let pack = (input, inputAlias, outputMod, outputItem) => {
        event.shaped(`${outputMod}:${outputItem}`, ['NNN', 'NNN', 'NNN'], {
            N: input
        }).id(`meatsalad:${outputItem}_from_${inputAlias}s`)
    }
    let unpack = (input, inputAlias, outputMod, outputItem) => {
        event.shapeless(Item.of(`${outputMod}:${outputItem}`).withCount(9).toJson(), input).id(`meatsalad:${outputItem}s_from_${inputAlias}`)
    }

    // Misc recipes
    pack('kubejs:chaos_shard', 'shard', 'kubejs', 'chaos_crystal')
    unpack('kubejs:chaos_crystal', 'crystal', 'kubejs', 'chaos_shard')
    pack('kubejs:ender_star_fragment', 'fragment', 'kubejs', 'ender_star')
    unpack('kubejs:ender_star', 'star', 'kubejs', 'ender_star_fragment')
    pack('kubejs:infinity_fiber', 'fiber', 'kubejs', 'infinity_fabric')
    unpack('kubejs:infinity_fabric', 'fabric', 'kubejs', 'infinity_fiber')
})
