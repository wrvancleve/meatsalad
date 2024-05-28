ServerEvents.recipes(event => {
  removeRecipes(event, [
    'industrialforegoing:diamond_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:iron_gear',
    'industrialforegoing:pitiful_generator',
    //'industrialforegoing:plastic',
    //'industrialforegoing:bioreactor',
    'industrialforegoing:dryrubber',
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
    'industrialforegoing:dissolution_chamber/mycelial_reactor',
    'industrialforegoing:mycelial_rocket',
    'industrialforegoing:mycelial_crimed',
    'industrialforegoing:mycelial_meatallurgic',
    'industrialforegoing:material_stonework_factory',
    'industrialforegoing:washing_factory',
    'industrialforegoing:fluid_sieving_machine',
    'industrialforegoing:fermentation_station',
    'industrialforegoing:dissolution_chamber/infinity_backpack',
    'industrialforegoing:dissolution_chamber/infinity_drill',
    'industrialforegoing:dissolution_chamber/infinity_hammer',
    'industrialforegoing:dissolution_chamber/infinity_launcher',
    'industrialforegoing:dissolution_chamber/infinity_nuke',
    'industrialforegoing:dissolution_chamber/infinity_saw',
    'industrialforegoing:dissolution_chamber/infinity_trident'
  ])

  replaceShaped(event, [
    'PNP',
    'IMI',
    'VRV'
  ], {
    P: '#forge:plastic',
    N: 'minecraft:netherite_pickaxe',
    I: '#forge:ores/iron',
    M: '#industrialforegoing:machine_frame/advanced',
    V: '#forge:gears/vibranium',
    R: '#forge:circuits/advanced'
  }, Item.of('industrialforegoing:ore_laser_base'))

  replaceShaped(event, [
    'PNP',
    'SMS',
    'VRV'
  ], {
    P: '#forge:plastic',
    N: '#forge:gears/netherite',
    S: 'minecraft:piston',
    M: '#industrialforegoing:machine_frame/advanced',
    V: '#forge:gears/vibranium',
    R: '#forge:circuits/advanced'
  }, Item.of('industrialforegoing:laser_drill'))

  replaceShaped(event, [
    'PNP',
    'BMB',
    'VRV'
  ], {
    P: '#forge:plastic',
    N: 'minecraft:netherite_pickaxe',
    B: 'minecraft:bucket',
    M: '#industrialforegoing:machine_frame/advanced',
    V: '#forge:gears/vibranium',
    R: '#forge:circuits/advanced'
  }, Item.of('industrialforegoing:fluid_laser_base'))

  replaceShaped(event, [
    'PPP',
    'CUC',
    'RMR'
  ], {
    P: '#forge:plastic',
    C: '#forge:circuits/advanced',
    U: '#forge:gears/unobtainium',
    R: '#forge:storage_blocks/redstone',
    M: '#industrialforegoing:machine_frame/advanced'
  }, Item.of('industrialforegoing:infinity_charger'))

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Item.of('industrialforegoing:common_black_hole_unit'),
      Ingredient.of('#forge:gears/netherite'),
      Item.of('industrialforegoing:common_black_hole_unit'),
      Item.of('industrialforegoing:common_black_hole_unit'),
      Item.of('industrialforegoing:common_black_hole_unit'),
      Ingredient.of('#forge:gears/unobtainium'),
      Item.of('meatsalad:dark_matter'),
      Ingredient.of('#forge:gears/unobtainium'),
    ],
    inputFluid: '{FluidName:"industrialforegoing:pink_slime",Amount:2000}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_backpack',
      count: 1,
      nbt: '{CanCharge:1b,Energy:0L,Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_backpack')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:netherite_shovel'),
      Ingredient.of('#forge:storage_blocks/netherite'),
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('industrialforegoing:range_addon11'),
      Ingredient.of('#forge:gears/unobtainium'),
      Item.of('meatsalad:dark_matter'),
      Ingredient.of('#forge:gears/unobtainium'),
    ],
    inputFluid: '{FluidName:"industrialforegoing:pink_slime",Amount:2000}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_drill',
      count: 1,
      nbt: '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_drill')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:netherite_sword'),
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:netherite_axe'),
      Item.of('industrialforegoing:range_addon11'),
      Ingredient.of('#forge:gears/unobtainium'),
      Item.of('meatsalad:dark_matter'),
      Ingredient.of('#forge:gears/unobtainium'),
    ],
    inputFluid: '{FluidName:"industrialforegoing:pink_slime",Amount:2000}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_hammer',
      count: 1,
      nbt: '{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_hammer')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:bow'),
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('industrialforegoing:mob_imprisonment_tool'),
      Item.of('industrialforegoing:range_addon11'),
      Ingredient.of('#forge:gears/unobtainium'),
      Item.of('meatsalad:dark_matter'),
      Ingredient.of('#forge:gears/unobtainium'),
    ],
    inputFluid: '{FluidName:"industrialforegoing:pink_slime",Amount:2000}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_launcher',
      count: 1,
      nbt: '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_launcher')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Item.of('minecraft:tnt'),
      Item.of('minecraft:tnt'),
      Item.of('minecraft:tnt'),
      Item.of('minecraft:tnt'),
      Item.of('industrialforegoing:range_addon11'),
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:nether_star'),
      Item.of('meatsalad:ender_star')
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:ether_gas"}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_nuke',
      count: 1,
      nbt: '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_nuke')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:netherite_pickaxe'),
      Item.of('minecraft:netherite_axe'),
      Item.of('minecraft:netherite_axe'),
      Item.of('industrialforegoing:range_addon11'),
      Ingredient.of('#forge:gears/unobtainium'),
      Item.of('meatsalad:dark_matter'),
      Ingredient.of('#forge:gears/unobtainium'),
    ],
    inputFluid: '{FluidName:"industrialforegoing:pink_slime",Amount:2000}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_saw',
      count: 1,
      nbt: '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_saw')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:trident'),
      Ingredient.of('#forge:storage_blocks/netherite'),
      Item.of('minecraft:netherite_hoe'),
      Item.of('industrialforegoing:range_addon11'),
      Ingredient.of('#forge:gears/unobtainium'),
      Item.of('meatsalad:dark_matter'),
      Ingredient.of('#forge:gears/unobtainium'),
    ],
    inputFluid: '{FluidName:"industrialforegoing:pink_slime",Amount:2000}',
    processingTime: 400,
    output: {
      item: 'industrialforegoing:infinity_trident',
      count: 1,
      nbt: '{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"POOR",Special:0b}'
    }
  }).id('meatsalad:dissolution_chamber/infinity_trident')
})
