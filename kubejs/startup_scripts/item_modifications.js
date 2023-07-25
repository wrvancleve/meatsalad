ItemEvents.modification(event => {
  const UNCOMMON = "UNCOMMON";
  const RARE = "RARE";
  const EPIC = "EPIC";

  function modifyItem(itemId, rarity, maxStackSize) {
    event.modify(itemId, item => {
      if (rarity != null) {
        item.rarity = rarity
      }
      if (maxStackSize != null) {
        item.maxStackSize = 64
      }
      
    })
  }

  modifyItem('alexsmobs:mimicream', RARE);
  modifyItem('gateways:gate_pearl', RARE, 64);
  modifyItem('industrialforegoing:laser_lens0', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens1', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens2', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens3', RARE, 64);
  modifyItem('industrialforegoing:laser_lens4', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens5', RARE, 64);
  modifyItem('industrialforegoing:laser_lens6', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens7', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens8', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens9', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens10', RARE, 64);
  modifyItem('industrialforegoing:laser_lens11', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens12', RARE, 64);
  modifyItem('industrialforegoing:laser_lens13', RARE, 64);
  modifyItem('industrialforegoing:laser_lens14', UNCOMMON, 64);
  modifyItem('industrialforegoing:laser_lens15', UNCOMMON, 64);
})