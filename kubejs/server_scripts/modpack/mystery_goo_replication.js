//priority: 70

ServerEvents.recipes(event => {
  // Gate replications
  const gates = [
    'gateways:basic/blaze',
    'gateways:basic/slime',
    'gateways:basic/enderman',
    'gateways:hellish_fortress',
    'gateways:overworldian_nights',
    'meatsalad:creeper',
    'meatsalad:skeleton',
    'meatsalad:spider',
    'meatsalad:zombie',
    'meatsalad:magma_cube',
    'meatsalad:witch',
    'meatsalad:wither_skeleton',
    'meatsalad:basalz',
    'meatsalad:blitz',
    'meatsalad:blizz',
    'meatsalad:shulker',
  ]
  gates.forEach(gateId => {
    let gateName = gateId.split(':').pop().split('/').pop()
    createGooReplication(event, 'gateways:gate_pearl', `{gateway: "${gateId}"}`, gateName)
  })

  // Other replications
  const tagReplications = Ingredient.of('#meatsalad:mystery_goo_replication').stacks
  tagReplications.forEach(tagReplication => {
    createGooReplication(event, tagReplication.id)
  })
})
