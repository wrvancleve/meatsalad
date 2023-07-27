//priority: 1
ServerEvents.recipes(event => {
  function createReplicationRecipes(mod, itemId, itemNbt, itemNbtRegistryName) {
    let registryName = mod + ":" + itemId;
    if (itemNbt != null) {
      event.shaped(Item.of(registryName, 2, itemNbt).strongNBT(), [
        ' M ',
        'MIM',
        ' M '
      ], {
        M: 'alexsmobs:mimicream',
        I: Item.of(registryName, itemNbt).strongNBT()
      }).id('meatsalad:' + itemNbtRegistryName + '_2x_replication')
      event.shaped(Item.of(registryName, 4, itemNbt).strongNBT(), [
        'MMM',
        'MIM',
        'MMM'
      ], {
        M: 'alexsmobs:mimicream',
        I: Item.of(registryName, itemNbt).strongNBT()
      }).id('meatsalad:' + itemNbtRegistryName + '_4x_replication')
    } else {
      event.shaped(Item.of(registryName, 2), [
        ' M ',
        'MIM',
        ' M '
      ], {
        M: 'alexsmobs:mimicream',
        I: registryName
      }).id('meatsalad:' + registryName + '_2x_replication')
      event.shaped(Item.of(registryName, 4), [
        'MMM',
        'MIM',
        'MMM'
      ], {
        M: 'alexsmobs:mimicream',
        I: registryName
      }).id('meatsalad:' + registryName + '_4x_replication')
    }
  }

  const mysteryGooReplications = Ingredient.of('#meatsalad:mystery_goo_replication').stacks;
  mysteryGooReplications.forEach(mysteryGooReplication => {
    let idSplit = mysteryGooReplication.id.split(':');
    createReplicationRecipes(idSplit[0], idSplit[1]);
  })

  const gateways = [
    'zombie_gate',
    'spider_gate',
    'skeleton_gate',
    'creeper_gate',
    'slime_gate',
    'magma_cube_gate',
    'zombie_gate_large',
    'spider_gate_large',
    'skeleton_gate_large',
    'creeper_gate_large',
    'slime_gate_large',
    'magma_cube_gate_large',
    'witch_gate',
    'blaze_gate',
    'enderman_gate',
    'ghast_gate',
    'shulker_gate',
    'witch_gate_large',
    'blaze_gate_large',
    'enderman_gate_large',
    'ghast_gate_large',
    'shulker_gate_large'
  ]
  for (let gateway of gateways) {
    createReplicationRecipes('gateways', 'gate_pearl', `{gateway:"gateways:${gateway}"}`, gateway);
  }
  createReplicationRecipes('gateways', 'gate_pearl', '{gateway:"meatsalad:supreme_gate"}', 'supreme_gate');
})