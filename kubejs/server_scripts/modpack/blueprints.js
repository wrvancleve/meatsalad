ServerEvents.recipes(event => {
  removeRecipes(event, [
    'silentgear:template_board',
    'silentgear:blueprint_paper',
  ])
})

ServerEvents.genericLootTables(event => {
  const LOOT_TABLES = [
    { id: "minecraft:chests/stronghold_library", type: "permanent" },
    { id: "betterstrongholds:chests/grand_library", type: "permanent" },

    { id: "betterdeserttemples:chests/library" },
    { id: "betterstrongholds:chests/library_md" },
    { id: "ctov:chests/village/village_library" },
  ]
  LOOT_TABLES.forEach(table => {
    event.modify(table.id, loot => {
      loot.addPool(pool => {
        pool.addEntry(TableEntry(`meatsalad:blueprints/${table.type || "random"}`))
      })
    })
  })

  const TEMPLATE_INJECTIONS = {
    'minecraft:chests/village/village_armorer': [
      "coating",
      "lining",
      "shield",
      "helmet",
      "chestplate",
      "leggings",
      "boots",
    ],
    'minecraft:chests/village/village_fletcher': [
      "cord",
      "fletching",
      "bow",
      "crossbow",
      "slingshot",
      "arrow"
    ],
    'minecraft:chests/village/village_toolsmith': [
      "rod",
      "tip",
      "coating",
      "grip",
      "binding",
      "pickaxe",
      "shovel",
      "axe",
      "paxel",
      "hammer",
      "excavator",
      "saw",
      "hoe",
      "mattock",
      "prospector_hammer",
      "sickle",
      "shears",
      "fishing_rod"
    ],
    'minecraft:chests/village/village_weaponsmith': [
      "sword",
      "katana",
      "machete",
      "spear",
      "knife",
      "dagger"
    ]
  }
  for (let [table, templates] of Object.entries(TEMPLATE_INJECTIONS)) {
    event.modify(table, loot => {
      loot.addPool(pool => {
        templates.forEach(templateType => {
          pool.addEntry(StackEntry({item: `silentgear:${templateType}_template`}))
        })
      })
    })
  }
})
