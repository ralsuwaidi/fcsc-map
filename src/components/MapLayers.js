
import bikeGeoJson from '../out.json';

const colorsByType = {
    'Campsite': '#F7B317',
    'Cinema': '#EE79AB',
    'Dams': '#376EB5',
    'Heritage sites': '#48AD3A',
    'Hotel': '#917FBA',
    'Islands': '#6EADC2',
    'Library': '#5CAF86',
    'Mangrove': '#D2A84E',
    'Mountains': '#816B49',
    'Museums': '#BF5DA0',
    'Park': '#3B6A3B',
    'Performing Art': '#8883BE',
    'Protected Area': '#E63528',
    'Religious Facilities': '#EE706F',
    'Shopping Facilities': '#CC7AB1',
    'Sport Facilities': '#2CADE4',
    'Theaters': '#88569E',
    'Valley': '#AF8054',
};



const mapLayers = {
    'clusters': {
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
    },
    'cluster-count': {
        type: 'symbol',
        source: 'chicago-parks',
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
        }
    },
    'running-routes-line': {
        type: "line",
        source: "running-routes",
        paint: {
            "line-color": "#0000FF",   // Changed color from green to blue
            "line-width": 4,
        },
    },

    'unclustered-point': {
        type: 'symbol',
        source: 'chicago-parks',
        filter: ['!', ['has', 'point_count']],
        layout: {
            'icon-image': ['get', 'Type'],
            'icon-allow-overlap': true,
            'icon-size': 0.2,
            'text-field': ['get', 'English Name'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 1.2,
            'text-justify': 'auto',
            'text-size': 10
        },
        paint: {
            'icon-color': ['get', ['to-string', ['get', 'Type']], ['literal', colorsByType]], // use a data-driven style for 'icon-color'
            'text-color': ['get', ['to-string', ['get', 'Type']], ['literal', colorsByType]]  // use a data-driven style for 'text-color'
        }
    }
}


function AddLayer(map, id) {
    if (mapLayers.hasOwnProperty(id)) {
        let layer = mapLayers[id];
        layer.id = id;      // ensure the id property is set
        map.addLayer(layer);
    } else {
        console.error(`Layer configuration with id ${id} does not exist.`);
    }
}

function RemoveLayer(map, id) {
    // Check if the layer exists
    if (map.getLayer(id)) {
        // Remove the layer
        map.removeLayer(id);

        // Also remove the source if it is no longer needed
        if (map.getSource(id)) {
            map.removeSource(id);
        }

        // Refresh the map (Mapbox automatically does this when layers are removed)
        map.repaint = true;
    } else {
        console.error(`Layer with id ${id} does not exist.`);
    }
}
function AddMapLayers(map) {

    for (let id in mapLayers) {
        let layer = mapLayers[id];
        layer.id = id;     // ensure the id property is set
        map.addLayer(layer);
    };

}

export { AddMapLayers, AddLayer, RemoveLayer };