ServerEvents.tags('item', event => {  
  const grids = [
    'universalgrid:wireless_universal_grid',
    'universalgrid:creative_wireless_universal_grid',
    'refinedstorage:wireless_grid',
    'refinedstorage:creative_wireless_grid',
    'refinedstorage:wireless_fluid_grid',
    'refinedstorage:creative_wireless_fluid_grid',
    'rebornstorage:super_wireless_crafting_grid',
    'rebornstorage:creative_super_wireless_crafting_grid',
    'refinedstorageaddons:wireless_crafting_grid',
    'refinedstorageaddons:creative_wireless_crafting_grid',
    'refinedstorage:wireless_crafting_monitor',
    'refinedstorage:creative_wireless_crafting_monitor',
  ]
  grids.forEach(grid => {
    event.remove('curios:curio', grid)
    event.add('curios:belt', grid)
  })

  event.removeAll('curios:body')
  event.removeAll('curios:feet')
  event.removeAll('curios:hands')
  event.removeAll('curios:head')
})

