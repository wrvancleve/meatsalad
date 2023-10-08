ServerEvents.recipes(event => {
  let gateSummoning = (gateMod, gateName, gateItem) => {
    event.custom({
      type: 'summoningrituals:altar',
      catalyst: { item: 'alexsmobs:mimicream' },
      outputs: [
        { item: 'gateways:gate_pearl', count: 1, nbt: `{gateway:"${gateMod}:${gateName}"}` }
      ],
      inputs: [
        { ingredient: { item: 'rftoolsbase:infused_enderpearl' }, count: 1 },
        { ingredient: { item: gateItem }, count: 4 }
      ],
      recipe_time: 200,
      block_below: { block: 'extendedcrafting:nether_star_block' }
    }).id(`meatsalad:summoning/${gateName}`);
  };
  let largeGateSummoning = (gateMod, gateName, gateItem) => {
    event.custom({
      type: 'summoningrituals:altar',
      catalyst: { item: 'alexsmobs:mimicream' },
      outputs: [
        { item: 'gateways:gate_pearl', count: 1, nbt: `{gateway:"${gateMod}:${gateName}"}` }
      ],
      inputs: [
        { ingredient: { item: 'kubejs:draconic_infused_dark_matter' }, count: 1 },
        { ingredient: { item: gateItem }, count: 8 }
      ],
      recipe_time: 200,
      block_below: { block: 'extendedcrafting:nether_star_block' }
    }).id(`meatsalad:summoning/${gateName}`);
  };

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
    gateSummoning(gateMod, gate.name, gate.item);
    largeGateSummoning(gateMod, `${gate.name}_large`, gate.item);
  })

  // Unique Gates
  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'kubejs:uu_matter' },
    outputs: [
      { item: 'gateways:gate_pearl', count: 1, nbt: '{gateway:"meatsalad:supreme_gate"}' }
    ],
    inputs: [
      { ingredient: { item: "kubejs:draconic_infused_dark_matter" }, count: 1 },
      { ingredient: { item: "kubejs:draconic_infused_eternal_crystal" }, count: 1 },
      { ingredient: { item: "kubejs:chaos_shard" }, count: 1 }
    ],
    recipe_time: 200,
    block_below: { block: 'extendedcrafting:nether_star_block' }
  }).id('meatsalad:summoning/supreme_gate');
})
