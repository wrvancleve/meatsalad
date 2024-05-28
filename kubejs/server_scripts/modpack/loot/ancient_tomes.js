//priority: 80

ServerEvents.chestLootTables(event => {
  const AncientTomes = {
    common: {
      normalLootProps: {
        weight: 600.0,
        quality: 0.0
      },
      reversedLootProps: {
        weight: 150.0,
        quality: 0.0
      },
      enchants: [
        {id: 'minecraft:protection', level: 4},
        {id: 'minecraft:sharpness', level: 5},
        {id: 'minecraft:efficiency', level: 5},
        {id: 'minecraft:power', level: 5},
        {id: 'minecraft:piercing', level: 4},
        {id: 'cofh_core:holding', level: 4},
        {id: 'alexsmobs:straddle_jump', level: 9},
        {id: 'domesticationinnovation:health_boost', level: 4},
      ]
    },
    uncommon: { 
      normalLootProps: {
        weight: 250.0,
        quality: 1.5
      },
      reversedLootProps: {
        weight: 200.0,
        quality: 1.0
      },
      enchants: [
        {id: 'minecraft:fire_protection', level: 4},
        {id: 'minecraft:feather_falling', level: 4},
        {id: 'minecraft:projectile_protection', level: 4},
        {id: 'minecraft:smite', level: 5},
        {id: 'minecraft:bane_of_arthropods', level: 5},
        {id: 'minecraft:knockback', level: 2},
        {id: 'minecraft:unbreaking', level: 3},
        {id: 'minecraft:loyalty', level: 3},
        {id: 'minecraft:quick_charge', level: 3},
        {id: 'apotheosis:bane_of_illagers', level: 5},
        {id: 'apotheosis:spearfishing', level: 5},
        {id: 'ensorcellation:magic_protection', level: 9},
        {id: 'ensorcellation:trueshot', level: 4},
        {id: 'ensorcellation:phalanx', level: 9},
        {id: 'domesticationinnovation:herding', level: 2},
        {id: 'domesticationinnovation:defusal', level: 4},
        {id: 'domesticationinnovation:intimidation', level: 4},
        {id: 'domesticationinnovation:immunity_frame', level: 4},
      ]
    },
    rare: {
      normalLootProps: {
        weight: 100.0,
        quality: 2.0
      },
      reversedLootProps: {
        weight: 250.0,
        quality: 4.0
      },
      enchants: [
        {id: 'minecraft:blast_protection', level: 4},
        {id: 'minecraft:respiration', level: 3},
        {id: 'minecraft:depth_strider', level: 3},
        {id: 'minecraft:fire_aspect', level: 2},
        {id: 'minecraft:looting', level: 3},
        {id: 'minecraft:sweeping', level: 7},
        {id: 'minecraft:fortune', level: 3},
        {id: 'minecraft:punch', level: 2},
        {id: 'minecraft:luck_of_the_sea', level: 3},
        {id: 'minecraft:lure', level: 3},
        {id: 'minecraft:impaling', level: 5},
        {id: 'minecraft:riptide', level: 3},
        {id: 'apotheosis:shield_bash', level: 4},
        {id: 'apotheosis:natures_blessing', level: 3},
        {id: 'minecraft:frost_walker', level: 2},
        {id: 'apotheosis:icy_thorns', level: 3},
        {id: 'apotheosis:reflective', level: 5},
        {id: 'apotheosis:knowledge', level: 3},
        {id: 'ensorcellation:frost_aspect', level: 4},
        {id: 'domesticationinnovation:speedster', level: 4},
        {id: 'domesticationinnovation:chain_lightning', level: 2},
        {id: 'domesticationinnovation:healing_aura', level: 2},
      ]
    },
    epic: {
      normalLootProps: {
        weight: 50.0,
        quality: 2.5
      },
      reversedLootProps: {
        weight: 400.0,
        quality: 7.0
      },
      enchants: [
        {id: 'minecraft:thorns', level: 3},
        {id: 'minecraft:soul_speed', level: 3},
        {id: 'apotheosis:scavenger', level: 3},
        {id: 'apotheosis:berserkers_fury', level: 3},
        {id: 'apotheosis:crescendo', level: 5},
        {id: 'apotheosis:earths_boon', level: 3},
        {id: 'apotheosis:capturing', level: 5},
        {id: 'ensorcellation:leech', level: 4},
        {id: 'ensorcellation:hunter', level: 7},
        {id: 'ensorcellation:angler', level: 7},
        {id: 'domesticationinnovation:shadow_hands', level: 4},
        {id: 'domesticationinnovation:psychic_wall', level: 4},
        {id: 'domesticationinnovation:bubbling', level: 2},
        {id: 'domesticationinnovation:vampire', level: 2},
        {id: 'domesticationinnovation:charisma', level: 2},
        {id: 'domesticationinnovation:ore_scenting', level: 2},
        {id: 'domesticationinnovation:blazing_protection', level: 2},
      ]
    }
  }

  // Create ancient tome rarity tables
  for (let [rarity, rarityProps] of Object.entries(AncientTomes)) {
    event.addChest(`meatsalad:ancient_tomes/${rarity}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        addDynamic(pool,
          {
            type: 'placebo:stack_entry',
            weight: 1,
            min: 1,
            max: 1
          },
          rarityProps.enchants.map(enchant => {
            return {
              stack: {
                item: 'quark:ancient_tome',
                nbt: `{StoredEnchantments: [{id: '${enchant.id}', lvl: ${enchant.level}s}]}`
              }
            }
          })
        )
      })
    })
  }

  // Create random ancient tome tables
  const reversedTypeValues = [false, true]
  reversedTypeValues.forEach(reversed => {
    let reversedSuffix = reversed ? '_reversed' : ''
    event.addChest(`meatsalad:ancient_tomes/random${reversedSuffix}`, table => {
      table.addPool(pool => {
        pool.rolls = 1.0
        addDynamic(pool,
          {
            type: 'minecraft:loot_table'
          },
          Object.keys(AncientTomes).map(rarity => {
            let rarityProps = AncientTomes[rarity]
            return {
              name: `meatsalad:chests/ancient_tomes/${rarity}`,
              weight: reversed ? rarityProps.reversedLootProps.weight : rarityProps.normalLootProps.weight,
              quality: reversed ? rarityProps.reversedLootProps.quality : rarityProps.normalLootProps.quality
            }
          })
        )
      })
    })
  })
})
