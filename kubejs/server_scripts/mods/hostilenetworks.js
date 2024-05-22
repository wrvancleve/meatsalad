ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    'OGO',
    'RCR',
    'OGO'
  ], {
    O: '#forge:obsidian',
    G: '#forge:glass_panes',
    R: '#forge:dusts/redstone',
    C: '#forge:circuits/ultimate'
  }, Item.of('hostilenetworks:deep_learner'))

  global.replaceShaped(event, [
    'CAC',
    'RHR',
    'CAC'
  ], {
    C: 'minecraft:clay_ball',
    A: '#forge:gems/amethyst',
    R: '#forge:dusts/redstone',
    H: '#refinedstorage:parts/items/256k'
  }, Item.of('hostilenetworks:blank_data_model'), 'framework')

  global.replaceShaped(event, [
    'OEO',
    'GCG',
    'OIO'
  ], {
    O: '#forge:obsidian',
    E: '#forge:storage_blocks/emerald',
    G: '#forge:ingots/blaze_gold',
    C: '#forge:circuits/ultimate',
    I: 'meatsalad:infused_ender_pearl'
  }, Item.of('hostilenetworks:loot_fabricator'))

  global.replaceShaped(event, [
    'OTO',
    'ICI',
    'OIO'
  ], {
    O: '#forge:obsidian',
    T: 'mekanism:teleportation_core',
    I: 'meatsalad:infused_ender_pearl',
    C: '#forge:circuits/ultimate'
  }, Item.of('hostilenetworks:sim_chamber'))
})
