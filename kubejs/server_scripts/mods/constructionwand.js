ServerEvents.recipes(event => {
    event.remove({id: 'constructionwand:infinity_wand'});

    event.smithing(
      'constructionwand:infinity_wand',  // arg 1: output
      'constructionwand:diamond_wand', // arg 2: the item to be upgraded
      'kubejs:infinity_fabric'   // arg 3: the upgrade item
    ).id('meatsalad:infinity_wand')
  })
  