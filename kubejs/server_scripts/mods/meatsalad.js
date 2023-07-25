ServerEvents.recipes(event => {
  event.shaped('8x kubejs:ancient_powder', [
    'ARA',
    'SaE',
    'APA'
  ], {
    A: '#forge:dusts/amethyst',
    R: '#forge:dusts/ruby',
    S: '#forge:dusts/sapphire',
    a: 'allthemodium:ancient_soulberries',
    E: '#forge:dusts/emerald',
    P: '#forge:dusts/peridot',
  }).id('meatsalad:ancient_powder');

  event.shaped('kubejs:cosmic_shelling', [
    'fEl',
    'SUS',
    'eNi'
  ], {
    f: 'minecraft:fire_charge',
    E: 'kubejs:ender_star',
    l: 'thermal:lightning_charge',
    S: 'ae2:quantum_entangled_singularity',
    U: 'kubejs:uu_matter',
    e: 'thermal:earth_charge',
    N: 'minecraft:nether_star',
    i: 'thermal:ice_charge',
  }).id('meatsalad:cosmic_shelling');

  event.shaped('kubejs:dragon_soul', [
    'BBB',
    'SES',
    'BBB'
  ], {
    B: 'minecraft:dragon_breath',
    S: 'quark:dragon_scale',
    E: 'minecraft:dragon_egg'
  }).id('meatsalad:dragon_soul');
})