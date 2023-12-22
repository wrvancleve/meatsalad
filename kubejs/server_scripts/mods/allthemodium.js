ServerEvents.recipes(event => {
  function fullRemove(id) {
    event.remove({ input: id })
    event.remove({ output: id })
  }

  /*
  fullRemove('#mekanism:crystals/allthemodium')
  fullRemove('#mekanism:dirty_dusts/allthemodium')
  fullRemove('#forge:raw_materials/allthemodium')
  fullRemove('#forge:raw_ores/allthemodium')
  fullRemove('#forge:nuggets/allthemodium')
  fullRemove('#forge:dusts/allthemodium')
  fullRemove('#mekanism:clumps/allthemodium')
  fullRemove('#mekanism:shards/allthemodium')
  fullRemove('#forge:ores/allthemodium')
  fullRemove('#forge:storage_blocks/allthemodium')
  fullRemove('#forge:storage_blocks/raw_allthemodium')
  fullRemove('#forge:ingots/unobtainium_allthemodium_alloy')
  fullRemove('#forge:ingots/unobtainium_vibranium_alloy')
  fullRemove('#forge:ingots/vibranium_allthemodium_alloy')
  fullRemove('#forge:storage_blocks/unobtainium_allthemodium_alloy')
  fullRemove('#forge:storage_blocks/unobtainium_vibranium_alloy')
  fullRemove('#forge:storage_blocks/vibranium_allthemodium_alloy')
  fullRemove('allthemodium:allthemodium_ore')
  fullRemove('allthemodium:allthemodium_slate_ore')
  fullRemove('allthemodium:raw_allthemodium_block')
  fullRemove('allthemodium:raw_allthemodium')
  fullRemove('allthemodium:allthemodium_block')
  fullRemove('allthemodium:allthemodium_ingot')
  fullRemove('allthemodium:allthemodium_nugget')
  fullRemove('allthemodium:allthemodium_dust')
  fullRemove('allthemodium:dirty_allthemodium_dust')
  fullRemove('allthemodium:allthemodium_clump')
  fullRemove('allthemodium:allthemodium_shard')
  fullRemove('allthemodium:allthemodium_crystal')
  fullRemove('allthemodium:allthemodium_plate')
  fullRemove('allthemodium:allthemodium_gear')
  fullRemove('allthemodium:allthemodium_rod')
  */

  fullRemove('allthemodium:unobtainium_allthemodium_alloy_dust')
  fullRemove('allthemodium:unobtainium_vibranium_alloy_dust')
  fullRemove('allthemodium:vibranium_allthemodium_alloy_dust')
  fullRemove('allthemodium:unobtainium_allthemodium_alloy_ingot')
  fullRemove('allthemodium:unobtainium_vibranium_alloy_ingot')
  fullRemove('allthemodium:vibranium_allthemodium_alloy_ingot')
  fullRemove('allthemodium:unobtainium_allthemodium_alloy_block')
  fullRemove('allthemodium:unobtainium_vibranium_alloy_block')
  fullRemove('allthemodium:vibranium_allthemodium_alloy_block')
  fullRemove('allthemodium:allthemodium_sword')
  fullRemove('allthemodium:allthemodium_pickaxe')
  fullRemove('allthemodium:allthemodium_axe')
  fullRemove('allthemodium:allthemodium_shovel')
  fullRemove('allthemodium:allthemodium_hoe')
  fullRemove('allthemodium:allthemodium_helmet')
  fullRemove('allthemodium:allthemodium_chestplate')
  fullRemove('allthemodium:allthemodium_leggings')
  fullRemove('allthemodium:allthemodium_boots')
  fullRemove('allthemodium:allthemodium_apple')
  fullRemove('allthemodium:allthemodium_carrot')

  global.replaceShaped(event, [
    ' b ',
    'beb',
    ' b '
  ], {
    e: 'kubejs:infused_ender_pearl',
    b: '#forge:nuggets/palladium'
  }, 'allthemodium', 'teleport_pad')
})