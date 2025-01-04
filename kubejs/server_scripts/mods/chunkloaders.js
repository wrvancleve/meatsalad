ServerEvents.recipes(event => {
  replaceShaped(
    event,
    ['ioi', 'oeo', 'ioi'],
    {
      i: '#forge:storage_blocks/iron',
      o: 'minecraft:obsidian',
      e: 'meatsalad:infused_ender_pearl'
    },
    Item.of('chunkloaders:basic_chunk_loader', 1)
  )
  replaceShaped(
    event,
    ['bgb', 'gcg', 'bgb'],
    {
      b: 'minecraft:blaze_rod',
      g: '#forge:storage_blocks/gold',
      c: 'chunkloaders:basic_chunk_loader'
    },
    Item.of('chunkloaders:advanced_chunk_loader', 1)
  )
  replaceShaped(
    event,
    ['rdr', 'eae', 'rdr'],
    {
      r: '#forge:storage_blocks/redstone',
      d: '#forge:storage_blocks/diamond',
      e: 'meatsalad:infused_ender_pearl',
      a: 'chunkloaders:advanced_chunk_loader',
    },
    Item.of('chunkloaders:ultimate_chunk_loader', 1)
  )
})
