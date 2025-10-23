vegaEmbed("#map", "map_fighters.json", { actions: false })
  .then(console.log)
  .catch(console.error);

vegaEmbed("#barchart", "bar_winrate.json?v=3", { actions: false })
  .then(console.log)
  .catch(console.error);

vegaEmbed("#stacked", "stack_victory_method.json", { actions: false })
  .then(console.log)
  .catch(console.error);

vegaEmbed("#scatter", "scatter_strikes_takedowns.json", { actions: false })
  .then(console.log)
  .catch(console.error);

