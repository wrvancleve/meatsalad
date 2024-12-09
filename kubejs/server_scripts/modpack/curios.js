ServerEvents.genericLootTables((event) => {
  event.addGeneric("meatsalad:curios/archer", loot => {
    loot.addPool(pool => {
      addStack(pool, {item: "meatsalad:arrow_damage_ring"})
      addStack(pool, {item: "meatsalad:arrow_velocity_ring"})
      addStack(pool, {item: "meatsalad:dodge_chance_ring"})
    })
  })
  event.addGeneric("meatsalad:curios/mage", loot => {
    loot.addPool(pool => {
      addStack(pool, {item: "irons_spellbooks:cast_time_ring"})
      addStack(pool, {item: "irons_spellbooks:concentration_amulet"})
      addStack(pool, {item: "irons_spellbooks:conjurers_talisman"})
      addStack(pool, {item: "irons_spellbooks:cooldown_ring"})
      addStack(pool, {item: "irons_spellbooks:heavy_chain_necklace"})
      addStack(pool, {item: "irons_spellbooks:mana_ring"})
      addStack(pool, {item: "meatsalad:spell_power_ring"})
    })
  })
  event.addGeneric("meatsalad:curios/warrior", loot => {
    loot.addPool(pool => {
      addStack(pool, {item: "meatsalad:attack_damage_ring"})
      addStack(pool, {item: "meatsalad:attack_speed_ring"})
      addStack(pool, {item: "meatsalad:critical_damage_ring"})
    })
  })
  event.addGeneric("meatsalad:curios/guardian", loot => {
    loot.addPool(pool => {
      addStack(pool, {item: "meatsalad:armor_ring"})
      addStack(pool, {item: "meatsalad:armor_toughness_ring"})
      addStack(pool, {item: "meatsalad:healing_ring"})
    })
  })
  event.addGeneric("meatsalad:curios/random", loot => {
    loot.addPool(pool => {
      addLootTable(pool, {type: "curios", name: "archer", weight: 2.0})
      addLootTable(pool, {type: "curios", name: "mage", weight: 2.0})
      addLootTable(pool, {type: "curios", name: "warrior", weight: 2.0})
      addLootTable(pool, {type: "curios", name: "guardian", weight: 2.0})
      addStack(pool, {item: "meatsalad:lucky_ring"}, {weight: 1.0})
    })
  })
  event.addGeneric("meatsalad:curios/random_chance", loot => {
    loot.addPool(pool => {
      addLootTable(pool, {type: "curios", name: "random", weight: 10.0, quality: 1.0})
      pool.addEmpty(90.0)
    })
  })
})
