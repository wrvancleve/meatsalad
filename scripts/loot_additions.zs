import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
import crafttweaker.api.loot.condition.RandomChanceLootCondition;
import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
import crafttweaker.api.loot.condition.LootCondition;
import crafttweaker.api.loot.condition.LootTableIdRegexLootCondition;
import crafttweaker.api.loot.condition.RandomChanceLootCondition;

loot.modifiers.register(
    "damascus_nether",
    LootConditions.allOf([LootTableIdRegexLootCondition.create("^(?=.*chest)((?=.*bastion)|(?=.*nether)).*"), RandomChanceLootCondition.create(0.15)]),
    CommonLootModifiers.add(<item:ultima:damascus>)
);
loot.modifiers.register(
    "damascus_piglin_brute",
    LootConditions.allOf([LootTableIdRegexLootCondition.create("^(?=.*entities)(?=.*piglin_brute).*"), RandomChanceLootCondition.create(0.15)]),
    CommonLootModifiers.add(<item:ultima:damascus>)
);
loot.modifiers.register(
    "orichalcum_end",
    LootConditions.allOf([LootTableIdRegexLootCondition.create("^(?=.*chest)((?=.*end_city)|(?=.*ruined_citadel)).*"), RandomChanceLootCondition.create(0.15)]),
    CommonLootModifiers.add(<item:ultima:orichalcum>)
);

craftingTable.remove(<item:naturescompass:naturescompass>);
mods.jei.JEI.addDescription(<item:naturescompass:naturescompass>, ["Can be found in any Nether loot chest"]);
loot.modifiers.register(
    "natures_compass_nether",
    LootConditions.allOf([LootTableIdRegexLootCondition.create("^(?=.*chest)((?=.*bastion)|(?=.*nether)).*"), RandomChanceLootCondition.create(0.1)]),
    CommonLootModifiers.add(<item:naturescompass:naturescompass>)
);

craftingTable.remove(<item:explorerscompass:explorerscompass>);
mods.jei.JEI.addDescription(<item:explorerscompass:explorerscompass>, ["Can be found in any Nether loot chest"]);
loot.modifiers.register(
    "explorers_compass_nether",
    LootConditions.allOf([LootTableIdRegexLootCondition.create("^(?=.*chest)((?=.*bastion)|(?=.*nether)).*"), RandomChanceLootCondition.create(0.1)]),
    CommonLootModifiers.add(<item:explorerscompass:explorerscompass>)
);

loot.modifiers.register(
    "dragon_soul_ender_dragon",
    LootConditions.only(LootTableIdRegexLootCondition.create("minecraft:entities/ender_dragon")),
    CommonLootModifiers.add(<item:ultima:dragon_soul>)
);
