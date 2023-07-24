ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    "OGO",
    "RCR",
    "OGO"
  ], {
    O: '#forge:obsidian',
    G: '#forge:glass_panes',
    R: '#forge:dusts/redstone',
    C: '#forge:circuits/ultimate'
  }, 'hostilenetworks', 'deep_learner');

  
  event.remove({ id: 'hostilenetworks:framework' })
  event.remove({ id: 'hostilenetworks:loot_fabricator' })
  event.remove({ id: 'hostilenetworks:sim_chamber' })
})