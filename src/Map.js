import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import geoJson from './data.json';
import './Map.css';
import Marker from './components/Marker';
import hotelicon from './assets/icons/hotel.png'
import mosqueicon from './assets/icons/mosque.png'



mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


const Map = () => {
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
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'chicago-parks',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#FFEDA0',
            100,
            '#FFD166',
            750,
            '#EF6C00'
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            30,
            100,
            40,
            750,
            50
          ]
        }
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'chicago-parks',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      });

      await loadImages();

      map.addLayer({
        id: 'unclustered-point',
        type: 'symbol',
        source: 'chicago-parks',
        filter: ['!', ['has', 'point_count']],
        layout: {
          'icon-image': ['get', 'Type'],
          'icon-allow-overlap': true,
          'icon-size': 0.5,
        },
      });

    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
