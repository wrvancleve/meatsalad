ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    "AIA",
    "PEP",
    "AIA"
  ], {
    A: 'minecraft:amethyst_shard',
    P: '#forge:paper',
    I: '#forge:nuggets/iron',
    E: 'kubejs:infused_ender_pearl'
  }, 'waystones', 'return_scroll');

  global.replaceShaped(event, [
    "AGA",
    "PEP",
    "AGA"
  ], {
    A: 'minecraft:amethyst_shard',
    P: '#forge:paper',
    G: '#forge:nuggets/gold',
    E: 'kubejs:infused_ender_pearl'
  }, 'waystones', 'bound_scroll');

  global.replaceShaped(event, [
    "ADA",
    "PEP",
    "ADA"
  ], {
    A: 'minecraft:amethyst_shard',
    P: '#forge:paper',
    D: '#forge:nuggets/diamond',
    E: 'kubejs:infused_ender_pearl'
  }, 'waystones', 'warp_scroll');

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