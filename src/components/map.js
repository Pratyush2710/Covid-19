import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.css";
import { showDataOnMap } from "../utils/utils";

function Map({ countries, casesType, center, zoom }) {
  console.log("center", center);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} maxZoom={18}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
