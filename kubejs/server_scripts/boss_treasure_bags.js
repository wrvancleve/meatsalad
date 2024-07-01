const BOSSES = {
  'cataclysm:ancient_remnant': 'ancient_remnant',
  'irons_spellbooks:dead_king': 'dead_king',
  'minecraft:elder_guardian': 'elder_guardian',
  'minecraft:ender_dragon': 'ender_dragon',
  'cataclysm:ender_guardian': 'ender_guardian',
  'awakened_bosses:herobrine': 'herobrine',
  'cataclysm:ignis': 'ignis',
  'cataclysm:netherite_monstrosity': 'netherite_monstrosity',
  'cataclysm:the_harbinger': 'the_harbinger',
  'cataclysm:the_leviathan': 'the_leviathan',
  'minecraft:warden': 'warden',
  'minecraft:wither': 'wither',
}

EntityEvents.death(event => {
  const entity = event.entity
  if (!(entity.type in BOSSES) || !entity.lastHurtByMob || !entity.lastHurtByMob.isPlayer()) return
  let chaos_level = 0
  if (entity.persistentData.contains('chaos_level')) {
    chaos_level = entity.persistentData.getInt('chaos_level')
  }
  let treasure_id = BOSSES[entity.type]
  if (chaos_level > 0) {
    treasure_id += `_${chaos_level}`
  }
  Utils.server.runCommandSilent(`give @a[team=Meat] treasurebags:treasure_bag{silentlib.LootContainer:{BagType:"meatsalad:${treasure_id}",LootTable:"meatsalad:bags/${treasure_id}"}}`)
})

LootJS.modifiers((event) => {
  event.disableWitherStarDrop()
  Object.keys(BOSSES).forEach(boss => {
    event.addEntityLootModifier(boss)
      .removeLoot(Ingredient.all)
  })
})
