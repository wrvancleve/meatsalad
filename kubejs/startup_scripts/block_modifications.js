BlockEvents.modification(event => {
  event.modify('summoningrituals:altar', block => {
    block.explosionResistance = 1200.0
  })
})
