import React from 'react'

import {
  interaction,layer,custom,control,
  Interactions,Overlays,Controls,
  Map,Layers,Overlay,util
} from 'react-openlayers'

import useStyles from './MapStyle'


const Maps = () => {
  
  const classes = useStyles();
  const coordinates = [0,0]

  return (
    <div className = {classes.mapContainer}>
      <Map view={{center:[0,0],zoom:3}} >
        <Layers>
          <layer.Tile></layer.Tile>
        </Layers>
      </Map>
    </div>
  )
}

export default Maps