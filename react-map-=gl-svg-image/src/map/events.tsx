import { useEffect } from "react";
import { useMap, MapboxGeoJSONFeature, Layer } from "react-map-gl";
import MapSources, { getSource, leyers, sources } from "./sources/source";

const MapEvents = () => {
  const { current: currMap } = useMap();

  const setFeatureMode = (
    source: string,
    id: string | number | undefined,
    state: { [key: string]: any }
  ) => {
    if (id == undefined) return;
    currMap?.setFeatureState(
      {
        source: source,
        id: id,
      },
      state
    );
  };

  const unSelectOtherFeatures = () => {
    Object.values(MapSources).forEach((src) => {
      currMap?.querySourceFeatures(src)?.forEach((feature) => {
        setFeatureMode(src, feature.id, { selected: false });
      });
    });
  };

  const setSelectedFeatureMode = (e: any, LayerId: string) => {
    unSelectOtherFeatures();
    if (e.features == null || e.features?.length != 1) return;
    const feature: MapboxGeoJSONFeature = e.features[0];
    setFeatureMode(getSource(LayerId), feature.id, { selected: true });
  };

  const setMouseHoverFeatureMode = (e: any, LayerId: string) => {
    // No need to unselect
    if (e.features == null || e.features?.length != 1) return;
    const feature: MapboxGeoJSONFeature = e.features[0];
    setFeatureMode(getSource(LayerId), feature.id, { hover: true });
  };

  const setMouseLeaveFeatureMode = (e: any) => {
    Object.values(MapSources).forEach((src) => {
      currMap?.querySourceFeatures(src)?.forEach((feature) => {
        setFeatureMode(src, feature.id, { hover: false });
      });
    });
  }

  leyers().forEach((layer) => {
    currMap?.on("click", layer.id, (e) => {
      setSelectedFeatureMode(e, layer.id);
    });

    currMap?.on("click", (e) => {
      if(currMap.queryRenderedFeatures(e.point).length == 0) unSelectOtherFeatures();
    });

    currMap?.on("mouseover", layer.id, (e) => {
      setMouseHoverFeatureMode(e, layer.id);
    });
    currMap?.on("mouseleave", layer.id, (e) => {
      setMouseLeaveFeatureMode(e);
    });
  });

  // currMap?.on("click", "polygon-layer", (e) => {
  //   setSelectedFeatureMode(e);
  // });

  // currMap?.on("click", "polyline-layer", (e) => {
  //   console.log("polylinr clicked")
  //   setSelectedFeatureMode(e);
  // });

  // Object.values(MapSources).forEach((source) => {});
  // currMap?.on("mouseover", "polygon-layer", (e) => {
  //   setMouseHoverFeatureMode(e);
  // });

  // currMap?.on("mouseleave", "polygon-layer", (e) => {
  //   setMouseHoverFeatureMode(e);
  // });

  return <></>;
};
export default MapEvents;
