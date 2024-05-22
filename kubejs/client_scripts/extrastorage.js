JEIEvents.hideItems(event => {
  event.hide(/extrastorage:(block|disk|storagepart)_.+/)
  event.hide(/extrastorage:advanced_(importer|exporter)/)
})
