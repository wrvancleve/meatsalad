ServerEvents.recipes(event => {
  let removeRecipes = (ids) => {
    ids.forEach(id => {
      event.remove({id: id});
    })
  }

  removeRecipes([
    'irons_spellbooks:alchemist_cauldron',
  ]);

  global.replaceShaped(event, [
    'Taa',
    'Bpp',
    'BBT'
  ], {
    a: 'irons_spellbooks:arcane_essence',
    T: '#forge:ingots/copper',
    p: '#forge:paper',
    B: 'minecraft:leather'
  }, 'irons_spellbooks', 'copper_spell_book');

  global.replaceShaped(event, [
    'Taa',
    'Bpp',
    'BBT'
  ], {
    a: 'irons_spellbooks:arcane_essence',
    T: '#forge:ingots/iron',
    p: '#forge:paper',
    B: 'minecraft:leather'
  }, 'irons_spellbooks', 'iron_spell_book');

  global.replaceShaped(event, [
    'Taa',
    'Bpp',
    'BBT'
  ], {
    a: 'irons_spellbooks:arcane_essence',
    T: '#forge:ingots/gold',
    p: '#forge:paper',
    B: 'irons_spellbooks:hogskin'
  }, 'irons_spellbooks', 'gold_spell_book');

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBT'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:gems/diamond',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin'
  }, 'irons_spellbooks', 'diamond_spell_book');

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBT'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:rods/blaze',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin'
  }, 'irons_spellbooks', 'blaze_spell_book');

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBg'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: 'minecraft:honey_bottle',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin',
    g: 'minecraft:glow_ink_sac',
  }, 'irons_spellbooks', 'druidic_spell_book');

  global.replaceShaped(event, [
    'Tsi',
    'Bpp',
    'BBb'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:gems/emerald',
    p: 'irons_spellbooks:magic_cloth',
    B: 'irons_spellbooks:hogskin',
    b: 'minecraft:bell',
  }, 'irons_spellbooks', 'villager_spell_book');

  global.replaceShaped(event, [
    'Tsi',
    'Bbp',
    'BBD'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: '#forge:ingots/netherite',
    p: 'irons_spellbooks:magic_cloth',
    b: 'irons_spellbooks:ruined_book',
    B: 'irons_spellbooks:hogskin',
    D: 'kubejs:dark_matter',
  }, 'irons_spellbooks', 'netherite_spell_book');

  global.replaceShaped(event, [
    'Tsi',
    'Bbp',
    'BBD'
  ], {
    i: 'irons_spellbooks:arcane_ingot',
    s: 'irons_spellbooks:arcane_salvage',
    T: 'quark:dragon_scale',
    p: 'irons_spellbooks:magic_cloth',
    b: 'irons_spellbooks:ruined_book',
    B: 'irons_spellbooks:hogskin',
    D: 'kubejs:dark_matter',
  }, 'irons_spellbooks', 'dragonskin_spell_book');
})
