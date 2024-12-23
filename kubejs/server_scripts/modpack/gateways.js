const GATES = {
  'gateways:basic/blaze': {
    type: "normal",
    recipe: {
      item: "minecraft:blaze_rod"
    }
  },
  'gateways:basic/enderman': {
    type: "normal",
    recipe: {
      item: "minecraft:ender_pearl"
    }
  },
  'gateways:basic/slime': {
    type: "normal",
    recipe: {
      item: "minecraft:slime_ball"
    }
  },
  'meatsalad:basalz': {
    type: "normal",
    recipe: {
      item: "thermal:basalz_rod"
    }
  },
  'meatsalad:blitz': {
    type: "normal",
    recipe: {
      item: "thermal:blitz_rod"
    }
  },
  'meatsalad:blizz': {
    type: "normal",
    recipe: {
      item: "thermal:blizz_rod"
    }
  },
  'meatsalad:creeper': {
    type: "normal",
    recipe: {
      item: "minecraft:gunpowder"
    }
  },
  'gateways:hellish_fortress': {
    type: "large",
    recipe: {
      pattern: [
        'BEB',
        'GeG',
        'NNN'
      ],
      key: {
        B: 'minecraft:blaze_rod',
        E: 'minecraft:wither_skeleton_skull',
        G: '#forge:storage_blocks/gold',
        e: 'meatsalad:incomplete_large_gate_pearl',
        N: 'minecraft:nether_bricks',
      }
    },
    lootTables: [
      { id: "minecraft:chests/bastion_treasure", guaranteed: true },
      { id: "betterfortresses:chests/puzzle", guaranteed: true },

      { id: "minecraft:chests/bastion_bridge" },
      { id: "minecraft:chests/bastion_hoglin_stable" },
      { id: "minecraft:chests/bastion_other" },
      { id: "minecraft:chests/nether_bridge" },
      { id: "betterfortresses:chests/keep" },
    ]
  },
  'meatsalad:magic': {
    type: "large",
    recipe: {
      pattern: [
        'AAA',
        'GeG',
        'AAA'
      ],
      key: {
        A: 'irons_spellbooks:arcane_essence',
        G: '#forge:storage_blocks/copper',
        e: 'meatsalad:incomplete_large_gate_pearl',
      }
    },
    lootTables: [
      { id: "irons_spellbooks:chests/catacombs/hidden_trough_treasure", guaranteed: true },
      { id: "irons_spellbooks:chests/mountain_tower/mountain_tower", guaranteed: true },
      { id: "irons_spellbooks:chests/generic_magic_treasure", guaranteed: true },

      { id: "minecraft:chests/ancient_city" },
      { id: "betteroceanmonuments:chests/upper_side_chamber" },
      { id: "irons_spellbooks:chests/magic_bookshelf_loot" },
      { id: "irons_spellbooks:chests/catacombs/wall_loot" },
    ]
  },
  'meatsalad:magma_cube': {
    type: "normal",
    recipe: {
      item: "minecraft:magma_cream"
    }
  },
  'meatsalad:otherside': {
    type: "large",
    recipe: {
      pattern: [
        'BWB',
        'GeG',
        'SSS'
      ],
      key: {
        B: 'bhc:wither_bone',
        W: 'minecraft:wither_skeleton_skull',
        G: '#forge:storage_blocks/diamond',
        e: 'meatsalad:incomplete_large_gate_pearl',
        S: 'allthemodium:ancient_stone'
      }
    },
    lootTables: [
      { id: "allthemodium:chest/treasure_room", guaranteed: true },
      { id: "allthemodium:chest/treasure_room_loot", guaranteed: true },

      { id: "allthemodium:chest/generic_loot" },
      { id: "allthemodium:chest/hallway_loot" },
      { id: "allthemodium:chest/library_loot" },
    ]
  },
  'meatsalad:outer_end': {
    type: "large",
    recipe: {
      pattern: [
        'PSP',
        'GeG',
        'EEE'
      ],
      key: {
        P: 'minecraft:popped_chorus_fruit',
        S: 'minecraft:shulker_shell',
        G: '#forge:storage_blocks/diamond',
        e: 'meatsalad:incomplete_large_gate_pearl',
        E: 'minecraft:end_stone'
      }
    },
    lootTables: [
      { id: "mes:astral_meteorite", guaranteed: true },

      { id: "minecraft:chests/end_city_treasure" },
    ]
  },
  'meatsalad:shulker': {
    type: "normal",
    recipe: {
      item: "minecraft:shulker_shell"
    }
  },
  'meatsalad:skeleton': {
    type: "normal",
    recipe: {
      item: "minecraft:bone"
    }
  },
  'meatsalad:spider': {
    type: "normal",
    recipe: {
      item: "minecraft:spider_eye"
    }
  },
  'meatsalad:stronghold': {
    type: "large",
    recipe: {
      pattern: [
        'BRB',
        'GeG',
        'SSS'
      ],
      key: {
        B: 'minecraft:bone',
        R: 'minecraft:rotten_flesh',
        G: '#forge:storage_blocks/iron',
        e: 'meatsalad:incomplete_large_gate_pearl',
        S: 'minecraft:stone_bricks'
      }
    },
    lootTables: [
      { id: "minecraft:chests/stronghold_library", guaranteed: true },
      { id: "betterstrongholds:chests/grand_library", guaranteed: true },
      

      { id: "minecraft:chests/stronghold_corridor" },
      { id: "minecraft:chests/stronghold_crossing" },
      { id: "betterstrongholds:chests/common" },
      { id: "betterstrongholds:chests/library_md" },
      { id: "betterstrongholds:chests/treasure" },
    ]
  },
  'meatsalad:witch': {
    type: "normal",
    recipe: {
      item: "minecraft:glass_bottle"
    }
  },
  'meatsalad:wither_skeleton': {
    type: "normal",
    recipe: {
      item: "minecraft:wither_skeleton_skull"
    }
  },
  'meatsalad:zombie': {
    type: "normal",
    recipe: {
      item: "minecraft:rotten_flesh"
    }
  },
  filter: function*(condition) {
    for (const prop in this) {
      let propValue = this[prop]
      if (typeof propValue !== 'function') {
        if (condition == null || condition(propValue)) {
          let gate = {id: prop}
          for (let [key, value] of Object.entries(propValue)) {
            gate[key] = value
          }
          yield gate
          //yield {id: prop, ...propValue}
        }
      }
    }
  },
  all: function*() {
    yield* this.filter()
  },
  normal: function*() {
    yield* this.filter(gate => gate.type === "normal")
  },
  large: function*() {
    yield* this.filter(gate => gate.type === "large")
  },
}

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'gateways:basic/blaze',
    'gateways:basic/slime',
    'gateways:basic/enderman',
    'gateways:endless/blaze',
    'gateways:emerald_grove',
    'gateways:hellish_fortress', // Flesh, Skull, Gold, Blaze Rod
    'gateways:overworldian_nights', // Glowstone, Spider Eye, Gunpowder, Bone, Flesh
  ])

  // Gate Bases
  energize(event,
    [
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:infused_ender_pearl'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
    ],
    20000,
    Item.of('meatsalad:incomplete_gate_pearl')
  )
  energize(event,
    [
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('meatsalad:mystery_goo'),
      Ingredient.of('meatsalad:incomplete_gate_pearl'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
      Ingredient.of('experienceobelisk:cognitive_amalgam'),
    ],
    30000,
    Item.of('meatsalad:incomplete_large_gate_pearl')
  )

  for (let gate of GATES.all()) {
    let gateName = gate.id.split(':').pop().split('/').pop()
    let recipePattern = gate.type === "normal"
      ? [" i ", "iei", " i "]
      : gate.recipe.pattern
    let recipeKey = gate.type === "normal"
      ? {i: gate.recipe.item, e: 'meatsalad:incomplete_gate_pearl'}
      : gate.recipe.key
    event.shaped(
      Item.of('gateways:gate_pearl', 1, { gateway: gate.id }).strongNBT(),
      recipePattern,
      recipeKey
    ).stage(`${gateName}_gate`).id(`meatsalad:${gateName}_gate`)
  }
  // Normal Gates
  /*
  const NORMAL_GATES = [
    { id: 'gateways:basic/blaze', item: 'minecraft:blaze_rod' },
    { id: 'gateways:basic/enderman', item: 'minecraft:ender_pearl' },
    { id: 'gateways:basic/slime', item: 'minecraft:slime_ball' },
    { id: 'meatsalad:basalz', item: 'thermal:basalz_rod' },
    { id: 'meatsalad:blitz', item: 'thermal:blitz_rod' },
    { id: 'meatsalad:blizz', item: 'thermal:blizz_rod' },
    { id: 'meatsalad:creeper', item: 'minecraft:gunpowder' },
    { id: 'meatsalad:magma_cube', item: 'minecraft:magma_cream' },
    { id: 'meatsalad:shulker', item: 'minecraft:shulker_shell' },
    { id: 'meatsalad:skeleton', item: 'minecraft:bone' },
    { id: 'meatsalad:spider', item: 'minecraft:spider_eye' },
    { id: 'meatsalad:witch', item: 'minecraft:glass_bottle' },
    { id: 'meatsalad:wither_skeleton', item: 'minecraft:wither_skeleton_skull' },
    { id: 'meatsalad:zombie', item: 'minecraft:rotten_flesh' },
  ]
  NORMAL_GATES.forEach(gate => {
    let gateName = gate.id.split(':').pop().split('/').pop()
    event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: gate.id }).strongNBT(), [
      ' i ',
      'iei',
      ' i '
    ], {
      i: gate.item,
      e: 'meatsalad:incomplete_gate_pearl',
    }).stage(`${gateName}_gate`).id(`meatsalad:${gateName}_gate`)
  })
  */

  // Large Gates
  /*
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `gateways:hellish_fortress` }).strongNBT(), [
    'BEB',
    'GeG',
    'NNN'
  ], {
    B: 'minecraft:blaze_rod',
    E: 'minecraft:wither_skeleton_skull',
    G: '#forge:storage_blocks/gold',
    e: 'meatsalad:incomplete_large_gate_pearl',
    N: 'minecraft:nether_bricks',
  }).stage('hellish_fortress_gate').id('meatsalad:hellish_fortress_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:magic` }).strongNBT(), [
    'AAA',
    'GeG',
    'AAA'
  ], {
    A: 'irons_spellbooks:arcane_essence',
    G: '#forge:storage_blocks/copper',
    e: 'meatsalad:incomplete_large_gate_pearl',
  }).stage('magic_gate').id('meatsalad:magic_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:stronghold` }).strongNBT(), [
    'BRB',
    'GeG',
    'SSS'
  ], {
    B: 'minecraft:bone',
    R: 'minecraft:rotten_flesh',
    G: '#forge:storage_blocks/iron',
    e: 'meatsalad:incomplete_large_gate_pearl',
    S: 'minecraft:stone_bricks'
  }).stage('stronghold_gate').id('meatsalad:stronghold_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:otherside` }).strongNBT(), [
    'BWB',
    'GeG',
    'SSS'
  ], {
    B: 'bhc:wither_bone',
    W: 'minecraft:wither_skeleton_skull',
    G: '#forge:storage_blocks/diamond',
    e: 'meatsalad:incomplete_large_gate_pearl',
    S: 'allthemodium:ancient_stone'
  }).stage('otherside_gate').id('meatsalad:otherside_gate')
  event.shaped(Item.of('gateways:gate_pearl', 1, { gateway: `meatsalad:outer_end` }).strongNBT(), [
    'PSP',
    'GeG',
    'EEE'
  ], {
    P: 'minecraft:popped_chorus_fruit',
    S: 'minecraft:shulker_shell',
    G: '#forge:storage_blocks/diamond',
    e: 'meatsalad:incomplete_large_gate_pearl',
    E: 'minecraft:end_stone'
  }).stage('outer_end_gate').id('meatsalad:outer_end_gate')
  */
})

const GateEntry = (gateId, weight, quality) => {
  return StackEntry(
    {item: "gateways:gate_pearl", nbt: `{gateway: "${gateId}"}`},
    weight,
    quality
  )
}

ServerEvents.genericLootTables((event) => {
  for (let gate of GATES.large()) {
    let gateId = gate.id
    let gateName = gateId.split(':').pop().split('/').pop()
    event.addGeneric(`meatsalad:gates/${gateName}_random_chance`, loot => {
      loot.addPool(pool => {
        // pool.rolls = 1
        // pool.bonusRolls = 0
        pool.addEntry(EmptyEntry(90))
        pool.addEntry(GateEntry(gateId, 4, 0.5))
        pool.addEntry(TableEntry("meatsalad:misc/rare/random", 6, 0.5))
      })
    })

    gate.lootTables.forEach(table => {
      event.modify(table.id, loot => {
        loot.addPool(pool => {
          // pool.rolls = 1
          // pool.bonusRolls = 0
          if (table.guaranteed) {
            pool.addEntry(GateEntry(gateId))
          } else {
            pool.addEntry(TableEntry(`meatsalad:gates/${gateName}_random_chance`))
          }
        })
      })
    })
  }

  /*
  const createRandomChanceGateTable = (gateId) => {
    const gateName = gateId.split(':').pop().split('/').pop()
    event.addGeneric(`meatsalad:gates/${gateName}_random_chance`, (table) => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.bonusRolls = 0
        pool.addEntry(EmptyEntry(90))
        pool.addEntry(GateEntry(gateId, 6, 0.5))
        pool.addEntry(TableEntry("meatsalad:misc/rare/random", 4, 0.5))
      })
    })
  }
  createRandomChanceGateTable("gateways:hellish_fortress")
  createRandomChanceGateTable("meatsalad:magic")
  createRandomChanceGateTable("meatsalad:otherside")
  createRandomChanceGateTable("meatsalad:outer_end")
  createRandomChanceGateTable("meatsalad:stronghold")
  */
})

/*
LootJS.modifiers((event) => {
  const GATE_TABLES = {
    "gateways:hellish_fortress": [
      { id: "minecraft:chests/bastion_treasure", guaranteed: true },
      { id: "betterfortresses:chests/puzzle", guaranteed: true },

      { id: "minecraft:chests/bastion_bridge" },
      { id: "minecraft:chests/bastion_hoglin_stable" },
      { id: "minecraft:chests/bastion_other" },
      { id: "minecraft:chests/nether_bridge" },
      { id: "betterfortresses:chests/keep" },
    ],
    "meatsalad:magic": [
      { id: "irons_spellbooks:chests/catacombs/hidden_trough_treasure", guaranteed: true },
      { id: "irons_spellbooks:chests/mountain_tower/mountain_tower", guaranteed: true },
      { id: "irons_spellbooks:chests/generic_magic_treasure", guaranteed: true },

      { id: "minecraft:chests/ancient_city" },
      { id: "betteroceanmonuments:chests/upper_side_chamber" },
      { id: "irons_spellbooks:chests/magic_bookshelf_loot" },
      { id: "irons_spellbooks:chests/catacombs/wall_loot" },
    ],
    "meatsalad:otherside": [
      { id: "allthemodium:chest/treasure_room", guaranteed: true },
      { id: "allthemodium:chest/treasure_room_loot", guaranteed: true },

      { id: "allthemodium:chest/generic_loot" },
      { id: "allthemodium:chest/hallway_loot" },
      { id: "allthemodium:chest/library_loot" },
    ],
    "meatsalad:outer_end": [
      { id: "mes:astral_meteorite", guaranteed: true },

      { id: "minecraft:chests/end_city_treasure" },
    ],
    "meatsalad:stronghold": [
      { id: "minecraft:chests/stronghold_library", guaranteed: true },
      { id: "betterstrongholds:chests/grand_library", guaranteed: true },
      { id: "betterstrongholds:chests/treasure", guaranteed: true },

      { id: "minecraft:chests/stronghold_corridor" },
      { id: "minecraft:chests/stronghold_crossing" },
      { id: "betterstrongholds:chests/common" },
      { id: "betterstrongholds:chests/library_md" },
    ]
  }
  for (let [gateId, tables] of Object.entries(GATE_TABLES)) {
    let gateName = gateId.split(':').pop().split('/').pop()
    tables.forEach(table => {
      if (table.guaranteed) {
        event.addLootTableModifier(table.id).addLoot(
          LootEntry.ofJson(GateEntry(gateId))
        )
      } else {
        event.addLootTableModifier(table.id).addLoot(
          LootEntry.ofJson(TableEntry(`meatsalad:gates/${gateName}_random_chance`))
        )
      }
    })
  }
})
*/
