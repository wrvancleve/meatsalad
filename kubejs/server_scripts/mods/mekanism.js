ServerEvents.recipes(event => {
  replaceShaped(event, [
    'HUH',
    'HNH',
    'ICI'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    N: 'minecraft:netherite_helmet',
    I: 'meatsalad:infinity_fabric',
    C: 'mekanism:basic_induction_cell'
  }, Item.of('mekanism:mekasuit_helmet'))
  replaceShaped(event, [
    'HUH',
    'HNH',
    'ICI'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    N: 'minecraft:netherite_chestplate',
    I: 'meatsalad:infinity_fabric',
    C: 'mekanism:basic_induction_cell'
  }, Item.of('mekanism:mekasuit_bodyarmor'))
  replaceShaped(event, [
    'HUH',
    'HNH',
    'ICI'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    N: 'minecraft:netherite_leggings',
    I: 'meatsalad:infinity_fabric',
    C: 'mekanism:basic_induction_cell'
  }, Item.of('mekanism:mekasuit_pants'))
  replaceShaped(event, [
    'HUH',
    'HNH',
    'ICI'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    N: 'minecraft:netherite_boots',
    I: 'meatsalad:infinity_fabric',
    C: 'mekanism:basic_induction_cell'
  }, Item.of('mekanism:mekasuit_boots'))

  replaceShaped(event, [
    'UAU',
    'SDS',
    'UAU'
  ], {
    U: 'mekanism:ingot_refined_obsidian',
    A: 'mekanism:alloy_atomic',
    S: 'mekanism:steel_casing',
    D: 'mekanism:electrolytic_core'
  }, Item.of('mekanismgenerators:gas_burning_generator'), 'generator/gas_burning')
  replaceShaped(event, [
    'SAS',
    'CAC',
    'SAS'
  ], {
    S: '#forge:ingots/steel',
    A: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
  }, Item.of('mekanismgenerators:rotational_complex'))
  replaceShaped(event, [
    ' T ',
    'TCT',
    ' T '
  ], {
    T: 'mekanismgenerators:turbine_casing',
    C: 'mekanism:elite_control_circuit',
  }, Item.of('mekanismgenerators:turbine_valve', 2), 'turbine/valve')
  replaceShaped(event, [
    ' F ',
    'FCF',
    ' F '
  ], {
    F: 'mekanismgenerators:fission_reactor_casing',
    C: 'mekanism:ultimate_control_circuit',
  }, Item.of('mekanismgenerators:fission_reactor_port', 2), 'fission_reactor/port')
  replaceShaped(event, [
    'LCL',
    'SLS',
    'SLS'
  ], {
    L: '#forge:ingots/lead',
    C: 'mekanism:ultimate_control_circuit',
    S: '#forge:ingots/steel',
  }, Item.of('mekanismgenerators:control_rod_assembly'), 'fission_reactor/control_rod_assembly')
  
})
