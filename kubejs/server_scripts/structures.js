MoreJSEvents.structureLoad(event => {
  const replaceBlocks = replacements => {
    event.forEachPalettes(palette => {
      palette.forEach(blockData => {
        if (replacements.hasOwnProperty(blockData.id)) {
          blockData.setBlock(replacements[blockData.id])
        }
      })
    })
  }

  const structureId = event.getId()
  if (structureId.startsWith('allthemodium')) {
    replaceBlocks({
      'minecraft:netherite_block': 'minecraft:air'
    })
  } else if (structureId.startsWith('cataclysm:sunken_city')) {
    replaceBlocks({
      'cataclysm:altar_of_amethyst': 'minecraft:air'
    })
  }
})
