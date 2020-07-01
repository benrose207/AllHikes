import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faExchangeAlt, faRetweet, faMountain, faExpandArrowsAlt, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import HikeMap from "../maps/hike_map";
import CreateReviewContainer from "../reviews/create_review_container";
import ReviewFeed from "../reviews/review_feed";
import PhotosFormContainer from "../photos/photos_form_container";
import PhotoFeedContainer from "../photos/photo_feed_container";

class HikeShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTrailContent: "description",
            activeUserContent: "reviews",
            reviewForm: false,
            photosForm: false,
            mapView: false
        };

        this.handleContentTabs = this.handleContentTabs.bind(this);
        this.mapToggle = this.mapToggle.bind(this);
        this.reviewFormToggle = this.reviewFormToggle.bind(this);
        this.photosFormToggle = this.photosFormToggle.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    handleContentTabs(e) {
        const newValue = e.target.dataset.fieldName
        const stateKey = (e.currentTarget.classList.contains("content") ? "activeTrailContent" : "activeUserContent");

        if (e.target.tagName.toLowerCase() === "span") {
                this.setState({ [stateKey]: newValue })
        }
    }

    mapToggle() {
        this.setState({mapView: !this.state.mapView})
    }

    reviewFormToggle() {
        this.setState({
            reviewForm: !this.state.reviewForm,
            photosForm: false,
            activeUserContent: "reviews"
        })
    }

    photosFormToggle() {
        this.setState({
            photosForm: !this.state.photosForm,
            reviewForm: false,
            activeUserContent: "photos"
        })
    }

    render () {
        if (!this.props.hike) return null;

        const { hike, tags, reviewCount, avgRating } = this.props;
        const { activeUserContent } = this.state;
        
        // Creating various html blocks
        const reviewStars = [];

        for (let i = 1; i < 6; i++) {
            const starClass = avgRating >= i ? " filled" : "";
            reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
        }

        const tagCloud = tags.map(tag => (
            <h4 key={tag.id} className="tag">{tag.name}</h4>
        ));
        
        const features = tags.filter(tag => tag.tagType === "feature");
        const feature = features[Math.floor(Math.random() * features.length)].name;
        const featureDescription = (feature[feature.length - 1] === "s" || feature === "wildlife" ? 
            feature : `a ${feature}`);

        const contentTabs = (
            <>
                <nav onClick={this.handleContentTabs} className="hike-tabs content">
                    <span 
                        data-field-name="description" 
                        className={ this.state.activeTrailContent === "description" ? "active-tab" : null}
                    >Description</span>
                    {hike.contact ? (
                        <span 
                            data-field-name="contact"
                            className={this.state.activeTrailContent === "contact" ? "active-tab" : null}
                        >Contact</span>
                    ) : null }
                </nav>
                <p>{hike[this.state.activeTrailContent]}</p>
            </>
        );

        const reviewContent = (
            <>
                <nav onClick={this.handleContentTabs} className="hike-tabs reviews" id="reviews">
                    <span 
                        data-field-name="reviews"
                        className={this.state.activeUserContent === "reviews" ? "active-tab" : null}
                    >Reviews</span>
                    <span
                        data-field-name="photos"
                        className={this.state.activeUserContent === "photos" ? "active-tab" : null}
                    >Photos</span>
                </nav>

                {this.props.currentUserId ? (
                    <>
                        <div className="hike-user-content-header">
                            <p>Share your experience to help other people learn more about this trail:</p>
                            <div>
                                <button className="secondary-cta" onClick={this.reviewFormToggle}>Write Review</button>
                                <button className="secondary-cta" onClick={this.photosFormToggle}>Upload Photos</button>
                            </div>
                        </div>
                        {this.state.reviewForm ? <CreateReviewContainer hikeId={hike.id} closeFormAction={this.reviewFormToggle}/> : null}
                        {this.state.photosForm ? <PhotosFormContainer 
                            hikeId={hike.id}
                            userId={this.props.currentUserId}
                            closeFormAction={this.photosFormToggle}/> : null}
                    </>
                ) : null}
                {activeUserContent === "reviews" ? (
                    <ReviewFeed reviews={this.props.reviews} />
                ) : <PhotoFeedContainer contentId={hike.id} idType="hikeId"/>}
            </>
        )

        // Setting dynamic classes for html elements
        const hikeDifficulty = `tag hike-difficulty ${hike.difficulty}`;

        let hikeMapClass = "";
        if (this.state.mapView) hikeMapClass = " hike-map-view";
        
        return (
            <div className="hike-with-map">
                <main className={`hike-container${hikeMapClass}`}>
                    <div className={`hike-detail-nav${hikeMapClass}`}>
                        <div onClick={this.mapToggle}>Return to Hike Details
                            <FontAwesomeIcon icon={faExpandArrowsAlt} />
                        </div>
                    </div>
                    <div className="hike-hero">
                        <div className="hike-hero-content">
                            <h1>{hike.name}</h1>
                            <div className="hike-hero-info">
                                <span className={hikeDifficulty}>{hike.difficulty}</span>
                                <div>
                                    {reviewStars}
                                </div>
                                <p>({reviewCount})</p>
                            </div>
                        </div>
                        <picture>
                            <img src={hike.coverPhotoUrl} alt="mt hoffmann hike" />
                        </picture>
                    </div>
                    <div className="hike-actions">
                        <ul>
                            <li>
                                <a href={`https://www.google.com/maps/dir/Current+Location/${hike.lat},${hike.lng}`} target="_blank" className="hike-action-link">
                                    <FontAwesomeIcon icon={faMapSigns} />
                                    <p>Directions</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hike-main">
                        <article className="hike-main-content">
                            <p className="hike-summary">
                                {hike.name} is a {hike.distance} mile {hike.usage === "heavy" ? "heavily" : hike.usage + "ly"} trafficked {hike.routeType.toLowerCase()} trail located near Yosemite Valley, California that features {featureDescription} and is rated as {hike.difficulty}. The trail offers a number of activity options.
                            </p>
                            <section className="hike-stats">
                                <div className="stat">
                                    <FontAwesomeIcon icon={faRoute} />
                                    <div>
                                        <span>Distance:</span>
                                        <span>{hike.distance} miles</span>
                                    </div>
                                </div>
                                {hike.elevationGain ? 
                                    <div className="stat">
                                        <FontAwesomeIcon icon={faMountain} />
                                        <div>
                                            <span>Elevation Gain:</span>
                                            <span>{hike.elevationGain} feet</span>
                                        </div>
                                    </div> : null
                                }
                                <div className="stat">
                                    <FontAwesomeIcon icon={hike.routeType === "Loop" ?
                                        faExchangeAlt : faRetweet} />
                                    <div>
                                        <span>Route Type:</span>
                                        <span>{hike.routeType}</span>
                                    </div>
                                </div>
                            </section>
                            <section className="tag-cloud">
                                {tagCloud}
                            </section>
                            <section className="hike-content">
                                {contentTabs}
                            </section>
                            <section>
                                {reviewContent}
                            </section>
                        </article>
                        <aside className={`hike-sidebar${hikeMapClass}`}>
                            <div onClick={this.mapToggle} className="map-preview">
                                <FontAwesomeIcon icon={faExpandArrowsAlt}/>
                                <img src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+4D9709(${hike.lng},${hike.lat})/${hike.lng},${hike.lat},13,0/400x400@2x?access_token=${window.mapboxAPIKey}`} alt="map-preview"/>
                                <span>View Full Map</span>
                            </div>
                        </aside>
                    </div>
                </main>
                <section className={`hike-map${hikeMapClass}`}>
                    {this.state.mapView ? <HikeMap hike={hike} /> : null}
                </section>
            </div>
        )
    }
}

export default HikeShow;