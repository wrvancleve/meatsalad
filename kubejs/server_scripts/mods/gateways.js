ServerEvents.recipes(event => {
  const gates = [
    { name: 'blaze_gate', item: 'minecraft:blaze_rod' },
    { name: 'creeper_gate', item: 'minecraft:gunpowder' },
    { name: 'enderman_gate', item: 'minecraft:ender_pearl' },
    { name: 'ghast_gate', item: 'minecraft:ghast_tear' },
    { name: 'magma_cube_gate', item: 'minecraft:magma_cream' },
    { name: 'shulker_gate', item: 'minecraft:shulker_shell' },
    { name: 'skeleton_gate', item: 'minecraft:bone' },
    { name: 'slime_gate', item: 'minecraft:slime_ball' },
    { name: 'spider_gate', item: 'minecraft:spider_eye' },
    { name: 'witch_gate', item: 'minecraft:glass_bottle' },
    { name: 'zombie_gate', item: 'minecraft:rotten_flesh' },
    { mod: 'meatsalad', name: 'basalz_gate', item: 'thermal:basalz_rod' },
    { mod: 'meatsalad', name: 'blitz_gate', item: 'thermal:blitz_rod' },
    { mod: 'meatsalad', name: 'blizz_gate', item: 'thermal:blizz_rod' },
    { mod: 'meatsalad', name: 'wither_skeleton_gate', item: 'minecraft:wither_skeleton_skull' },
  ]
  gates.forEach(gate => {
    let gateMod = gate.mod ?? 'gateways';

    // Create gate
    event.recipes.summoningrituals.altar('alexsmobs:mimicream')
      .itemOutput(Item.of('gateways:gate_pearl', 1, { gateway: `${gateMod}:${gate.name}` }))
      .input('kubejs:infused_ender_pearl')
      .input(`4x ${gate.item}`)
      .recipeTime(200)
      .id(`meatsalad:summoning/${gate.name}`);

    // Upgrade to large gate
    event.recipes.summoningrituals.altar('alexsmobs:mimicream')
      .itemOutput(Item.of('gateways:gate_pearl', 1, { gateway: `${gateMod}:${gate.name}_large` }))
      .input(Item.of('gateways:gate_pearl', 1, { gateway: `${gateMod}:${gate.name}` }).strongNBT())
      .input('kubejs:draconic_infused_dark_matter')
      .input(`4x ${gate.item}`)
      .recipeTime(200)
      .id(`meatsalad:summoning/${gate.name}_large`);

    // Upgrade to supreme gate
    event.recipes.summoningrituals.altar('alexsmobs:mimicream')
      .itemOutput(Item.of('gateways:gate_pearl', 1, { gateway: 'meatsalad:supreme_gate' }))
      .input(Item.of('gateways:gate_pearl', 1, { gateway: `${gateMod}:${gate.name}_large` }).strongNBT())
      .input('kubejs:draconic_infused_dark_matter')
      .input('minecraft:nether_star')
      .input('kubejs:ender_star')
      //.input(Ingredient.of('#forge:glass'))
      .recipeTime(200)
      .id(`meatsalad:summoning/supreme_gate_from_${gate.name}_large`);
  })

  // Supreme Gate from Chaos Shard
  event.recipes.summoningrituals.altar('alexsmobs:mimicream')
    .itemOutput(Item.of('gateways:gate_pearl', 1, { gateway: 'meatsalad:supreme_gate' }))
    .input('kubejs:chaos_shard')
    .input('kubejs:draconic_infused_dark_matter')
    .input('minecraft:nether_star')
    .input('kubejs:ender_star')
    .recipeTime(200)
    .id('meatsalad:summoning/supreme_gate_from_chaos_shard');
})
