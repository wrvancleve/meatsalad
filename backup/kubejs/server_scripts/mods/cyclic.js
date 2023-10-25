ServerEvents.recipes(event => {
  let removeIds = (ids) => {
    ids.forEach(id => {
      event.remove({ input: id })
      event.remove({ output: id })
    })
  }

  global.replaceShaped(event, [
    'MMM',
    ' C ',
    'OFO'
  ], {
    M: 'minecraft:magma_block',
    O: '#forge:obsidian',
    F: 'cyclic:fireball',
    C: '#forge:storage_blocks/crimson_steel'
  }, 'cyclic', 'anvil_magma');

  global.replaceShaped(event, [
    'DDD',
    'RAR',
    'ICI'
  ], {
    D: '#forge:storage_blocks/diamond',
    R: 'minecraft:redstone',
    A: 'cyclic:anvil_magma',
    I: '#forge:storage_blocks/iron',
    C: '#forge:circuits/ultimate'
  }, 'cyclic', 'anvil');

  removeIds([
    'cyclic:crusher',
    'cyclic:generator_fuel',
    'cyclic:generator_food',
    'cyclic:generator_item',
    'cyclic:generator_fluid',
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
    'cyclic:emerald_sword'
  ])

  event.remove({ id: 'cyclic:charm_antipotion' })
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
  event.remove({ id: 'cyclic:charm_venom' })
  event.remove({ id: 'cyclic:charm_void' })
  event.remove({ id: 'cyclic:charm_water' })
  event.remove({ id: 'cyclic:charm_wing' })
  event.remove({ id: 'cyclic:charm_wither' })
  event.remove({ id: 'cyclic:charm_xp_blocker' })
  event.remove({ id: 'cyclic:charm_xp_speed' })
  event.remove({ id: 'cyclic:charm_ultimate' })
  event.remove({ id: 'cyclic:flippers' })
  event.remove({ id: 'cyclic:glove_climb' })
  event.remove({ id: 'cyclic:glowing_helmet' })
  event.remove({ id: 'cyclic:magic_net' })
  event.remove({ id: 'cyclic:magic_net_alt' })
  event.remove({ id: 'cyclic:quiver_damage' })
  event.remove({ id: 'cyclic:quiver_lightning' })
  event.remove({ id: 'cyclic:soulstone' })
  event.remove({ id: 'cyclic:heart', })
  event.remove({ id: 'cyclic:heart_empty' })
  event.remove({ id: 'cyclic:disenchanter' })
  event.remove({ id: 'cyclic:uncrafter' })
})