JEIEvents.information(event => {
    event.addItem('bhc:wither_bone', Text.of('Obtained by killing Wither Skeletons'));
    event.addItem('bhc:red_heart', Text.of('Obtained in loot chests'));
    event.addItem('bhc:yellow_heart', [
        Text.of('Obtained by killing any of the following:'),
        Text.of('    Elder Guardian'),
        Text.of('    The Harbinger'),
        Text.of('    Netherite Monstrosity'),
        Text.of('    The Wither'),
        Text.of('    Piglich'),
        Text.of('    Ender Dragon'),
        Text.of('    Ender Golem')
    ]);
    event.addItem('bhc:green_heart', [
        Text.of('Obtained by killing any of the following:'),
        Text.of('    Void Worm'),
        Text.of('    The Leviathan'),
        Text.of('    Ignis'),
        Text.of('    Ender Guardian'),
        Text.of('    Herobrine')
    ]);
    event.addItem('bhc:blue_heart', Text.of('Obtained by killing the Warden'));

    event.addItem('endrem:black_eye', Text.of('Obtained in buried or shipwreck treasure chests'))
    event.addItem('endrem:corrupted_eye', Text.of('Obtained in loot chests of Pillager Outposts'))
    event.addItem('endrem:cursed_eye', Text.of('Obtained in treasure chests of Nether Bastions'))
    event.addItem('endrem:evil_eye', Text.of('Obtained by killing Netherite Monstrosity in Soul Black Smiths of the Nether'))
    event.addItem('endrem:guardian_eye', Text.of('Obtained by killing the Elder Guardian'))
    event.addItem('endrem:lost_eye', Text.of('Obtained in treasure chests of The Lost Castle of the Overworld'))
    event.addItem('endrem:magical_eye', Text.of('Obtained in teasure chests of The Other dimension'))
    event.addItem('endrem:nether_eye', Text.of('Obtained in loot chests of Nether Fortresses'))
    event.addItem('endrem:old_eye', Text.of('Obtained in loot chests of Ancient Cities'))
    event.addItem('endrem:undead_eye', Text.of('Obtained by killing The Harbinger in Ancient Factories of the Overworld'))
    event.addItem('endrem:witch_pupil', Text.of('Obtained by killing a Witch'))
    event.addItem('endrem:wither_eye', Text.of('Obtained by killing the Wither'))

    event.addItem('extendedcrafting:ender_alternator', Text.of('Place within a 7x7 area of an Ender Crafter to power it'))

    event.addItem('silentgear:template_board', Text.of('Obtained from loot chests'));
    event.addItem('silentgear:blueprint_paper', Text.of('Obtained from loot chests'));
})
