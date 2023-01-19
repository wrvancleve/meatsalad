mods.jei.JEI.addDescription(<item:ultima:adamantite>, ["Obtained from treasure chests or Pigliches in The Other dimension"]);
mods.jei.JEI.addDescription(<item:ultima:damascus>, ["Obtained from loot chests or Piglin Brutes in The Nether"]);
mods.jei.JEI.addDescription(<item:ultima:lost_illusion>, ["Loot from the Ender Guardian boss in The End!"]);
mods.jei.JEI.addDescription(<item:ultima:manifest_illusion>, ["Loot from the Herobrine boss!"]);
mods.jei.JEI.addDescription(<item:ultima:orichalcum>, ["Obtained from loot chests or Wardendragons in The End"]);
mods.jei.JEI.addDescription(<item:ultima:dragon_soul>, ["Loot from the Ender Dragon!"]);

<item:minecraft:diamond>.addTooltip("Can be used to activate a Twilight Forest Portal");

craftingTable.removeByName("silentgear:azure_electrum_ingot");
craftingTable.removeByName("silentgear:crimson_steel_ingot");

craftingTable.remove(<item:mekanism:digital_miner>);
craftingTable.addShaped("digital_miner_from_dark_matter", <item:mekanism:digital_miner>, [[<item:ultima:dark_matter>, <item:mekanism:basic_control_circuit>, <item:ultima:dark_matter>], [<item:mekanism:logistical_sorter>, <item:mekanism:robit>, <item:mekanism:logistical_sorter>], [<item:mekanism:teleportation_core>, <item:mekanism:steel_casing>, <item:mekanism:teleportation_core>]]);

craftingTable.remove(<item:silentgear:starlight_charger>);
craftingTable.addShaped("starlight_charger_from_dark_matter", <item:silentgear:starlight_charger>, [[<tag:items:forge:storage_blocks/quartz>, <tag:items:forge:glass/colorless>, <tag:items:forge:storage_blocks/quartz>], [<item:minecraft:polished_blackstone>, <item:ultima:dark_matter>, <item:minecraft:polished_blackstone>], [<item:minecraft:polished_blackstone>, <item:silentgear:blaze_gold_block>, <item:minecraft:polished_blackstone>]]);

craftingTable.remove(<item:cyclic:heart>);
craftingTable.addShaped("heart_from_orichalcum", <item:cyclic:heart>, [[<item:minecraft:diamond>, <item:ultima:orichalcum>, <tag:items:forge:ingots/netherite>], [<item:cyclic:gem_obsidian>, <item:minecraft:potion>.withTag({Potion: "minecraft:strong_healing" as string}), <item:cyclic:gem_obsidian>], [<tag:items:forge:ingots/netherite>, <item:ultima:orichalcum>, <item:minecraft:diamond>]]);

<tag:items:curios:angelring>.remove(<item:angelring:itemring>);
craftingTable.remove(<item:angelring:itemring>);
craftingTable.addShaped("angel_ring_from_infinity_fabric", <item:angelring:itemring>, [[<item:minecraft:feather>, <item:ultima:infinity_fabric>, <item:minecraft:feather>], [<tag:items:forge:storage_blocks/gold>, <item:angelring:itemdiamondring>, <tag:items:forge:storage_blocks/gold>], [<item:minecraft:nether_star>, <tag:items:forge:storage_blocks/gold>, <item:minecraft:nether_star>]]);

craftingTable.remove(<item:aeinfinitybooster:dimension_card>);
craftingTable.addShaped("dimension_card_from_infinity_fabric", <item:aeinfinitybooster:dimension_card>, [[<item:aeinfinitybooster:infinity_card>, <item:ultima:infinity_fabric>, <item:aeinfinitybooster:infinity_card>], [<item:ultima:infinity_fabric>, <item:minecraft:ender_eye>, <item:ultima:infinity_fabric>], [<item:aeinfinitybooster:infinity_card>, <item:ultima:infinity_fabric>, <item:aeinfinitybooster:infinity_card>]]);

craftingTable.addShaped("ender_guardian_spawner_from_adamantite", <item:cataclysm:ender_guardian_spawner>, [[<item:cataclysm:void_stone>, <item:ultima:adamantite>, <item:cataclysm:void_stone>], [<item:cataclysm:chorus_planks>, <item:cataclysm:void_stone>, <item:cataclysm:chorus_planks>], [<item:cataclysm:void_stone>, <item:ultima:adamantite>, <item:cataclysm:void_stone>]]);

craftingTable.remove(<item:awakened_bosses:herobrine_blue>);
craftingTable.addShapeless("herobrine_blue_from_adamantite", <item:awakened_bosses:herobrine_blue>, [<tag:items:forge:storage_blocks/diamond>, <tag:items:forge:dyes/blue>, <item:ultima:adamantite>]);

craftingTable.remove(<item:awakened_bosses:herobrine_cyan>);
craftingTable.addShapeless("herobrine_cyan_from_adamantite", <item:awakened_bosses:herobrine_cyan>, [<tag:items:forge:storage_blocks/diamond>, <tag:items:forge:dyes/cyan>, <item:ultima:adamantite>]);

craftingTable.remove(<item:cyclic:anvil_magma>);
craftingTable.addShaped("anvil_magma_from_crimson_steel", <item:cyclic:anvil_magma>, [[<item:minecraft:magma_block>, <item:minecraft:magma_block>, <item:minecraft:magma_block>], [<item:minecraft:air>, <tag:items:forge:storage_blocks/crimson_steel>, <item:minecraft:air>], [<tag:items:forge:obsidian>, <item:cyclic:fireball>, <tag:items:forge:obsidian>]]);

craftingTable.remove(<item:cyclic:anvil>);
craftingTable.addShaped("anvil_from_dark_matter", <item:cyclic:anvil>, [[<tag:items:forge:storage_blocks/diamond>, <tag:items:forge:storage_blocks/diamond>, <tag:items:forge:storage_blocks/diamond>], [<item:minecraft:redstone>, <item:cyclic:anvil_magma>, <item:minecraft:redstone>], [<tag:items:forge:storage_blocks/iron>, <tag:items:forge:circuits/ultimate>, <tag:items:forge:storage_blocks/iron>]]);

craftingTable.remove(<item:extendedcrafting:compressor>);
craftingTable.addShaped("quantum_compressor_from_dark_matter", <item:extendedcrafting:compressor>, [[<item:extendedcrafting:black_iron_ingot>, <item:extendedcrafting:elite_component>, <item:extendedcrafting:black_iron_ingot>], [<item:extendedcrafting:elite_catalyst>, <item:extendedcrafting:frame>, <item:extendedcrafting:elite_catalyst>], [<item:extendedcrafting:black_iron_ingot>, <item:ultima:dark_matter>, <item:extendedcrafting:black_iron_ingot>]]);

craftingTable.remove(<item:allthemodium:teleport_pad>);
craftingTable.addShaped("teleport_pad_from_blaze_gold", <item:allthemodium:teleport_pad>, [[<item:minecraft:air>, <item:silentgear:blaze_gold_ingot>, <item:minecraft:air>], [<item:silentgear:blaze_gold_ingot>, <item:minecraft:ender_pearl>, <item:silentgear:blaze_gold_ingot>], [<item:minecraft:air>, <item:silentgear:blaze_gold_ingot>, <item:minecraft:air>]]);
