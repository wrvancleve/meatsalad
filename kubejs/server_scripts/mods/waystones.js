ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    "AEA",
    "EDE",
    "AEA"
  ], {
    A: 'minecraft:amethyst_shard',
    E: '#balm:emeralds',
    D: 'kubejs:dark_matter'
  }, 'waystones', 'warp_stone');
})