ServerEvents.genericLootTables((event) => {
  event.addGeneric("meatsalad:bags/stronghold", loot => {
    addLootTablePool(loot, {type: "blueprints", name: "permanent"})
    addLootTablePool(loot, {type: "blueprints", name: "permanent_chance"}, [5, 10])
    addLootTablePool(loot, {type: "affix_materials", name: "max"})
    addLootTablePool(loot, {type: "affix_materials", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "gems", name: "random_max"})
    addLootTablePool(loot, {type: "gems", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "misc", name: "very_rare/random"})
    addLootTablePool(loot, {type: "misc", name: "very_rare/random_chance"}, [5, 10])
  })
  event.addGeneric("meatsalad:bags/hellish_fortress", loot => {
    addStackLootPool(loot, {item: "minecraft:netherite_upgrade_smithing_template"}, {weight: 50.0, quality: 1.0})
    addLootTablePool(loot, {type: "affix_materials", name: "max"})
    addLootTablePool(loot, {type: "affix_materials", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "gems", name: "random_max"})
    addLootTablePool(loot, {type: "gems", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "ink", name: "max"})
    addLootTablePool(loot, {type: "ink", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "misc", name: "very_rare/random"})
    addLootTablePool(loot, {type: "misc", name: "very_rare/random_chance"}, [5, 10])
  })
  event.addGeneric("meatsalad:bags/magic", loot => {
    addLootTablePool(loot, {type: "gems", name: "magic_max"})
    addLootTablePool(loot, {type: "gems", name: "random_magic_chance"}, [5, 10])
    addLootTablePool(loot, {type: "ink", name: "max"}, 5)
    addLootTablePool(loot, {type: "ink", name: "random"}, [5, 10])
    addStackLootPool(loot, {item: "irons_spellbooks:arcane_essence", min: 10, max: 30})
    addStackLootPool(loot, {item: "irons_spellbooks:blank_rune", min: 3, max: 5})
    addStackLootPool(loot, {item: "irons_spellbooks:ancient_knowledge_fragment", min: 3, max: 5})
  })
  event.addGeneric("meatsalad:bags/otherside", loot => {
    addLootTablePool(loot, {type: "affix_materials", name: "max"})
    addLootTablePool(loot, {type: "affix_materials", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "gems", name: "random_max"})
    addLootTablePool(loot, {type: "gems", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "ink", name: "max"})
    addLootTablePool(loot, {type: "ink", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "misc", name: "very_rare/random"})
    addLootTablePool(loot, {type: "misc", name: "very_rare/random_chance"}, [5, 10])
  })
  event.addGeneric("meatsalad:bags/outer_end", loot => {
    addStackLootPool(loot, {item: "meatsalad:dark_matter"})
    addLootTablePool(loot, {type: "misc", name: "dark_matter_chance"}, [5, 10])
    addLootTablePool(loot, {type: "affix_materials", name: "max"})
    addLootTablePool(loot, {type: "affix_materials", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "gems", name: "random_max"})
    addLootTablePool(loot, {type: "gems", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "ink", name: "max"})
    addLootTablePool(loot, {type: "ink", name: "random_chance"}, [5, 10])
    addLootTablePool(loot, {type: "misc", name: "very_rare/random"})
    addLootTablePool(loot, {type: "misc", name: "very_rare/random_chance"}, [5, 10])
  })
  event.addGeneric("meatsalad:bags/supreme", loot => {
    addStackLootPool(loot, {item: "meatsalad:dark_matter", min: 2, max: 3})
    addLootTablePool(loot, {type: "affix_materials", name: "max"}, [3, 5])
    addLootTablePool(loot, {type: "gems", name: "random_max"}, [3, 5])
    loot.addPool(pool => {
      pool.rolls = [2, 3]
      addStack(pool, {item: "irons_spellbooks:legendary_ink", max: 4}, {weight: 2})
      addStack(pool, {item: "irons_spellbooks:ancient_knowledge_fragment", max: 3}, {weight: 1})
    })
    addLootTablePool(loot, {type: "misc", name: "very_rare/random"}, [3, 5])
  })

  for (let [boss, {maxChaosLevel}] of Object.entries(global.BOSSES)) {
    let [bossMod, bossId] = boss.split(":")
    let baseLootTable = `${bossMod}:entities/${bossId}`
    for (let chaosLevel = 0; chaosLevel <= maxChaosLevel; chaosLevel++) {
      let bagId = bossId
      if (chaosLevel > 0) {
        bagId += `_${chaosLevel}`
      }
      event.addGeneric(`meatsalad:bags/${bagId}`, loot => {
        addLootTablePool(loot, baseLootTable)
        if (chaosLevel > 0) {
          addStackLootPool(loot, {item: "meatsalad:chaos_shard", min: (0 + chaosLevel), max: (2 * chaosLevel)})
          addStackLootPool(loot, {item: "gateways:gate_pearl", nbt: "{gateway: \"meatsalad:supreme\"}"}, {weight: (25 * chaosLevel)})
          if (chaosLevel >= 3) {
            addStackLootPool(loot, {item: "meatsalad:lost_illusion"})
          }
        }
      })
    }
  }
})

EntityEvents.death(event => {
  const entity = event.entity
  if (!(entity.type in global.BOSSES) || !entity.lastHurtByMob || !entity.lastHurtByMob.isPlayer()) return
  let chaos_level = 0
  if (entity.persistentData.contains('chaos_level')) {
    chaos_level = entity.persistentData.getInt('chaos_level')
  }
  let treasure_id = entity.type.split(":").pop()
  if (chaos_level > 0) {
    treasure_id += `_${chaos_level}`
  }
  Utils.server.runCommandSilent(`give @a[team=Meat] treasurebags:treasure_bag{silentlib.LootContainer:{BagType:"meatsalad:${treasure_id}",LootTable:"meatsalad:bags/${treasure_id}"}}`)
})
