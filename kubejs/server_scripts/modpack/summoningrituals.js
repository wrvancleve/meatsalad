//priority: 70

const Summons = {
  ancient_remnant: {
    boss: 'cataclysm:ancient_remnant',
    inputs: [
      'cataclysm:desert_eye',
    ],
    bossNameColor: 'Gray'
  },
  ender_guardian: {
    boss: 'cataclysm:ender_guardian',
    inputs: [
      'cataclysm:void_eye',
    ],
    bossNameColor: 'Light Purple'
  },
  ignis: {
    boss: 'cataclysm:ignis',
    inputs: [
      'cataclysm:flame_eye',
    ],
    bossNameColor: 'Dark Red'
  },
  maledictus: {
    boss: 'cataclysm:maledictus',
    inputs: [
      'cataclysm:cursed_eye',
    ],
    bossNameColor: 'Aqua'
  },
  netherite_monstrosity: {
    boss: 'cataclysm:netherite_monstrosity',
    inputs: [
      'cataclysm:monstrous_eye',
    ],
    bossNameColor: 'Red'
  },
  the_harbinger: {
    boss: 'cataclysm:the_harbinger',
    inputs: [
      'cataclysm:mech_eye',
    ],
    bossNameColor: 'Red'
  },
}

ServerEvents.recipes(event => {
  event.recipes.summoningrituals.altar('meatsalad:mystery_goo')
    .mobOutput('cataclysm:ender_golem')
    .input(Item.of('minecraft:obsidian', 4))
    .input(Item.of('minecraft:crying_obsidian', 3))
    .input(Item.of('cataclysm:void_stone', 1))
    .recipeTime(200)
    .id('meatsalad:summoning/ender_golem')

  let createBossSummons = (bossSummon) => {
    const boss = bossSummon.boss
    const bossMobId = boss.split(':')[1]
    const inputs = bossSummon.inputs
    const bossNameColor = bossSummon.bossNameColor

    for (let i = 0; i <= 3; i++) {
      let entityId = `${bossMobId}_${i}`
      let summoningRitual = event.recipes.summoningrituals.altar('meatsalad:mystery_goo')

      // Add mob output
      if (i == 0) {
        summoningRitual = summoningRitual.mobOutput(boss)
      } else {
        summoningRitual = summoningRitual.mobOutput(
          SummoningOutput.mob(boss)
            .data({
              //DeathLootTable: `meatsalad:entities/${entityId}`,
              CustomName: `{"translate": "name.meatsalad.${entityId}","color": "${bossNameColor}"}`
            })
        )
      }

      // Add inputs
      inputs.forEach(input => {
        summoningRitual = summoningRitual.input(input)
      })
      switch (i) {
        case 0:
          summoningRitual = summoningRitual.input('meatsalad:infused_ender_pearl')
          break
        case 1:
          summoningRitual = summoningRitual.input('meatsalad:dark_matter')
          break
        case 2:
          summoningRitual = summoningRitual.input('meatsalad:infused_dark_matter')
          break
        case 3:
          summoningRitual = summoningRitual.input('meatsalad:draconic_infused_dark_matter')
          break
      }

      // Finalize
      summoningRitual = summoningRitual.recipeTime(200 + (100 * i))
      summoningRitual = summoningRitual.id(`meatsalad:summoning/${entityId}`)
    }
  }

  Object.values(Summons).forEach(bossSummon => {
    createBossSummons(bossSummon)
  })
})

SummoningRituals.complete(event => {
  if (!event.player) return
  let summonId = event.recipe.getId() + ''
  if (summonId.split(':')[0] !== 'meatsalad') return

  let summonName = summonId.split('/').pop()
  let summonModifier = parseInt(summonName.split('_').pop())
  if (summonModifier) {
    let summonMobName = summonName.substring(0, summonName.lastIndexOf('_'))
    let mobId = Summons[summonMobName].boss

    let x = event.pos.x
    let y = event.pos.y
    let z = event.pos.z
    let radius = 8
    let area = new AABB.of(x - radius, y - radius, z - radius, x + radius, y + radius, z + radius)
    event.level.getEntitiesWithin(area).forEach(entity => {
      let displayName = entity.getDisplayName().getString() + ''
      if (entity.isLiving() && entity.type == mobId && displayName.endsWith('+'.repeat(summonModifier)) && !entity.isGlowing()) {
        if (summonModifier > 0) {
          entity.persistentData.putInt('chaos_level', summonModifier)
        }
        entity.modifyAttribute('minecraft:generic.max_health', 'HealthBoost', 0.1 * summonModifier, 'multiply_total')
        entity.modifyAttribute('minecraft:generic.attack_damage', 'AttackBoost', 0.1 * summonModifier, 'multiply_total')
        entity.heal(entity.maxHealth)
        entity.potionEffects.add('meatsalad:glimpse_of_god', 20 * 3600, 0, false, false)
        entity.setGlowing(true)
      }
    })
  }
})
