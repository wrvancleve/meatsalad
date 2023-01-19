onEvent('jei.hide.items', e => {
  //#region consts
  let typeFirst = ['mekanism']

  //#endregion
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  //#endregion

  e.hide([
    'silentgear:iron_rod',
    //'twilightforest:uncrafting_table',
    'thermal:raw_tin',
    'thermal:raw_lead',
    'thermal:raw_silver',
    'thermal:raw_nickel',
    'thermal:diamond_dust'
  ])

  //#region hideMetal
  hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'signalum', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'enderium', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'electrum', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'constantan', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'bronze', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'lumium', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'invar', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])

  //#endregion
  //#region hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('thermal', 'gear', ['iron', 'gold'])
  hideStuff('thermal', 'plate', ['iron', 'gold'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  //hideStuff('alltheores', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  //hideStuff('alltheores', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  //hideStuff('alltheores', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  //hideStuff('alltheores', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
  //#endregion
})
