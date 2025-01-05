ServerEvents.recipes(event => {
  replaceShaped(event, [
    'OGO',
    'RCR',
    'OGO'
  ], {
    O: '#forge:obsidian',
    G: '#forge:glass_panes',
    R: '#forge:dusts/redstone',
    C: '#forge:circuits/ultimate'
  }, Item.of('hostilenetworks:deep_learner'))

  replaceShaped(event, [
    'CAC',
    'RHR',
    'CAC'
  ], {
    C: 'minecraft:clay_ball',
    A: '#forge:gems/amethyst',
    R: '#forge:dusts/redstone',
    H: '#refinedstorage:parts/items/256k'
  }, Item.of('hostilenetworks:blank_data_model'), 'framework')

  replaceShaped(event, [
    'OEO',
    'GCG',
    'OIO'
  ], {
    O: '#forge:obsidian',
    E: '#forge:storage_blocks/emerald',
    G: '#forge:ingots/blaze_gold',
    C: '#forge:circuits/ultimate',
    I: 'meatsalad:infused_ender_pearl'
  }, Item.of('hostilenetworks:loot_fabricator'))

  replaceShaped(event, [
    'OTO',
    'ICI',
    'OIO'
  ], {
    O: '#forge:obsidian',
    T: 'mekanism:teleportation_core',
    I: 'meatsalad:infused_ender_pearl',
    C: '#forge:circuits/ultimate'
  }, Item.of('hostilenetworks:sim_chamber'))

  // Extra Nether Prediction Usages
  event.shapeless('silentgear:crimson_iron_ingot', [
    'minecraft:magma_cream',
    'minecraft:blaze_powder',
    '#forge:ingots/iron',
    'hostilenetworks:nether_prediction',
  ]).id('meatsalad:crimson_iron_ingot')
  event.shapeless('irons_spellbooks:cinder_essence', [
    'irons_spellbooks:arcane_essence',
    'hostilenetworks:nether_prediction',
  ]).id('meatsalad:cinder_essence')

  // Extra End Prediction Usages
  event.shapeless('silentgear:azure_silver_ingot', [
    'minecraft:ender_pearl',
    'minecraft:ender_pearl',
    '#forge:ingots/silver',
    'hostilenetworks:end_prediction',
  ]).id('meatsalad:azure_silver_ingot')
  event.shaped('minecraft:dragon_head', ['AAA','BPB','AAA'],{
    A: 'hostilenetworks:end_prediction',
    P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT(),
    B: 'minecraft:dragon_breath'
  }).id('meatsalad:dragon_head')
})
