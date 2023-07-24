ServerEvents.recipes(event => {
  function fullRemove(id) {
    event.remove({ input: id })
    event.remove({ output: id })
  }

  event.remove({ id: 'cyclic:anvil_magma' })
  event.shaped('cyclic:anvil_magma', [
    'MMM',
    ' C ',
    'OFO'
  ], {
    M: 'minecraft:magma_block',
    O: '#forge:obsidian',
    F: 'cyclic:fireball',
    C: '#forge:storage_blocks/crimson_steel'
  })

  event.remove({ id: 'cyclic:anvil' })
  event.shaped('cyclic:anvil', [
    'DDD',
    'RAR',
    'ICI'
  ], {
    D: '#forge:storage_blocks/diamond',
    R: 'minecraft:redstone',
    A: 'cyclic:anvil_magma',
    I: '#forge:storage_blocks/iron',
    C: '#forge:circuits/ultimate'
  })

  fullRemove('cyclic:copper_pickaxe');
  fullRemove('cyclic:copper_axe');
  fullRemove('cyclic:copper_hoe');
  fullRemove('cyclic:copper_shovel');
  fullRemove('cyclic:copper_sword');
  fullRemove('cyclic:amethyst_pickaxe');
  fullRemove('cyclic:amethyst_axe');
  fullRemove('cyclic:amethyst_hoe');
  fullRemove('cyclic:amethyst_shovel');
  fullRemove('cyclic:amethyst_sword');
  fullRemove('cyclic:netherbrick_pickaxe');
  fullRemove('cyclic:netherbrick_axe');
  fullRemove('cyclic:netherbrick_hoe');
  fullRemove('cyclic:netherbrick_shovel');
  fullRemove('cyclic:netherbrick_sword');
  fullRemove('cyclic:sandstone_pickaxe');
  fullRemove('cyclic:sandstone_axe');
  fullRemove('cyclic:sandstone_hoe');
  fullRemove('cyclic:sandstone_shovel');
  fullRemove('cyclic:sandstone_sword');
  fullRemove('cyclic:emerald_boots');
  fullRemove('cyclic:emerald_chestplate');
  fullRemove('cyclic:emerald_leggings');
  fullRemove('cyclic:emerald_helmet');
  fullRemove('cyclic:emerald_pickaxe');
  fullRemove('cyclic:emerald_axe');
  fullRemove('cyclic:emerald_hoe');
  fullRemove('cyclic:emerald_shovel');
  fullRemove('cyclic:emerald_sword');
  fullRemove('cyclic:crystal_boots');
  fullRemove('cyclic:crystal_chestplate');
  fullRemove('cyclic:crystal_leggings');
  fullRemove('cyclic:crystal_helmet');
  fullRemove('cyclic:crystal_pickaxe');
  fullRemove('cyclic:crystal_axe');
  fullRemove('cyclic:crystal_hoe');
  fullRemove('cyclic:crystal_shovel');
  fullRemove('cyclic:crystal_sword');

  event.remove({ id: 'cyclic:antigravity' })
  event.remove({ id: 'cyclic:charm_antidote' })
  event.remove({ id: 'cyclic:charm_attack_speed' })
  event.remove({ id: 'cyclic:charm_boostpotion' })
  event.remove({ id: 'cyclic:charm_creeper' })
  event.remove({ id: 'cyclic:charm_crit' })
  event.remove({ id: 'cyclic:charm_fire' })
  event.remove({ id: 'cyclic:charm_invisible' })
  event.remove({ id: 'cyclic:charm_knockback_resistance' })
  event.remove({ id: 'cyclic:charm_longfall' })
  event.remove({ id: 'cyclic:charm_luck' })
  event.remove({ id: 'cyclic:charm_magicdefense' })
  event.remove({ id: 'cyclic:charm_speed' })
  event.remove({ id: 'cyclic:charm_starvation' })
  event.remove({ id: 'cyclic:charm_stealthpotion' })
  event.remove({ id: 'cyclic:charm_stone' })
  event.remove({ id: 'cyclic:charm_torch' })
  event.remove({ id: 'cyclic:charm_torch_cave' })
  event.remove({ id: 'cyclic:charm_void' })
  event.remove({ id: 'cyclic:charm_water' })
  event.remove({ id: 'cyclic:charm_wing' })
  event.remove({ id: 'cyclic:charm_wither' })
  event.remove({ id: 'cyclic:charm_xp_blocker' })
  event.remove({ id: 'cyclic:charm_xp_speed' })
  event.remove({ id: 'cyclic:flippers' })
  event.remove({ id: 'cyclic:glove_climb' })
  event.remove({ id: 'cyclic:glowing_helmet' })
  event.remove({ id: 'cyclic:magic_net' })
  event.remove({ id: 'cyclic:magic_net_alt' })
  event.remove({ id: 'cyclic:quiver_damage' })
  event.remove({ id: 'cyclic:quiver_lightning' })
  event.remove({ id: 'cyclic:soulstone' })
})