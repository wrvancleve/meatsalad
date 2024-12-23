ServerEvents.recipes(event => {
  const ENCHANTS = {
    'minecraft:protection': { currentMax: 9, newMax: 15 },
    'minecraft:fire_protection': { currentMax: 9, newMax: 15 },
    'minecraft:feather_falling': { currentMax: 7, newMax: 10 },
    'minecraft:blast_protection': { currentMax: 9, newMax: 15 },
    'minecraft:projectile_protection': { currentMax: 9, newMax: 15 },
    'minecraft:respiration': { currentMax: 4, newMax: 8 },
    'minecraft:thorns': { currentMax: 4, newMax: 8 },
    'minecraft:depth_strider': { currentMax: 4, newMax: 8 },
    'minecraft:frost_walker': { currentMax: 2, newMax: 5 },
    'minecraft:soul_speed': { currentMax: 4, newMax: 8 },
    'minecraft:swift_sneak': { currentMax: 4, newMax: 8 },
    'minecraft:sharpness': { currentMax: 9, newMax: 15 },
    'minecraft:smite': { currentMax: 9, newMax: 15 },
    'minecraft:bane_of_arthropods': { currentMax: 9, newMax: 15 },
    'minecraft:knockback': { currentMax: 4, newMax: 8 },
    'minecraft:fire_aspect': { currentMax: 4, newMax: 8 },
    'minecraft:looting': { currentMax: 4, newMax: 8 },
    'minecraft:sweeping': { currentMax: 7, newMax: 10 },
    'minecraft:efficiency': { currentMax: 9, newMax: 15 },
    'minecraft:unbreaking': { currentMax: 4, newMax: 8 },
    'minecraft:fortune': { currentMax: 4, newMax: 8 },
    'minecraft:power': { currentMax: 9, newMax: 15 },
    'minecraft:punch': { currentMax: 4, newMax: 8 },
    'minecraft:luck_of_the_sea': { currentMax: 4, newMax: 8 },
    'minecraft:lure': { currentMax: 4, newMax: 8 },
    'minecraft:loyalty': { currentMax: 4, newMax: 8 },
    'minecraft:impaling': { currentMax: 9, newMax: 15 },
    'minecraft:riptide': { currentMax: 4, newMax: 8 },
    'minecraft:quick_charge': { currentMax: 4, newMax: 8 },
    'minecraft:piercing': { currentMax: 7, newMax: 10 },
    'apotheosis:berserkers_fury': { currentMax: 2, newMax: 5 },
    'apotheosis:crescendo': { currentMax: 4, newMax: 8 },
    'apotheosis:earths_boon': { currentMax: 2, newMax: 5 },
    'apotheosis:icy_thorns': { currentMax: 4, newMax: 8 },
    'apotheosis:knowledge': { currentMax: 2, newMax: 5 },
    'apotheosis:natures_blessing': { currentMax: 4, newMax: 8 },
    'apotheosis:reflective': { currentMax: 4, newMax: 8 },
    'apotheosis:scavenger': { currentMax: 2, newMax: 5 },
    'apotheosis:shield_bash': { currentMax: 4, newMax: 8 },
    'apotheosis:spearfishing': { currentMax: 4, newMax: 8 },
    'apotheosis:bane_of_illagers': { currentMax: 9, newMax: 15 },
    'apotheosis:capturing': { currentMax: 2, newMax: 5 },
    'cofh_core:holding': { currentMax: 9, newMax: 15 },
    'ensorcellation:magic_protection': { currentMax:9, newMax: 15 },
    //'ensorcellation:fire_rebuke': { currentMax: 6, newMax: 10 },
    'ensorcellation:frost_aspect': { currentMax: 4, newMax: 8 },
    'ensorcellation:leech': { currentMax: 4, newMax: 8 },
    //'ensorcellation:magic_edge': { currentMax: 7, newMax: 10 },
    'ensorcellation:vorpal': { currentMax: 4, newMax: 8 },
    'ensorcellation:hunter': { currentMax: 4, newMax: 8 },
    'ensorcellation:trueshot': { currentMax: 4, newMax: 8 },
    'ensorcellation:angler': { currentMax: 7, newMax: 10 },
    'ensorcellation:phalanx': { currentMax: 9, newMax: 15 },
  }

  for (let [enchant, enchantProps] of Object.entries(ENCHANTS)) {
    let currentMax = enchantProps.currentMax
    let newMax = enchantProps.newMax
    for (let level = currentMax + 2; level <= newMax; level += 1) {
      event.custom({
        type: 'cataclysm:weapon_fusion',
        base: Item.of('minecraft:enchanted_book').enchant(enchant, level - 1).strongNBT(),
        addition: Item.of('quark:ancient_tome', `{StoredEnchantments:[{id:'${enchant}',lvl:${currentMax}s}]}`).weakNBT(),
        result: Item.of('minecraft:enchanted_book').enchant(enchant, level).strongNBT()
      }).id(`meatsalad:fusion/${enchant.split(':').pop()}_level_${level}_enchanted_book`)
    }
    event.custom({
      type: 'cataclysm:weapon_fusion',
      base: Item.of('minecraft:enchanted_book').enchant(enchant, currentMax).strongNBT(),
      addition: {item: 'meatsalad:eternal_crystal_shard'},
      result: Item.of('quark:ancient_tome', `{StoredEnchantments:[{id:'${enchant}',lvl:${currentMax}s}]}`)//.strongNBT()
    }).id(`meatsalad:fusion/${enchant.split(':').pop()}_ancient_tome`)
  }
})

ServerEvents.genericLootTables(event => {
  const LOOT_TABLES = [
    { id: 'minecraft:chests/bastion_bridge', type: 'random_single_chance' },
    { id: 'minecraft:chests/bastion_hoglin_stable', type: 'random_single_chance' },
    { id: 'minecraft:chests/bastion_other', type: 'random_single_chance' },
    { id: 'minecraft:chests/stronghold_corridor', type: 'random_single_chance' },
    { id: 'minecraft:chests/stronghold_crossing', type: 'random_single_chance' },
    { id: 'betterwitchhuts:chests/hut_0', type: 'random_single_chance' },
    { id: 'betterstrongholds:chests/treasure', type: 'random_single_chance' },

    { id: 'minecraft:chests/bastion_treasure', type: 'random_single_treasure' },
    { id: 'betterfortresses:chests/puzzle', type: 'random_single_treasure' },
    { id: 'betterjungletemples:chests/treasure', type: 'random_single_treasure' },
    { id: 'betteroceanmonuments:chests/upper_side_chamber', type: 'random_single_treasure' },
    { id: 'dungeoncrawl:chests/treasure', type: 'random_single_treasure' },
    { id: 'mes:astral_meteorite', type: 'random_single_treasure' },
  ]
  LOOT_TABLES.forEach(table => {
    event.modify(table.id, loot => {
      loot.addPool(pool => {
        pool.addEntry(
          TableEntry(`meatsalad:enchanted_books/${table.type}`)
        )
      })
    })
  })
})
