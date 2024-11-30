ServerEvents.tags('item', event => {
  const addMaterialTags = (material, includeNugget) => {
    if (includeNugget) {
      event.add('forge:nuggets', `cataclysm:${material}_nugget`)
      event.add(`forge:nuggets/${material}`, `cataclysm:${material}_nugget`)
    }
    event.add('forge:ingots', `cataclysm:${material}_ingot`)
    event.add(`forge:ingots/${material}`, `cataclysm:${material}_ingot`)
    event.add('forge:storage_blocks', `cataclysm:${material}_block`)
    event.add(`forge:storage_blocks/${material}`, `cataclysm:${material}_block`)
  }
  addMaterialTags('ancient_metal', true)
  addMaterialTags('black_steel', true)
  addMaterialTags('cursium')
  addMaterialTags('ignitium')
  addMaterialTags('witherite')
})

ServerEvents.tags('block', event => {
  const addMaterialTags = (material) => {
    event.add('forge:storage_blocks', `cataclysm:${material}_block`)
    event.add(`forge:storage_blocks/${material}`, `cataclysm:${material}_block`)
  }
  addMaterialTags('ancient_metal')
  addMaterialTags('black_steel')
  addMaterialTags('cursium')
  addMaterialTags('ignitium')
  addMaterialTags('witherite')
})

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'cataclysm:abyssal_sacrifice',
    'cataclysm:abyssal_sacrifice2',
    'cataclysm:abyss_eye',
    'cataclysm:amethyst_bless/blessed_amethyst_crab_meat',
    'cataclysm:black_steel_sword',
    'cataclysm:black_steel_shovel',
    'cataclysm:black_steel_pickaxe',
    'cataclysm:black_steel_axe',
    'cataclysm:black_steel_hoe',
    'cataclysm:blazing_grips',
    'cataclysm:bloom_stone_pauldrons',
    'cataclysm:bone_reptile_chestplate',
    'cataclysm:bone_reptile_helmet',
    'cataclysm:cursed_eye',
    'cataclysm:cursium_upgrade_smithing_template',
    'cataclysm:crystallized_coral',
    'cataclysm:desert_eye',
    'cataclysm:flame_eye',
    'cataclysm:ignitium_upgrade_smithing_template',
    'cataclysm:mech_eye',
    'cataclysm:monstrous_eye',
    'cataclysm:smithing/cursium_boots',
    'cataclysm:smithing/cursium_chestplate',
    'cataclysm:smithing/cursium_helmet',
    'cataclysm:smithing/cursium_leggings',
    'cataclysm:smithing/ignitium_boots',
    'cataclysm:smithing/ignitium_chestplate',
    'cataclysm:smithing/ignitium_elytra_chestplate',
    'cataclysm:smithing/ignitium_helmet',
    'cataclysm:smithing/ignitium_leggings',
    'cataclysm:smithing/monstrous_helm',
    'cataclysm:sticky_gloves',
    'cataclysm:void_eye',
    'cataclysm:void_scatter_arrow',
    'cataclysm:weapon_infusion/ignitium_elytra_chestplate',
  ])

  replaceShaped(event, [
    ' cs',
    'c s',
    ' cs'
  ], {
    c: '#forge:ingots/cursium',
    s: 'minecraft:string',
  }, Item.of('cataclysm:cursed_bow'))
  replaceShaped(event, [
    ' b ',
    'bsb',
    ' b '
  ], {
    b: '#forge:ingots/black_steel',
    s: 'minecraft:shield',
  }, Item.of('cataclysm:black_steel_targe'))

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

  
  event.shaped('cataclysm:cursed_eye', [
    'GBG',
    'PEP',
    'GRG'
  ], {
    G: '#forge:ingots/gold',
    B: 'minecraft:bone',
    P: 'minecraft:phantom_membrane',
    E: 'minecraft:ender_eye',
    R: 'minecraft:rotten_flesh',
  }).stage('maledictus').id('meatsalad:cursed_eye')

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
