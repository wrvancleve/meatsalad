ServerEvents.recipes(event => {
  replaceShaped(event, [
    " A ",
    "BCB",
    " A "
  ], {
    A: 'minecraft:echo_shard',
    B: 'minecraft:experience_bottle',
    C: 'experienceobelisk:cognitive_crystal',
  }, Item.of('thermal:xp_crystal'), 'tools/xp_crystal')
})
