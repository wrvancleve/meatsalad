ServerEvents.tags('item', event => {
  const endEyes = [
    'endrem:black_eye',
    'endrem:cold_eye',
    'endrem:corrupted_eye',
    'endrem:cursed_eye',
    'endrem:evil_eye',
    'endrem:guardian_eye',
    'endrem:lost_eye',
    'endrem:magical_eye',
    'endrem:nether_eye',
    'endrem:old_eye',
    'endrem:undead_eye',
    'endrem:wither_eye',
  ]
  endEyes.forEach(endEye => {
    event.add('endrem:ender_portal_eyes', endEye)
  })
})

ServerEvents.recipes(event => {
  removeRecipes(event, [
    'endrem:exotic_eye',
    'endrem:undead_eye',
    'endrem:witch_eye',
  ])

  energize(event,
    [
      Ingredient.of('#endrem:ender_portal_eyes'),
    ],
    20000,
    Item.of('meatsalad:mystery_goo')
  )
})
