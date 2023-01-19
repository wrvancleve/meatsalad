import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
#import crafttweaker.api.loot.condition.RandomChanceLootCondition;
#import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
#import crafttweaker.api.loot.condition.LootCondition;
import crafttweaker.api.loot.condition.LootTableIdRegexLootCondition;

function disable(item as crafttweaker.api.item.IItemStack) as void {
    craftingTable.remove(item);
    mods.jei.JEI.hideIngredient(item);
}

function fullDisable(item as crafttweaker.api.item.IItemStack, itemName as string) as void {
    craftingTable.remove(item);
    mods.jei.JEI.hideIngredient(item);
    loot.modifiers.register(
        itemName + "_loot_removal",
        LootConditions.only(LootTableIdRegexLootCondition.create("^(?!.*block)((?=.*chest)|(?=.*entities)|(?=.*twilightforest:structures)).*")),
        CommonLootModifiers.remove(item)
    );
}

disable(<item:twilightforest:uncrafting_table>);
disable(<item:ae2:facade>.withTag({item: "twilightforest:uncrafting_table"}));

disable(<item:extendedcrafting:ender_ingot_block>);
disable(<item:extendedcrafting:enhanced_ender_ingot_block>);
disable(<item:extendedcrafting:nether_star_block>);
disable(<item:extendedcrafting:ender_star_block>);
disable(<item:extendedcrafting:ender_ingot>);
disable(<item:extendedcrafting:enhanced_ender_ingot>);
disable(<item:extendedcrafting:ender_nugget>);
disable(<item:extendedcrafting:enhanced_ender_nugget>);
disable(<item:extendedcrafting:ender_star>);
disable(<item:extendedcrafting:ender_catalyst>);
disable(<item:extendedcrafting:enhanced_ender_catalyst>);
disable(<item:extendedcrafting:ender_component>);
disable(<item:extendedcrafting:enhanced_ender_component>);
disable(<item:extendedcrafting:the_ultimate_block>);
disable(<item:extendedcrafting:the_ultimate_ingot>);
disable(<item:extendedcrafting:the_ultimate_nugget>);
disable(<item:extendedcrafting:the_ultimate_catalyst>);
disable(<item:extendedcrafting:the_ultimate_component>);

fullDisable(<item:cyclic:copper_pickaxe>, "cyclic_copper_pickaxe");
fullDisable(<item:cyclic:copper_axe>, "cyclic_copper_axe");
fullDisable(<item:cyclic:copper_hoe>, "cyclic_copper_hoe");
fullDisable(<item:cyclic:copper_shovel>, "cyclic_copper_shovel");
fullDisable(<item:cyclic:copper_sword>, "cyclic_copper_sword");
fullDisable(<item:cyclic:amethyst_pickaxe>, "cyclic_amethyst_pickaxe");
fullDisable(<item:cyclic:amethyst_axe>, "cyclic_amethyst_axe");
fullDisable(<item:cyclic:amethyst_hoe>, "cyclic_amethyst_hoe");
fullDisable(<item:cyclic:amethyst_shovel>, "cyclic_amethyst_shovel");
fullDisable(<item:cyclic:amethyst_sword>, "cyclic_amethyst_sword");
fullDisable(<item:cyclic:netherbrick_pickaxe>, "cyclic_netherbrick_pickaxe");
fullDisable(<item:cyclic:netherbrick_axe>, "cyclic_netherbrick_axe");
fullDisable(<item:cyclic:netherbrick_hoe>, "cyclic_netherbrick_hoe");
fullDisable(<item:cyclic:netherbrick_shovel>, "cyclic_netherbrick_shovel");
fullDisable(<item:cyclic:netherbrick_sword>, "cyclic_netherbrick_sword");
fullDisable(<item:cyclic:sandstone_pickaxe>, "cyclic_sandstone_pickaxe");
fullDisable(<item:cyclic:sandstone_axe>, "cyclic_sandstone_axe");
fullDisable(<item:cyclic:sandstone_hoe>, "cyclic_sandstone_hoe");
fullDisable(<item:cyclic:sandstone_shovel>, "cyclic_sandstone_shovel");
fullDisable(<item:cyclic:sandstone_sword>, "cyclic_sandstone_sword");

fullDisable(<item:cyclic:emerald_boots>, "cyclic_emerald_boots");
fullDisable(<item:cyclic:emerald_chestplate>, "cyclic_emerald_chestplate");
fullDisable(<item:cyclic:emerald_leggings>, "cyclic_emerald_leggings");
fullDisable(<item:cyclic:emerald_helmet>, "cyclic_emerald_helmet");
fullDisable(<item:cyclic:emerald_pickaxe>, "cyclic_emerald_pickaxe");
fullDisable(<item:cyclic:emerald_axe>, "cyclic_emerald_axe");
fullDisable(<item:cyclic:emerald_hoe>, "cyclic_emerald_hoe");
fullDisable(<item:cyclic:emerald_shovel>, "cyclic_emerald_shovel");
fullDisable(<item:cyclic:emerald_sword>, "cyclic_emerald_sword");

fullDisable(<item:cyclic:crystal_boots>, "cyclic_crystal_boots");
fullDisable(<item:cyclic:crystal_chestplate>, "cyclic_crystal_chestplate");
fullDisable(<item:cyclic:crystal_leggings>, "cyclic_crystal_leggings");
fullDisable(<item:cyclic:crystal_helmet>, "cyclic_crystal_helmet");
fullDisable(<item:cyclic:crystal_pickaxe>, "cyclic_crystal_pickaxe");
fullDisable(<item:cyclic:crystal_axe>, "cyclic_crystal_axe");
fullDisable(<item:cyclic:crystal_hoe>, "cyclic_crystal_hoe");
fullDisable(<item:cyclic:crystal_shovel>, "cyclic_crystal_shovel");
fullDisable(<item:cyclic:crystal_sword>, "cyclic_crystal_sword");

fullDisable(<item:cataclysm:the_incinerator>, "cataclysm_the_incinerator");
fullDisable(<item:cataclysm:ignitium_block>, "cataclysm_ignitium_block");
fullDisable(<item:ae2:facade>.withTag({item: "cataclysm:ignitium_block"}), "ae2_cataclysm_ignitium_block_facade");
fullDisable(<item:cataclysm:ignitium_ingot>, "cataclysm_ignitium_ingot");
fullDisable(<item:cataclysm:ignitium_helmet>, "cataclysm_ignitium_helmet");
fullDisable(<item:cataclysm:ignitium_chestplate>, "cataclysm_ignitium_chestplate");
fullDisable(<item:cataclysm:ignitium_elytra_chestplate>, "cataclysm_ignitium_elytra_chestplate");
fullDisable(<item:cataclysm:ignitium_leggings>, "cataclysm_ignitium_leggings");
fullDisable(<item:cataclysm:ignitium_boots>, "cataclysm_ignitium_boots");

fullDisable(<item:twilightforest:fiery_blood>, "twilightforest_fiery_blood");
fullDisable(<item:twilightforest:fiery_tears>, "twilightforest_fiery_tears");
fullDisable(<item:twilightforest:fiery_sword>, "twilightforest_fiery_sword");
fullDisable(<item:twilightforest:fiery_pickaxe>, "twilightforest_fiery_pickaxe");
fullDisable(<item:twilightforest:fiery_ingot>, "twilightforest_fiery_ingot");
fullDisable(<item:twilightforest:fiery_helmet>, "twilightforest_fiery_helmet");
fullDisable(<item:twilightforest:fiery_chestplate>, "twilightforest_fiery_chestplate");
fullDisable(<item:twilightforest:fiery_leggings>, "twilightforest_fiery_leggings");
fullDisable(<item:twilightforest:fiery_boots>, "twilightforest_fiery_boots");
fullDisable(<item:twilightforest:fiery_block>, "twilightforest_fiery_block");
fullDisable(<item:ae2:facade>.withTag({item: "twilightforest:fiery_block"}), "ae2_twilightforest_fiery_block_facade");

fullDisable(<item:twilightforest:charm_of_life_1>, "twilightforest_charm_of_life_1");
fullDisable(<item:twilightforest:charm_of_life_2>, "twilightforest_charm_of_life_2");

fullDisable(<item:twilightforest:steeleaf_helmet>, "twilightforest_steeleaf_helmet");
fullDisable(<item:twilightforest:steeleaf_chestplate>, "twilightforest_steeleaf_chestplate");
fullDisable(<item:twilightforest:steeleaf_leggings>, "twilightforest_steeleaf_leggings");
fullDisable(<item:twilightforest:steeleaf_boots>, "twilightforest_steeleaf_boots");
fullDisable(<item:twilightforest:steeleaf_pickaxe>, "twilightforest_steeleaf_pickaxe");
fullDisable(<item:twilightforest:steeleaf_sword>, "twilightforest_steeleaf_sword");
fullDisable(<item:twilightforest:steeleaf_shovel>, "twilightforest_steeleaf_shovel");
fullDisable(<item:twilightforest:steeleaf_axe>, "twilightforest_steeleaf_axe");
fullDisable(<item:twilightforest:steeleaf_hoe>, "twilightforest_steeleaf_hoe");

fullDisable(<item:blue_skies:horizonite_sword>, "blue_skies_horizonite_sword");
fullDisable(<item:blue_skies:horizonite_pickaxe>, "blue_skies_horizonite_pickaxe");
fullDisable(<item:blue_skies:horizonite_axe>, "blue_skies_horizonite_axe");
fullDisable(<item:blue_skies:horizonite_shovel>, "blue_skies_horizonite_shovel");
fullDisable(<item:blue_skies:horizonite_hoe>, "blue_skies_horizonite_hoe");
fullDisable(<item:blue_skies:horizonite_helmet>, "blue_skies_horizonite_helmet");
fullDisable(<item:blue_skies:horizonite_chestplate>, "blue_skies_horizonite_chestplate");
fullDisable(<item:blue_skies:horizonite_leggings>, "blue_skies_horizonite_leggings");
fullDisable(<item:blue_skies:horizonite_boots>, "blue_skies_horizonite_boots");

fullDisable(<item:blue_skies:aquite_sword>, "blue_skies_aquite_sword");
fullDisable(<item:blue_skies:aquite_pickaxe>, "blue_skies_aquite_pickaxe");
fullDisable(<item:blue_skies:aquite_axe>, "blue_skies_aquite_axe");
fullDisable(<item:blue_skies:aquite_shovel>, "blue_skies_aquite_shovel");
fullDisable(<item:blue_skies:aquite_hoe>, "blue_skies_aquite_hoe");
fullDisable(<item:blue_skies:aquite_helmet>, "blue_skies_aquite_helmet");
fullDisable(<item:blue_skies:aquite_chestplate>, "blue_skies_aquite_chestplate");
fullDisable(<item:blue_skies:aquite_leggings>, "blue_skies_aquite_leggings");
fullDisable(<item:blue_skies:aquite_boots>, "blue_skies_aquite_boots");

fullDisable(<item:blue_skies:charoite_sword>, "blue_skies_charoite_sword");
fullDisable(<item:blue_skies:charoite_pickaxe>, "blue_skies_charoite_pickaxe");
fullDisable(<item:blue_skies:charoite_axe>, "blue_skies_charoite_axe");
fullDisable(<item:blue_skies:charoite_shovel>, "blue_skies_charoite_shovel");
fullDisable(<item:blue_skies:charoite_hoe>, "blue_skies_charoite_hoe");
fullDisable(<item:blue_skies:charoite_helmet>, "blue_skies_charoite_helmet");
fullDisable(<item:blue_skies:charoite_chestplate>, "blue_skies_charoite_chestplate");
fullDisable(<item:blue_skies:charoite_leggings>, "blue_skies_charoite_leggings");
fullDisable(<item:blue_skies:charoite_boots>, "blue_skies_charoite_boots");

fullDisable(<item:twilightforest:ironwood_sword>, "twilightforest_ironwood_sword");
fullDisable(<item:twilightforest:ironwood_pickaxe>, "twilightforest_ironwood_pickaxe");
fullDisable(<item:twilightforest:ironwood_axe>, "twilightforest_ironwood_axe");
fullDisable(<item:twilightforest:ironwood_shovel>, "twilightforest_ironwood_shovel");
fullDisable(<item:twilightforest:ironwood_hoe>, "twilightforest_ironwood_hoe");
fullDisable(<item:twilightforest:ironwood_helmet>, "twilightforest_ironwood_helmet");
fullDisable(<item:twilightforest:ironwood_chestplate>, "twilightforest_ironwood_chestplate");
fullDisable(<item:twilightforest:ironwood_leggings>, "twilightforest_ironwood_leggings");
fullDisable(<item:twilightforest:ironwood_boots>, "twilightforest_ironwood_boots");

fullDisable(<item:twilightforest:knightmetal_sword>, "twilightforest_knightmetal_sword");
fullDisable(<item:twilightforest:knightmetal_pickaxe>, "twilightforest_knightmetal_pickaxe");
fullDisable(<item:twilightforest:knightmetal_axe>, "twilightforest_knightmetal_axe");
fullDisable(<item:twilightforest:knightmetal_helmet>, "twilightforest_knightmetal_helmet");
fullDisable(<item:twilightforest:knightmetal_chestplate>, "twilightforest_knightmetal_chestplate");
fullDisable(<item:twilightforest:knightmetal_leggings>, "twilightforest_knightmetal_leggings");
fullDisable(<item:twilightforest:knightmetal_boots>, "twilightforest_knightmetal_boots");

fullDisable(<item:blue_skies:pyrope_sword>, "blue_skies_pyrope_sword");
fullDisable(<item:blue_skies:pyrope_pickaxe>, "blue_skies_pyrope_pickaxe");
fullDisable(<item:blue_skies:pyrope_axe>, "blue_skies_pyrope_axe");
fullDisable(<item:blue_skies:pyrope_shovel>, "blue_skies_pyrope_shovel");
fullDisable(<item:blue_skies:pyrope_hoe>, "blue_skies_pyrope_hoe");
fullDisable(<item:blue_skies:pyrope_helmet>, "blue_skies_pyrope_helmet");
fullDisable(<item:blue_skies:pyrope_chestplate>, "blue_skies_pyrope_chestplate");
fullDisable(<item:blue_skies:pyrope_leggings>, "blue_skies_pyrope_leggings");
fullDisable(<item:blue_skies:pyrope_boots>, "blue_skies_pyrope_boots");

fullDisable(<item:blue_skies:diopside_sword>, "blue_skies_diopside_sword");
fullDisable(<item:blue_skies:diopside_pickaxe>, "blue_skies_diopside_pickaxe");
fullDisable(<item:blue_skies:diopside_axe>, "blue_skies_diopside_axe");
fullDisable(<item:blue_skies:diopside_shovel>, "blue_skies_diopside_shovel");
fullDisable(<item:blue_skies:diopside_hoe>, "blue_skies_diopside_hoe");
fullDisable(<item:blue_skies:diopside_helmet>, "blue_skies_diopside_helmet");
fullDisable(<item:blue_skies:diopside_chestplate>, "blue_skies_diopside_chestplate");
fullDisable(<item:blue_skies:diopside_leggings>, "blue_skies_diopside_leggings");
fullDisable(<item:blue_skies:diopside_boots>, "blue_skies_diopside_boots");

fullDisable(<item:silentgear:recrystallizer>, "silentgear_recrystallizer");
fullDisable(<item:silentgear:custom_gem>, "silentgear_custom_gem");
fullDisable(<item:silentgear:hybrid_gem>, "silentgear_hybrid_gem");
fullDisable(<item:silentgear:custom_ingot>, "silentgear_custom_ingot");
fullDisable(<item:silentgear:alloy_ingot>, "silentgear_alloy_ingot");
fullDisable(<item:silentgear:sheet_metal>, "silentgear_sheet_metal");

fullDisable(<item:angelring:energetic_angel_ring>, "angelring_energetic_angel_ring");
fullDisable(<item:angelring:leadstone_angel_ring>, "angelring_leadstone_angel_ring");
fullDisable(<item:angelring:hardened_angel_ring>, "angelring_hardened_angel_ring");
fullDisable(<item:angelring:reinforced_angel_ring>, "angelring_reinforced_angel_ring");
fullDisable(<item:angelring:resonant_angel_ring>, "angelring_resonant_angel_ring");

fullDisable(<item:awakened_bosses:herobrine_a_helmet>, "awakened_bosses_herobrine_a_helmet");
fullDisable(<item:awakened_bosses:herobrine_a_chestplate>, "awakened_bosses_herobrine_a_chestplate");
fullDisable(<item:awakened_bosses:herobrine_a_leggings>, "awakened_bosses_herobrine_a_leggings");
fullDisable(<item:awakened_bosses:herobrine_a_boots>, "awakened_bosses_herobrine_a_boots");
fullDisable(<item:awakened_bosses:herobrine_sword>, "awakened_bosses_herobrine_sword");
fullDisable(<item:awakened_bosses:herobrine_pickaxe>, "awakened_bosses_herobrine_pickaxe");
fullDisable(<item:awakened_bosses:herobrine_axe>, "awakened_bosses_herobrine_axe");
fullDisable(<item:awakened_bosses:herobrine_shovel>, "awakened_bosses_herobrine_shovel");
fullDisable(<item:awakened_bosses:herobrine_hoe>, "awakened_bosses_herobrine_hoe");
fullDisable(<item:awakened_bosses:herobrine_nugget>, "awakened_bosses_herobrine_nugget");
fullDisable(<item:awakened_bosses:herobrine_ingot>, "awakened_bosses_herobrine_ingot");
fullDisable(<item:awakened_bosses:herobrine_block>, "awakened_bosses_herobrine_block");
fullDisable(<item:ae2:facade>.withTag({item: "awakened_bosses:herobrine_block"}), "ae2_awakened_bosses_herobrine_block_facade");

fullDisable(<item:allthemodium:raw_allthemodium_block>, "allthemodium_raw_allthemodium_block");
fullDisable(<item:allthemodium:allthemodium_ore>, "allthemodium_allthemodium_ore");
fullDisable(<item:allthemodium:allthemodium_slate_ore>, "allthemodium_allthemodium_slate_ore");
fullDisable(<item:allthemodium:allthemodium_block>, "allthemodium_allthemodium_block");
fullDisable(<item:allthemodium:raw_allthemodium>, "allthemodium_raw_allthemodium");
fullDisable(<item:allthemodium:allthemodium_ingot>, "allthemodium_allthemodium_ingot");
fullDisable(<item:allthemodium:allthemodium_plate>, "allthemodium_allthemodium_plate");
fullDisable(<item:allthemodium:allthemodium_gear>, "allthemodium_allthemodium_gear");
fullDisable(<item:allthemodium:allthemodium_rod>, "allthemodium_allthemodium_rod");
fullDisable(<item:allthemodium:allthemodium_nugget>, "allthemodium_allthemodium_nugget");
fullDisable(<item:allthemodium:allthemodium_dust>, "allthemodium_allthemodium_dust");
fullDisable(<item:allthemodium:allthemodium_clump>, "allthemodium_allthemodium_clump");
fullDisable(<item:allthemodium:allthemodium_shard>, "allthemodium_allthemodium_shard");
fullDisable(<item:allthemodium:dirty_allthemodium_dust>, "allthemodium_dirty_allthemodium_dust");
fullDisable(<item:allthemodium:allthemodium_crystal>, "allthemodium_allthemodium_crystal");
fullDisable(<item:allthemodium:unobtainium_vibranium_alloy_block>, "allthemodium_unobtainium_vibranium_alloy_block");
fullDisable(<item:allthemodium:unobtainium_allthemodium_alloy_block>, "allthemodium_unobtainium_allthemodium_alloy_block");
fullDisable(<item:allthemodium:vibranium_allthemodium_alloy_block>, "allthemodium_vibranium_allthemodium_alloy_block");
fullDisable(<item:allthemodium:molten_allthemodium_bucket>, "allthemodium_molten_allthemodium_bucket");
fullDisable(<item:allthemodium:vapor_allthemodium_bucket>, "allthemodium_vapor_allthemodium_bucket");
fullDisable(<item:allthemodium:allthemodium_apple>, "allthemodium_allthemodium_apple");
fullDisable(<item:allthemodium:allthemodium_carrot>, "allthemodium_allthemodium_carrot");
fullDisable(<item:allthemodium:unobtainium_allthemodium_alloy_dust>, "allthemodium_unobtainium_allthemodium_alloy_dust");
fullDisable(<item:allthemodium:vibranium_allthemodium_alloy_dust>, "allthemodium_vibranium_allthemodium_alloy_dust");
fullDisable(<item:allthemodium:unobtainium_vibranium_alloy_dust>, "allthemodium_unobtainium_vibranium_alloy_dust");
fullDisable(<item:allthemodium:unobtainium_allthemodium_alloy_ingot>, "allthemodium_unobtainium_allthemodium_alloy_ingot");
fullDisable(<item:allthemodium:vibranium_allthemodium_alloy_ingot>, "allthemodium_vibranium_allthemodium_alloy_ingot");
fullDisable(<item:allthemodium:unobtainium_vibranium_alloy_ingot>, "allthemodium_unobtainium_vibranium_alloy_ingot");

fullDisable(<item:allthemodium:allthemodium_boots>, "allthemodium_allthemodium_boots");
fullDisable(<item:allthemodium:allthemodium_leggings>, "allthemodium_allthemodium_leggings");
fullDisable(<item:allthemodium:allthemodium_chestplate>, "allthemodium_allthemodium_chestplate");
fullDisable(<item:allthemodium:allthemodium_helmet>, "allthemodium_allthemodium_helmet");
fullDisable(<item:allthemodium:allthemodium_pickaxe>, "allthemodium_allthemodium_pickaxe");
fullDisable(<item:allthemodium:allthemodium_axe>, "allthemodium_allthemodium_axe");
fullDisable(<item:allthemodium:allthemodium_hoe>, "allthemodium_allthemodium_hoe");
fullDisable(<item:allthemodium:allthemodium_sword>, "allthemodium_allthemodium_sword");
fullDisable(<item:allthemodium:allthemodium_shovel>, "allthemodium_allthemodium_shovel");

fullDisable(<item:allthemodium:unobtainium_boots>, "allthemodium_unobtainium_boots");
fullDisable(<item:allthemodium:unobtainium_leggings>, "allthemodium_unobtainium_leggings");
fullDisable(<item:allthemodium:unobtainium_chestplate>, "allthemodium_unobtainium_chestplate");
fullDisable(<item:allthemodium:unobtainium_helmet>, "allthemodium_unobtainium_helmet");
fullDisable(<item:allthemodium:unobtainium_pickaxe>, "allthemodium_unobtainium_pickaxe");
fullDisable(<item:allthemodium:unobtainium_axe>, "allthemodium_unobtainium_axe");
fullDisable(<item:allthemodium:unobtainium_hoe>, "allthemodium_unobtainium_hoe");
fullDisable(<item:allthemodium:unobtainium_sword>, "allthemodium_unobtainium_sword");
fullDisable(<item:allthemodium:unobtainium_shovel>, "allthemodium_unobtainium_shovel");

fullDisable(<item:allthemodium:vibranium_boots>, "allthemodium_vibranium_boots");
fullDisable(<item:allthemodium:vibranium_leggings>, "allthemodium_vibranium_leggings");
fullDisable(<item:allthemodium:vibranium_chestplate>, "allthemodium_vibranium_chestplate");
fullDisable(<item:allthemodium:vibranium_helmet>, "allthemodium_vibranium_helmet");
fullDisable(<item:allthemodium:vibranium_pickaxe>, "allthemodium_vibranium_pickaxe");
fullDisable(<item:allthemodium:vibranium_axe>, "allthemodium_vibranium_axe");
fullDisable(<item:allthemodium:vibranium_hoe>, "allthemodium_vibranium_hoe");
fullDisable(<item:allthemodium:vibranium_sword>, "allthemodium_vibranium_sword");
fullDisable(<item:allthemodium:vibranium_shovel>, "allthemodium_vibranium_shovel");
