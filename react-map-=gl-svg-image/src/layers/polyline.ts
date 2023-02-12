const polylineLayer = {
    id: "polyline-layer",
    type: "line",
    source: "geo-entities",
    layout: {
        'line-cap': 'round',
        'line-join': 'round'
    },
    paint: {
      "line-color":  [
        'case',
        ['boolean', ['has', "color"], true], 
        ['get', "color"],
        "green"
      ],
      "line-width": 3
    },
    filter: ["all", 
    ["==", "$type", "LineString"] && ["==", ["get", "entity"], "polyline"]],
  };

  export {polylineLayer}