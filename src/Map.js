import mapboxgl from 'mapbox-gl';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import geoJson from './data2.json';
import bikeGeoJson from './out.json';
import './Map.css';



import campsiteicon from './assets/icons/campsite.png'
import cinemaicon from './assets/icons/cinemas.png'
import damsicon from './assets/icons/dams.png'
import heritagesiteicon from './assets/icons/heritage-site.png'
import hotelicon from './assets/icons/hotel.png'
import islandicon from './assets/icons/island.png'
import liberaryicon from './assets/icons/liberary.png'
import mangroveicon from './assets/icons/mangrove.png'
import mountainicon from './assets/icons/mountains.png'
import museumicon from './assets/icons/museum.png'
import parksicon from './assets/icons/parks.png'
import performingartsicon from './assets/icons/performing-arts.png'
import protectedareaicon from './assets/icons/protected-area.png'
import religiousfacilitiesicon from './assets/icons/religious-facilities.png'
import shoppingfacilitiesicon from './assets/icons/shopping-facilities.png'
import sportsfacilitiesicon from './assets/icons/sports-facilities.png'
import theatersicon from './assets/icons/theaters.png'
import valleyicon from './assets/icons/valley.png'

import { AddMapLayers } from './components/MapLayers';
import { Dialog, Transition } from '@headlessui/react';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


const Map = ({ filter, setDrawerOpen, setTabNumber }) => {
  const mapContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, _] = useState(null);

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

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });


    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      center: [55, 25.3],
      zoom: 6,
    });
    map.addControl(geolocate)

    const types = {
      'Campsite': campsiteicon,
      'Cinema': cinemaicon,
      'Dams': damsicon,
      'Heritage sites': heritagesiteicon,
      'Hotel': hotelicon,
      'Islands': islandicon,
      'Library': liberaryicon,
      'Mangrove': mangroveicon,
      'Mountains': mountainicon,
      'Museums': museumicon,
      'Park': parksicon,
      'Performing Art': performingartsicon,
      'Protected Area': protectedareaicon,
      'Religious Facilities': religiousfacilitiesicon,
      'Shopping Facilities': shoppingfacilitiesicon,
      'Sport Facilities': sportsfacilitiesicon,
      'Theaters': theatersicon,
      'Valley': valleyicon
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

      geolocate.trigger()

      // add data source
      await loadImages();

      // add all map layers
      AddMapLayers(map)



      // Clean up on unmount
      return () => map.remove();

    });

    map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));


    // Add click event to unclustered layers
    map.on('click', 'unclustered-point', function (e) {
      // setModalContent(e.features[0]);
      setDrawerOpen(true)
      setTabNumber(null)
      // setIsOpen(true);
    });

    map.on('style.load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;

      map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      });

      map.addSource("running-routes", {
        type: "geojson",
        // a reference to the converted data
        // could come from a file, API, etc
        data: bikeGeoJson,
      });

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );







      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    });


    // Clean up on unmount
    return () => map.remove();
  }, [filter, setTabNumber, setDrawerOpen]);


  return (
    <div className="map-container" ref={mapContainerRef}>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setIsOpen}>
          <div className="px-4 min-h-screen text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

            <div className={'inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'}>
              <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
                {modalContent?.properties["English Name"]}
              </Dialog.Title>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  {modalContent && `English Name: ${modalContent.properties["English Name"]}`}
                  <br />
                  {modalContent && `Arabic Name: ${modalContent.properties["Arabic Name"]}`}
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="px-2 py-1 text-base font-medium text-white bg-black rounded-md sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );

};

export default Map;
