JEIEvents.hideItems(event => {
  event.hide([
    'bhc:blade_of_vitality',
    'bhc:blue_heart_melted',
    'bhc:green_heart_melted',
    'bhc:red_heart_melted',
    'bhc:yellow_heart_melted',
  ])
})

JEIEvents.information(event => {
  event.addItem('bhc:wither_bone', Text.of('Obtained by killing Wither Skeletons'))
  event.addItem('bhc:red_heart', Text.of('Obtained in loot chests'))
  event.addItem('bhc:yellow_heart', [
    Text.of('Obtained by killing any of the following:'),
    Text.of('    Elder Guardian'),
    Text.of('    The Harbinger'),
    Text.of('    Netherite Monstrosity'),
    Text.of('    The Wither'),
    Text.of('    Piglich'),
    Text.of('    Ender Dragon'),
    Text.of('    Ender Golem')
  ])
  event.addItem('bhc:green_heart', [
    Text.of('Obtained by killing any of the following:'),
    Text.of('    Void Worm'),
    Text.of('    The Leviathan'),
    Text.of('    Ignis'),
    Text.of('    Ender Guardian'),
    Text.of('    Herobrine')
  ])
  event.addItem('bhc:blue_heart', Text.of('Obtained by killing the Warden'))
})
