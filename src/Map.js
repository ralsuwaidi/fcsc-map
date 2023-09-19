import mapboxgl from 'mapbox-gl';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import geoJson from './data.json';
import './Map.css';
import hotelicon from './assets/icons/hotel.png'
import mosqueicon from './assets/icons/mosque.png'
import cinemaicon from './assets/icons/cinema.png'
import heritageicon from './assets/icons/heritage.png'
import { AddMapLayers } from './components/MapLayers';
import { Dialog, Transition } from '@headlessui/react';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


const Map = ({ filter }) => {
  const mapContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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



      // Add click event to unclustered layers
      map.on('click', 'unclustered-point', function (e) {
        setModalContent(e.features[0]);
        setIsOpen(true);
      });


      // Clean up on unmount
      return () => map.remove();

    });


    // Clean up on unmount
    return () => map.remove();
  }, [filter]);


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
