//priority: 900000000

Platform.mods.kubejs.name = 'Meatsalad'
Platform.setModName('meatsalad', 'Meatsalad')

global.BOSSES = {
  'cataclysm:ancient_remnant': {
    maxChaosLevel: 3,
    killedAdvancement: "cataclysm:kill_remnant",
    heart: "yellow",
    extraLoot: [],
  },
  'irons_spellbooks:dead_king': {
    maxChaosLevel: 0,
    killedAdvancement: "meatsalad:kill_dead_king",
    heart: "yellow",
    extraLoot: [],
  },
  'minecraft:elder_guardian': {
    maxChaosLevel: 0,
    killedAdvancement: "meatsalad:kill_elder_guardian",
    heart: "yellow",
    extraLoot: ["progressivebosses:elder_guardian_spike"],
  },
  'minecraft:ender_dragon': {
    maxChaosLevel: 0,
    killedAdvancement: "minecraft:end/kill_dragon",
    heart: "yellow",
    extraLoot: ["minecraft:dragon_egg", "quark:dragon_scale"],
  },
  'cataclysm:ender_guardian': {
    maxChaosLevel: 3,
    killedAdvancement: "cataclysm:kill_ender_guardian",
    heart: "green",
    extraLoot: [],
  },
  'awakened_bosses:herobrine': {
    maxChaosLevel: 0,
    killedAdvancement: "awakened_bosses:herobrine_dead",
    heart: "green",
    extraLoot: [],
  },
  'cataclysm:ignis': {
    maxChaosLevel: 3,
    killedAdvancement: "cataclysm:kill_ignis",
    heart: "green",
    extraLoot: [],
  },
  'cataclysm:maledictus': {
    maxChaosLevel: 3,
    killedAdvancement: "cataclysm:kill_maledictus",
    heart: "yellow",
    extraLoot: [],
  },
  'cataclysm:netherite_monstrosity': {
    maxChaosLevel: 3,
    killedAdvancement: "cataclysm:kill_monstrosity",
    heart: "yellow",
    extraLoot: [],
  },
  'cataclysm:the_harbinger': {
    maxChaosLevel: 3,
    killedAdvancement: "cataclysm:kill_harbinger",
    heart: "yellow",
    extraLoot: [],
  },
  'cataclysm:the_leviathan': {
    maxChaosLevel: 0,
    killedAdvancement: "cataclysm:kill_leviathan",
    heart: "green",
    extraLoot: [],
  },
  'minecraft:warden': {
    maxChaosLevel: 0,
    killedAdvancement: "meatsalad:kill_warden",
    heart: "blue",
    extraLoot: ["minecraft:echo_shard", "apotheosis:warden_tendril"],
  },
  'minecraft:wither': {
    maxChaosLevel: 0,
    killedAdvancement: "meatsalad:kill_wither",
    heart: "yellow",
    extraLoot: ["minecraft:nether_star"],
  },
}

global.mekStackAdditions = [
  { material: 'crimson_iron', color:'#fc9aad', onlyMekItems: true },
  { material: 'azure_silver', color:'#e89ffc', onlyMekItems: true },
  { material: 'adamantite', color: '#ec1321' },
  { material: 'mythril', color: '#64eafb' }
]

global.getReadableText = text => {
  return String(text)
    .split('_')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

global.randomGet = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}
