# Meat Salad
1.20.1 Minecraft Forge Modpack with adventure, tech, and a little bit of everything else

**Table of contents**
- [Manual Mod Changes](#manual-mod-changes)
    - [Alex's Mobs](#alexs-mobs)
    - [Apotheosis](#apotheosis)
    - [AllTheModium](#allthemodium)
    - [Industrial Foregoing](#industrial-foregoing)
    - [Iron Spellbooks](#iron-spellbooks)
    - [Nullscape](#nullscape)
    - [Silent Gear](#silent-gear)
- [Server Startup](#server-startup)

## Manual Mod Changes
### Apotheosis
- Remove data\apotheosis\affixes\sword\attribute\elongated.json
- Remove data\apotheosis\affix_loot_entries\overworld\chainmail_*.json
- Remove data\apotheosis\affix_loot_entries\overworld\turtle_helmet.json
- Remove data\apotheosis\affix_loot_entries\the_end\netherite_*.json
- Remove data\apotheosis\bosses\the_nether\zombified_piglin.json
- Remove data\apotheosis\bosses\the_end\endermite.json
- Remove data\apotheosis\bosses\the_end\shulker.json
- Remove data\apotheosis\worldgen\structure_set

### AllTheModium
- Remove data\apotheosis

### CTOV
- Remove data\ctov\worldgen\structure_set

### End Remastered
- Remove data\endrem\loot_modifiers\*.json (except pillager_outpost and witch)
- Remove data\endrem\loot_tables\minecraft\chests\*.json (except pillager_outpost)
- Remove data\endrem\loot_tables\minecraft\entities\*.json (except witch)

### Industrial Foregoing
- Remove data\industrialforegoing\recipes\laser_drill_ore\

### Iron Spellbooks
- Remove data\irons_spellbooks\affixes\armor\attribute\cooldown.json
- Remove data\irons_spellbooks\affixes\armor\attribute\spell_power.json
- Remove data\irons_spellbooks\affixes\sword
- Remove data\irons_spellbooks\bosses
- Remove data\irons_spellbooks\boss_gear
- Remove data\irons_spellbooks\loot_modifiers\entity_drops\blaze_modifier.json
- Remove data\irons_spellbooks\loot_tables\entities\additional_blaze_loot.json

### Nullscape
- Remove data\minecraft\loot_tables (for blocks\amethyst_block.json)

### Progressive Bosses
- Remove data\minecraft\loot_tables (for blocks\amethyst_block.json)

### Silent Gear
- Remove data\silentgear\recipes\smithing
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

### Treasure Bags
- Remove data

### YungsBetterDesertTemples
- Remove data\betterdeserttemples\worldgen\structure_set

### YungsBetterJungleTemples
- Remove data\betterjungletemples\worldgen\structure_set

### YungsBetterMineshafts
- Remove data\bettermineshafts\worldgen\structure_set

### YungsBetterNetherFortresses
- Remove data\betterfortresses\worldgen\structure_set

### YungsBetterOceanMonuments
- Remove data\betteroceanmonuments\worldgen\structure_set

### YungsBetterStrongholds
- Remove data\betterstrongholds\worldgen\structure_set

### YungsBetterWitchHuts
- Remove data\betterwitchhuts\worldgen\structure_set\witch_hut

## Server Startup
1. `wget <forgeInstallerURL>`
2. `java -jar <forgeInstaller>.jar --installServer`
3. Delete installer, run.bat
4. Restore run.sh, user_jvm_args.txt
5. Delete client side mods
    - Entity Culling
    - Legendary Tooltips
    - Oculus
    - Rubidium
    - Rubidium Extras
