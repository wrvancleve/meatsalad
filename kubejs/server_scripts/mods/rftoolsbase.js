ServerEvents.recipes(event => {
  event.remove({ id: 'rftoolsbase:dimensionalshard' })
  event.shaped('4x rftoolsbase:dimensionalshard', [
    'deg',
    'irX',
    'qCc'
  ], {
    d: '#forge:gems/diamond',
    e: '#forge:gems/emerald',
    g: '#forge:ingots/gold',
    i: '#forge:ingots/iron',
    r: 'minecraft:redstone',
    X: 'minecraft:glowstone_dust',
    q: '#forge:gems/quartz',
    C: 'minecraft:prismarine_shard',
    c: '#forge:gems/certus_quartz',
  }).id('meatsalad:dimensional_shard');

  event.remove({ id: 'rftoolsbase:infused_diamond' })
  event.remove({ id: 'rftoolsbase:infused_enderpearl' })
})