ServerEvents.recipes(event => {
  event.remove({ id: 'fluxnetworks:fluxcore' })
  event.shaped('16x fluxnetworks:flux_core', [
    'fof',
    'oeo',
    'fof'
  ], {
    f: 'fluxnetworks:flux_dust',
    o: 'minecraft:obsidian',
    e: 'kubejs:infused_ender_pearl',
  }).id('meatsalad:flux_core');
})