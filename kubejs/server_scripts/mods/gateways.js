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

  const gates = [
    { name: 'basic/blaze', item: 'minecraft:blaze_rod' },
    { name: 'basic/slime', item: 'minecraft:slime_ball' },
    { name: 'basic/enderman', item: 'minecraft:ender_pearl' },
    { mod: 'meatsalad', name: 'basalz', item: 'thermal:basalz_rod' },
    { mod: 'meatsalad', name: 'blitz', item: 'thermal:blitz_rod' },
    { mod: 'meatsalad', name: 'blizz', item: 'thermal:blizz_rod' },
    { mod: 'meatsalad', name: 'creeper', item: 'minecraft:gunpowder' },
    { mod: 'meatsalad', name: 'magma_cube', item: 'minecraft:magma_cream' },
    { mod: 'meatsalad', name: 'shulker', item: 'minecraft:shulker_shell' },
    { mod: 'meatsalad', name: 'skeleton', item: 'minecraft:bone' },
    { mod: 'meatsalad', name: 'spider', item: 'minecraft:spider_eye' },
    { mod: 'meatsalad', name: 'witch', item: 'minecraft:glowstone_dust' },
    { mod: 'meatsalad', name: 'wither_skeleton', item: 'minecraft:wither_skeleton_skull' },
    { mod: 'meatsalad', name: 'zombie', item: 'minecraft:rotten_flesh' },
  ]
  gates.forEach(gate => {
    let gateMod = gate.mod ?? 'gateways'
    let gateShortName = gate.name.split('/').pop()

    global.energize(event,
      [
        Ingredient.of('meatsalad:infused_ender_pearl'),
        Ingredient.of(gate.item),
        Ingredient.of(gate.item),
        Ingredient.of(gate.item),
        Ingredient.of(gate.item),
        Ingredient.of('meatsalad:infused_ender_pearl'),
      ],
      500000,
      Item.of('gateways:gate_pearl', 1, { gateway: `${gateMod}:${gate.name}` }),
      `${gateShortName}_gate`
    )
  })
})
