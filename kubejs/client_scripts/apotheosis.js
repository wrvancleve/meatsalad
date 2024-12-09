ClientEvents.lang('en_us', event => {
  event.add('apotheosis', 'affix.apotheosis:heavy_weapon/attribute/experienced', 'Experienced')
  event.add('apotheosis', 'affix.apotheosis:heavy_weapon/attribute/experienced.suffix', 'of the Scholar')
  event.add('apotheosis', 'affix.apotheosis:sword/attribute/experienced', 'Experienced')
  event.add('apotheosis', 'affix.apotheosis:sword/attribute/experienced.suffix', 'of the Scholar')
})

JEIEvents.hideItems(event => {
  event.hide([
    Item.of('minecraft:enchanted_book').enchant('apotheosis:chainsaw', 1).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:chromatic', 1).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 1).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 2).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 3).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 1).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 2).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 3).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 4).strongNBT(),
    Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 5).strongNBT(),
    'apotheosis:ender_lead',
  ])
})
