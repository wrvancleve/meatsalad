ServerEvents.chestLootTables(event => {
  event.modify('dungeons_arise:aviary/aviary_normal', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:aviary/aviary_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:bandit_towers/bandit_towers_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:ceryneian_hind/ceryneian_hind_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:heavenly_challenger/heavenly_challenger_normal', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:heavenly_challenger/heavenly_challenger_theater', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:infested_temple/infested_temple_top_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_garden_normal', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_garden_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_library_normal', table => {
    addAncientTomeLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_library_treasure', table => {
    addAncientTomeLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_normal', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:plague_asylum/plague_asylum_normal', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:plague_asylum/plague_asylum_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_elite', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_library', table => {
    addAncientTomeLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_normal', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_towers', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_barrels', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_rooms', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_top_rooms', table => {
    addAffixItemLootPool(table)
    addGemLootPool(table)
    addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_top_treasure', table => {
    addAffixItemLootPool(table, 'random_treasure')
    addGemLootPool(table)
    addGatewayLootPool(table)
    addRedHeartLootPool(table)
  })
})
