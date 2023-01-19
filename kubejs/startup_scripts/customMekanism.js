onEvent('mekanism.slurry.registry', event => {
	event.create("dirty_neutronium", "dirty").color(0x3E3E3E).ore('forge:ores/neutronium')
	event.create("clean_neutronium", "clean").color(0x3E3E3E).ore('forge:ores/neutronium')
})