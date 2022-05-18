import { TileLayer, MapContainer, useMapEvents, Marker } from "react-leaflet";
import { icon } from "leaflet";

import loactionI from "../assets/icon-location.svg";

import './Map.css'

function LocationMarker(props) {
  var marker = icon({
    iconUrl: loactionI,
    iconSize: [46, 56],
  });
  const map = useMapEvents({});
  map.flyTo(props.position, map.getZoom());
  return props.position === null ? null : (
    <Marker position={props.position} icon={marker}></Marker>
  );
}

const Map = (props) => {
  
  return (
    <div className="fluid-container map">
      <MapContainer
        className="map"
        center={props.position}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={props.position} />
      </MapContainer>
    </div>
  );
  
}

export default Map;
