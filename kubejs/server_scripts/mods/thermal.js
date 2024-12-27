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

  event.custom({
    type: 'thermal:crucible',
    ingredient: {
      item: 'create:experience_nugget'
    },
    result: [
      {
        fluid: "mob_grinding_utils:fluid_xp",
        amount: 250
      }
    ],
    energy: 200
  }).id('meatsalad:crucible/fluid_xp')
})
