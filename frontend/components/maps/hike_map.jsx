import React from "react";
import mapboxgl from 'mapbox-gl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTopOnMount } from "../../util/route_util";

mapboxgl.accessToken = window.mapboxAPIKey;

class HikeMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: props.hike.lng,
            lat: props.hike.lat,
            zoom: 12.2
        }

        this.toggleHikeDetail = this.toggleHikeDetail.bind(this);
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/benrose207/ckbo9pfqi1ohd1ipek256m4cn',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, 'bottom-left');

        const markerEl = document.createElement('div');
        markerEl.className = 'marker';
        new mapboxgl.Marker(markerEl)
            .setLngLat([this.state.lng, this.state.lat])
            .addTo(this.map)

        this.map.on('move', () => {
            this.setState({
                lng: this.map.getCenter().lng.toFixed(5),
                lat: this.map.getCenter().lat.toFixed(5),
                zoom: this.map.getZoom().toFixed(2)
            });
        });

        //format waypoints so that they can be interpolated into ajax url request
        const waypoints = JSON.parse(this.props.hike.waypoints);
        const endPoint = waypoints[waypoints.length - 1];
        let waypointsStr = ""
        waypoints.forEach((waypoint, idx) => {
            waypointsStr += waypoint.join(",");
            idx < waypoints.length - 1 ? waypointsStr += ";" : "";
        });

        const getRoute = () => {
            const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${waypointsStr}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;

            // Callback definition to run once ajax call returns data
            const drawRoute = (response) => {
                const data = response.routes[0];
                const route = data.geometry.coordinates;
                const geojson = {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route
                    }
                };

                //Re-frame map to fit the route returned from API call
                let bounds = route.reduce(function (bounds, coord) {
                    return bounds.extend(coord);
                }, new mapboxgl.LngLatBounds(route[0], route[0]));

                this.map.fitBounds(bounds, {
                    padding: 100
                });

                // Draw route on map
                if (this.map.getSource('route')) {
                    this.map.getSource('route').setData(geojson);
                } else {
                    this.map.addLayer({
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
                            'line-color': '#FF0000',
                            'line-width': 5,
                            'line-opacity': 0.90
                        }
                    });
                }
            }

            // Make ajax call for route data from MapBox
            $.ajax({
                url: url,
                method: "GET",
                success: (response) => drawRoute(response)
            })
        }

        this.map.on('load', () => {
            this.map.resize();
            getRoute(endPoint);
        });
    }

    toggleHikeDetail() {
        const hikeDetail = document.querySelector('.hike-container');
        const toggles = document.querySelectorAll(".hike-detail-toggle-icon");
        hikeDetail.classList.toggle("hidden");
        toggles.forEach(toggle => toggle.classList.toggle("hidden"));
        
        this.map.resize();
    }

    render () {
        return (
            <>
                <ScrollToTopOnMount />
                <div ref={el => this.mapContainer = el} className="map-container">
                    <div className="hike-detail-toggle" onClick={this.toggleHikeDetail}>
                        <FontAwesomeIcon icon={faChevronRight} className="hike-detail-toggle-icon hidden"/>
                        <FontAwesomeIcon icon={faChevronLeft} className="hike-detail-toggle-icon"/>
                    </div>
                </div>
            </>
        )
    }
}

export default HikeMap;