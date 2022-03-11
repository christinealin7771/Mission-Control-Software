import React, {useState, useEffect, useRef} from 'react'
import './LeafletMap.css'
import {MapContainer, TileLayer, Marker, Popup, FeatureGroup, useMap } from 'react-leaflet';
import { Edit, Icon } from "leaflet";
// import { EditControl } from 'react-leaflet-draw'
import GetLocation from './GetLocation';


const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right'
}

const LeafletMap = () => {
  
    const [coord, setCoord] = useState([29.645803, -82.333412]);
    let currentMap;
    const location = GetLocation();
    const ZOOM_LEVEL = 16;

    function LocationIconControl (){
      currentMap = useMap()
      return (
        <div className={POSITION_CLASSES.topright} onClick={showMyLocation}>
        <div className="leaflet-control leaflet-bar">
          <button >Current Location</button>
          {/* <img
            style={{lineHeight: 1, display: 'block', cursor: 'pointer'}}
            src={'location-icon.png'}
            alt={'Get My Location'}
          /> */}
        </div>
      </div>
      )
   
    }

    const showMyLocation = () => {
      if(location.loaded && !location.error){
        currentMap.flyTo(
          [location.coordinates.lat, location.coordinates.lng],
          ZOOM_LEVEL,
          {animate: true}
        );
      }
      else {
        alert(location.error.message)
      }
      return true
    }

  return (
    <div>

        <MapContainer center={coord} zoom={14} scrollWheelZoom={true}>
            {/* <FeatureGroup>
                <EditControl/>
            </FeatureGroup> */}

            <TileLayer
             
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />


            
            {location.loaded && !location.error && (
                <Marker 
                  position={[
                    location.coordinates.lat, 
                    location.coordinates.lng
                  ]}
                >
                </Marker>
            )}
         
         <LocationIconControl/>
              
         
        </MapContainer>

    
    </div>
  )
}



export default LeafletMap