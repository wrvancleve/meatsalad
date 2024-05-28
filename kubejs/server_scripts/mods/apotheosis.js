ServerEvents.recipes(event => {
  removeRecipes(event, [
    'apotheosis:ender_lead',
    'apotheosis:gem_cutting_table',
  ])

  nucleosynthesize(event,
    {mod: 'apotheosis', item: 'mythic_material'}, // Input
    {mod: 'apotheosis', item: 'ancient_material'} // Output
  )

  const gems = [
    { id: 'apotheosis:core/ballast', name: 'ballast' },
    { id: 'apotheosis:core/brawlers', name: 'brawlers' },
    { id: 'apotheosis:core/breach', name: 'breach' },
    { id: 'apotheosis:core/combatant', name: 'combatant' },
    { id: 'apotheosis:core/guardian', name: 'guardian' },
    { id: 'apotheosis:core/lightning', name: 'lightning' },
    { id: 'apotheosis:core/lunar', name: 'lunar' },
    { id: 'apotheosis:core/samurai', name: 'samurai' },
    { id: 'apotheosis:core/slipstream', name: 'slipstream' },
    { id: 'apotheosis:core/solar', name: 'solar' },
    { id: 'apotheosis:core/splendor', name: 'splendor' },
    { id: 'apotheosis:core/tyrannical', name: 'tyrannical' },
    { id: 'apotheosis:core/warlord', name: 'warlord' },
    { id: 'apotheosis:overworld/earth', name: 'earth' },
    { id: 'apotheosis:overworld/royalty', name: 'royalty' },
    { id: 'apotheosis:the_nether/blood_lord', name: 'blood_lord' },
    { id: 'apotheosis:the_nether/inferno', name: 'inferno' },
    { id: 'apotheosis:the_end/mageslayer', name: 'mageslayer' },
    { id: 'apotheosis:the_end/endersurge', name: 'endersurge' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:blood', name: 'blood' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:cast_time', name: 'cast_time' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:cooldown', name: 'cooldown' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:evocation', name: 'evocation' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:fire', name: 'fire' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:holy', name: 'holy' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:ice', name: 'ice' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:intelligent', name: 'intelligent' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:lightning', name: 'lightning' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:nature', name: 'nature' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:spell_resist', name: 'spell_resist' },
    { mod: 'irons_spellbooks', id: 'irons_spellbooks:summoning', name: 'summoning' }
  ]
  for (let gem of gems) {
    let gemMod = gem.mod || 'apotheosis'
    nucleosynthesize(event,
      {mod: 'apotheosis', item: 'gem', data: `{affix_data:{rarity:"apotheosis:mythic"},gem:"${gem.id}"}`}, // Input
      {mod: 'apotheosis', item: 'gem', data: `{affix_data:{rarity:"apotheosis:ancient"},gem:"${gem.id}"}`, recipeName: `gems/${gemMod}/${gem.name}`} // Output
    ) 
  }
})
