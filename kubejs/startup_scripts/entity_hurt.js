ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  if (event.source.player) {
    global.LivingHurtByPlayer(event);
  }
})
