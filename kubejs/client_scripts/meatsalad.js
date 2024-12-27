ClientEvents.lang('en_us', event => {
  // Gates
  event.add('meatsalad', 'meatsalad.arcanis', '§kArcanis§r Gateway')
  event.add('meatsalad', 'meatsalad.basalz', 'Basalz Gateway')
  event.add('meatsalad', 'meatsalad.blitz', 'Blitz Gateway')
  event.add('meatsalad', 'meatsalad.blizz', 'Blizz Gateway')
  event.add('meatsalad', 'meatsalad.creeper', 'Creeper Gateway')
  event.add('meatsalad', 'meatsalad.maestris', '§kMaestris§r Gateway')
  event.add('meatsalad', 'meatsalad.magic', 'Magic Gateway')
  event.add('meatsalad', 'meatsalad.magma_cube', 'Magma Cube Gateway')
  event.add('meatsalad', 'meatsalad.otherside', 'Otherside Gateway')
  event.add('meatsalad', 'meatsalad.outer_end', 'Outer End Gateway')
  event.add('meatsalad', 'meatsalad.sentis', '§kSentis§r Gateway')
  event.add('meatsalad', 'meatsalad.shulker', 'Shulker Gateway')
  event.add('meatsalad', 'meatsalad.skeleton', 'Skeleton Gateway')
  event.add('meatsalad', 'meatsalad.spider', 'Spider Gateway')
  event.add('meatsalad', 'meatsalad.stalgaris', '§kStalgaris§r Gateway')
  event.add('meatsalad', 'meatsalad.stronghold', 'Stronghold Gateway')
  event.add('meatsalad', 'meatsalad.velocis', '§kVelocis§r Gateway')
  
  event.add('meatsalad', 'meatsalad.witch', 'Witch Gateway')
  event.add('meatsalad', 'meatsalad.wither_skeleton', 'Wither Skeleton Gateway')
  event.add('meatsalad', 'meatsalad.zombie', 'Zombie Gateway')
  event.add('meatsalad', 'name.gateways.corrupted_husk', 'Corrupted Husk')
  event.add('meatsalad', 'name.gateways.corrupted_vindicator', 'Corrupted Vindicator')
  event.add('meatsalad', 'name.gateways.corrupted_archevoker', 'Corrupted Archevoker')
  
  event.add('meatsalad', 'rewards.meatsalad.loot_table.stage_5_dungeon', 'Overworld Dungeon Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.stronghold', 'Stronghold Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.magic', 'Magic Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.otherside', 'The Other Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.outer_end', 'End Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.arcanis', '§9§kArcanis§r§r Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.maestris', '§6§kMaestris§r§r Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.sentis', '§5§kSentis§r§r Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.stalgaris', '§c§kStalgaris§r§r Loot')
  event.add('meatsalad', 'rewards.meatsalad.loot_table.velocis', '§2§kVelocis§r§r Loot')

  // Extra Summon Entity Names
  event.add('meatsalad', 'name.meatsalad.ancient_remnant_1', 'Ancient Remnant+')
  event.add('meatsalad', 'name.meatsalad.ancient_remnant_2', 'Ancient Remnant++')
  event.add('meatsalad', 'name.meatsalad.ancient_remnant_3', 'Ancient Remnant+++')
  event.add('meatsalad', 'name.meatsalad.ender_guardian_1', 'Ender Guardian+')
  event.add('meatsalad', 'name.meatsalad.ender_guardian_2', 'Ender Guardian++')
  event.add('meatsalad', 'name.meatsalad.ender_guardian_3', 'Ender Guardian+++')
  event.add('meatsalad', 'name.meatsalad.ignis_1', 'Ignis+')
  event.add('meatsalad', 'name.meatsalad.ignis_2', 'Ignis++')
  event.add('meatsalad', 'name.meatsalad.ignis_3', 'Ignis+++')
  event.add('meatsalad', 'name.meatsalad.maledictus_1', 'Maledictus+')
  event.add('meatsalad', 'name.meatsalad.maledictus_2', 'Maledictus++')
  event.add('meatsalad', 'name.meatsalad.maledictus_3', 'Maledictus+++')
  event.add('meatsalad', 'name.meatsalad.netherite_monstrosity_1', 'Netherite Monstrosity+')
  event.add('meatsalad', 'name.meatsalad.netherite_monstrosity_2', 'Netherite Monstrosity++')
  event.add('meatsalad', 'name.meatsalad.netherite_monstrosity_3', 'Netherite Monstrosity+++')
  event.add('meatsalad', 'name.meatsalad.the_harbinger_1', 'The Harbinger+')
  event.add('meatsalad', 'name.meatsalad.the_harbinger_2', 'The Harbinger++')
  event.add('meatsalad', 'name.meatsalad.the_harbinger_3', 'The Harbinger+++')

  // Infuse Types
  event.add('meatsalad', 'infuse_type.kubejs.dimensional_shard', 'Dimensional Shard')

  // Slurries
  global.mekStackAdditions.forEach(entry => {
    event.add('meatsalad', `slurry.kubejs.clean_${entry.material}`, global.getReadableText(`clean_${entry.material}_slurry`))
    event.add('meatsalad', `slurry.kubejs.dirty_${entry.material}`, global.getReadableText(`dirty_${entry.material}_slurry`))
  })

  // Mob Effects
  event.add('meatsalad', 'effect.meatsalad.bowmaster_surge', "Bowmaster's Surge")
  event.add('meatsalad', 'effect.meatsalad.bowmaster_surge.description', 'Boosts speed and ranged abilities')
  event.add('meatsalad', 'effect.meatsalad.magic_forbiden', 'Magic Forbiden')
  event.add('meatsalad', 'effect.meatsalad.magic_forbiden.description', 'Disables magic')
  event.add('meatsalad', 'effect.meatsalad.chaos', 'Chaos Power')
  event.add('meatsalad', 'effect.meatsalad.chaos.description', 'Give negative effects on hit')
  event.add('meatsalad', 'effect.meatsalad.glimpse_of_god', 'Divine Grace: Glimpse')
  event.add('meatsalad', 'effect.meatsalad.glimpse_of_god.description', 'Just a glimpose of the divine magic of a god. Capable of damage immunity')
  event.add('meatsalad', 'effect.meatsalad.gaze_of_god', 'Divine Grace: Gaze')
  event.add('meatsalad', 'effect.meatsalad.gaze_of_god.description', 'Start to feel the divine magic of a god. Capable of damage immunity')
  event.add('meatsalad', 'effect.meatsalad.glare_of_god', 'Divine Grace: Glare')
  event.add('meatsalad', 'effect.meatsalad.glare_of_god.description', 'Encounter the divine magic of a god. Capable of damage immunity')
  event.add('meatsalad', 'effect.meatsalad.pardon_of_god_magic', 'God\'s License: Magic Immunity')
  event.add('meatsalad', 'effect.meatsalad.pardon_of_god_magic.description', 'Grants magic damage immunity via the divine magic of a god')
  event.add('meatsalad', 'effect.meatsalad.pardon_of_god_melee', 'God\'s License: Melee Immunity')
  event.add('meatsalad', 'effect.meatsalad.pardon_of_god_melee.description', 'Grants melee damage immunity via the divine magic of a god')
  event.add('meatsalad', 'effect.meatsalad.pardon_of_god_projectile', 'God\'s License: Projectile Immunity')
  event.add('meatsalad', 'effect.meatsalad.pardon_of_god_projectile.description', 'Grants projectile damage immunity via the divine magic of a god')

  // Advancements
  event.add('meatsalad', 'advancements.meatsalad.kill_dead_king.description', 'Kill The Dead King')
  event.add('meatsalad', 'advancements.meatsalad.kill_dead_king.title', 'Kill The Dead King')
  event.add('meatsalad', 'advancements.meatsalad.kill_elder_guardian.description', 'Kill an Elder Guardian')
  event.add('meatsalad', 'advancements.meatsalad.kill_elder_guardian.title', 'Kill An Elder Guardian')
  event.add('meatsalad', 'advancements.meatsalad.kill_warden.description', 'Kill The Warden')
  event.add('meatsalad', 'advancements.meatsalad.kill_warden.title', 'Kill The Warden')
  event.add('meatsalad', 'advancements.meatsalad.kill_wither.description', 'Kill The Wither')
  event.add('meatsalad', 'advancements.meatsalad.kill_wither.title', 'Kill The Wither')
  event.add('meatsalad', 'advancements.meatsalad.stage.the_nether.description', 'Transition into The Nether Stage')
  event.add('meatsalad', 'advancements.meatsalad.stage.the_nether.title', 'The Nether Stage')
  event.add('meatsalad', 'advancements.meatsalad.stage.the_other.description', 'Transition into The Other Stage')
  event.add('meatsalad', 'advancements.meatsalad.stage.the_other.title', 'The Other Stage')
  event.add('meatsalad', 'advancements.meatsalad.stage.the_end.description', 'Transition into The End Stage')
  event.add('meatsalad', 'advancements.meatsalad.stage.the_end.title', 'The End Stage')

  // Deaths
  event.add('meatsalad', 'death.attack.meatsalad.herobrine', '%1$s was slain by Herobrine!')
  event.add('meatsalad', 'death.attack.meatsalad.herobrine_minion', '%1$s was slain by Herobrine Minion')
  event.add('meatsalad', 'death.attack.meatsalad.mahva', '%1$s was slain by Mahva')
  event.add('meatsalad', 'death.attack.meatsalad.prowler', '%1$s was slain by Prowler')
  event.add('meatsalad', 'death.attack.meatsalad.reeker', '%1$s was slain by Reeker')
})

JEIEvents.information(event => {
  event.addItem('meatsalad:lost_illusion', [
    Text.of('Obtained by killing Level 3 Chaos Bosses'),
    Text.of(' '),
    Text.of('Usages:'),
    Text.of('  Crafts/upgrades many items!'),
    Text.of('  Adds a gem socket to affixed items (Max of 4)'),
  ])
  event.addItem('meatsalad:manifest_illusion', [
    Text.of('Obtained by killing Herobrine'),
    Text.of(' '),
    Text.of('Usages:'),
    Text.of('  Crafts/upgrades many items!'),
    Text.of('  Adds a gem socket to affixed items (Max of 5)'),
    Text.of('  Upgrade data models to Self Aware'),
  ])
})

ItemEvents.tooltip(event => {
  event.add('meatsalad:mastery_essence', [
    Text.of('Right Click to add 1 skill point').gold(),
  ])
  event.add('meatsalad:rebirth_essence', [
    Text.of('Right Click to reset your skill tree').gold(),
  ])

  const addCurioMasteryWarning = (type, itemId) => {
    event.add(`meatsalad:${itemId}_plus`, [
      Text.of(`Requires ${global.getReadableText(`${type}_mastery_curios`)} skill to equip`).red()
    ])
    event.add(`meatsalad:${itemId}_plus_plus`, [
      Text.of(`Requires ${global.getReadableText(`${type}_mastery_curios`)} skill to equip`).red()
    ])
  }

  addCurioMasteryWarning("archer", "arrow_damage_ring")
  addCurioMasteryWarning("archer", "arrow_velocity_ring")
  addCurioMasteryWarning("archer", "dodge_chance_ring")

  addCurioMasteryWarning("mage", "mana_ring")
  addCurioMasteryWarning("mage", "cooldown_ring")
  addCurioMasteryWarning("mage", "cast_time_ring")
  addCurioMasteryWarning("mage", "spell_power_ring")

  addCurioMasteryWarning("warrior", "attack_damage_ring")
  addCurioMasteryWarning("warrior", "attack_speed_ring")
  addCurioMasteryWarning("warrior", "critical_damage_ring")

  addCurioMasteryWarning("guardian", "armor_ring")
  addCurioMasteryWarning("guardian", "armor_toughness_ring")
  addCurioMasteryWarning("guardian", "healing_ring")
})

// ItemEvents.tooltip(event => {
//   const VOID = Text.of(' ')
//   const HOLD_SHIFT = Text.of('§5Hold §6Shift§5 to see details.')
//   const CURSED_ONES = [
//     Text.of('Only those who bear the Seven Curses').red(),
//     Text.of('hold power to obtain and use this item.').red(),
//   ]

//   let addTooltips = (text, tooltips) => {
//     for (let i = 0; i < tooltips.length; i++) {
//       text.add(i + 1, tooltips[i])
//     }
//   }

//   event.addAdvanced('meatsalad:cursed_ring', (item, advanced, text) => {
//     if (!event.shift) {
//       addTooltips(text, [
//         VOID,
//         Text.of('Once forged by antediluvian god, it beckons').darkPurple(),
//         Text.of('mortals and higher beings alike with promise').darkPurple(),
//         Text.of('of untold riches and immeasurable might...').darkPurple(),
//         Text.of('Be it arrogance or ignorance that leads them').darkPurple(),
//         Text.of("to believe they can harness ring's power,").darkPurple(),
//         Text.of('both are paid for in suffering the extent of').darkPurple(),
//         Text.of('which defies description.').darkPurple(),
//         VOID,
//         Text.of('Once worn, it becomes a part of you.').darkPurple(),
//         Text.of('With the power of god, you can unequip it.').gold(),
//         VOID,
//         HOLD_SHIFT,
//       ])
//     } else {
//       addTooltips(text, [
//         VOID,
//         Text.of('Seven curses will befall whoever bears it:').lightPurple(),
//         Text.of('- You receive double damage from §6ANY§5 source.').darkPurple(),
//         Text.of('- Neutral creatures are aggressive towards you.').darkPurple(),
//         Text.of('- Armor is §630%§5 less effective.').darkPurple(),
//         Text.of('- Monsters receive §650%§5 less damage from you.').darkPurple(),
//         Text.of('- When on fire, you burn forever.').darkPurple(),
//         Text.of('- Every death tears your soul apart.').darkPurple(),
//         Text.of('- Phantoms appear at night, even when well rested.').darkPurple(),
//         VOID,
//         Text.of('Seven blessings will reward those who withstand:').lightPurple(),
//         Text.of('- Base drop count of most ores (before fortune) is doubled.').darkPurple(),
//         Text.of('- Base drop count of most monster drops (before looting) is doubled.').darkPurple(),
//         Text.of('- §6+400%§5 §dExperience§5 dropped.').darkPurple(),
//         Text.of('- §6+200%§d Luck.').darkPurple(),
//         Text.of('- +1 Ring, Charm and Bracelet slot.').darkPurple(),
//         Text.of('- Unique drops from some creatures.').darkPurple(),
//         Text.of('- You can create and use unique relics.').darkPurple(),
//       ])
//     }
//   })

//   event.add('meatsalad:reset_skill_token', CURSED_ONES)
// })
