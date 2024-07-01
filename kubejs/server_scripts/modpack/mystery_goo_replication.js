//priority: 70

ServerEvents.recipes(event => {
  const createGooReplication = (event, itemId, itemNbt, itemNbtAlias, stage) => {
    const itemName = itemId.split(':').pop()
    const hasNbt = itemNbt != null
    const input = hasNbt
      ? Item.of(itemId, itemNbt).strongNBT()
      : itemId

    const replications = [
      {
        size: 2,
        pattern: [
          ' M ',
          'MIM',
          ' M '
        ],
      },
      {
        size: 4,
        pattern: [
          'MMM',
          'MIM',
          'MMM'
        ],
      },
      
    ]
    replications.forEach(replication => {
      let size = replication.size
      let output = Item.of(itemId, size)
      if (hasNbt) {
        output = output.withNBT(itemNbt).strongNBT()
      }
      let recipeId = hasNbt
        ? `goo_replication/${size}x/${itemNbtAlias}_${itemName}`
        : `goo_replication/${size}x/${itemName}`

      let replicationRecipe = event.shaped(output, replication.pattern, {
        M: 'meatsalad:mystery_goo',
        I: input
      })
      if (stage != null) {
        replicationRecipe = replicationRecipe.stage(stage)
      }
      replicationRecipe = replicationRecipe.id(`meatsalad:${recipeId}`)
    })
  }

  // Other replications
  const tagReplications = Ingredient.of('#meatsalad:mystery_goo_replication').stacks
  tagReplications.forEach(tagReplication => {
    createGooReplication(event, tagReplication.id)
  })
})
