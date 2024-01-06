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
  event.remove({ id: 'cataclysm:abyssal_sacrifice' });

  event.recipes.summoningrituals.altar('alexsmobs:mimicream')
    .mobOutput('cataclysm:ender_guardian')
    .input('cataclysm:void_eye')
    .recipeTime(200)
    .blockBelow('cataclysm:void_stone')
    .id(`meatsalad:summoning/ender_guardian`);
})
