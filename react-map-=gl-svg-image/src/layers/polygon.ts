const polygonLayer = {
  id: "polygon-layer",
  type: "fill",
  source: "geo-entities",
  paint: {
    "fill-color": [
      "case",
      ["boolean", ["has", "color"], true],
      ["get", "color"],
      "gray",
    ],
    "fill-opacity": 0.4,
  },
  filter: ["==", "$type", "Polygon"],
};

const polygonOutlineLayer = {
  id: "polygon-outline-layer",
  type: "line",
  source: "geo-entities",
  paint: {
    "line-width": 1,
    "line-color": [
      "case",
      ["boolean", ["has", "color"], true],
      ["get", "color"],
      "gray",
    ],
  },
  filter: ["==", "$type", "Polygon"],
};

const polygonLabelLayer = {
  id: "polygon-label-layer",
  type: "symbol",
  source: "geo-entities",
  layout: {
    "text-field": "dfdfs",
    // 'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
    // 'text-radial-offset': 0.5,
    // 'text-justify': 'auto',
    // 'icon-image': ['get', 'icon']
  },
  filter: ["==", "$type", "Polygon"],
};

export { polygonLayer, polygonOutlineLayer, polygonLabelLayer };
