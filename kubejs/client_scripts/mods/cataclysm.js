JEIEvents.hideItems(event => {
  event.hide([
    'cataclysm:ignitium_block',
    'cataclysm:ignitium_ingot',
    'cataclysm:bulwark_of_the_flame',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:the_incinerator',
    'cataclysm:infernal_forge',
    'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_elytra_chestplate',
    'cataclysm:ignitium_leggings',
    'cataclysm:ignitium_boots',
    'cataclysm:monstrous_horn',
    'cataclysm:monstrous_helm',
    'cataclysm:witherite_ingot',
    'cataclysm:witherite_block',
    'cataclysm:mechanical_fusion_anvil'
  ])
})

ItemEvents.tooltip(event => {
  event.add('cataclysm:mech_eye', [
    Text.of('Locates the Harbinger Boss Fight in the Overworld').gold()
  ]);
  event.add('cataclysm:flame_eye', [
    Text.of('Locates the Ignis Boss Fight in the Nether').gold()
  ]);
  event.add('cataclysm:void_eye', [
    Text.of('Locates the Ender Guardian Boss Fight in the End').gold()
  ]);
  event.add('cataclysm:monstrous_eye', [
    Text.of('Locates the Netherite Monstrosity Boss Fight in the Nether').gold()
  ]);
  event.add('cataclysm:abyss_eye', [
    Text.of('Locates the Leviathan Boss Fight in the Overworld').gold()
  ]);

  event.add('cataclysm:burning_ashes', [
    Text.of('Place on Altar of Fire to summon the Ignis Boss').gold()
  ]);
  event.add('cataclysm:abyssal_sacrifice', [
    Text.of('Place on Altar of Abyss to summon the Leviathan Boss').gold()
  ]);
})
