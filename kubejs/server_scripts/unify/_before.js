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
})
