function EntityHurtCustomModel() {
  this.returnDamage = 0
}

const MAGIC_DAMAGES = [
  'magic',
  'blood_magic',
  'dragon_breath_pool',
  'eldritch_magic',
  'ender_magic',
  'evocation_magic',
  'fire_field',
  'fire_magic',
  'holy_magic',
  'ice_magic',
  'lightning_magic',
  'nature_magic',
  'poison_cloud',
]

function pardonOfGodEntityHurtByPlayer(event, data) {
  let entity = event.entity
  let damageType = event.source.getType() + ''
  if (damageType == 'player') {
    if (entity.hasEffect('meatsalad:pardon_of_god_melee')) {
      pardonOfGodLevelEffect(event, data, entity.getEffect('meatsalad:pardon_of_god_melee').getAmplifier())
    }
  } else if (damageType == 'arrow') {
    if (entity.hasEffect('meatsalad:pardon_of_god_projectile')) {
      pardonOfGodLevelEffect(event, data, entity.getEffect('meatsalad:pardon_of_god_projectile').getAmplifier())
    }
  } else if (MAGIC_DAMAGES.includes(damageType)) {
    if (entity.hasEffect('meatsalad:pardon_of_god_magic')) {
      pardonOfGodLevelEffect(event, data, entity.getEffect('meatsalad:pardon_of_god_magic').getAmplifier())
    }
  }
}

function pardonOfGodLevelEffect(event, data, amplifier) {
  switch (amplifier) {
    case 0:
      event.amount = 0
      break
    case 1:
      event.entity.heal(event.amount)
      event.amount = 0
      break
    case 2:
      event.entity.heal(event.amount)
      data.returnDamage = data.returnDamage + event.amount
      event.amount = 0
      break
    default:
      event.entity.heal(event.amount)
      data.returnDamage = data.returnDamage + event.amount
      event.amount = 0
      break
  }
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  if (event.entity.type == 'awakened_bosses:herobrine') {
    // Apply damage cap for Herobrine
    event.setAmount(Math.min(event.getAmount(), 35))
  }
  
  if (event.source.player) {
    // Damage source is from player
    let player = event.source.player
    let data = new EntityHurtCustomModel()
    pardonOfGodEntityHurtByPlayer(event, data)
    if (data.returnDamage != 0) {
      player.attack(data.returnDamage)
    }
  }
})
