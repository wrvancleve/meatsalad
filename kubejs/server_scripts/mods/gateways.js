ServerEvents.recipes(event => {
  global.removeRecipes(event, [
    'gateways:basic/blaze',
    'gateways:basic/slime',
    'gateways:basic/enderman',
    'gateways:endless/blaze',
    'gateways:emerald_grove',
    'gateways:hellish_fortress', // Flesh, Skull, Gold, Blaze Rod
    'gateways:overworldian_nights', // Glowstone, Spider Eye, Gunpowder, Bone, Flesh
  ])
})
