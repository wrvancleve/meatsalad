ServerEvents.recipes(event => {
  event.remove({ id: 'rftoolsbase:dimensionalshard' })

  global.replaceShaped(event, [
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
  }, 'rftoolsbase', 'dimensionalshard');
})