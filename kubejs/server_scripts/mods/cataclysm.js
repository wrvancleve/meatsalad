ServerEvents.recipes(event => {
  function fullRemove(id) {
    event.remove({ input: id })
    event.remove({ output: id })
  }

  /*
  event.shaped('cataclysm:ender_guardian_spawner', [
    'SPS',
    'PCP',
    'SPS'
  ], {
    S: 'cataclysm:void_stone',
    P: 'cataclysm:chorus_planks',
    C: 'cataclysm:void_core'
  })
  */

  fullRemove('cataclysm:ignitium_ingot')
  fullRemove('cataclysm:ignitium_block')
  fullRemove('cataclysm:bulwark_of_the_flame')
  fullRemove('cataclysm:the_incinerator')
  fullRemove('cataclysm:witherite_block')
  fullRemove('cataclysm:witherite_ingot')
  fullRemove('cataclysm:mechanical_fusion_anvil')
})