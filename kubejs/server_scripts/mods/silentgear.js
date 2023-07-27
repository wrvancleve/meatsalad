ServerEvents.recipes(event => {
  event.remove({ not: { id: 'silentgear:pebble' }, input: '#forge:hammers' })
  event.remove({ id: 'silentgear:azure_electrum_ingot' })
  event.remove({ id: 'silentgear:crimson_steel_ingot' })
  event.remove({ id: 'silentgear:crushed_shulker_shell' })
  event.remove({ id: 'silentgear:metal_alloyer' })
  event.remove({ id: 'silentgear:metal_press' })
  event.remove({ id: 'silentgear:recrystallizer' })
  event.remove({ id: 'silentgear:refabricator' })

  global.replaceShaped(event, [
    "NII",
    "APB",
    "IIE"
  ], {
    N: 'silentgear:nether_star_fragment',
    I: '#forge:dusts/iron',
    A: '#forge:dusts/azure_electrum',
    P: '#forge:dusts/platinum',
    B: '#forge:dusts/blaze_gold',
    E: 'kubejs:ender_star_fragment'
  }, 'silentgear', 'starmetal_dust');

  global.replaceShaped(event, [
    'QGQ',
    'PDP',
    'PBP'
  ], {
    Q: '#forge:storage_blocks/quartz',
    G: '#forge:glass/colorless',
    P: 'minecraft:polished_blackstone',
    D: 'kubejs:dark_matter',
    B: '#forge:storage_blocks/blaze_gold'
  }, 'silentgear', 'starlight_charger');
})