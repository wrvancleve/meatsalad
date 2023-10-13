ItemEvents.tooltip(event => {
  event.add('allthemodium:teleport_pad', [
    Text.of('Place the pad down in the specified Dimension'),
    Text.of('Sneak Right Click with both hands empty to teleport'),
    Text.of('§aOverworld TO Mining Dimension').red(),
    Text.of('§cThe Nether TO The Other').red()
  ])
})

JEIEvents.hideItems(event => {
  /*
  event.hide([
    'allthemodium:molten_allthemodium_bucket',
    /allthemodium:alloy_.+/,
    /allthemodium:allthemodium_.+/,
    'allthemodium:raw_allthemodium',
    /allthemodium:raw_allthemodium_.+/,
    'allthemodium:dirty_allthemodium_dust',
    /allthemodium:unobtainium_allthemodium_alloy_.+/,
    /allthemodium:unobtainium_vibranium_alloy_.+/,
    /allthemodium:vibranium_allthemodium_alloy_.+/,
    'allthemodium:vibranium_ore'
  ])
  */
  event.hide([
    /allthemodium:alloy_.+/,
    /allthemodium:unobtainium_allthemodium_alloy_.+/,
    /allthemodium:unobtainium_vibranium_alloy_.+/,
    /allthemodium:vibranium_allthemodium_alloy_.+/,
    'allthemodium:allthemodium_sword',
    'allthemodium:allthemodium_pickaxe',
    'allthemodium:allthemodium_axe',
    'allthemodium:allthemodium_shovel',
    'allthemodium:allthemodium_hoe',
    'allthemodium:allthemodium_helmet',
    'allthemodium:allthemodium_chestplate',
    'allthemodium:allthemodium_leggings',
    'allthemodium:allthemodium_boots',
    'allthemodium:allthemodium_apple',
    'allthemodium:allthemodium_carrot',
    'allthemodium:vibranium_ore'
  ])
})
