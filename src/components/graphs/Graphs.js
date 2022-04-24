import React, { useEffect } from "react";
import 'leaflet';
import L from 'leaflet';
import "leaflet.heat";
import {MapContainer, TileLayer, Marker, Popup, FeatureGroup, useMap, GeoJSON, Rectangle } from 'react-leaflet';
import data from '../../data/example.txt'
import './Graphs.css'
// import { addressPoints } from "./addressPoints";

export default function Graphs() {
  useEffect(() => {
    
    var str = "";
    fetch(data)
    .then(r => r.text())
    .then(text => {
      str = text;
      console.log(str);

      const rows = str.slice(0).split('\n');
      let points = [];
      console.log(rows);

      for(let i=0; i < rows.length; i++){
        let j = Math.floor(i/3)
        // Might need to change indexes when splits start & end
        // Get lat and long
        if(i % 3 === 1){
          let spaceIndex = rows[i].indexOf(' ', 9);
          points[j] = [];
          points[j][0] = parseFloat(rows[i].slice(9, spaceIndex)); //lat
          points[j][1] = parseFloat(rows[i].slice(spaceIndex+4, rows[i].indexOf(' ', spaceIndex+4))); //long, accounts for in
        }
        // Get intensity
        else if(i % 3 === 2)
          points[j][2] = parseFloat(rows[i].slice(12));
      }
          
      console.log(points);
      var map = L.map("map").setView([points[0][0], points[0][1]], 19);

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
      
      L.heatLayer(points, options).addTo(map);
    });

    
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