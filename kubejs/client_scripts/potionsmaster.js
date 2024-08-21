ClientEvents.lang('en_us', event => {
  event.add('potionsmaster', 'item.potionsmaster.allthemodium_powder', 'Palladium Powder')
  event.add('potionsmaster', 'item.potionsmaster.calcinatedallthemodium_powder', 'Calcinated Palladium Powder')
  event.add('potionsmaster', 'item.minecraft.potion.effect.allthemodium_sight', 'Palladium Sight')
  event.add('potionsmaster', 'item.minecraft.splash_potion.effect.allthemodium_sight', 'Splash Potion of Palladium Sight')
  event.add('potionsmaster', 'item.minecraft.lingering_potion.effect.allthemodium_sight', 'Lingering Potion of Palladium Sight')
  event.add('potionsmaster', 'effect.potionsmaster.allthemodiumpotioneffect', 'Palladium Sight')
})

JEIEvents.hideItems(event => {
  event.hide([
    'potionsmaster:activated_charcoal',
    'potionsmaster:adamantite_powder',
    'potionsmaster:allthemodium_powder',
    'potionsmaster:aluminium_powder',
    'potionsmaster:azuresilver_powder',
    'potionsmaster:bezoar',
    'potionsmaster:charcoal_powder',
    'potionsmaster:coal_powder',
    'potionsmaster:copper_powder',
    'potionsmaster:crimsoniron_powder',
    'potionsmaster:diamond_powder',
    'potionsmaster:emerald_powder',
    'potionsmaster:ender_powder',
    'potionsmaster:gallbladder',
    'potionsmaster:gold_powder',
    'potionsmaster:iron_powder',
    'potionsmaster:lapis_powder',
    'potionsmaster:lead_powder',
    'potionsmaster:mythril_powder',
    'potionsmaster:netherite_powder',
    'potionsmaster:nickel_powder',
    'potionsmaster:osmium_powder',
    'potionsmaster:pestle',
    'potionsmaster:platinum_powder',
    'potionsmaster:quartz_powder',
    'potionsmaster:redstone_powder',
    'potionsmaster:silver_powder',
    'potionsmaster:tile_mortar',
    'potionsmaster:tin_powder',
    'potionsmaster:unobtainium_powder',
    'potionsmaster:uranium_powder',
    'potionsmaster:vibranium_powder',
    'potionsmaster:zinc_powder',
  ])
})
