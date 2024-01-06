//priority: 1
ServerEvents.recipes(event => {
  function createReplicationRecipes(mod, itemId, itemNbt, itemNbtRegistryName) {
    let registryName = mod + ":" + itemId;
    if (itemNbt != null) {
      event.shaped(Item.of(registryName, 2, itemNbt).strongNBT(), [
        ' M ',
        'MIM',
        ' M '
      ], {
        M: 'alexsmobs:mimicream',
        I: Item.of(registryName, itemNbt).strongNBT()
      }).id('meatsalad:' + mod + '_' + itemNbtRegistryName + '_2x_replication')
      event.shaped(Item.of(registryName, 4, itemNbt).strongNBT(), [
        'MMM',
        'MIM',
        'MMM'
      ], {
        M: 'alexsmobs:mimicream',
        I: Item.of(registryName, itemNbt).strongNBT()
      }).id('meatsalad:' + mod + '_' + itemNbtRegistryName + '_4x_replication')
    } else {
      event.shaped(Item.of(registryName, 2), [
        ' M ',
        'MIM',
        ' M '
      ], {
        M: 'alexsmobs:mimicream',
        I: registryName
      }).id('meatsalad:' + mod + '_' + itemId + '_2x_replication')
      event.shaped(Item.of(registryName, 4), [
        'MMM',
        'MIM',
        'MMM'
      ], {
        M: 'alexsmobs:mimicream',
        I: registryName
      }).id('meatsalad:' + mod + '_' + itemId + '_4x_replication')
    }
  }

  const mysteryGooReplications = Ingredient.of('#meatsalad:mystery_goo_replication').stacks;
  mysteryGooReplications.forEach(mysteryGooReplication => {
    let idSplit = mysteryGooReplication.id.split(':');
    createReplicationRecipes(idSplit[0], idSplit[1]);
  })

  // Remove in future
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
    createReplicationRecipes('apotheosis', 'gem', `{gem:"${gem.id}",rarity:"ancient"}`, `${gem.name}_gem`);
  }
})
