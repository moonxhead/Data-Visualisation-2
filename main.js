vegaEmbed("#map", "map.json", { actions: false })
  .then(console.log)
  .catch(console.error);

vegaEmbed("#barchart", "barchart.json", { actions: false })
  .then(console.log)
  .catch(console.error);

vegaEmbed("#stacked", "stacked.json", { actions: false })
  .then(console.log)
  .catch(console.error);

vegaEmbed("#scatter", "scatter.json", { actions: false })
  .then(console.log)
  .catch(console.error);
