import React from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'sk.eyJ1IjoiYmVucm9zZTIwNyIsImEiOiJja2J2MXQzcjUwMXF1MzBvYnB3OGUzOXl1In0.equIhrFuF6N3_f_K7haVBQ';

class HikeMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: -119.49091,
            lat: 37.83276,
            zoom: 12
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/benrose207/ckbo9pfqi1ohd1ipek256m4cn',
            // ^ If this doesn't work, use this deafult one: mapbox://styles/mapbox/outdoors-v11
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(5),
                lat: map.getCenter().lat.toFixed(5),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render () {
        return (
            <div ref={el => this.mapContainer = el} className="map-container"></div>
        )
    }
}

export default HikeMap;