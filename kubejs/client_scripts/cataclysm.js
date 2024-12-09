ClientEvents.lang('en_us', event => {
  event.add('cataclysm', 'block.cataclysm.mechanical_fusion_anvil', 'Ancient Fusion Anvil')
  event.add('cataclysm', 'cataclysm.container.weapon_fusion', '§5Ancient Fusion Anvil')
})

JEIEvents.removeCategories(event => {
  event.remove('cataclysm:altar_of_amethyst')
})

JEIEvents.hideItems(event => {
  event.hide([
    'cataclysm:abyss_eye',
    'cataclysm:altar_of_amethyst',
    'cataclysm:amethyst_crab_meat',
    'cataclysm:amethyst_crab_shell',
    'cataclysm:athame',
    'cataclysm:black_steel_sword',
    'cataclysm:black_steel_shovel',
    'cataclysm:black_steel_pickaxe',
    'cataclysm:black_steel_axe',
    'cataclysm:black_steel_hoe',
    'cataclysm:blazing_grips',
    'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_elytra_chestplate',
    'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_leggings',
    'cataclysm:blessed_amethyst_crab_meat',
    'cataclysm:bloom_stone_pauldrons',
    'cataclysm:bone_reptile_chestplate',
    'cataclysm:bone_reptile_helmet',
    'cataclysm:coral_bardiche',
    'cataclysm:coral_chunk',
    'cataclysm:coral_spear',
    'cataclysm:crystallized_coral',
    'cataclysm:crystallized_coral_fragments',
    'cataclysm:cursium_boots',
    'cataclysm:cursium_chestplate',
    'cataclysm:cursium_helmet',
    'cataclysm:cursium_leggings',
    'cataclysm:cursium_upgrade_smithing_template',
    'cataclysm:enderite_block',
    'cataclysm:ignitium_boots',
    'cataclysm:ignitium_chestplate',
    'cataclysm:ignitium_elytra_chestplate',
    'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_leggings',
    'cataclysm:ignitium_upgrade_smithing_template',
    'cataclysm:khopesh',
    'cataclysm:kobolediator_skull',
    'cataclysm:monstrous_helm',
    'cataclysm:sticky_gloves',
    'cataclysm:void_jaw',
    'cataclysm:void_scatter_arrow',
  ])
})

ItemEvents.tooltip(event => {
  event.add('cataclysm:burning_ashes', [
    Text.of('Place on Altar of Fire to summon the Ignis Boss').gold()
  ])
  event.add('cataclysm:abyssal_sacrifice', [
    Text.of('Place on Altar of Abyss to summon the Leviathan Boss').gold()
  ])
})

JEIEvents.information(event => {
  event.addItem('cataclysm:necklace_of_the_desert', Text.of('Buried in Suspicious Sand Blocks in Cursed Pyramids (Overworld). Use a brush on Suspicious Sand Blocks to uncover what is buried in them'))
})
