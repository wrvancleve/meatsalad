JEIEvents.hideItems(event => {
  // Hide allthemodium extras
  event.hide([
    'allthemodium:molten_allthemodium_bucket',
    /allthemodium:alloy_.+/,
    /allthemodium:allthemodium_.+/,
    'allthemodium:raw_allthemodium',
    /allthemodium:raw_allthemodium_.+/,
    'allthemodium:dirty_allthemodium_dust',
    /allthemodium:unobtainium_allthemodium_alloy_.+/,
    /allthemodium:unobtainium_vibranium_alloy_.+/,
    /allthemodium:vibranium_allthemodium_alloy_.+/,
    'potionsmaster:allthemodium_powder',
    'potionsmaster:calcinatedallthemodium_powder',
    'allthemodium:vibranium_ore',
    Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:allthemodium_sight"}'),
    Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:allthemodium_sight"}'),
    Item.of('minecraft:potion', '{Potion:"potionsmaster:allthemodium_sight"}'),
    Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:allthemodium_sight"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:allthemodium_sight"}')
  ])

  // Hide alltheores extras
  event.hide([
    'alltheores:bronze_ore_hammer',
    'alltheores:copper_ore_hammer',
    'alltheores:invar_ore_hammer',
    'alltheores:iron_ore_hammer',
    'alltheores:platinum_ore_hammer'
  ])

  // Hide angelring extras
  event.hide([
    'angelring:energetic_angel_ring',
    'angelring:leadstone_angel_ring',
    'angelring:hardened_angel_ring',
    'angelring:reinforced_angel_ring',
    'angelring:resonant_angel_ring'
  ])

  // Hide apotheosis extras
  event.hide([
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 1),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 2),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 3),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 4),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 5),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 1),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 2),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 3),
    'apotheosis:ender_lead'
  ])

  // Hide awakened_bosses extras
  event.hide([
    'awakened_bosses:herobrine_block',
    'awakened_bosses:herobrine_ingot',
    'awakened_bosses:herobrine_nugget',
    'awakened_bosses:herobrine_a_helmet',
    'awakened_bosses:herobrine_a_chestplate',
    'awakened_bosses:herobrine_a_leggings',
    'awakened_bosses:herobrine_a_boots',
    'awakened_bosses:herobrine_sword',
    'awakened_bosses:herobrine_pickaxe',
    'awakened_bosses:herobrine_axe',
    'awakened_bosses:herobrine_shovel',
    'awakened_bosses:herobrine_hoe'
  ])

  // Hide cataclysm extras
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

  // Hide cyclic extras
  event.hide([
    'cyclic:copper_pickaxe',
    'cyclic:copper_axe',
    'cyclic:copper_hoe',
    'cyclic:copper_shovel',
    'cyclic:copper_sword',
    'cyclic:amethyst_pickaxe',
    'cyclic:amethyst_axe',
    'cyclic:amethyst_hoe',
    'cyclic:amethyst_shovel',
    'cyclic:amethyst_sword',
    'cyclic:netherbrick_pickaxe',
    'cyclic:netherbrick_axe',
    'cyclic:netherbrick_hoe',
    'cyclic:netherbrick_shovel',
    'cyclic:netherbrick_sword',
    'cyclic:sandstone_pickaxe',
    'cyclic:sandstone_axe',
    'cyclic:sandstone_hoe',
    'cyclic:sandstone_shovel',
    'cyclic:sandstone_sword',
    'cyclic:emerald_boots',
    'cyclic:emerald_chestplate',
    'cyclic:emerald_leggings',
    'cyclic:emerald_helmet',
    'cyclic:emerald_pickaxe',
    'cyclic:emerald_axe',
    'cyclic:emerald_hoe',
    'cyclic:emerald_shovel',
    'cyclic:emerald_sword',
    'cyclic:antigravity',
    'cyclic:charm_starvation',
    'cyclic:charm_torch',
    'cyclic:charm_invisible',
    'cyclic:magic_net',
    'cyclic:magic_net_alt',
    'cyclic:charm_xp_blocker'
  ])

  // Hide endrem extras
  event.hide([
    'endrem:witch_pupil',
    'endrem:exotic_eye',
    'endrem:cold_eye',
    'endrem:cryptic_eye',
    'endrem:undead_soul',
    'endrem:rogue_eye',
  ])

  // Hide progressive bosses extras
  event.hide([
    'progressivebosses:nether_star_shard'
  ])

  // Hide rftoolsbase extras
  event.hide([
    'rftoolsbase:infused_diamond',
    'rftoolsbase:infused_enderpearl'
  ])

  // Hide silentgear extras
  event.hide([
    'silentgear:custom_gem',
    'silentgear:custom_ingot',
    'silentgear:refabricator',
    'silentgear:metal_press',
    'silentgear:recrystallizer',
    'silentgear:metal_alloyer'
  ])

  // Hide theoneprobe extras
  event.hide([
    /theoneprobe:.+/,
  ])

  // Hide upgrade aquatic extras
  event.hide([
    'upgrade_aquatic:elder_eye'
  ])
})
