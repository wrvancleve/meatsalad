ClientEvents.lang('en_us', event => {
  event.add('irons_spellbooks', 'item.irons_spellbooks.dragonskin_spell_book', 'Dragon Scale Spell Book')
  event.add('irons_spellbooks', 'affix.irons_spellbooks:spellbook/attribute/cooldown', 'Quick-Minded')
  event.add('irons_spellbooks', 'affix.irons_spellbooks:spellbook/attribute/cooldown.suffix', 'of the Fast-Wit')
})

JEIEvents.removeCategories(event => {
  event.remove('irons_spellbooks:alchemist_cauldron')
})

JEIEvents.hideItems(event => {
  event.hide([
    'irons_spellbooks:dragonskin',
    'irons_spellbooks:alchemist_cauldron',
    'irons_spellbooks:oakskin_elixir',
    'irons_spellbooks:greater_oakskin_elixir',
    'irons_spellbooks:invisibility_elixir',
    'irons_spellbooks:greater_invisibility_elixir',
    'irons_spellbooks:evasion_elixir',
    'irons_spellbooks:greater_evasion_elixir',
    'irons_spellbooks:fireward_ring',
    'irons_spellbooks:frostward_ring',
    'irons_spellbooks:poisonward_ring',
    'irons_spellbooks:invisibility_ring',
    'irons_spellbooks:affinity_ring',
    'irons_spellbooks:rotten_spell_book',
    'irons_spellbooks:greater_healing_potion',
    'irons_spellbooks:fire_ale',
    'irons_spellbooks:netherward_tincture',
  ])
})
