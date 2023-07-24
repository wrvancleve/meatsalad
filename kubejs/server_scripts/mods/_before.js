//priority: 10

global['replaceShaped'] = function (event, pattern, key, mod, itemId, recipeId) {
  event.remove({ id: `${mod}:${recipeId != null ? recipeId : itemId}` })
  event.shaped(`${mod}:${itemId}`, pattern, key).id(`meatsalad:${itemId}`);
}
