ClientEvents.lang('en_us', event => {
  event.add('endrem', 'item.endrem.old_eye.description', '§7§oLegends say this eye once belonged to ancient builders who succumbed to a terrible virus')
})

JEIEvents.hideItems(event => {
  event.hide([
    'endrem:exotic_eye',
    'endrem:cold_eye',
    'endrem:cryptic_eye',
    'endrem:undead_soul',
    'endrem:rogue_eye',
  ])
})

JEIEvents.information(event => {
  event.addItem('endrem:black_eye', [
    Text.of('Obtained by killing The Harbinger'),
    Text.of('Craft an Eye of Mech to locate The Harbinger in the Overworld'),
  ])
  event.addItem('endrem:corrupted_eye', Text.of('Obtained from loot chests in Pillager Outposts or other Illager Structures'))
  event.addItem('endrem:cursed_eye', Text.of('Obtained from loot chests in Nether Bastions'))
  event.addItem('endrem:evil_eye', [
    Text.of('Obtained by killing the Netherite Monstrosity'),
    Text.of('Craft an Eye of Monstrous to locate the Netherite Monstrosity in the Nether'),
  ])
  event.addItem('endrem:guardian_eye', Text.of('Obtained by killing an Elder Guardian'))
  event.addItem('endrem:lost_eye', [
    Text.of('Obtained by killing the Ancient Remnant'),
    Text.of('Craft an Eye of Desert to locate the Ancient Remnant in the Overworld'),
  ])
  event.addItem('endrem:magical_eye', Text.of('Obtained from loot chests in Ancient Pyramids (The Other Dimension)'))
  event.addItem('endrem:nether_eye', Text.of('Obtained from loot chests in Nether Fortresses'))
  event.addItem('endrem:old_eye', Text.of('Obtained from loot chests in Ancient Cities'))
  event.addItem('endrem:undead_eye', Text.of('Obtained by killing the Dead King in Catacombs (Overworld Dimension)'))
  event.addItem('endrem:wither_eye', Text.of('Obtained by killing the Wither'))
})
