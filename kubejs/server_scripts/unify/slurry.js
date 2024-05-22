//priority: 200
ServerEvents.recipes(event => {
  let dirtySlurryFromOre = (material) => {
    event.custom({
      type: 'mekanism:dissolution',
      gasInput: {
        amount: 1,
        gas: 'mekanism:sulfuric_acid'
      },
      itemInput: {
        ingredient: {
          tag: `forge:ores/${material}`
        }
      },
      output: {
        amount: 1000,
        chemicalType: 'slurry',
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:dissolution/${material}_dirty_slurry_from_ore`);
  }
  let dirtySlurryFromRawBlock = (material) => {
    event.custom({
      type: 'mekanism:dissolution',
      gasInput: {
        amount: 2,
        gas: 'mekanism:sulfuric_acid'
      },
      itemInput: {
        ingredient: {
          tag: `forge:storage_blocks/raw_${material}`
        }
      },
      output: {
        amount: 6000,
        chemicalType: 'slurry',
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:dissolution/${material}_dirty_slurry_from_raw_block`);
  }
  let dirtySlurryFromRawMaterials = (material) => {
    event.custom({
      type: 'mekanism:dissolution',
      gasInput: {
        amount: 1,
        gas: 'mekanism:sulfuric_acid'
      },
      itemInput: {
        amount: 3,
        ingredient: {
          tag: `forge:raw_materials/${material}`
        }
      },
      output: {
        amount: 2000,
        chemicalType: 'slurry',
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:dissolution/${material}_dirty_slurry_from_raw_materials`);
  }
  let dirtySlurryToCleanSlurry = (material) => {
    event.custom({
      type: 'mekanism:washing',
      fluidInput: {
        amount: 5,
        tag: 'minecraft:water'
      },
      output: {
        amount: 1,
        slurry: `kubejs:clean_${material}`
      },
      slurryInput: {
        amount: 1,
        slurry: `kubejs:dirty_${material}`
      }
    }).id(`meatsalad:washing/${material}_clean_slurry_from_dirty_slurry`);
  }

  global.mekStackAdditions.forEach(entry => {
    let material = entry.material
    if (!AlmostUnified.getPreferredItemForTag(`forge:ores/${material}`).isEmpty()) {
      dirtySlurryFromOre(material)
    }
    
    if (!AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${material}`).isEmpty()) {
      dirtySlurryFromRawBlock(material)
    }

    if (!AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`).isEmpty()) {
      dirtySlurryFromRawMaterials(material)
    }

    dirtySlurryToCleanSlurry(material)
  })
})
