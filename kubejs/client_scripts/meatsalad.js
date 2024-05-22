ClientEvents.lang('en_us', event => {
  // Materials
  event.add('meatsalad', 'material.meatsalad.adamantite', 'Adamantite')
  event.add('meatsalad', 'material.meatsalad.arcane_cloth', 'Arcane Cloth')
  event.add('meatsalad', 'material.meatsalad.cobalt', 'Cobalt')
  event.add('meatsalad', 'material.meatsalad.dragon_scale', 'Dragon Scale')
  event.add('meatsalad', 'material.meatsalad.echo', 'Echo')
  event.add('meatsalad', 'material.meatsalad.infinity', 'Infinity')
  event.add('meatsalad', 'material.meatsalad.mystery_goo', 'Mystery Goo')
  event.add('meatsalad', 'material.meatsalad.mythril', 'Mythril')
  event.add('meatsalad', 'material.meatsalad.allthemodium', 'Palladium')
  event.add('meatsalad', 'material.meatsalad.peridot', 'Peridot')
  event.add('meatsalad', 'material.meatsalad.ruby', 'Ruby')
  event.add('meatsalad', 'material.meatsalad.sapphire', 'Sapphire')
  event.add('meatsalad', 'material.meatsalad.unobtainium', 'Unobtainium')
  event.add('meatsalad', 'material.meatsalad.vibranium', 'Vibranium')
  event.add('meatsalad', 'material.meatsalad.vulcanite', 'Vulcanite')

  // Gates
  event.add('meatsalad', 'meatsalad.basalz', 'Basalz Gateway')
  event.add('meatsalad', 'meatsalad.blitz', 'Blitz Gateway')
  event.add('meatsalad', 'meatsalad.blizz', 'Blizz Gateway')
  event.add('meatsalad', 'meatsalad.creeper', 'Creeper Gateway')
  event.add('meatsalad', 'meatsalad.magma_cube', 'Magma Cube Gateway')
  event.add('meatsalad', 'meatsalad.shulker', 'Shulker Gateway')
  event.add('meatsalad', 'meatsalad.skeleton', 'Skeleton Gateway')
  event.add('meatsalad', 'meatsalad.spider', 'Spider Gateway')
  event.add('meatsalad', 'meatsalad.supreme', '§kSupreme§r Gateway')
  event.add('meatsalad', 'meatsalad.witch', 'Witch Gateway')
  event.add('meatsalad', 'meatsalad.wither_skeleton', 'Wither Skeleton Gateway')
  event.add('meatsalad', 'meatsalad.zombie', 'Zombie Gateway')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.supreme', '§kSupreme§r Loot')

  // Extra Summon Entity Names
  event.add('meatsalad', 'name.meatsalad.wither_1', 'Wither+')
  event.add('meatsalad', 'name.meatsalad.wither_2', 'Wither++')
  event.add('meatsalad', 'name.meatsalad.wither_3', 'Wither+++')
  event.add('meatsalad', 'name.meatsalad.ender_guardian_1', 'Ender Guardian+')
  event.add('meatsalad', 'name.meatsalad.ender_guardian_2', 'Ender Guardian++')
  event.add('meatsalad', 'name.meatsalad.ender_guardian_3', 'Ender Guardian+++')

  // Infuse Types
  event.add('meatsalad', 'infuse_type.kubejs.dimensional_shard', "Dimensional Shard")

  // Slurries
  global.mekStackAdditions.forEach(entry => {
    event.add('meatsalad', `slurry.kubejs.clean_${entry.material}`, global.getReadableText(`clean_${entry.material}_slurry`))
    event.add('meatsalad', `slurry.kubejs.dirty_${entry.material}`, global.getReadableText(`dirty_${entry.material}_slurry`))
  })

  // Advancements
  event.add('meatsalad', 'advancements.meatsalad.the_nether.description', 'Transition into The Nether Stage')
  event.add('meatsalad', 'advancements.meatsalad.the_nether.title', 'The Nether Stage')
  event.add('meatsalad', 'advancements.meatsalad.hellshelf.description', 'Transition into The Hellshelf Stage')
  event.add('meatsalad', 'advancements.meatsalad.hellshelf.title', 'Hellshelf Stage')
  event.add('meatsalad', 'advancements.meatsalad.deepshelf.description', 'Transition into The Deepshelf Stage')
  event.add('meatsalad', 'advancements.meatsalad.deepshelf.title', 'Deepshelf Stage')
  event.add('meatsalad', 'advancements.meatsalad.the_other.description', 'Transition into The Other Stage')
  event.add('meatsalad', 'advancements.meatsalad.the_other.title', 'The Other Stage')
  event.add('meatsalad', 'advancements.meatsalad.the_end.description', 'Transition into The End Stage')
  event.add('meatsalad', 'advancements.meatsalad.the_end.title', 'The End Stage')
  event.add('meatsalad', 'advancements.meatsalad.endshelf.description', 'Transition into The Endshelf Stage')
  event.add('meatsalad', 'advancements.meatsalad.endshelf.title', 'Endshelf Stage')
  event.add('meatsalad', 'advancements.meatsalad.starcharger.description', 'Transition into The Starcharger Stage')
  event.add('meatsalad', 'advancements.meatsalad.starcharger.title', 'Starcharger Stage')
})
