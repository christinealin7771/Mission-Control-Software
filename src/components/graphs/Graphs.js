import React, { useEffect } from "react";
import 'leaflet';
import L from 'leaflet';
import "leaflet.heat";
import {MapContainer, TileLayer, Marker, Popup, FeatureGroup, useMap, GeoJSON, Rectangle } from 'react-leaflet';
import './Graphs.css'
import { addressPoints } from "./addressPoints";

export default function Graphs() {
  useEffect(() => {
    var map = L.map("map").setView([-37.87, 175.475], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const points = addressPoints
    ? addressPoints.map((p) => {
        return [p[0], p[1]];
      })
    : [];

  L.heatLayer(points).addTo(map);
}, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
  // const map = L.map("map").setView([29.645803, -82.333412], 10);
  // L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  // }).addTo(map);
  // var heat = L.heatLayer([
  //   [50.5, 30.5, 0.2], // lat, lng, intensity
  //   [50.6, 30.4, 0.5],
  // ], {radius: 25}).addTo(map);
  // return(
  //   <MapContainer center={[29.645803, -82.333412]} zoom={14} scrollWheelZoom={true}>
  //     <TileLayer
             
  //            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //    />
  //   </MapContainer>
  // )
}

// export default Graphs