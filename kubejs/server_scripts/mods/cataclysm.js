ServerEvents.recipes(event => {
  removeRecipes(event, [
    'cataclysm:abyssal_sacrifice',
    'cataclysm:abyssal_sacrifice2',
    'cataclysm:abyss_eye',
    'cataclysm:amethyst_bless/blessed_amethyst_crab_meat',
    'cataclysm:ancient_metal_block',
    'cataclysm:ancient_metal_ingot',
    'cataclysm:ancient_metal_ingot_from_nuggets',
    'cataclysm:bloom_stone_pauldrons',
    'cataclysm:bone_reptile_chestplate',
    'cataclysm:bone_reptile_helmet',
    'cataclysm:bulwark_of_the_flame',
    'cataclysm:crystallized_coral',
    'cataclysm:desert_eye',
    'cataclysm:flame_eye',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:ignitium_block',
    'cataclysm:ignitium_ingot',
    'cataclysm:ignitium_upgrade_smithing_template',
    'cataclysm:laser_gatling',
    'cataclysm:meat_shredder',
    'cataclysm:mech_eye',
    'cataclysm:monstrous_eye',
    'cataclysm:smithing/ignitium_boots',
    'cataclysm:smithing/ignitium_chestplate',
    'cataclysm:smithing/ignitium_elytra_chestplate',
    'cataclysm:smithing/ignitium_helmet',
    'cataclysm:smithing/ignitium_leggings',
    'cataclysm:smithing/monstrous_helm',
    'cataclysm:sticky_gloves',
    'cataclysm:the_incinerator',
    'cataclysm:void_eye',
    'cataclysm:void_scatter_arrow',
    'cataclysm:weapon_infusion/gauntlet_of_bulwark',
    'cataclysm:weapon_infusion/ignitium_elytra_chestplate',
    'cataclysm:weapon_infusion/void_assault_shoulder_weapon',
    'cataclysm:weapon_infusion/void_forge',
    'cataclysm:wither_assault_shoulder_weapon',
    'cataclysm:witherite_block',
    'cataclysm:witherite_ingot',
  ])

  replaceShaped(event, [
    'UET',
    'DAD',
    'TEU'
  ], {
    U: '#forge:storage_blocks/unobtainium',
    E: 'meatsalad:ender_star',
    T: '#forge:storage_blocks/tyrian_steel',
    D: 'meatsalad:dark_matter',
    A: 'minecraft:anvil',
  }, Item.of('cataclysm:mechanical_fusion_anvil'))

  event.shaped('cataclysm:desert_eye', [
    'GSe',
    'DEC',
    'RSB'
  ], {
    G: '#forge:ingots/gold',
    S: 'minecraft:chiseled_sandstone',
    e: '#forge:gems/emerald',
    D: 'minecraft:dead_bush',
    E: 'minecraft:ender_eye',
    C: 'minecraft:cactus',
    R: 'minecraft:rotten_flesh',
    B: 'minecraft:bone',
  }).stage('ancient_remnant').id('meatsalad:desert_eye')

  event.shaped('cataclysm:flame_eye', [
    'BBB',
    'NEN',
    'SSS'
  ], {
    B: 'minecraft:blaze_powder',
    N: 'minecraft:netherite_scrap',
    E: 'minecraft:ender_eye',
    S: '#minecraft:soul_fire_base_blocks'
  }).stage('ignis').id('meatsalad:flame_eye')

  event.shaped('cataclysm:mech_eye', [
    'RIR',
    'IEI',
    'RIR'
  ], {
    R: '#forge:storage_blocks/redstone',
    I: '#forge:ingots/iron',
    E: 'minecraft:ender_eye',
  }).stage('the_harbinger').id('meatsalad:mech_eye')

  event.shaped('cataclysm:monstrous_eye', [
    'LNL',
    'BEB',
    'LNL'
  ], {
    L: 'minecraft:lava_bucket',
    N: 'minecraft:netherite_scrap',
    B: 'minecraft:blackstone',
    E: 'minecraft:ender_eye',
  }).stage('netherite_monstrosity').id('meatsalad:monstrous_eye')

  event.shaped('cataclysm:void_eye', [
    'PSP',
    'BEB',
    'pSp'
  ], {
    P: 'minecraft:purpur_pillar',
    S: 'minecraft:shulker_shell',
    B: 'minecraft:end_stone_bricks',
    E: 'minecraft:ender_eye',
    p: 'minecraft:purpur_block',
  }).stage('ender_guardian').id('meatsalad:void_eye')
})
