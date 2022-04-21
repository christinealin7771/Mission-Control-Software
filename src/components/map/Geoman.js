import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { Draw } from "leaflet";

import { data } from '../../data/data';

const Geoman = () => {
  const context = useLeafletContext();



  function makePopupContent(feature){
    return `
      ${feature.geometry.coordinates}   
    `;
  }

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    leafletContainer.pm.addControls({
      drawMarker: false
    });

    leafletContainer.pm.setGlobalOptions({ pmIgnore: false });

    leafletContainer.on("pm:create", (e) => {
      if (e.layer && e.layer.pm) {
        const shape = e;
        console.log(e);

        // enable editing of circle
        shape.layer.pm.enable();

        //get coordinates
        // const feature = shape.layer.toGeoJSON();
        // const coordinate = makePopupContent(feature);
        // data.push({
        //   coordinates: coordinate
        // });
        // console.log(data[0]);

        //another way to get coordinates
        var coords = e.layer.getLatLngs();
        if(e.layer.pm.getShape() === "Rectangle"){
          coords.map((value)=> {
            value.map((num) => {
              data.push({
                lat: num.lat,
                lng: num.lng
              })
            })
            
          })
        }

        console.log(data)
        
        
        
        
        
        console.log(`object created: ${shape.layer.pm.getShape()}`);
        // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        leafletContainer.pm
          .getGeomanLayers(true)
          .bindPopup("i am whole")
          .openPopup();
        // leafletContainer.pm
        //   .getGeomanLayers()
        //   .map((layer, index) => layer.bindPopup(`I am figure N° ${index}`));

        leafletContainer.pm
          .getGeomanLayers()
          .map((layer, index) => layer.bindPopup(`${shape.layer.toGeoJSON().geometry.coordinates} `));

        shape.layer.on("pm:edit", (e) => {
          const event = e;
          //console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        });
      }
    });

    leafletContainer.on("pm:remove", (e) => {
      console.log("object removed");
      // var coords = e.layer.getLatLngs();

      // console.log(coords.length)
      // console.log(e.layer.pm.getShape())
      
      if(e.layer.pm.getShape() === "Rectangle"){
        for(var i = 0; i < 4; i++)
        {
          data.pop()
        }
      }
      
      console.log(data)

      // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
    });

    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
      
    };
  }, [context]);

  return null;
};

export default Geoman;
