ServerEvents.genericLootTables(event => {
  const LOOT_TABLES = [
    // random_max
    { id: "cataclysm:entities/ancient_remnant", type: "random_max" },
    { id: "irons_spellbooks:entities/dead_king", type: "random_max" },
    { id: "cataclysm:entities/ender_guardian", type: "random_max" },
    { id: "awakened_bosses:entities/herobrine", type: "random_max" },
    { id: "cataclysm:entities/ignis", type: "random_max" },
    { id: "cataclysm:entities/maledictus", type: "random_max" },
    { id: "cataclysm:entities/netherite_monstrosity", type: "random_max" },
    { id: "cataclysm:entities/the_harbinger", type: "random_max" },
    { id: "cataclysm:entities/the_leviathan", type: "random_max" },

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
        pool.addEntry(TableEntry(`meatsalad:gems/${table.type}`))
      })
    })
  })
})
