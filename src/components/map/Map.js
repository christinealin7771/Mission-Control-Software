import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './MapStyle';

const Map = () => {

    
    const coordinates = {lat:0, lng:0}
    const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyDAKzfIzq3VEHmrq5aakof7xmjvxkPL3CY'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
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