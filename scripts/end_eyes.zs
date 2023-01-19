import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
import crafttweaker.api.loot.condition.RandomChanceLootCondition;
import crafttweaker.api.loot.condition.LootTableIdRegexLootCondition;

# Disable Exotic Eye
craftingTable.remove(<item:endrem:exotic_eye>);
mods.jei.JEI.hideIngredient(<item:endrem:exotic_eye>);

# Disable Magical Eye
craftingTable.remove(<item:endrem:magical_eye>);
mods.jei.JEI.hideIngredient(<item:endrem:magical_eye>);

# Disable Undead Eye
craftingTable.remove(<item:endrem:undead_eye>);
mods.jei.JEI.hideIngredient(<item:endrem:undead_eye>);

# Disable Witch Eye
craftingTable.remove(<item:endrem:witch_eye>);
mods.jei.JEI.hideIngredient(<item:endrem:witch_eye>);
craftingTable.remove(<item:endrem:witch_pupil>);
mods.jei.JEI.hideIngredient(<item:endrem:witch_pupil>);

# Black Eye
<item:endrem:black_eye>.removeTooltip("Pirates say it gave sight.*");
mods.jei.JEI.addDescription(<item:endrem:black_eye>, ["Obtained by killing Arachnarch in the poison dungeon of Everdawn"]);

# Cold Eye
<item:endrem:cold_eye>.removeTooltip("One of the last artifacts.*");
mods.jei.JEI.addDescription(<item:endrem:cold_eye>, ["Obtained by killing Starlit Crusher in the nature dungeon of Everbright"]);

# Evil Eye
villagerTrades.removeTrade(<profession:minecraft:cleric>, 5, <item:minecraft:emerald>, <item:endrem:evil_eye>, <item:minecraft:rabbit_foot>);
<item:endrem:evil_eye>.removeTooltip("A holy talisman said.*");
mods.jei.JEI.addDescription(<item:endrem:evil_eye>, ["Obtained by killing Netherite Monstrosity in the Soul Black Smith of the Nether"]);

# Lost Eye
<item:endrem:lost_eye>.removeTooltip("It is told that it was.*");
mods.jei.JEI.addDescription(<item:endrem:lost_eye>, ["Obtained in loot chests of the Lost City"]);

# Cryptic Eye
mods.jei.JEI.addDescription(<item:endrem:cryptic_eye>, ["Obtained by killing the Warden"]);

# Rogue Eye
<item:endrem:rogue_eye>.removeTooltip("This eye is believed.*");
mods.jei.JEI.addDescription(<item:endrem:rogue_eye>, ["Can be obtained as loot from Adherents in the final castle of the Twilight Forest"]);

# Old Eye
<item:endrem:old_eye>.removeTooltip("Legends say this eye.*");
mods.jei.JEI.addDescription(<item:endrem:old_eye>, ["Obtained in teasure chests of The Other dimension"]);

# Nether Eye
<item:endrem:nether_eye>.removeTooltip("It was lost by a demon.*");
mods.jei.JEI.addDescription(<item:endrem:nether_eye>, ["Obtained in loot chests of Nether Fortresses"]);

# Wither Eye
<item:endrem:wither_eye>.removeTooltip("Has witnessed destruction.*");
mods.jei.JEI.addDescription(<item:endrem:wither_eye>, ["Obtained by killing the Wither"]);

# Guardian Eye
<item:endrem:guardian_eye>.removeTooltip("It has seen many warriors.*");
mods.jei.JEI.addDescription(<item:endrem:guardian_eye>, ["Obtained by killing the Elder Guardian"]);

# Corrupted Eye
<item:endrem:corrupted_eye>.removeTooltip("The eye of a greedy.*");
mods.jei.JEI.addDescription(<item:endrem:corrupted_eye>, ["Obtained in loot chests of Pillager Outposts"]);

# Cursed Eye
<item:endrem:cursed_eye>.removeTooltip("A powerful yet destructive.*");
mods.jei.JEI.addDescription(<item:endrem:cursed_eye>, ["Obtained in treasure chests of Nether Bastions"]);
