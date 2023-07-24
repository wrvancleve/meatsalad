ItemEvents.modification(event => {
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

  modifyItem('alexsmobs:mimicream', EPIC);
  modifyItem('gateways:gate_pearl', EPIC, 64);
  modifyItem('industrialforegoing:laser_lens0', RARE, 64);
  modifyItem('industrialforegoing:laser_lens1', RARE, 64);
  modifyItem('industrialforegoing:laser_lens2', RARE, 64);
  modifyItem('industrialforegoing:laser_lens3', EPIC, 64);
  modifyItem('industrialforegoing:laser_lens4', RARE, 64);
  modifyItem('industrialforegoing:laser_lens5', EPIC, 64);
  modifyItem('industrialforegoing:laser_lens6', RARE, 64);
  modifyItem('industrialforegoing:laser_lens7', RARE, 64);
  modifyItem('industrialforegoing:laser_lens8', RARE, 64);
  modifyItem('industrialforegoing:laser_lens9', RARE, 64);
  modifyItem('industrialforegoing:laser_lens10', EPIC, 64);
  modifyItem('industrialforegoing:laser_lens11', RARE, 64);
  modifyItem('industrialforegoing:laser_lens12', EPIC, 64);
  modifyItem('industrialforegoing:laser_lens13', EPIC, 64);
  modifyItem('industrialforegoing:laser_lens14', RARE, 64);
  modifyItem('industrialforegoing:laser_lens15', RARE, 64);
})