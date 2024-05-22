BlockEvents.modification(event => {
  event.modify('summoningrituals:altar', block => {
    block.explosionResistance = 30.0
  })
})
