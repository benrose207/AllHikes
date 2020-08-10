import React from "react";
import TextSearchContainer from "../search/text_search_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";

class ParkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
    }

    render() {
        if (!this.props.park) return null
        const { park, totalReviews, avgRating, hikes } = this.props;

        // Park Review Stars
        const reviewStars = [];
        for (let i = 1; i < 6; i++) {
            const starClass = Math.round(avgRating) >= i ? " filled" : "";
            reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
        }

        //Park Static Map Pins
        let staticMapPinStr = "/";
        hikes.forEach((hike, idx) => {
            let newPin = `pin-s+4D9709(${hike.lng},${hike.lat})`;
            staticMapPinStr += newPin;
            if (idx !== hikes.length - 1) staticMapPinStr += ",";
        })
        
        return (
            <>
                <div className="sub-nav">
                    <TextSearchContainer parentName="hike"/>
                </div>
                <main className="primary-content park-container">
                    <h1 className="header-text">Best Trails in {park.name}</h1>
                    <div className="page-summary-info">
                        <div>
                            {reviewStars}
                        </div>
                        {totalReviews} Reviews
                    </div>
                    <p className="park-summary">{park.summary}</p>
                    <h4 className="header-text">Description</h4>
                    <p>{park.description}</p>
                    <div className="park-static-map">
                        <img src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static${staticMapPinStr}/${park.lng},${park.lat},8,0/750x240@2x?access_token=${window.mapboxAPIKey}`} alt="map-preview" />
                    </div>
                    <section className="park-actions">
                        <div>
                            <a href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.lng}`} target="_blank" className="park-action">
                                <FontAwesomeIcon icon={faMapSigns} />
                                <p>Directions</p>
                            </a>
                        </div>
                    </section>
                    <section className="park-information">
                        <h3 className="header-text">Park Information</h3>
                        <div className="park-information-details">
                            <div>
                                <article>
                                    <h5 className="header-text">Acreage</h5>
                                    <p>{park.acreage} acres</p>
                                </article>
                                <article>
                                    <h5 className="header-text">Contact</h5>
                                    <p>{park.contact}</p>
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default ParkShow;