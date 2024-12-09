const END_EYES = {
  'black': {
    weights: [100.0, 35.0],
    lootTables: [
      "cataclysm:entities/the_harbinger"
    ]
  },
  'cold': {
    weights: [100.0, 35.0],
    lootTables: [
      "cataclysm:entities/maledictus"
    ]
  },
  'corrupted': {
    weights: [100.0, 35.0],
    lootTables: [
      "minecraft:chests/pillager_outpost"
    ]
  },
  'cursed': {
    weights: [100.0, 35.0],
    lootTables: [
      "minecraft:chests/bastion_treasure",
      "minecraft:chests/bastion_other"
    ]
  },
  'evil': {
    weights: [100.0, 35.0],
    lootTables: [
      "cataclysm:entities/netherite_monstrosity"
    ]
  },
  'guardian': {
    weights: [50.0, 17.5],
    lootTables: [
      "minecraft:entities/elder_guardian"
    ]
  },
  'lost': {
    weights: [100.0, 35.0],
    lootTables: [
      "cataclysm:entities/ancient_remnant"
    ]
  },
  'magical': {
    weights: [100.0, 35.0],
    lootTables: [
      "allthemodium:chest/treasure_room",
      "allthemodium:chest/treasure_room_loot"
    ]
  },
  'nether': {
    weights: [35.0, 12.25],
    lootTables: [
      "minecraft:chests/nether_bridge",
      "betterfortresses:chests/extra",
      "betterfortresses:chests/hall",
      "betterfortresses:chests/keep",
      "betterfortresses:chests/puzzle",
      "betterfortresses:chests/quarters",
      "betterfortresses:chests/storage",
      "betterfortresses:chests/worship"
    ]
  },
  'old': {
    weights: [35.0, 12.25],
    lootTables: [
      "minecraft:chests/ancient_city"
    ]
  },
  'undead': {
    weights: [100.0, 35.0],
    lootTables: [
      "irons_spellbooks:entities/dead_king"
    ]
  },
  'wither': {
    weights: [100.0, 35.0],
    lootTables: [
      "minecraft:entities/wither"
    ]
  },
}

ServerEvents.tags('item', event => {
  Object.keys(END_EYES).forEach(eye => {
    event.add('endrem:ender_portal_eyes', `endrem:${eye}_eye`)
  })
})

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'endrem:exotic_eye',
    'endrem:undead_eye',
    'endrem:witch_eye',
  ])

  // End Eyes => Mystery Goo
  energize(event,
    [
      Ingredient.of('#endrem:ender_portal_eyes'),
    ],
    20000,
    Item.of('meatsalad:mystery_goo')
  )
})

ServerEvents.genericLootTables((event) => {
  const EyeEntry = (eye, weight, quality) => {
    return StackEntry(
      {item: `endrem:${eye}_eye`},
      weight,
      quality
    )
  }
  
  const EyeCondition = (eye, found) => {
    const advancementJson = {}
    advancementJson[`endrem:main/${eye}_eye`] = found || false
    return {
      condition: "minecraft:entity_properties",
      entity: "this",
      predicate: {
        type_specific: {
          type: "player",
          advancements: advancementJson
        }
      }
    }
  }

  for (let [eye, props] of Object.entries(END_EYES)) {
    event.addGeneric(`meatsalad:eyes/${eye}`, loot => {
      props.weights.forEach((weight, index) => {
        loot.addPool(pool => {
          if (weight < 100.0) {
            pool.addEntry(EyeEntry(eye, weight, 1.0))
            pool.addEntry(EmptyEntry(100.0 - weight))
          } else {
            pool.addEntry(EyeEntry(eye))
          }
          pool.addCondition(EyeCondition(eye, index !== 0))
        })
      })
    })

    props.lootTables.forEach(table => {
      event.modify(table, loot => {
        loot.addPool(pool => {
          pool.addEntry(TableEntry(`meatsalad:eyes/${eye}`))
        })
      })
    })
  }
})

LootJS.modifiers((event) => {
  event.removeGlobalModifier("endrem:abandoned_mineshaft")
  event.removeGlobalModifier("endrem:bastion_treasure")
  event.removeGlobalModifier("endrem:buried_treasure")
  event.removeGlobalModifier("endrem:desert_pyramid")
  event.removeGlobalModifier("endrem:elder_guardian")
  event.removeGlobalModifier("endrem:evoker")
  event.removeGlobalModifier("endrem:igloo_chest")
  event.removeGlobalModifier("endrem:jungle_temple")
  event.removeGlobalModifier("endrem:nether_bridge")
  event.removeGlobalModifier("endrem:pillager_outpost")
  event.removeGlobalModifier("endrem:shipwreck_treasure")
  event.removeGlobalModifier("endrem:simple_dungeon")
  event.removeGlobalModifier("endrem:skeleton_horse")
  event.removeGlobalModifier("endrem:wither")
  event.removeGlobalModifier("endrem:woodland_mansion")
})
