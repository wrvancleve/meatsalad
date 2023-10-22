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
- Remove data\apotheosis\bosses\the_nether\zombified_piglin.json
- Remove data\apotheosis\bosses\the_end\endermite.json
- Remove data\apotheosis\bosses\the_end\shulker.json

### AllTheModium
- Remove apotheosis bosses
- Remove data\allthemodium\forge\biome_modifier\allthemodium\allthemodium.json
- Remove data\allthemodium\forge\biome_modifier\allthemodium\vibranium.json
- Remove data\allthemodium\forge\biome_modifier\allthemodium\dim_ores\ore_allthemodium.json
- Remove data\allthemodium\forge\biome_modifier\allthemodium\the_other\allthemodium.json
- Remove data\forge\tags\blocks\needs_allthemodium_tool.json

### AllTheOres
- Remove data\alltheores\forge\biome_modifier\alltheores\\*_nether.json
- Remove data\alltheores\forge\biome_modifier\alltheores\\*_end.json

### EndRemastered
- Updates

### GatewaysToEternity
- Remove data\gateways\recipes

### Industrial Foregoing
- Remove laser lens dissolution_chamber recipes
- Remove laser lens recolor recipes

### Mekanism
- Remove data\mekanism\forge\biome_modifier\mekanism\*.json (except fluorite & salt)

### Nullscape
- Remove data\minecraft\loot_tables\blocks\amethyst_block.json

### Silent Gear
- Remove data\silentgear\silentgear_materials\sandstone
- Remove data\silentgear\silentgear_materials\terracotta
- Remove data\silentgear\silentgear_materials\aluminum.json
- Remove data\silentgear\silentgear_materials\aluminum_steel.json
- Remove data\silentgear\silentgear_materials\barrier.json
- Remove data\silentgear\silentgear_materials\basalt.json
- Remove data\silentgear\silentgear_materials\bismuth.json
- Remove data\silentgear\silentgear_materials\bismuth_brass.json
- Remove data\silentgear\silentgear_materials\bismuth_steel.json
- Remove data\silentgear\silentgear_materials\blackstone.json
- Remove data\silentgear\silentgear_materials\brass.json
- Remove data\silentgear\silentgear_materials\compressed_iron.json
- Remove data\silentgear\silentgear_materials\copper.json
- Remove data\silentgear\silentgear_materials\dimerald.json
- Remove data\silentgear\silentgear_materials\enderium.json
- Remove data\silentgear\silentgear_materials\flint.json
- Remove data\silentgear\silentgear_materials\high_carbon_steel.json
- Remove data\silentgear\silentgear_materials\hybrid_gem.json
- Remove data\silentgear\silentgear_materials\invar.json
- Remove data\silentgear\silentgear_materials\lead.json
- Remove data\silentgear\silentgear_materials\lumium.json
- Remove data\silentgear\silentgear_materials\metal_alloy.json
- Remove data\silentgear\silentgear_materials\netherrack.json
- Remove data\silentgear\silentgear_materials\nickel.json
- Remove data\silentgear\silentgear_materials\osmium.json
- Remove data\silentgear\silentgear_materials\redstone_alloy.json
- Remove data\silentgear\silentgear_materials\refined_glowstone.json
- Remove data\silentgear\silentgear_materials\refined_iron.json
- Remove data\silentgear\silentgear_materials\sandstone.json
- Remove data\silentgear\silentgear_materials\sheet_metal.json
- Remove data\silentgear\silentgear_materials\signalum.json
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
