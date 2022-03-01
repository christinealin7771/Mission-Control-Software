import React, {useState, useEffect, useRef} from 'react'

import './Maps.css'
import {
  interaction,layer,custom,control,
  Interactions,Overlays,Controls,
  Map,Layers,Overlay,util
} from 'react-openlayers'

import {fromLonLat} from 'ol/proj';


import * as ol from "ol";



const Maps = ({ children, zoom, newCenter }) => {
 
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  
  const washingtonLonLat = [-82.3248, 29.6516];
  const washingtonWebMercator = fromLonLat(washingtonLonLat);

  const[center, setCenter] = useState([-82.3248, 29.6516])


  const getLocation = () => {
    if(!navigator.geolocation){
      setStatus('Geolocation is not supported by your browser');
    }
    else{
      setStatus('Locating');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        
        // setlonLat([lng,lat]);
        //setNewCenter(fromLonLat([position.coords.longitude,position.coords.latitude]));
        setCenter([position.coords.longitude,position.coords.latitude]);
        console.log(center);
      }, () => {
        setStatus('Unable to retrieve your location');
      })
    }
  }

  // var map = new ol.Map({
  //   target: 'map',
  //   layers: [
  //     new ol.layer.Tile({
  //       source: new ol.source.OSM()
  //     })
  //   ],
  //   view: new ol.View({
  //     center: ol.proj.fromLonLat([37.41, 8.82]),
  //     zoom: 4
  //   })
  // });
  // const mapRef = useRef();
  // const [map, setMap] = useState(null);

  // useEffect(() => {
  //   let options = {
  //     view: new ol.View({ zoom, newCenter }),
  //     layers: [],
  //     controls: [],
  //     overlays: []
  //   };
  //   let mapObject = new ol.Map(options);
  //   mapObject.setTarget(mapRef.current);
  //   setMap(mapObject);
  //   return () => mapObject.setTarget(undefined);
  // }, []);

  // useEffect(() => {
  //   if (!map) return;
  //   map.getView().setZoom(zoom);
  // }, [zoom]);
  // // center change handler
  // useEffect(() => {
  //   if (!map) return;
  //   map.getView().setCenter(center)
  // }, [center])

  return (
    <div className='mapStyle'>

      <button onClick={getLocation} >Position to Current Location</button>
      <p>{lat}{lng}</p>
      
      {/* fromLonLat(center) */}
      {console.log()}
      <Map view={{center:fromLonLat(center),zoom:12}}>
      <Layers>

          <layer.Tile></layer.Tile>
      </Layers>
      </Map>
      {console.log()}
      
      
    </div>
  )
}

export default Maps