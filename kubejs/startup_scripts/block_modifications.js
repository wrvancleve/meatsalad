BlockEvents.modification(event => {
  event.modify('summoningrituals:altar', block => {
    block.explosionResistance = 1200.0
  })
  event.modify('summoningrituals:indestructible_altar', block => {
    block.explosionResistance = 3600000.0
  })
})
