ServerEvents.recipes(event => {
  event.remove({ id: 'apotheosis:ender_lead' })
  event.remove({ id: 'apotheosis:gem_cutting_table' })

  global.nucleosynthesize(event,
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
    { id: 'irons_spellbooks:blood', name: 'blood' },
    { id: 'irons_spellbooks:cast_time', name: 'cast_time' },
    { id: 'irons_spellbooks:cooldown', name: 'cooldown' },
    { id: 'irons_spellbooks:evocation', name: 'evocation' },
    { id: 'irons_spellbooks:fire', name: 'fire' },
    { id: 'irons_spellbooks:holy', name: 'holy' },
    { id: 'irons_spellbooks:ice', name: 'ice' },
    { id: 'irons_spellbooks:intelligent', name: 'intelligent' },
    { id: 'irons_spellbooks:lightning', name: 'lightning' },
    { id: 'irons_spellbooks:nature', name: 'nature' },
    { id: 'irons_spellbooks:spell_resist', name: 'spell_resist' },
    { id: 'irons_spellbooks:summoning', name: 'summoning' }
  ]
  for (let gem of gems) {
    global.nucleosynthesize(event,
      {mod: 'apotheosis', item: 'gem', data: `{gem:"${gem.id}",rarity:"mythic"}`}, // Input
      {mod: 'apotheosis', item: 'gem', data: `{gem:"${gem.id}",rarity:"ancient"}`, recipeName: `${gem.name}_gem`} // Output
    ) 
  }
})