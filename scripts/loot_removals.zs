import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
import crafttweaker.api.loot.condition.RandomChanceLootCondition;
import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
import crafttweaker.api.loot.condition.LootCondition;
import crafttweaker.api.loot.condition.LootTableIdRegexLootCondition;
import crafttweaker.api.loot.condition.RandomChanceLootCondition;

function removeAll(item as crafttweaker.api.item.IItemStack, itemName as string) as void {
    loot.modifiers.register(
        itemName + "_loot_removal",
        LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*block)((?=.*chest)|(?=.*entities)|(?=.*twilightforest:structures)).*")),
        CommonLootModifiers.remove(item)
    );
}

function removeFromChests(item as crafttweaker.api.item.IItemStack, itemName as string) as void {
    loot.modifiers.register(
        itemName + "_loot_removal",
        LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*block)((?=.*chest)|(?=.*twilightforest:structures)).*")),
        CommonLootModifiers.remove(item)
    );
}

removeAll(<item:minecraft:diamond>, "minecraft_diamond");
removeFromChests(<item:minecraft:emerald>, "minecraft_emerald");

removeAll(<item:minecraft:ancient_debris>, "minecraft_ancient_debris");
removeAll(<item:minecraft:netherite_ingot>, "minecraft_netherite_ingot");
removeAll(<item:minecraft:netherite_block>, "minecraft_netherite_block");
removeAll(<item:minecraft:netherite_scrap>, "minecraft_netherite_scrap");
removeAll(<item:minecraft:netherite_sword>, "minecraft_netherite_sword");
removeAll(<item:minecraft:netherite_shovel>, "minecraft_netherite_shovel");
removeAll(<item:minecraft:netherite_pickaxe>, "minecraft_netherite_pickaxe");
removeAll(<item:minecraft:netherite_axe>, "minecraft_netherite_axe");
removeAll(<item:minecraft:netherite_hoe>, "minecraft_netherite_hoe");
removeAll(<item:minecraft:netherite_helmet>, "minecraft_netherite_helmet");
removeAll(<item:minecraft:netherite_chestplate>, "minecraft_netherite_chestplate");
removeAll(<item:minecraft:netherite_leggings>, "minecraft_netherite_leggings");
removeAll(<item:minecraft:netherite_boots>, "minecraft_netherite_boots");

removeAll(<item:allthemodium:raw_unobtainium>, "allthemodium_raw_unobtainium");
removeAll(<item:allthemodium:unobtainium_ingot>, "allthemodium_unobtainium_ingot");
removeAll(<item:allthemodium:unobtainium_nugget>, "allthemodium_unobtainium_nugget");

removeAll(<item:allthemodium:raw_vibranium>, "allthemodium_raw_vibranium");
removeAll(<item:allthemodium:vibranium_ingot>, "allthemodium_vibranium_ingot");
removeAll(<item:allthemodium:vibranium_nugget>, "allthemodium_vibranium_nugget");
