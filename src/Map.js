import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import geoJson from './data.json';
import './Map.css';
import hotelicon from './assets/icons/hotel.png'
import mosqueicon from './assets/icons/mosque.png'
import cinemaicon from './assets/icons/cinema.png'
import heritageicon from './assets/icons/heritage.png'
import { AddMapLayers } from './components/MapLayers';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


const Map = ({ filter }) => {
  const mapContainerRef = useRef(null);

  const createFilter = (filter) => {
    if (!filter) return null;

    let filterConditions = ['any'];
    filter.forEach((item) => {
      filterConditions.push(['==', ['get', 'Type'], item]);
    });

    return filterConditions;
  };

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
      'Cinema': cinemaicon,
      'Heritage sites': heritageicon,
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
        filter: filter ? createFilter(filter) : null,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });


      // add data source
      await loadImages();

      // add all map layers
      AddMapLayers(map)

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
