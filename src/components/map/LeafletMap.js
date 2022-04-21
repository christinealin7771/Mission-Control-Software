import React, {useState, useEffect, useRef} from 'react'
import './LeafletMap.css'
import {MapContainer, TileLayer, Marker, Popup, FeatureGroup, useMap, GeoJSON, Rectangle } from 'react-leaflet';
import { Edit, Icon } from "leaflet";
import GetLocation from './GetLocation';
// import EditControl from './EditControl';
import L from "leaflet";

import Geoman from './Geoman';
import { data } from '../../data/data';

import { CSVLink } from 'react-csv';


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

    const csvLink = useRef()

    const [allData, setData] = useState([])
    //console.log(allData)


    const showData = () => {
      const csvRow=[]
      const A = [['Latitude', 'Latitude', 'Longitude']]
      //const A = []


      for(var i = 0; i < data.length; i++)
      {
        if(data[i].lat !== 0 && data[i].lng !== 0)
          A.push([data[i].lat, data[i].lng])
      }
      //console.log(A)
      for (var i = 0; i < A.length; ++i)
      {
        csvRow.push(A[i].join(","))
      }
      
      //console.log(csvRow)

      var csvString = csvRow.join("%0A")

      //console.log(csvString)

      var a = document.createElement("a")
      a.href='data:attachement/csv.' + csvString
      a.target = "_Blank"
      a.download = "testfile.csv"
      document.body.appendChild(a)
      a.click()


      //console.log(csvRow)

      
    }

    
    function AddDataControl (){
      
      //currentMap=useMap()
      return (
        <div className={POSITION_CLASSES.bottomright} onClick= {showData}>
          <div className="leaflet-control leaflet-bar">
            
            {/* <CSVLink {...csvReport} > Export to CSV</CSVLink> */}
            <button>Export</button>
            
    
          </div>

        </div>
      )
    }

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
      console.log([location.coordinates.lat, location.coordinates.lng])
      return true
    }


    // const rectangle = [
    //   [29.645803, -82.333412],
    //   [29.745813, -82.337412]
    // ]
  

  return (
    <div>

        <MapContainer center={coord} zoom={14} scrollWheelZoom={true}>
            
            <TileLayer
             
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {console.log([location.coordinates.lat, location.coordinates.lng])}
            
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
         <AddDataControl/>
         <Geoman /> 
        
         
        </MapContainer>
        {/* <div>
          {console.log(data)}
        </div> */}
    </div>
  )
}



export default LeafletMap