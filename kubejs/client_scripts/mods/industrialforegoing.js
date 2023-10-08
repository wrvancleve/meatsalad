ItemEvents.tooltip(event => {
  event.add('industrialforegoing:laser_lens0', [
    Text.of('Prioritizes Iridium and Nether Quartz in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens1', [
    Text.of('Prioritizes Copper in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens3', [
    Text.of('Prioritizes Apatite, Diamond, Mythril, Platinum and Zinc in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens4', [
    Text.of('Prioritizes Gold, Glowstone, Niter and Sulfur in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens5', [
    Text.of('Prioritizes Emerald and Uranium in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens7', [
    Text.of('Prioritizes Bort and Silver in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens8', [
    Text.of('Prioritizes Fluorite, Osmium and Tin in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens10', [
    Text.of('Prioritizes Azure Silver, Lead, Myalite Crystal, Obsidian and Unobtainium in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens11', [
    Text.of('Prioritizes Lapis and Sapphire in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens12', [
    Text.of('Prioritizes Aluminum, Ancient Debris, Iron and Nickel in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens13', [
    Text.of('Prioritizes Peridot and Vibranium in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens14', [
    Text.of('Prioritizes Adamantite, Cinnabar, Crimson Iron, Redstone and Ruby in the Ore Laser Base').gold()
  ])
  event.add('industrialforegoing:laser_lens15', [
    Text.of('Prioritizes Coal in the Ore Laser Base').gold()
  ])
})

JEIEvents.hideItems(event => {
  event.hide([
    'industrialforegoing:pitiful_generator',
    //'industrialforegoing:bioreactor',
    'industrialforegoing:biofuel_generator',
    'industrialforegoing:mycelial_furnace',
    'industrialforegoing:mycelial_potion',
    'industrialforegoing:mycelial_culinary',
    'industrialforegoing:mycelial_slimey',
    'industrialforegoing:mycelial_disenchantment',
    'industrialforegoing:mycelial_ender',
    'industrialforegoing:mycelial_explosive',
    'industrialforegoing:mycelial_frosty',
    'industrialforegoing:mycelial_halitosis',
    'industrialforegoing:mycelial_magma',
    'industrialforegoing:mycelial_pink',
    'industrialforegoing:mycelial_death',
    'industrialforegoing:mycelial_netherstar',
    'industrialforegoing:mycelial_reactor',
    'industrialforegoing:mycelial_rocket',
    'industrialforegoing:mycelial_crimed',
    'industrialforegoing:mycelial_meatallurgic',
    'industrialforegoing:material_stonework_factory',
    'industrialforegoing:washing_factory',
    'industrialforegoing:fluid_sieving_machine',
    'industrialforegoing:fermentation_station'
  ]);
})
