ServerEvents.recipes(event => {
  event.remove({ id: 'alexsmobs:mosquito_larva' });
  event.remove({ id: 'alexsmobs:transmutation_table' });
  event.remove({ id: 'alexsmobs:hemolymph_blaster' });

  event.custom({
    type: 'summoningrituals:altar',
    catalyst: { item: 'alexsmobs:mimicream' },
    outputs: [
      {
        mob: 'alexsmobs:void_worm',
        //"data": "{Attributes:[{Base:50.0d,Name:\"generic.max_health\"}],Health:50.0d}",
      }
    ],
    inputs: [
      { ingredient: { item: 'alexsmobs:mysterious_worm' }, count: 1 }
    ],
    recipe_time: 200,
    block_below: { block: 'minecraft:end_stone' }
  }).id('meatsalad:summoning/void_worm');
})

