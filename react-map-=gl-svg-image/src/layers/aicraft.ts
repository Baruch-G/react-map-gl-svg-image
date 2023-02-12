const aircraftLayer = {
  id: "aircraft-layer",
  type: "symbol",
  source: "aircraft",
  layout: {
    "icon-allow-overlap": true,
    "icon-image": "plane",
    "icon-rotation-alignment": "map",
    "icon-size": 1
  },
  filter: [
    "all",
    ["==", "$type", "Point"] && ["==", ["get", "entity"], "aircraft"],
  ],
};

export { aircraftLayer };
