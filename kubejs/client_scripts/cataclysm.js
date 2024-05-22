JEIEvents.hideItems(event => {
  event.hide([
    'cataclysm:ancient_metal_block',
    'cataclysm:ancient_metal_ingot',
    'cataclysm:ancient_metal_nugget',
    'cataclysm:athame',
    'cataclysm:bone_reptile_helmet',
    'cataclysm:bone_reptile_chestplate',
    'cataclysm:bulwark_of_the_flame',
    'cataclysm:coral_bardiche',
    'cataclysm:coral_spear',
    'cataclysm:gauntlet_of_bulwark',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:ignitium_block',
    'cataclysm:ignitium_ingot',
    'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_elytra_chestplate',
    'cataclysm:ignitium_leggings',
    'cataclysm:ignitium_boots',
    'cataclysm:ignitium_upgrade_smithing_template',
    'cataclysm:infernal_forge',
    'cataclysm:laser_gatling',
    'cataclysm:the_incinerator',
    'cataclysm:khopesh',
    'cataclysm:kobolediator_skull',
    'cataclysm:meat_shredder',
    'cataclysm:monstrous_horn',
    'cataclysm:monstrous_helm',
    'cataclysm:sandstorm_in_a_bottle',
    'cataclysm:sticky_gloves',
    'cataclysm:tidal_claws',
    'cataclysm:void_assault_shoulder_weapon',
    'cataclysm:void_forge',
    'cataclysm:witherite_ingot',
    'cataclysm:witherite_block',
    'cataclysm:wither_assault_shoulder_weapon',
  ])
})

ItemEvents.tooltip(event => {
  event.add('cataclysm:mech_eye', [
    Text.of('Locates the Harbinger Boss Fight in the Overworld').gold()
  ])
  event.add('cataclysm:desert_eye', [
    Text.of('Locates the Ancient Remnant Boss Fight in the Overworld').gold()
  ])
  event.add('cataclysm:flame_eye', [
    Text.of('Locates the Ignis Boss Fight in the Nether').gold()
  ])
  event.add('cataclysm:void_eye', [
    Text.of('Locates the Ender Guardian Boss Fight in the End').gold()
  ])
  event.add('cataclysm:monstrous_eye', [
    Text.of('Locates the Netherite Monstrosity Boss Fight in the Nether').gold()
  ])
  event.add('cataclysm:abyss_eye', [
    Text.of('Locates the Leviathan Boss Fight in the Overworld').gold()
  ])

  event.add('cataclysm:burning_ashes', [
    Text.of('Place on Altar of Fire to summon the Ignis Boss').gold()
  ])
  event.add('cataclysm:abyssal_sacrifice', [
    Text.of('Place on Altar of Abyss to summon the Leviathan Boss').gold()
  ])
})
