ServerEvents.entityLootTables((event) => {
  const HeartEntry = (color, weight, quality) => {
    return StackEntry(
      {item: `bhc:${color}_heart`},
      weight,
      quality
    )
  }
  
  const HeartCondition = (killedAdvancement, hasKilled) => {
    const advancementJson = {}
    advancementJson[killedAdvancement] = hasKilled || false
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

  for (let [boss, {killedAdvancement, heart, extraLoot}] of Object.entries(global.BOSSES)) {
    event.modifyEntity(boss, loot => {
      extraLoot.forEach(item => {
        loot.addPool(pool => {
          pool.addEntry(StackEntry({item: item}))
        })
      })
      loot.addPool(pool => {
        pool.addEntry(HeartEntry(heart))
        pool.addCondition(HeartCondition(killedAdvancement, false))
      })
      loot.addPool(pool => {
        pool.addEntry(HeartEntry(heart, 50.0, 1.0))
        pool.addEntry(EmptyEntry(50.0))
        pool.addCondition(HeartCondition(killedAdvancement, true))
      })
    })
  }
})

LootJS.modifiers((event) => {
  event.removeGlobalModifier("apotheosis:warden_tendril")
  event.removeGlobalModifier("@progressivebosses")
})
