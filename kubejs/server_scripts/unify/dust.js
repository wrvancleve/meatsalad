//priority: 200
ServerEvents.recipes(event => {
  const recipes = [
    {
      type: 'thermal:pulverizer',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'pulverizer/{0}_dust_from_ingot',
        'pulverizer/{0}_dust_from_gem',
      ],
      json: {
        ingredient: { tag: '{0}' },
        result: { item: '{0}' }
      }
    },
    {
      type: 'thermal:pulverizer',
      target: 'forge:ores/{0}',
      id: 'pulverizer/{0}_dust_from_ore',
      exclude: ['gems'],
      json: {
        ingredient: { tag: '{0}' },
        result: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'thermal:pulverizer',
      target: 'forge:raw_materials/{0}',
      id: 'pulverizer/{0}_dust_from_raw_material',
      json: {
        ingredient: { tag: '{0}' },
        result: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'mekanism:crushing',
      target: [
        'forge:ingots/{0}',
        'forge:gems/{0}',
      ],
      id: [
        'crushing/{0}_dust_from_ingot',
        'crushing/{0}_dust_from_gem',
      ],
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}' }
      }
    },
    {
      type: 'mekanism:crushing',
      target: 'forge:ores/{0}',
      id: 'crushing/{0}_dust_from_ore',
      exclude: ['gems'],
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'mekanism:crushing',
      target: 'forge:raw_materials/{0}',
      id: 'crushing/{0}_dust_from_raw_material',
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'mekanism:enriching',
      target: 'forge:ores/{0}',
      id: 'enriching/{0}_dusts_from_ore',
      exclude: ['gems'],
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 2 }
      }
    },
    {
      type: 'mekanism:enriching',
      target: 'mekanism:dirty_dusts/{0}',
      id: 'enriching/{0}_dust_from_dirty_dust',
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}' }
      }
    },
    {
      type: 'mekanism:enriching',
      target: 'forge:raw_materials/{0}',
      id: 'enriching/{0}_dusts_from_raw',
      json: {
        input: {
          amount: 3,
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 4 }
      }
    },
    {
      type: 'mekanism:enriching',
      target: 'forge:storage_blocks/raw_{0}',
      id: 'enriching/{0}_dusts_from_raw_block',
      json: {
        input: {
          ingredient: { tag: '{0}' }
        },
        output: { item: '{0}', count: 12 }
      }
    },
    {
      type: 'minecraft:crafting_shapeless',
      target: 'forge:gems/{0}',
      id: 'earth_charge/{0}_dust_from_gem',
      json: {
        result: { item: '{0}' },
        ingredients: [
          { tag: '{0}' },
          { item: 'thermal:earth_charge' }
        ]
      }
    },
  ]

  unify(event, 'forge:dusts/', recipes)
})
