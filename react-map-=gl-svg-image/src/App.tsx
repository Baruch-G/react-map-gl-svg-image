import Map from "react-map-gl";
import maplibregl from "maplibre-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useState, useRef, useEffect } from "react";
import "./App.css";
import Aircraft from './EntityLoader'

function App() {
  const [viewState, setViewState] = useState({
    longitude: 35,
    latitude: 32,
    zoom: 9,
    pitch: 0,
  });


  return (
    <div className="App">
      <Map

        mapLib={maplibregl}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="http://localhost:3650/api/maps/israel/style.json"
      >
        <Aircraft/>

      </Map>
    </div>
  );
}

export default App;
