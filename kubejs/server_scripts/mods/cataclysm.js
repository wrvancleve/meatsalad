ServerEvents.recipes(event => {
  function fullRemove(id) {
    event.remove({ input: id })
    event.remove({ output: id })
  }

  fullRemove('cataclysm:ignitium_ingot');
  fullRemove('cataclysm:ignitium_block');
  fullRemove('cataclysm:bulwark_of_the_flame');
  fullRemove('cataclysm:the_incinerator');
  fullRemove('cataclysm:witherite_block');
  fullRemove('cataclysm:witherite_ingot');
  fullRemove('cataclysm:mechanical_fusion_anvil');
  event.remove({ id: 'cataclysm:abyss_eye' });
  event.remove({ id: 'cataclysm:flame_eye' });
  event.remove({ id: 'cataclysm:mech_eye' });
  event.remove({ id: 'cataclysm:monstrous_eye' });
  event.remove({ id: 'cataclysm:void_eye' });
  event.remove({ id: 'cataclysm:abyssal_sacrifice' });

  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'alexsmobs:mimicream' },
    outputs: [
      {
        mob: 'cataclysm:ender_guardian',
        //"data": "{Attributes:[{Base:50.0d,Name:\"generic.max_health\"}],Health:50.0d}",
      }
    ],
    inputs: [
      { ingredient: { item: 'cataclysm:void_core' }, count: 1 }
    ],
    recipe_time: 200,
    block_below: { block: 'cataclysm:void_stone' }
  }).id('meatsalad:summoning/ender_guardian');
})
