ServerEvents.recipes(event => {
  global.removeRecipes(event, [
    'irons_spellbooks:alchemist_cauldron',
  ])

  global.replaceShaped(event, [
    'Taa',
    'Bpp',
    'BBT'
  ], {
    a: 'irons_spellbooks:arcane_essence',
    T: '#forge:ingots/copper',
    p: '#forge:paper',
    B: 'minecraft:leather'
  }, Item.of('irons_spellbooks:copper_spell_book'))

  global.replaceShaped(event, [
    'Taa',
    'Bpp',
    'BBT'
  ], {
    a: 'irons_spellbooks:arcane_essence',
    T: '#forge:ingots/iron',
    p: '#forge:paper',
    B: 'minecraft:leather'
  }, Item.of('irons_spellbooks:iron_spell_book'))

  global.replaceShaped(event, [
    'Taa',
    'Bpp',
    'BBT'
  ], {
    a: 'irons_spellbooks:arcane_essence',
    T: '#forge:ingots/gold',
    p: '#forge:paper',
    B: 'irons_spellbooks:hogskin'
  }, Item.of('irons_spellbooks:gold_spell_book'))

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBT'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:gems/diamond',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin'
  }, Item.of('irons_spellbooks:diamond_spell_book'))

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBT'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:rods/blaze',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin'
  }, Item.of('irons_spellbooks:blaze_spell_book'))

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBg'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: 'minecraft:honey_bottle',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin',
    g: 'minecraft:glow_ink_sac',
  }, Item.of('irons_spellbooks:druidic_spell_book'))

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBb'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:gems/emerald',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin',
    b: 'minecraft:bell',
  }, Item.of('irons_spellbooks:villager_spell_book'))

  global.replaceShaped(event, [
    'Tsi',
    'Bbp',
    'BBD'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:ingots/netherite',
    p: 'irons_spellbooks:magic_cloth',
    b: 'irons_spellbooks:ruined_book',
    B: 'irons_spellbooks:hogskin',
    D: 'meatsalad:dark_matter',
  }, Item.of('irons_spellbooks:netherite_spell_book'))

  global.replaceShaped(event, [
    'Tsi',
    'Bbp',
    'BBD'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: 'quark:dragon_scale',
    p: 'irons_spellbooks:magic_cloth',
    b: 'irons_spellbooks:ruined_book',
    B: 'irons_spellbooks:hogskin',
    D: 'meatsalad:dark_matter',
  }, Item.of('irons_spellbooks:dragonskin_spell_book'))

  event.custom({
    type: 'mekanism:enriching',
    input: {
      ingredient: { item: 'irons_spellbooks:arcane_debris' }
    },
    output: { item: 'irons_spellbooks:arcane_salvage', count: 2 }
  }).id('meatsalad:enriching/arcane_salvage_from_debris')
  event.custom({
    type: 'thermal:smelter',
    ingredient: { item: 'irons_spellbooks:arcane_debris' },
    result: [
      {
        item: 'irons_spellbooks:arcane_salvage',
        count: 2
      },
      {
        item: 'thermal:rich_slag',
        chance: 0.2,
        locked: true
      }
    ]
  }).id('meatsalad:smelter/arcane_salvage_from_debris')
})

ServerEvents.entityLootTables(event => {
  event.modifyEntity('irons_spellbooks:dead_king', table => {
    global.addEyeLootPool(table, 'undead')
  })
})

ServerEvents.chestLootTables(event => {
  event.addChest('meatsalad:spells/random', table => {
    table.addPool(pool => {
      global.addStack(pool,
        { item: 'irons_spellbooks:scroll' },
        { 
          functions: [{
            function: 'irons_spellbooks:randomize_spell',
            quality: {
              min: 0.0,
              max: 0.3
            }
          }],
          conditions: [global.earlyStageCondition]
        }
      )
      global.addStack(pool,
        { item: 'irons_spellbooks:scroll' },
        { 
          functions: [{
            function: 'irons_spellbooks:randomize_spell',
            quality: {
              min: 0.0,
              max: 0.5
            }
          }],
          conditions: [global.midStageCondition]
        }
      )
      global.addStack(pool,
        { item: 'irons_spellbooks:scroll' },
        { 
          functions: [{
            function: 'irons_spellbooks:randomize_spell',
            quality: {
              min: 0.0,
              max: 0.7
            }
          }],
          conditions: [global.lateStageCondition]
        }
      )
      global.addStack(pool,
        { item: 'irons_spellbooks:scroll' },
        { 
          functions: [{
            function: 'irons_spellbooks:randomize_spell',
            quality: {
              min: 0.2,
              max: 0.7
            }
          }],
          conditions: [global.endStageCondition]
        }
      )
    })
  })
})
