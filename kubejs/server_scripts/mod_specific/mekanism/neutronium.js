onEvent('tags.items', event => {
    event.add('mekanism:crystals', 'kubejs:neutronium_crystal')
    event.add('mekanism:crystals/neutronium', 'kubejs:neutronium_crystal')
})

onEvent('recipes', event => {
    event.custom({
        'type': 'mekanism:dissolution',
        'output': {
            "slurry": "kubejs:dirty_neutronium",
            "amount": 1000,
            "chemicalType": "slurry"
        },
        'gasInput': {
            "amount": 1,
            "gas": "mekanism:sulfuric_acid"
        },
        'itemInput': Ingredient.of('#forge:ores/neutronium')
    }).id('kubejs:processing/neutronium/slurry/dirty/from_ore')
    event.custom({
        'type': 'mekanism:dissolution',
        'output': {
            "slurry": "kubejs:dirty_neutronium",
            "amount": 2000,
            "chemicalType": "slurry"
        },
        'gasInput': {
            "amount": 1,
            "gas": "mekanism:sulfuric_acid"
        },
        'itemInput': Ingredient.of('#forge:raw_materials/neutronium').withCount(3)
    }).id('kubejs:processing/neutronium/slurry/dirty/from_raw_ore')

    event.custom({
        "type": "mekanism:washing",
        "fluidInput": {
            "amount": 5,
            "tag": "minecraft:water"
        },
        "slurryInput": {
            "amount": 1,
            "slurry": "kubejs:dirty_neutronium"
        },
        "output": {
            "slurry": "kubejs:clean_neutronium",
            "amount": 1
        }
    }).id('kubejs:processing/neutronium/slurry/clean')

    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
            "amount": 200,
            "slurry": "kubejs:clean_neutronium"
        },
        "output": {
            "item": "kubejs:neutronium_crystal"
        }
    }).id('kubejs:processing/neutronium/crystal/from_slurry')

    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
                "tag": "mekanism:crystals/neutronium"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "ultima:neutronium_shard"
        }
    }).id('kubejs:processing/neutronium/shard/from_crystal')
})
