import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import './Map.css';

const Map = (props) => {

  const [viewport, setViewport] = useState({
    latitude: props.location.lat,
    longitude: props.location.lng,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"%REACT_APP_MAPBOX_API_KEY%"}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker latitude={props.location.lat} longitude={props.location.lng}>
          <div className="map-marker"></div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;