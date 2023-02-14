import { GeoJSONSource, useMap } from "react-map-gl";
import "./LonLatInfo.css";
import { useEffect, useState } from "react";

const LonLatInfo = () => {
  const { current: currMap } = useMap();
  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    currMap?.on("mousemove", (e) => {
      setMousePosition({ lng: e.lngLat.lng, lat: e.lngLat.lat });
    });
  }, []);

  return (
    <div className="position-info">
      <p>
        {`${mousePosition.lng.toFixed(5)},
            ${mousePosition.lat.toFixed(5)}`}
      </p>
      <p>{currMap?.getZoom()}</p>

      <button onClick={() => {
        const geojsonSource = currMap?.getSource('aircraft') as GeoJSONSource;
        geojsonSource.setData({
        "type": "FeatureCollection",
        "features": []
        });
      }}>hide planes</button>
    </div>
  );
};

export default LonLatInfo;
