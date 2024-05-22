ClientEvents.lang('en_us', event => {
  event.add('summoningrituals', 'label.summoningrituals.itemGroup', 'Summoning Rituals')
})

JEIEvents.hideItems(event => {
  event.hide([
    'summoningrituals:indestructible_altar'
  ])
})
