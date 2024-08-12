MoreJSEvents.villagerTrades(event => {
  event.addTrade('minecraft:librarian', 2, [
    '4x minecraft:emerald',
    'minecraft:paper'
  ], 'silentgear:blueprint_paper')
})

MoreJSEvents.wandererTrades(event => {
  event.removeModdedTrades(1)
  event.removeModdedTrades(2)

  event.addCustomTrade(2, (offer, entity, random) => {
    offer.setFirstInput('experienceobelisk:cognitive_crystal');
    offer.setSecondInput('4x apotheosis:gem_dust');
    offer.setOutput(Item.of('apotheosis:gem', 1, '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/splendor"}'));
    offer.setMaxUses(3);
  })
  // event.addTrade(2, [
  //   'experienceobelisk:cognitive_crystal',
  //   '4x apotheosis:gem_dust'
  // ], Item.of('apotheosis:gem', 1, '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/splendor"}'))
})
