import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import geoJson from './data.json';
import './Map.css';
import hotelicon from './assets/icons/hotel.png'
import mosqueicon from './assets/icons/mosque.png'
import { AddMapLayers } from './components/MapLayers';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


const Map = ({ filter }) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [55, 25.3],
      zoom: 7,
    });

    const types = {
      'Hotel': hotelicon,
      'Religious Facilities': mosqueicon,
    };

    const loadImages = async () => {
      for (let type in types) {
        await new Promise((resolve, reject) => {
          map.loadImage(types[type], function (error, image) {
            if (error) reject(error);
            map.addImage(type, image);
            resolve();
          });
        });
      }
    };

    map.on('load', async () => {
      map.addSource('chicago-parks', {
        type: 'geojson',
        data: geoJson,
        cluster: true,
        filter: filter ? ["==", ["get", "Type"], filter] : null,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });


      // add data source
      await loadImages();

      // add all map layers
      AddMapLayers(map, filter)

    });


    // Clean up on unmount
    return () => map.remove();
  }, [filter]);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
