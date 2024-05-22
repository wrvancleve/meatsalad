ClientEvents.lang('en_us', event => {
  event.add('apotheosis', 'affix.apotheosis:heavy_weapon/attribute/experienced', 'Experienced')
  event.add('apotheosis', 'affix.apotheosis:heavy_weapon/attribute/experienced.suffix', 'of the Scholar')
  event.add('apotheosis', 'affix.apotheosis:sword/attribute/experienced', 'Experienced')
  event.add('apotheosis', 'affix.apotheosis:sword/attribute/experienced.suffix', 'of the Scholar')
})

JEIEvents.removeCategories(event => {
  event.remove('apotheosis:gem_cutting')
})

JEIEvents.hideItems(event => {
  event.hide([
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 1),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 2),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 3),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 4),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 5),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 1),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 2),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 3),
    'apotheosis:ender_lead',
    'apotheosis:gem_cutting_table'
  ])
})
