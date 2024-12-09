ClientEvents.lang('en_us', event => {
  event.add('quark', 'quark.jei.hint.ancient_tome', "Can upgrade an item or book's enchantment by one level, up to one above the normal cap. Can be crafted by combining max level enchanted book with an Eternal Crystal Shard in an Ancient Fusion Anvil.")
})

JEIEvents.hideItems(event => {
  event.hide([
    'quark:forgotten_hat',
  ])
})
