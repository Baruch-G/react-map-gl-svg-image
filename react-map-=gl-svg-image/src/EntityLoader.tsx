import { useEffect } from "react";
import { useMap, Source, Layer } from "react-map-gl";
import demoEntities from "./DemoEntities.json";
import pl from "./assets/aircraft.png";
import { polygonLayer, polygonOutlineLayer, polygonLabelLayer } from "./layers/polygon";
import { pointLayer } from "./layers/point";
import { aircraftLabelLayer, aircraftLayer } from "./layers/aicraft";
import aircraft from "./assets/aircraft.svg";
import { polylineLayer } from "./layers/polyline";
import { routeLayer } from "./layers/route";

const Aircraft = () => {
  const { current: currMap } = useMap();
  useEffect(() => {
    let img = new Image(40, 40);
    img.onload = () => currMap?.addImage("plane", img);
    img.src = aircraft;
  }, []);

  return (
    <>
      <Source id="geo-entities" type="geojson" data={demoEntities}>
        <Layer {...polygonLayer} />
        <Layer {...polygonOutlineLayer} />
      
        <Layer {...pointLayer} />
        <Layer {...polylineLayer} />
        <Layer {...routeLayer} />
      </Source>
      <Source id="aircraft" type="geojson" data={demoEntities}>
        <Layer {...aircraftLayer} />
        <Layer {...aircraftLabelLayer} />

      </Source>
    </>
  );
};

export default Aircraft;
