


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


    const colorsByType = {
        'Campsite': '#6D9EEB',
        'Cinema': '#007EA7',
        'Dams': '#003249',
        'Heritage sites': '#61C0BF',
        'Hotel': '#6B4226',
        'Islands': '#89DA59',
        'Library': '#6D6998',
        'Mangrove': '#ABC798',
        'Mountains': '#234D20',
        'Museums': '#BE6A15',
        'Park': '#59C9A5',
        'Performing Art': '#522546',
        'Protected Area': '#6A0574',
        'Religious Facilities': '#D90368',
        'Shopping Facilities': '#820263',
        'Sport Facilities': '#291720',
        'Theaters': '#04A777',
        'Valley': '#388659',
    };

    map.addLayer({
        id: 'unclustered-point',
        type: 'symbol',
        source: 'chicago-parks',
        filter: ['!', ['has', 'point_count']],
        layout: {
            'icon-image': ['get', 'Type'],
            'icon-allow-overlap': true,
            'icon-size': 0.2,
            'text-field': ['get', 'English Name'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto',
            'text-size': 10
        },
        paint: {
            'icon-color': ['get', ['to-string', ['get', 'Type']], ['literal', colorsByType]], // use a data-driven style for 'icon-color'
            'text-color': ['get', ['to-string', ['get', 'Type']], ['literal', colorsByType]]  // use a data-driven style for 'text-color'
        }
    });

}

export { AddMapLayers };