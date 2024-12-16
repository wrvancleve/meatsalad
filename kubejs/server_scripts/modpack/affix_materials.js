ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      {
        item: 'apotheosis:common_material'
      },
      {
        fluid_tag: 'forge:experience',
        amount: 250
      }
    ],
    result: [
      {
        item: 'apotheosis:uncommon_material'
      }
    ]
  }).id('meatsalad:fluid_encapsulating/uncommon_material')

  event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemicalInput: { amount: 30, infuse_type: 'mekanism:diamond' },
    itemInput: { ingredient: Ingredient.of('apotheosis:uncommon_material').toJson() },
    output: Item.of('apotheosis:rare_material')
  }).id('meatsalad:metallurgic_infusing/rare_material')

  energize(event,
    [
      Ingredient.of('apotheosis:rare_material'),
      Ingredient.of('minecraft:netherite_scrap')
    ],
    500000,
    Item.of('apotheosis:epic_material')
  )

  energize(event,
    [
      Ingredient.of('apotheosis:epic_material'),
      Ingredient.of('meatsalad:dark_matter')
    ],
    2500000,
    Item.of('apotheosis:mythic_material')
  )
  energize(event,
    [
      Ingredient.of('meatsalad:lost_illusion'),
      Ingredient.of('meatsalad:uu_matter'),
      Ingredient.of('meatsalad:dark_matter')
    ],
    2500000,
    Item.of('apotheosis:mythic_material'),
    "epic_material_from_lost_illusion"
  )

  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: {item: 'apotheosis:mythic_material'},
    addition: {item: 'meatsalad:eternal_crystal_shard'},
    result: {item: 'apotheosis:ancient_material'}
  }).id('meatsalad:fusion/ancient_material')
})

ServerEvents.genericLootTables(event => {
  const LOOT_TABLES = [
    // max
    { id: "cataclysm:entities/ancient_remnant", type: "max" },
    { id: "irons_spellbooks:entities/dead_king", type: "max" },
    { id: "cataclysm:entities/ender_guardian", type: "max" },
    { id: "awakened_bosses:entities/herobrine", type: "max" },
    { id: "cataclysm:entities/ignis", type: "max" },
    { id: "cataclysm:entities/maledictus", type: "max" },
    { id: "cataclysm:entities/netherite_monstrosity", type: "max" },
    { id: "cataclysm:entities/the_harbinger", type: "max" },
    { id: "cataclysm:entities/the_leviathan", type: "max" },

    // random
    { id: "minecraft:chests/bastion_treasure", type: "random" },
    { id: "allthemodium:chest/treasure_room", type: "random" },
    { id: "allthemodium:chest/treasure_room_loot", type: "random" },
    { id: "betterdeserttemples:chests/pharaoh_hidden", type: "random" },
    { id: "betterfortresses:chests/puzzle", type: "random" },
    { id: "betterjungletemples:chests/treasure", type: "random" },
    { id: "betteroceanmonuments:chests/upper_side_chamber", type: "random" },
    { id: "dungeoncrawl:chests/treasure", type: "random" },
    { id: "mes:astral_meteorite", type: "random" },

    // random_chance
    { id: "minecraft:chests/ancient_city", type: "random_chance" },
    { id: "minecraft:chests/bastion_bridge", type: "random_chance" },
    { id: "minecraft:chests/bastion_hoglin_stable", type: "random_chance" },
    { id: "minecraft:chests/bastion_other", type: "random_chance" },
    { id: "minecraft:chests/stronghold_corridor", type: "random_chance" },
    { id: "minecraft:chests/stronghold_crossing", type: "random_chance" },
    { id: "betterdeserttemples:chests/tomb", type: "random_chance" },
    { id: "betterdeserttemples:chests/tomb_pharaoh", type: "random_chance" },
    { id: "betterdungeons:skeleton_dungeon/chests/common", type: "random_chance" },
    { id: "betterdungeons:spider_dungeon/chests/egg_room", type: "random_chance" },
    { id: "betterdungeons:zombie_dungeon/chests/common", type: "random_chance" },
    { id: "betterdungeons:zombie_dungeon/chests/tombstone", type: "random_chance" },
    { id: "betterstrongholds:chests/common", type: "random_chance" },
    { id: "betterstrongholds:chests/treasure", type: "random_chance" },
    { id: "betterwitchhuts:chests/hut_0", type: "random_chance" },
  ]
  LOOT_TABLES.forEach(table => {
    event.modify(table.id, loot => {
      loot.addPool(pool => {
        pool.addEntry(TableEntry(`meatsalad:affix_materials/${table.type}`))
      })
    })
  })
})
