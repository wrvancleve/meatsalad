ServerEvents.recipes(event => {
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
      I: {item: 'rftoolsbase:infused_diamond'},
      M: {item: 'kubejs:dark_matter'},
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
      O: {item: 'kubejs:oblivion_shard'},
      c: {item: 'kubejs:ancient_chorus_chunk'},
      D: {item: 'kubejs:dragon_soul'},
      s: {item: 'kubejs:chaos_shard'},
      C: {item: 'kubejs:cosmic_shelling'},
      P: {item: 'allthemodium:piglich_heart'},
      E: {item: 'upgrade_aquatic:elder_guardian_spine'},
      e: {item: 'rftoolsbase:infused_enderpearl'},
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
