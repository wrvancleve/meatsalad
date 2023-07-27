ServerEvents.recipes(event => {
  global.replaceShaped(event, [
    ' Y ',
    ' S ',
    'NNN'
  ], {
    Y: '#forge:storage_blocks/ender_eye',
    N: '#forge:storage_blocks/enderium',
    S: 'kubejs:ender_star'
  }, 'extendedcrafting', 'ender_alternator');

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'SUVDVUS',
      'SIIMIIS',
      'SIIOIIS',
      'SUVDVUS'
    ],
    key: {
      S: {tag: 'forge:ingots/starmetal'},
      U: {tag: 'forge:ingots/unobtainium_tyrian_steel'},
      V: {tag: 'forge:ingots/vibranium_tyrian_steel'},
      D: {tag: 'forge:ingots/dragonsteel'},
      I: {item: 'kubejs:draconic_infused_diamond'},
      M: {item: 'kubejs:draconic_infused_dark_matter'},
      O: {item: 'kubejs:oblivion_shard'}
    },
    result: {
      item: 'kubejs:ultima_ingot',
      count: 1
    }
  }).id('meatsalad:extendedcrafting/ultima_ingot')

  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      ' O     O ',
      ' cc   cc ',
      ' cec ceeO',
      ' cUeceUc ',
      'OeSPsESc ',
      ' cSsCsSc ',
      'OeVIsWVeO',
      ' cceDecc ',
      '   ccc   '
    ],
    key: {
      O: {item: 'kubejs:draconic_infused_oblivion_shard'},
      c: {item: 'kubejs:draconic_infused_eternal_crystal'},
      D: {item: 'kubejs:dragon_soul'},
      s: {item: 'kubejs:chaos_shard'},
      C: {item: 'kubejs:cosmic_shelling'},
      P: {item: 'allthemodium:piglich_heart'},
      E: {item: 'upgrade_aquatic:elder_guardian_spine'},
      e: {item: 'kubejs:draconic_infused_ender_pearl'},
      W: {item: 'kubejs:warden_heart'},
      I: {item: 'kubejs:manifest_illusion'},
      U: {tag: 'forge:storage_blocks/unobtainium'},
      S: {tag: 'forge:storage_blocks/starmetal'},
      V: {tag: 'forge:storage_blocks/vibranium'}
    },
    result: {
      item: 'kubejs:infinity_fabric',
      count: 1
    }
  }).id('meatsalad:extendedcrafting/infinity_fabric')
})
