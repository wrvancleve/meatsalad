# Meat Salad
1.19.2 Minecraft Forge Modpack with adventure, tech, and a little bit of everything else

**Table of contents**
- [Manual Mod Changes](#manual-mod-changes)
    - [Apotheosis](#apotheosis)
    - [AllTheModium](#allthemodium)
    - [AllTheOres](#alltheores)
    - [EndRemastered](#endremastered)
    - [GatewaysToEternity](#gatewaystoeternity)
    - [Industrial Foregoing](#industrial-foregoing)
    - [Silent Gear](#silent-gear)
- [Server Startup](#server-startup)

## Manual Mod Changes
### Apotheosis
- Remove data\apotheosis\affixes\sword\attribute\elongated.json
- Remove data\apotheosis\affix_loot_entries\overworld\chainmail_*.json
- Remove data\apotheosis\affix_loot_entries\overworld\leather_*.json
- Remove data\apotheosis\affix_loot_entries\overworld\stone_*.json
- Remove data\apotheosis\affix_loot_entries\overworld\turtle_helmet.json
- Remove data\apotheosis\bosses\the_nether\zombified_piglin.json
- Remove data\apotheosis\bosses\the_end\endermite.json
- Remove data\apotheosis\bosses\the_end\shulker.json

### AllTheModium
- Remove apotheosis bosses
- Remove data\allthemodium\forge\biome_modifier\allthemodium\vibranium.json
- Remove data\allthemodium\forge\biome_modifier\allthemodium\dim_ores
- Remove data\forge\tags\blocks\needs_allthemodium_tool.json

### AllTheOres
- Remove data\alltheores\forge\biome_modifier\alltheores\\*_nether.json
- Remove data\alltheores\forge\biome_modifier\alltheores\\*_end.json
- Remove data\alltheores\worldgen\placed_feature\ore_uranium_placed_mining.json
- Remove data\forge\tags\blocks\ores_in_ground\ancient_stone.json
- Remove data\forge\tags\blocks\ores_in_ground\end_stone.json
- Remove data\forge\tags\blocks\ores_in_ground\netherrack.json
- Remove data\forge\tags\items\ores_in_ground\ancient_stone.json
- Remove data\forge\tags\items\ores_in_ground\end_stone.json
- Remove data\forge\tags\items\ores_in_ground\netherrack.json

### EndRemastered
- Updates

### GatewaysToEternity
- Remove data\gateways\recipes

### Industrial Foregoing
- Remove data\industrialforegoing\recipes\laser_drill_ore\

### Iron Spellbooks
- Remove data\irons_spellbooks\advancements\grant_patchouli.json
- Remove data\irons_spellbooks\bosses\necromancer.json
- Remove data\irons_spellbooks\loot_modifiers\entity_drops\blaze_modifier.json
- Remove data\irons_spellbooks\loot_tables\entities\additional_blaze_loot.json

### Mekanism
- Remove data\mekanism\forge\biome_modifier\mekanism\*.json (except fluorite & salt)

### Nullscape
- Remove data\minecraft\loot_tables\blocks\amethyst_block.json

### Silent Gear
- Remove data\silentgear\silentgear_materials\sandstone
- Remove data\silentgear\silentgear_materials\terracotta
- Remove data\silentgear\silentgear_materials\aluminum.json
- Remove data\silentgear\silentgear_materials\aluminum_steel.json
- Remove data\silentgear\silentgear_materials\bamboo.json
- Remove data\silentgear\silentgear_materials\barrier.json
- Remove data\silentgear\silentgear_materials\basalt.json
- Remove data\silentgear\silentgear_materials\bismuth.json
- Remove data\silentgear\silentgear_materials\bismuth_brass.json
- Remove data\silentgear\silentgear_materials\bismuth_steel.json
- Remove data\silentgear\silentgear_materials\blackstone.json
- Remove data\silentgear\silentgear_materials\blaze_rod.json
- Remove data\silentgear\silentgear_materials\bone.json
- Remove data\silentgear\silentgear_materials\compressed_iron.json
- Remove data\silentgear\silentgear_materials\copper.json
- Remove data\silentgear\silentgear_materials\dimerald.json
- Remove data\silentgear\silentgear_materials\end_rod.json
- Remove data\silentgear\silentgear_materials\end_stone.json
- Remove data\silentgear\silentgear_materials\flint.json
- Remove data\silentgear\silentgear_materials\glowstone.json
- Remove data\silentgear\silentgear_materials\high_carbon_steel.json
- Remove data\silentgear\silentgear_materials\hybrid_gem.json
- Remove data\silentgear\silentgear_materials\lead.json
- Remove data\silentgear\silentgear_materials\metal_alloy.json
- Remove data\silentgear\silentgear_materials\mixed_fabric.json
- Remove data\silentgear\silentgear_materials\netherrack.json
- Remove data\silentgear\silentgear_materials\nickel.json
- Remove data\silentgear\silentgear_materials\osmium.json
- Remove data\silentgear\silentgear_materials\redstone_alloy.json
- Remove data\silentgear\silentgear_materials\refined_glowstone.json
- Remove data\silentgear\silentgear_materials\refined_iron.json
- Remove data\silentgear\silentgear_materials\sandstone.json
- Remove data\silentgear\silentgear_materials\sheet_metal.json
- Remove data\silentgear\silentgear_materials\terracotta.json
- Remove data\silentgear\silentgear_materials\tin.json
- Remove data\silentgear\silentgear_materials\titanium.json
- Remove data\silentgear\silentgear_materials\turtle.json
- Remove data\silentgear\silentgear_materials\uranium.json
- Remove data\silentgear\silentgear_materials\zinc.json

### Terralith
- Remove data\minecraft\worldgen\structure_set\villages.json
- Remove data\terralith\worldgen\structure_set\rare_village.json

## Server Startup
1. `wget <forgeInstallerURL>`
2. `java -jar bin/<forgeInstaller>.jar --installServer`
3. Delete client side mods
    - Entity Culling
    - Legendary Tooltips
    - Oculus
    - Rubidium
    - Rubidium Extras
