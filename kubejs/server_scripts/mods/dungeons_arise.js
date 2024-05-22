ServerEvents.chestLootTables(event => {
  event.modify('dungeons_arise:aviary/aviary_normal', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:aviary/aviary_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:bandit_towers/bandit_towers_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:ceryneian_hind/ceryneian_hind_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:heavenly_challenger/heavenly_challenger_normal', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:heavenly_challenger/heavenly_challenger_theater', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:infested_temple/infested_temple_top_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_garden_normal', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_garden_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_library_normal', table => {
    global.addAncientTomeLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_library_treasure', table => {
    global.addAncientTomeLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_normal', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:keep_kayra/keep_kayra_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:plague_asylum/plague_asylum_normal', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:plague_asylum/plague_asylum_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_elite', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_library', table => {
    global.addAncientTomeLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_normal', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_towers', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:shiraz_palace/shiraz_palace_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_barrels', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_rooms', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_top_rooms', table => {
    global.addAffixItemLootPool(table)
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
  })

  event.modify('dungeons_arise:thornborn_towers/thornborn_towers_top_treasure', table => {
    global.addAffixItemLootPool(table, 'random_treasure')
    global.addPartLootPool(table)
    global.addGemLootPool(table)
    global.addGatewayLootPool(table)
    global.addRedHeartLootPool(table)
  })
})