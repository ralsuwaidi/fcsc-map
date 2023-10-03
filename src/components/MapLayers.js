import mapboxgl from "mapbox-gl";

/**
 * Function to add map layers
 * @param {mapboxgl.Map} map - The Mapbox map instance
 */
function AddMapLayers(map) {
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


    map.addLayer({
        id: 'unclustered-point',
        type: 'symbol',
        source: 'chicago-parks',
        filter: ['!', ['has', 'point_count']],
        layout: {
            'icon-image': ['get', 'Type'],
            'icon-allow-overlap': true,
            'icon-size': 0.3,
            'text-field': ['get', 'English Name'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto',
        },
    });

}

export { AddMapLayers };