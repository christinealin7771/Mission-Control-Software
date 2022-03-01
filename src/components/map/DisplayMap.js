import React, {useState, useEffect, useRef} from 'react'
import MapContext from "./MapContext";
import './Maps.css'
import {
  interaction,layer,custom,control,
  Interactions,Overlays,Controls,
  Map,Layers,Overlay,util
} from 'react-openlayers'

import {fromLonLat} from 'ol/proj';
import Maps from './Maps';


import * as ol from "ol";

const DisplayMap = () => {
          
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  
  const washingtonLonLat = [-77.036667, 38.895];
  const washingtonWebMercator = fromLonLat(washingtonLonLat);

  const[center, setCenter] = useState([])


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

  return (
    <div>
        
      <button onClick={getLocation} >Position to Current Location</button>

    {console.log()}
    <Maps center={fromLonLat(center)} zoom={12}>
    <Layers>
    
        <layer.Tile></layer.Tile>
    </Layers>
    </Maps>
    {console.log()}
  
    </div>
  )
}

export default DisplayMap