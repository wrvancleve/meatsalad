// ServerEvents.chestLootTables(event => {
//   const Parts = {
//     partSizes: new Map([
//       ['axe_head', 3],
//       ['boot_plates', 4],
//       ['bow_limbs', 3],
//       ['chestplate_plates', 8],
//       ['coating', 1],
//       ['cord', 3],
//       ['crossbow_limbs', 3],
//       ['excavator_head', 5],
//       ['grip', 1],
//       ['hammer_head', 6],
//       ['helmet_plates', 5],
//       ['legging_plates', 7],
//       ['lining', 1],
//       ['paxel_head', 5],
//       ['pickaxe_head', 3],
//       ['rod', 2],
//       ['saw_blade', 5],
//       ['shovel_head', 1],
//       ['sword_blade', 2],
//       ['tip', 1],
//     ]),
//     partsByGroup: new Map([
//       ['armor', [
//         'boot_plates',
//         'chestplate_plates',
//         'coating',
//         'helmet_plates',
//         'legging_plates',
//       ]],
//       ['harvest_tool', [
//         'axe_head',
//         'coating',
//         'excavator_head',
//         'grip',
//         'hammer_head',
//         'paxel_head',
//         'pickaxe_head',
//         'rod',
//         'saw_blade',
//         'shovel_head',
//         'tip',
//       ]],
//       ['weapon', [
//         'bow_limbs',
//         'cord',
//         'crossbow_limbs',
//         'grip',
//         'rod',
//         'sword_blade',
//       ]]
//     ])
//   }

//   const armorTiers = [
//     ['gold', 'iron', 'obsidian', 'meatsalad:peridot', 'meatsalad:ruby', 'meatsalad:sapphire', 'silver',],
//     ['brass', 'bronze', 'diamond', 'electrum', 'emerald',  'invar', 'lumium', 'platinum', 'meatsalad:signalum', 'steel',],
//     ['blaze_gold', 'meatsalad:cobalt', 'crimson_iron', 'crimson_steel', 'meatsalad:enderium',],
//     ['meatsalad:cobalt', 'meatsalad:enderium', 'refined_obsidian', 'meatsalad:titanium',],
//     ['meatsalad:adamantite', 'azure_electrum', 'azure_silver', 'meatsalad:mythril', 'meatsalad:refined_obsidian', 'meatsalad:titanium', 'tyrian_steel', 'meatsalad:unobtainium', 'meatsalad:vibranium'],
//   ]
//   const coatingTiers = [
//     ['gold'],
//     ['gold', 'prismarine'],
//     ['blaze_gold', 'meatsalad:echo', 'prismarine'],
//     ['blaze_gold', 'meatsalad:echo', 'netherite', 'prismarine'],
//     ['meatsalad:dragon_scale', 'netherite', 'meatsalad:vulcanite'],
//   ]
//   const cordTiers = [
//     ['fluffy_string', 'flax'],
//     ['fine_silk', 'fluffy_string', 'flax'],
//     ['fine_silk', 'sinew'],
//     ['fine_silk', 'sinew'],
//     ['sinew'],
//   ]
//   const gripTiers = [
//     ['leather'],
//     ['leather'],
//     ['fine_silk_cloth', 'leather', 'phantom_membrane'],
//     ['fine_silk_cloth', 'phantom_membrane'],
//     ['fine_silk_cloth', 'phantom_membrane'],
//   ]
//   const harvestToolTiers = [
//     ['gold', 'iron', 'obsidian', 'meatsalad:peridot', 'meatsalad:ruby', 'meatsalad:sapphire', 'silver',],
//     ['brass', 'bronze', 'diamond', 'electrum', 'emerald', 'invar', 'lumium', 'platinum', 'steel',],
//     ['blaze_gold', 'meatsalad:cobalt', 'crimson_iron', 'crimson_steel', 'platinum', 'refined_obsidian', 'meatsalad:signalum',],
//     ['meatsalad:cobalt', 'crimson_steel', 'meatsalad:enderium', 'refined_obsidian', 'meatsalad:titanium',],
//     ['meatsalad:adamantite', 'azure_silver', 'azure_electrum', 'meatsalad:mythril', 'meatsalad:refined_obsidian', 'tyrian_steel', 'meatsalad:unobtainium', 'meatsalad:vibranium'],
//   ]
//   const limbTiers = [
//     ['gold', 'iron', 'obsidian', 'meatsalad:peridot', 'meatsalad:ruby', 'meatsalad:sapphire', 'silver',],
//     ['brass', 'bronze', 'diamond', 'emerald', 'electrum', 'invar', 'lumium', 'platinum', 'meatsalad:signalum', 'steel',],
//     ['blaze_gold', 'crimson_iron', 'crimson_steel', 'meatsalad:enderium', 'refined_obsidian',],
//     ['meatsalad:enderium', 'refined_obsidian',],
//     ['meatsalad:adamantite', 'azure_electrum', 'azure_silver', 'meatsalad:mythril', 'refined_obsidian', 'tyrian_steel', 'meatsalad:unobtainium'],
//   ]
//   const liningTiers = [
//     ['leather'],
//     ['fine_silk_cloth', 'leather', 'phantom_membrane', 'slime'],
//     ['fine_silk_cloth', 'phantom_membrane', 'slime'],
//     ['slime'],
//     ['slime', 'meatsalad:mystery_goo'],
//   ]
//   const rodTiers = [
//     ['gold', 'iron', 'obsidian', 'meatsalad:peridot', 'meatsalad:ruby', 'meatsalad:sapphire', 'silver'],
//     ['brass', 'bronze', 'diamond', 'electrum', 'emerald', 'enderium', 'invar', 'lumium', 'platinum', 'signalum', 'steel'],
//     ['blaze_gold', 'crimson_iron', 'crimson_steel', 'electrum', 'enderium', 'lumium', 'platinum', 'refined_obsidian', 'signalum'],
//     ['electrum', 'enderium', 'lumium', 'signalum', 'meatsalad:titanium',],
//     ['azure_electrum', 'azure_silver', 'enderium', 'lumium', 'signalum', 'meatsalad:titanium', 'tyrian_steel'],
//   ]
//   const swordTiers = [
//     ['gold', 'iron', 'obsidian', 'meatsalad:peridot', 'meatsalad:ruby', 'meatsalad:sapphire', 'silver',],
//     ['brass', 'bronze', 'diamond', 'electrum', 'emerald', 'invar', 'lumium', 'platinum', 'meatsalad:signalum', 'steel',],
//     ['blaze_gold', 'meatsalad:cobalt', 'crimson_iron', 'crimson_steel', 'meatsalad:enderium', 'platinum', 'refined_obsidian'],
//     ['meatsalad:cobalt', 'crimson_steel', 'meatsalad:enderium', 'platinum', 'refined_obsidian', 'meatsalad:titanium',],
//     ['meatsalad:adamantite', 'azure_electrum', 'azure_silver', 'meatsalad:mythril', 'meatsalad:refined_obsidian', 'meatsalad:titanium', 'tyrian_steel', 'meatsalad:unobtainium', 'meatsalad:vibranium'],
//   ]
//   const tipTiers = [
//     ['gold', 'iron', 'quartz', 'redstone'],
//     ['diamond', 'emerald', 'lumium', 'meatsalad:peridot', 'platinum', 'meatsalad:ruby', 'meatsalad:sapphire'],
//     ['blaze_gold', 'crimson_iron', 'crimson_steel', 'lumium', 'meatsalad:peridot', 'platinum', 'refined_obsidian', 'meatsalad:ruby'],
//     ['lumium', 'meatsalad:peridot', 'platinum', 'meatsalad:ruby'],
//     ['azure_electrum', 'azure_silver', 'lumium', 'meatsalad:peridot', 'platinum', 'meatsalad:ruby', 'tyrian_steel'],
//   ]

//   const Materials = {
//     itemMaterials: new Map([
//       ['meatsalad:adamantite', 'meatsalad:adamantite_ingot'],
//       ['meatsalad:palladium', 'allthemodium:allthemodium_ingot'],
//       ['meatsalad:arcane_cloth', 'irons_spellbooks:magic_cloth'],
//       ['azure_electrum', 'silentgear:azure_electrum_ingot'],
//       ['azure_silver', 'silentgear:azure_silver_ingot'],
//       ['blaze_gold', 'silentgear:blaze_gold_ingot'],
//       ['brass', 'alltheores:brass_ingot'],
//       ['bronze', 'alltheores:bronze_ingot'],
//       ['meatsalad:cobalt', 'minecraft:barrier'],
//       ['crimson_iron', 'silentgear:crimson_iron_ingot'],
//       ['crimson_steel', 'silentgear:crimson_steel_ingot'],
//       ['diamond', 'minecraft:diamond'],
//       ['meatsalad:dragon_scale', 'quark:dragon_scale'],
//       ['meatsalad:echo', 'minecraft:echo_shard'],
//       ['electrum', 'alltheores:electrum_ingot'],
//       ['emerald', 'minecraft:emerald'],
//       ['enderium', 'alltheores:enderium_ingot'],
//       ['meatsalad:enderium', 'minecraft:barrier'],
//       ['fine_silk', 'silentgear:fine_silk'],
//       ['fine_silk_cloth', 'silentgear:fine_silk_cloth'],
//       ['flax', 'silentgear:flax_string'],
//       ['fluffy_string', 'silentgear:fluffy_string'],
//       ['glowstone', 'minecraft:glowstone_dust'],
//       ['gold', 'minecraft:gold_ingot'],
//       ['meatsalad:infinity', 'meatsalad:infinity_fabric'],
//       ['invar', 'alltheores:invar_ingot'],
//       ['iron', 'minecraft:iron_ingot'],
//       ['leather', 'minecraft:leather'],
//       ['lumium', 'alltheores:lumium_ingot'],
//       ['meatsalad:mystery_goo', 'alexsmobs:mimicream'],
//       ['meatsalad:mythril', 'meatsalad:mythril_ingot'],
//       ['netherite', 'minecraft:netherite_ingot'],
//       ['obsidian', 'minecraft:obsidian'],
//       ['meatsalad:peridot', 'alltheores:peridot'],
//       ['phantom_membrane', 'minecraft:phantom_membrane'],
//       ['platinum', 'alltheores:platinum_ingot'],
//       ['prismarine', 'minecraft:prismarine_crystals'],
//       ['quartz', 'minecraft:quartz'],
//       ['redstone', 'minecraft:redstone'],
//       ['refined_obsidian', 'mekanism:ingot_refined_obsidian'],
//       ['meatsalad:refined_obsidian', 'minecraft:barrier'],
//       ['meatsalad:ruby', 'alltheores:ruby'],
//       ['meatsalad:sapphire', 'alltheores:sapphire'],
//       ['signalum', 'alltheores:signalum_ingot'],
//       ['meatsalad:signalum', 'minecraft:barrier'],
//       ['silver', 'alltheores:silver_ingot'],
//       ['sinew', 'silentgear:sinew_fiber'],
//       ['slime', 'minecraft:slime_block'],
//       ['steel', 'alltheores:steel_ingot'],
//       ['meatsalad:titanium', 'minecraft:barrier'],
//       ['tyrian_steel', 'silentgear:tyrian_steel_ingot'],
//       ['meatsalad:unobtainium', 'allthemodium:unobtainium_ingot'],
//       ['meatsalad:vibranium', 'allthemodium:vibranium_ingot'],
//       ['meatsalad:vulcanite', 'meatsalad:vulcanite'],
//     ]),
//     partTiers: new Map([
//       ['axe_head', harvestToolTiers],
//       ['boot_plates', armorTiers],
//       ['bow_limbs', limbTiers],
//       ['chestplate_plates', armorTiers],
//       ['coating', coatingTiers],
//       ['cord', cordTiers],
//       ['crossbow_limbs', limbTiers],
//       ['excavator_head', harvestToolTiers],
//       ['grip', gripTiers],
//       ['hammer_head', harvestToolTiers],
//       ['helmet_plates', armorTiers],
//       ['legging_plates', armorTiers],
//       ['lining', liningTiers],
//       ['paxel_head', harvestToolTiers],
//       ['pickaxe_head', harvestToolTiers],
//       ['rod', rodTiers],
//       ['saw_blade', harvestToolTiers],
//       ['shovel_head', harvestToolTiers],
//       ['sword_blade', swordTiers],
//       ['tip', tipTiers],
//     ]),
//     getMaxTier: function () {
//       return Array.from(this.partTiers.keys()).reduce(
//         (maxSize, part) => {
//           let partTierCount = this.partTiers.get(part).length
//           return partTierCount > maxSize ? partTierCount : maxSize
//         }, 0
//       )
//     },
//     from: function (part, tier) {
//       let partTier = this.partTiers.get(part)
//       return tier > partTier.length ? partTier.slice(-1)[0] : partTier[tier - 1]
//     }
//   }

//   const Modifiers = {
//     modifierTags: new Map([
//       ['s0', 'SGear_Grade:"S"'],
//       ['ss0', 'SGear_Grade:"SS"'],
//       ['sss0', 'SGear_Grade:"SSS"'],
//       ['max0', 'SGear_Grade:"MAX"'],
//       ['max1', 'SG_IsFoil:1b,SG_Starcharged:1s,SGear_Grade:"MAX"'],
//       ['max2', 'SG_IsFoil:1b,SG_Starcharged:2s,SGear_Grade:"MAX"'],
//       ['max3', 'SG_IsFoil:1b,SG_Starcharged:3s,SGear_Grade:"MAX"'],
//       ['max4', 'SG_IsFoil:1b,SG_Starcharged:4s,SGear_Grade:"MAX"'],
//     ]),
//     modifierLootProps: new Map([
//       // 'none', 
//       ['s0', { weight: 620, quality: 0 }],
//       ['ss0', { weight: 250, quality: 1 }],
//       ['sss0', { weight: 100, quality: 1 }],
//       ['max0', { weight: 50, quality: 1.5 }],
//       ['max1', { weight: 25, quality: 2, conditions: [global.getStageCondition('meatsalad:stage/starcharger', true)] }],
//       ['max2', { weight: 10, quality: 3, conditions: [global.getStageCondition('meatsalad:stage/starcharger', true)] }],
//       ['max3', { weight: 5, quality: 4, conditions: [global.getStageCondition('meatsalad:stage/starcharger', true)] }],
//       ['max4', { weight: 1, quality: 5, conditions: [global.getStageCondition('meatsalad:stage/starcharger', true)] }],
//     ]),
//     modifiersByTier: [
//       ['s0', 'ss0', 'sss0'],
//       ['s0', 'ss0', 'sss0'],
//       ['s0', 'ss0', 'sss0'],
//       ['ss0', 'sss0', 'max0', 'max1'],
//       ['max3', 'max4'],
//     ],
//     fromTier: function (tier) {
//       return tier > this.modifiersByTier.length
//         ? this.modifiersByTier.slice(-1)[0]
//         : this.modifiersByTier[tier - 1]
//     }
//   }

//   const maxTier = Materials.getMaxTier()
//   for (let tier = 1; tier <= maxTier; tier++) {
//     let modifiers = Modifiers.fromTier(tier)
//     modifiers.forEach(modifier => {
//       let modifierTag = Modifiers.modifierTags.get(modifier)
//       let partGroups = Array.from(Parts.partsByGroup.keys())
//       partGroups.forEach(partGroup => {
//         let parts = Parts.partsByGroup.get(partGroup)
//         parts.forEach(part => {
//           let partMaterialCount = Parts.partSizes.get(part)
//           event.addChest(`meatsalad:parts/tier${tier}/${modifier}/${partGroup}/${part}`, table => {
//             table.addPool(pool => {
//               pool.rolls = 1.0
//               let materials = Materials.from(part, tier)
//               materials.forEach(material => {
//                 let materialItem = Materials.itemMaterials.get(material)
//                 let isCustomMaterial = material.startsWith('meatsalad:')
//                 let materialNamespace = isCustomMaterial ? 'meatsalad' : 'silentgear'
//                 let materialName = isCustomMaterial ? material.replace('meatsalad:', '') : material
//                 let modifierTagString = modifierTag != null ? `,tag:{${modifierTag}}` : ''
//                 global.addStack(
//                   pool,
//                   {
//                     item: `silentgear:${part}`,
//                     nbt: `{CraftedCount:1,Materials:[{Count:${partMaterialCount}b,ID:"${materialNamespace}:${materialName}",Item:{Count:1b,id:"${materialItem}"${modifierTagString}}}]}`
//                   }
//                 )
//               })
//             })
//           })
//         })
//         event.addChest(`meatsalad:parts/tier${tier}/${modifier}/${partGroup}/random`, table => {
//           table.addPool(pool => {
//             pool.rolls = 1.0
//             parts.forEach(part => {
//               pool.addEntry({
//                 type: 'minecraft:loot_table',
//                 name: `meatsalad:chests/parts/tier${tier}/${modifier}/${partGroup}/${part}`
//               })
//             })
//           })
//         })
//       })
//       event.addChest(`meatsalad:parts/tier${tier}/${modifier}/random`, table => {
//         table.addPool(pool => {
//           pool.rolls = 1.0
//           partGroups.forEach(partGroup => {
//             pool.addEntry({
//               type: 'minecraft:loot_table',
//               name: `meatsalad:chests/parts/tier${tier}/${modifier}/${partGroup}/random`
//             })
//           })
//         })
//       })
//     })
//     event.addChest(`meatsalad:parts/tier${tier}/random`, table => {
//       table.addPool(pool => {
//         pool.rolls = 1.0
//         modifiers.forEach(modifier => {
//           let modifierLootProps = Modifiers.modifierLootProps.get(modifier)
//           let randomTierModifierEntry = {
//             type: 'minecraft:loot_table',
//             name: `meatsalad:chests/parts/tier${tier}/${modifier}/random`,
//             weight: modifierLootProps.weight,
//             quality: modifierLootProps.quality
//           }
//           if (modifierLootProps.conditions) {
//             randomTierModifierEntry.conditions = modifierLootProps.conditions
//           }
//           pool.addEntry(randomTierModifierEntry)
//         })
//       })
//     })
//   }

//   const allTierProps = [
//     {
//       weight: 400.0,
//       quality: 0.0,
//       conditions: [global.getWorldStageCondition({other: false})]
//     },
//     {
//       weight: 320.0,
//       quality: 1.5,
//       conditions: [global.getWorldStageCondition({nether: true})]
//     },
//     {
//       weight: 150.0,
//       quality: 3.0,
//       conditions: [global.getWorldStageCondition({other: true})]
//     },
//     {
//       weight: 90.0,
//       quality: 4.5,
//       conditions: [global.endStageCondition]
//     },
//   ]
//   event.addChest(`meatsalad:parts/random`, table => {
//     table.addPool(pool => {
//       pool.rolls = 1.0
//       for (let tier = 1; tier <= maxTier - 1; tier++) {
//         let tierProps = allTierProps[tier - 1]
//         pool.addEntry({
//           type: 'minecraft:loot_table',
//           name: `meatsalad:chests/parts/tier${tier}/random`,
//           weight: tierProps.weight,
//           quality: tierProps.quality,
//           conditions: tierProps.conditions
//         })
//       }
//     })
//   })
// })
