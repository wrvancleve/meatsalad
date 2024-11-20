ClientEvents.lang('en_us', event => {
  event.add('endrem', 'item.endrem.old_eye.description', '§7§oLegends say this eye once belonged to ancient builders who succumbed to a terrible virus')
})

JEIEvents.hideItems(event => {
  event.hide([
    'endrem:exotic_eye',
    'endrem:cryptic_eye',
    'endrem:undead_soul',
    'endrem:rogue_eye',
    'endrem:witch_eye',
  ])
})

JEIEvents.information(event => {
  event.addItem('endrem:black_eye', [
    Text.of('Obtained by killing The Harbinger.'),
    Text.of('The Harbinger is located in the Ancient Factory (Overworld).'),
  ])
  event.addItem('endrem:cold_eye', [
    Text.of('Obtained by killing Maledictus.'),
    Text.of('Maledictus is located in the Frosted Prison (Overworld).'),
  ])
  event.addItem('endrem:corrupted_eye', Text.of('Obtained from loot chests in Pillager Outposts or other Illager Structures.'))
  event.addItem('endrem:cursed_eye', Text.of('Obtained from loot chests in Nether Bastions.'))
  event.addItem('endrem:evil_eye', [
    Text.of('Obtained by killing the Netherite Monstrosity.'),
    Text.of('Netherite Monstrosity is located in the Soul Blacksmith (Nether).'),
  ])
  event.addItem('endrem:guardian_eye', Text.of('Obtained by killing an Elder Guardian.'))
  event.addItem('endrem:lost_eye', [
    Text.of('Obtained by killing the Ancient Remnant.'),
    Text.of('Ancient Remnant is located in the Cursed Pyramid (Overworld).'),
  ])
  event.addItem('endrem:magical_eye', Text.of('Obtained from loot chests in Ancient Pyramids (The Other Dimension).'))
  event.addItem('endrem:nether_eye', Text.of('Obtained from loot chests in Nether Fortresses.'))
  event.addItem('endrem:old_eye', Text.of('Obtained from loot chests in Ancient Cities.'))
  event.addItem('endrem:undead_eye', [
    Text.of('Obtained by killing the Dead King.'),
    Text.of('The Dead King is located in the Catacombs (Overworld).'),
  ])
  event.addItem('endrem:wither_eye', Text.of('Obtained by killing the Wither.'))
})
