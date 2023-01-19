#import crafttweaker.api.loot.condition.LootConditions;
#import crafttweaker.api.loot.modifier.CommonLootModifiers;
#import crafttweaker.api.loot.condition.RandomChanceLootCondition;
#import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
#import crafttweaker.api.loot.condition.LootCondition;
#import crafttweaker.api.loot.condition.LootTableIdRegexLootCondition;
#import crafttweaker.api.loot.condition.RandomChanceLootCondition;
#import crafttweaker.api.item.IItemStack;
#import crafttweaker.api.util.random.Percentaged;
#
#var ancient_tomes_loot_chance = 0.5;
#var ancient_tomes_loot = [
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:feather_falling" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:blast_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:projectile_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:respiration" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:depth_strider" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:frost_walker" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:soul_speed" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sharpness" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:smite" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:bane_of_arthropods" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:knockback" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_aspect" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:looting" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sweeping" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:efficiency" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:unbreaking" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fortune" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:power" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:punch" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:luck_of_the_sea" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:lure" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:loyalty" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:impaling" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:riptide" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:quick_charge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:piercing" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:scavenger" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:icy_thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:shield_bash" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:reflective" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:berserkers_fury" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:knowledge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:natures_blessing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:bane_of_illagers" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:crescendo" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:earths_boon" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:spearfishing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:capturing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "farmersdelight:backstabbing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:excavate" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:experience_boost" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:beheading" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:growth" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:launch" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:quickshot" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:venom" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:laststand" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "travel_anchors:range" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cofh_core:holding" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance
#] as Percentaged<IItemStack>[];
#loot.modifiers.register(
#    "ultra_rare_ancient_tomes",
#    LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*minecraft)(?!.*stronghold)(?!.*library)(?!.*treasure)(?!.*hidden)((?=.*chest)|(?=.*twilightforest:structures)).*")),
#    CommonLootModifiers.addAllWithChance(ancient_tomes_loot)
#);
#
#ancient_tomes_loot_chance = 1.0;
#ancient_tomes_loot = [
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:feather_falling" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:blast_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:projectile_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:respiration" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:depth_strider" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:frost_walker" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:soul_speed" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sharpness" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:smite" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:bane_of_arthropods" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:knockback" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_aspect" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:looting" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sweeping" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:efficiency" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:unbreaking" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fortune" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:power" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:punch" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:luck_of_the_sea" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:lure" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:loyalty" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:impaling" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:riptide" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:quick_charge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:piercing" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:scavenger" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:icy_thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:shield_bash" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:reflective" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:berserkers_fury" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:knowledge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:natures_blessing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:bane_of_illagers" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:crescendo" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:earths_boon" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:spearfishing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:capturing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "farmersdelight:backstabbing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:excavate" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:experience_boost" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:beheading" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:growth" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:launch" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:quickshot" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:venom" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:laststand" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "travel_anchors:range" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cofh_core:holding" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance
#] as Percentaged<IItemStack>[];
#loot.modifiers.register(
#    "very_rare_ancient_tomes",
#    LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*minecraft)(?!.*library)((?=.*chest)|(?=.*twilightforest:structures))((?=.*treasure)|(?=.*hidden)|(?=.*stronghold)).*")),
#    CommonLootModifiers.addAllWithChance(ancient_tomes_loot)
#);
#
#ancient_tomes_loot_chance = 1.5;
#ancient_tomes_loot = [
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:feather_falling" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:blast_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:projectile_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:respiration" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:depth_strider" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:frost_walker" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:soul_speed" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sharpness" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:smite" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:bane_of_arthropods" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:knockback" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_aspect" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:looting" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sweeping" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:efficiency" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:unbreaking" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fortune" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:power" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:punch" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:luck_of_the_sea" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:lure" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:loyalty" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:impaling" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:riptide" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:quick_charge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:piercing" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:scavenger" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:icy_thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:shield_bash" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:reflective" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:berserkers_fury" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:knowledge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:natures_blessing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:bane_of_illagers" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:crescendo" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:earths_boon" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:spearfishing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:capturing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "farmersdelight:backstabbing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:excavate" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:experience_boost" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:beheading" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:growth" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:launch" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:quickshot" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:venom" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:laststand" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "travel_anchors:range" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cofh_core:holding" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance
#] as Percentaged<IItemStack>[];
#loot.modifiers.register(
#    "moderately_rare_ancient_tomes",
#    LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*minecraft)(?!.*grand_library)((?=.*chest)|(?=.*twilightforest:structures))(?=.*library).*")),
#    CommonLootModifiers.addAllWithChance(ancient_tomes_loot)
#);
#
#ancient_tomes_loot_chance = 2.0;
#ancient_tomes_loot = [
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:feather_falling" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:blast_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:projectile_protection" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:respiration" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:depth_strider" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:frost_walker" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:soul_speed" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sharpness" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:smite" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:bane_of_arthropods" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:knockback" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fire_aspect" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:looting" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:sweeping" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:efficiency" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:unbreaking" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:fortune" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:power" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:punch" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:luck_of_the_sea" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:lure" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:loyalty" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:impaling" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:riptide" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:quick_charge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "minecraft:piercing" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:scavenger" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:icy_thorns" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:shield_bash" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:reflective" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:berserkers_fury" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:knowledge" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:natures_blessing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:bane_of_illagers" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:crescendo" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:earths_boon" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:spearfishing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "apotheosis:capturing" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "farmersdelight:backstabbing" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:excavate" as string, lvl: 5 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:experience_boost" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:beheading" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:growth" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:launch" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:quickshot" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:venom" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cyclic:laststand" as string, lvl: 2 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "travel_anchors:range" as string, lvl: 3 as short}]}) % ancient_tomes_loot_chance,
#    <item:quark:ancient_tome>.withTag({StoredEnchantments: [{id: "cofh_core:holding" as string, lvl: 4 as short}]}) % ancient_tomes_loot_chance
#] as Percentaged<IItemStack>[];
#loot.modifiers.register(
#    "slightly_rare_ancient_tomes",
#    LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*minecraft)((?=.*chest)|(?=.*twilightforest:structures))(?=.*grand_library).*")),
#    CommonLootModifiers.addAllWithChance(ancient_tomes_loot)
#);
