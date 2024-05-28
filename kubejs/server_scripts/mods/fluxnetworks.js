ServerEvents.recipes(event => {
  replaceShaped(event, [
    'fof',
    'oeo',
    'fof'
  ], {
    f: 'fluxnetworks:flux_dust',
    o: 'minecraft:obsidian',
    e: 'meatsalad:infused_ender_pearl',
  }, Item.of('fluxnetworks:flux_core', 16), 'fluxcore')
})
