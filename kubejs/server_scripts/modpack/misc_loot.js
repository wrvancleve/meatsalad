ServerEvents.genericLootTables(event => {
  const MISC_ITEMS = {
    'meatsalad:mystery_goo': {
      lootTables: [
        { id: "minecraft:chests/bastion_treasure", guaranteed: true },
        { id: "allthemodium:chest/treasure_room", guaranteed: true },
        { id: "allthemodium:chest/treasure_room_loot", guaranteed: true },
        { id: "betterfortresses:chests/puzzle", guaranteed: true },
        { id: "irons_spellbooks:chests/battleground/burial_loot", guaranteed: true },
        { id: "mes:astral_meteorite", guaranteed: true },
      ]
    },
    'meatsalad:dark_matter': {
      lootTables: [
        { id: "mes:astral_meteorite", guaranteed: true },
  
        { id: "minecraft:chests/end_city_treasure" },
      ]
    }
  }

  for (let [item, {lootTables}] of Object.entries(MISC_ITEMS)) {
    lootTables.forEach(table => {
      event.modify(table.id, loot => {
        loot.addPool(pool => {
          if (table.guaranteed) {
            pool.addEntry(StackEntry({item: item}))
          } else {
            pool.addEntry(TableEntry(`meatsalad:misc/${item.split(':').pop()}_chance`))
          }
        })
      })
    })
  }

  const MISC_TABLES = {
    'very_rare/random_chance': [
      "minecraft:chests/ancient_city",
      "minecraft:chests/end_city_treasure",
      "minecraft:chests/stronghold_library",
      "betterwitchhuts:chests/hut_0",
    ],
    'very_rare/random': [
      "minecraft:chests/bastion_treasure",
      "allthemodium:chest/treasure_room",
      "allthemodium:chest/treasure_room_loot",
      "betterdeserttemples:chests/pharaoh_hidden",
      "betterfortresses:chests/puzzle",
      "betterjungletemples:chests/treasure",
      "betteroceanmonuments:chests/upper_side_chamber",
      "betterstrongholds:chests/treasure",
      "dungeoncrawl:chests/treasure",
      "mes:astral_meteorite",
    ]
  }
  for (let [tableType, lootTables] of Object.entries(MISC_TABLES)) {
    lootTables.forEach(table => {
      event.modify(table, loot => {
        loot.addPool(pool => {
          pool.addEntry(TableEntry(`meatsalad:misc/${tableType}`))
        })
      })
    })
  }
})
