ItemEvents.modification(event => {
  const UNCOMMON = "UNCOMMON"
  const RARE = "RARE"
  const EPIC = "EPIC"

  function modifyItem(itemId, rarity, maxStackSize) {
    event.modify(itemId, item => {
      if (rarity != null) {
        item.rarity = rarity
      }
      if (maxStackSize != null) {
        item.maxStackSize = 64
      }
    })
  }

  modifyItem('alexsmobs:mimicream', RARE)

  event.modify('awakened_bosses:herobrine_a_helmet', item => {
    item.armorProtection = 20
    item.armorToughness = 13.0
    item.armorKnockbackResistance = 0.75
  })
  event.modify('awakened_bosses:herobrine_a_chestplate', item => {
    item.armorProtection = 35
    item.armorToughness = 13.0
    item.armorKnockbackResistance = 0.75
  })
  event.modify('awakened_bosses:herobrine_a_leggings', item => {
    item.armorProtection = 25
    item.armorToughness = 13.0
    item.armorKnockbackResistance = 0.75
  })
  event.modify('awakened_bosses:herobrine_a_boots', item => {
    item.armorProtection = 20
    item.armorToughness = 13.0
    item.armorKnockbackResistance = 0.75
  })
  event.modify('awakened_bosses:herobrine_sword', item => {
    item.attackDamage = 47
    item.attackSpeed = 5.5
  })
})
