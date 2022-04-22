import React, { useEffect } from "react";
import 'leaflet';
import L from 'leaflet';
import "leaflet.heat";
import {MapContainer, TileLayer, Marker, Popup, FeatureGroup, useMap, GeoJSON, Rectangle } from 'react-leaflet';
import './Graphs.css'
// import { addressPoints } from "./addressPoints";

export default function Graphs() {
  // var addressPoints = [
  //   [-37.8839, 175.3745188667, 0],
  //   [-37.8869090667, 175.3657417333, 20],
  //   [-37.8894207167, 175.4015351167, 30],
  //   [-37.8927369333, 175.4087452333, 45],
  //   [-37.90585105, 175.4453463833, 22],
  //   [-37.9064188833, 175.4441556833, 11],
  //   [-37.90584715, 175.4463564333, 35],
  //   [-37.9033391333, 175.4244005667, 32],
  //   [-37.9061991333, 175.4492620333, 40],
  //   [-37.9058955167, 175.4445613167, 21],
  //   [-37.88888045, 175.39146475, 38]
  // ];
  useEffect(() => {
    var map = L.map("map").setView([-37.8839, 175.3745188667], 19);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxNativeZoom: 19,
        maxZoom: 25
    }).addTo(map);

    // const points = addressPoints
    // ? addressPoints.map((p) => {
    //     return [p[0], p[1]];
    //   })
    // : [];
    const options = {
      minOpacity: 0.6,
      max: 40,
      radius: 25,
      gradient: {
        0.675: "blue", //27 celsius
        0.75: "yellow", //30 celsius
        0.85: "red" //34 celsius
      }
    };
    // addressPoints = addressPoints.map(function(p) {
    //   return [p[0], p[1]];
    // });

  L.heatLayer(
    [
      [-37.8839, 175.3745188667, 33], //coordinates are the starting view for right now
      [-37.8869090667, 175.3657417333, 20],
      [-37.8894207167, 175.4015351167, 30],
      [-37.8927369333, 175.4087452333, 45],
      [-37.90585105, 175.4453463833, 22],
      [-37.9064188833, 175.4441556833, 11],
      [-37.90584715, 175.4463564333, 35],
      [-37.9033391333, 175.4244005667, 32],
      [-37.9061991333, 175.4492620333, 40],
      [-37.9058955167, 175.4445613167, 21],
      [-37.88888045, 175.39146475, 38]
    ], options).addTo(map);
}, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
  // [50.5, 30.5, 28], // lat, lng, intensity
  //   [50.6, 30.4, 30],
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