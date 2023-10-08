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
  }, 'hostilenetworks', 'deep_learner');

  event.remove({ id: 'hostilenetworks:framework' })
  event.shaped('hostilenetworks:blank_data_model', [
    'CAC',
    'RHR',
    'CAC'
  ], {
    C: 'minecraft:clay_ball',
    A: '#forge:gems/amethyst',
    R: '#forge:dusts/redstone',
    H: 'ae2:cell_component_256k'
  }).id('meatsalad:blank_data_model');

  global.replaceShaped(event, [
    'OEO',
    'GCG',
    'OIO'
  ], {
    O: '#forge:obsidian',
    E: '#forge:storage_blocks/emerald',
    G: '#forge:ingots/blaze_gold',
    C: '#forge:circuits/ultimate',
    I: 'rftoolsbase:infused_enderpearl'
  }, 'hostilenetworks', 'loot_fabricator');

  global.replaceShaped(event, [
    'OTO',
    'ICI',
    'OIO'
  ], {
    O: '#forge:obsidian',
    T: 'mekanism:teleportation_core',
    I: 'rftoolsbase:infused_enderpearl',
    C: '#forge:circuits/ultimate'
  }, 'hostilenetworks', 'sim_chamber');
})