ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({id: id});
    })
  }
  let salvage = (mod, item, results) => {
    event.custom({
      type: "silentgear:salvaging",
      ingredient: Item.of(`${mod}:${item}`).toJson(),
      results: results
    }).id(`meatsalad:salvaging/${item}`);
  }

  removeRecipes([
    'irons_spellbooks:alchemist_cauldron',
    'irons_spellbooks:copper_spell_book',
    'irons_spellbooks:iron_spell_book',
    'irons_spellbooks:gold_spell_book',
    'irons_spellbooks:diamond_spell_book',
    'irons_spellbooks:druidic_spell_book',
  ]);

  salvage('irons_spellbooks', 'iron_spell_book', [
    Item.of('irons_spellbooks:uncommon_ink').withCount(5).toJson()
  ]);
  salvage('irons_spellbooks', 'gold_spell_book', [
    Item.of('irons_spellbooks:rare_ink').withCount(6).toJson()
  ]);
  salvage('irons_spellbooks', 'blaze_spell_book', [
    Item.of('irons_spellbooks:epic_ink').withCount(5).toJson()
  ]);
  salvage('irons_spellbooks', 'diamond_spell_book', [
    Item.of('irons_spellbooks:epic_ink').withCount(8).toJson()
  ]);
  salvage('irons_spellbooks', 'druidic_spell_book', [
    Item.of('irons_spellbooks:epic_ink').withCount(6).toJson()
  ]);
  salvage('irons_spellbooks', 'villager_spell_book', [
    Item.of('irons_spellbooks:epic_ink').withCount(6).toJson()
  ]);
  salvage('irons_spellbooks', 'netherite_spell_book', [
    Item.of('irons_spellbooks:legendary_ink').withCount(10).toJson()
  ]);
  salvage('irons_spellbooks', 'dragonskin_spell_book', [
    Item.of('irons_spellbooks:legendary_ink').withCount(10).toJson()
  ]);

  global.replaceShaped(event, [
    'CNC',
    'DRD',
    'CBC'
  ], {
    C: 'irons_spellbooks:magic_cloth',
    N: '#forge:ingots/netherite',
    D: 'kubejs:dark_matter',
    R: 'irons_spellbooks:ruined_book',
    B: 'irons_spellbooks:blood_vial'
  }, 'irons_spellbooks', 'netherite_spell_book');

  global.replaceShaped(event, [
    'CSC',
    'DRD',
    'COC'
  ], {
    C: 'irons_spellbooks:magic_cloth',
    S: 'quark:dragon_scale',
    D: 'kubejs:dark_matter',
    R: 'irons_spellbooks:ruined_book',
    O: '#forge:obsidian',
  }, 'irons_spellbooks', 'dragonskin_spell_book');
})
