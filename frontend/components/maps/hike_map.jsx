import React from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = window.mapboxAPIKey;

class HikeMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: -119.49091,
            lat: 37.83276,
            zoom: 12.5
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/benrose207/ckbo9pfqi1ohd1ipek256m4cn',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-left');

        const marker = new mapboxgl.Marker()
            .setLngLat([this.state.lng, this.state.lat])
            .addTo(map)

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(5),
                lat: map.getCenter().lat.toFixed(5),
                zoom: map.getZoom().toFixed(2)
            });
        });

        const canvas = map.getCanvasContainer();
        const start = [this.state.lng, this.state.lat];

        const getRoute = (end) => {
            const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;

            const req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.onload = function () {
                const json = JSON.parse(req.response);
                const data = json.routes[0];
                const route = data.geometry.coordinates;
                const geojson = {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route
                    }
                };

                if (map.getSource('route')) {
                    map.getSource('route').setData(geojson);
                } else {
                    map.addLayer({
                        id: 'route',
                        type: 'line',
                        source: {
                            type: 'geojson',
                            data: geojson
                        },
                        layout: {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        paint: {
                            'line-color': '#3887be',
                            'line-width': 5,
                            'line-opacity': 0.75
                        }
                    });
                }
            };
            req.send();
        }

        map.on('load', () => {
            const endPoint = [-119.509513, 37.846954]
            getRoute(endPoint);

            map.addLayer({
                id: 'point',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: "FeatureCollection",
                        features: [{
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: endPoint
                            }
                        }]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#3887be'
                }
            })
        });
    }

    render () {
        return (
            <div ref={el => this.mapContainer = el} className="map-container"></div>
        )
    }
}

export default HikeMap;