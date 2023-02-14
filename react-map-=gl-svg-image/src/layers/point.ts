  const pointLayer = {
    id: "point-layer",
    type: "circle",
    source: "geo-entities",
    paint: {
      "circle-radius": 6,
      "circle-color": "#B42222",
    },
    minzoom: 4,
    filter: [
      "all",
      ["==", "$type", "Point"] && ["==", ["get", "entity"], "point"],
    ],
  };

  export {pointLayer}