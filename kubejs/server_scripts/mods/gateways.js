ServerEvents.recipes(event => {
  removeRecipes(event, [
    'gateways:basic/blaze',
    'gateways:basic/slime',
    'gateways:basic/enderman',
    'gateways:endless/blaze',
    'gateways:emerald_grove',
    'gateways:hellish_fortress', // Flesh, Skull, Gold, Blaze Rod
    'gateways:overworldian_nights', // Glowstone, Spider Eye, Gunpowder, Bone, Flesh
  ])

  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `gateways:hellish_fortress` }).strongNBT(), [
    'BEB',
    'GeG',
    'NNN'
  ], {
    B: 'minecraft:blaze_rod',
    E: 'minecraft:wither_skeleton_skull',
    G: '#forge:storage_blocks/gold',
    e: 'meatsalad:infused_ender_pearl',
    N: 'minecraft:nether_bricks',
  }).stage('hellish_fortress_gate').id('meatsalad:hellish_fortress_gate')

  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `gateways:basic/blaze` }).strongNBT(), [
    'BBB',
    'BeB',
    'NNN'
  ], {
    B: 'minecraft:blaze_rod',
    e: 'meatsalad:infused_ender_pearl',
    N: 'minecraft:nether_bricks',
  }).stage('blaze_gate').id('meatsalad:blaze_gate')
})
