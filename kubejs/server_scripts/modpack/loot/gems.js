ServerEvents.chestLootTables(event => {
  const GemRarities = {
    common: { 
      weight: 400.0,
      quality: 0.0,
      stageCondition: global.earlyStageCondition
    },
    uncommon: { 
      weight: 320.0,
      quality: 1.5,
      stageCondition: global.getWorldStageCondition({end: false})
    },
    rare: {
      weight: 150.0,
      quality: 3.0
    },
    epic: {
      weight: 90.0,
      quality: 4.5,
      stageCondition: global.getWorldStageCondition({nether: true})
    },
    mythic: {
      weight: 40.0,
      quality: 6.0,
      stageCondition: global.endStageCondition
    }
  }

  const allGemRarities = Object.keys(GemRarities)
  const coreGemRarities = new Set(allGemRarities)
  const earlySpecialGemRarities = new Set(['rare', 'epic', 'mythic'])
  const lateSpecialGemRarities = new Set(['epic', 'mythic'])
  const magicGemRarities = new Set(allGemRarities)

  const coreGemWeight = 12.0
  const specialGemWeight = 5.0
  const magicGemWeight = 1.0

  const coreGemQuality = 1.0
  const specialGemQuality = 1.5
  const magicGemQuality = 1.25

  const Gems = {
    ballast: {
      id: 'apotheosis:core/ballast',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    brawlers: {
      id: 'apotheosis:core/brawlers',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    breach: {
      id: 'apotheosis:core/breach',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    combatant: {
      id: 'apotheosis:core/combatant',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    guardian: {
      id: 'apotheosis:core/guardian',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    lightning: {
      id: 'apotheosis:core/lightning',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    lunar: {
      id: 'apotheosis:core/lunar',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    samurai: {
      id: 'apotheosis:core/samurai',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    slipstream: {
      id: 'apotheosis:core/slipstream',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    solar: {
      id: 'apotheosis:core/solar',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    splendor: {
      id: 'apotheosis:core/splendor',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    tyrannical: {
      id: 'apotheosis:core/tyrannical',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    warlord: {
      id: 'apotheosis:core/warlord',
      rarities: coreGemRarities,
      weight: coreGemWeight,
      quality: coreGemQuality
    },
    earth: {
      id: 'apotheosis:overworld/earth',
      rarities: earlySpecialGemRarities,
      weight: specialGemWeight,
      quality: specialGemQuality
    },
    royalty: {
      id: 'apotheosis:overworld/royalty',
      rarities: earlySpecialGemRarities,
      weight: specialGemWeight,
      quality: specialGemQuality
    },
    blood_lord: {
      id: 'apotheosis:the_nether/blood_lord',
      rarities: earlySpecialGemRarities,
      weight: specialGemWeight,
      quality: specialGemQuality
    },
    inferno: {
      id: 'apotheosis:the_nether/inferno',
      rarities: earlySpecialGemRarities,
      weight: specialGemWeight,
      quality: specialGemQuality
    },
    mageslayer: {
      id: 'apotheosis:the_end/mageslayer',
      rarities: lateSpecialGemRarities,
      weight: specialGemWeight,
      quality: specialGemQuality
    },
    endersurge: {
      id: 'apotheosis:the_end/endersurge',
      rarities: lateSpecialGemRarities,
      weight: specialGemWeight,
      quality: specialGemQuality
    },
    blood: {
      id: 'irons_spellbooks:blood',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    cast_time: {
      id: 'irons_spellbooks:cast_time',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    cooldown: {
      id: 'irons_spellbooks:cooldown',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    evocation: {
      id: 'irons_spellbooks:evocation',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    fire: {
      id: 'irons_spellbooks:fire',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    holy: {
      id: 'irons_spellbooks:holy',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    ice: {
      id: 'irons_spellbooks:ice',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    intelligent: {
      id: 'irons_spellbooks:intelligent',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    lightning: {
      id: 'irons_spellbooks:lightning',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    nature: {
      id: 'irons_spellbooks:nature',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    spell_resist: {
      id: 'irons_spellbooks:spell_resist',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    },
    summoning: {
      id: 'irons_spellbooks:summoning',
      rarities: magicGemRarities,
      weight: magicGemWeight,
      quality: magicGemQuality
    }
  }

  // Create gem rarity tables
  allGemRarities.forEach(rarity => {
    event.addChest(`meatsalad:gems/${rarity}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        global.addDynamic(pool,
          {
            type: 'placebo:stack_entry',
            min: 1,
            max: 1
          },
          Object.keys(Gems).filter(gem => Gems[gem].rarities.has(rarity)).map(gem => {
            let gemProps = Gems[gem]
            return {
              stack: {
                item: 'apotheosis:gem',
                nbt: `{affix_data:{rarity:"apotheosis:${rarity}"},gem:"${gemProps.id}"}`
              },
              weight: gemProps.weight,
              quality: gemProps.quality
            }
          })
        )
      })
    })
  })

  // Create random gem table
  event.addChest('meatsalad:gems/random', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      global.addDynamic(pool,
        {
          type: 'minecraft:loot_table'
        },
        allGemRarities.map(rarity => {
          let rarityProps = GemRarities[rarity]
          let gemRarityEntry = {
            name: `meatsalad:chests/gems/${rarity}`,
            weight: rarityProps.weight,
            quality: rarityProps.quality
          }
          if (rarityProps.stageCondition != null) {
            gemRarityEntry.conditions = [rarityProps.stageCondition]
          }
          return gemRarityEntry
        })
      )
    })
  })

  // Create max gem table
  event.addChest('meatsalad:gems/max', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      global.addDynamic(pool,
        {
          type: 'minecraft:loot_table'
        },
        [
          { name: 'meatsalad:chests/gems/rare', conditions: [global.getWorldStageCondition(false)] },
          { name: 'meatsalad:chests/gems/epic', conditions: [global.getWorldStageCondition({nether: true, end: false})] },
          { name: 'meatsalad:chests/gems/mythic', conditions: [global.endStageCondition] },
        ]
      )
    })
  })

  // Create ancient gem table
  event.addChest('meatsalad:gems/ancient', table => {
    table.addPool(pool => {
      pool.rolls = 1.0
      global.addDynamic(pool,
        {
          type: 'placebo:stack_entry',
          min: 1,
          max: 1
        },
        Object.keys(Gems).map(gem => {
          return {
            stack: {
              item: 'apotheosis:gem',
              nbt: `{affix_data:{rarity:"apotheosis:ancient"},gem:"${Gems[gem].id}"}`
            }
          }
        })
      )
    })
  })
})
