ServerEvents.chestLootTables(event => {
  event.modify('betterfortresses:keep', table => {
    addGearLootPool(table, 5, 0.5, true, false)
    addGatewayLootPool(table, {weight: 5})
    addRedHeartLootPool(table, 5)
    addStackLootPool(table, 
      { item: 'minecraft:netherite_upgrade_smithing_template' },
      { weight: 2.5, quality: 0.5 }
    )
  })
})
