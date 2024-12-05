ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  if (event.source.player) {
    global.LivingHurtByPlayer(event)
  }
  global.LivingHurt(event)
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDamageEvent', event => {
  if (event.entity.isPlayer()) {
    global.PlayerDamagedByOthers(event)
  }

  global.GodEntityDamagedByOthers(event)
  global.OthersDamagedByGodEntity(event)
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDropsEvent', event => {
  if (event.entity.type in global.BOSSES) {
    event.setCanceled(true)
  }
})
