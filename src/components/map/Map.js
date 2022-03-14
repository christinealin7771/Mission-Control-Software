import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './MapStyle';
import googleMapReact from 'google-map-react';
import { drawImageOrLabel } from 'ol/render/canvas';

const Map = () => {

    
    //const coordinates = {lat:0, lng:0}
    const classes = useStyles();

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [coordinates, setCoord] = useState({lat:29.6516, lng:-82.3248});
    //const [coordinates, setCoord] = useState({lat:0, lng:0});

    const [markers, setMarkers] = useState([]);


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
          setCoord({lat:position.coords.latitude, lng:position.coords.longitude });
          
          // setlonLat([lng,lat]);
          //setNewCenter(fromLonLat([position.coords.longitude,position.coords.latitude]));
          //setCenter([position.coords.longitude,position.coords.latitude]);
          //console.log(center);
        }, () => {
          setStatus('Unable to retrieve your location');
        })
      }
    }

    


  return (
    <div className={classes.mapContainer}>
        <button onClick={getLocation} >Position to Current Location</button>
        
        <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyDAKzfIzq3VEHmrq5aakof7xmjvxkPL3CY'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={15}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
            
        
        >
    
      

        </GoogleMapReact>

    </div>
  )
}

export default Map