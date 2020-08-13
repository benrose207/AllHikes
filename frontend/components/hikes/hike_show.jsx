import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import HikePrimaryContent from "./hike_primary_content";
import HikeMap from "../maps/hike_map";
import CreateReviewContainer from "../reviews/create_review_container";
import ReviewFeed from "../reviews/review_feed";
import PhotosFormContainer from "../photos/photos_form_container";
import PhotoFeedContainer from "../photos/photo_feed_container";
import SubNav from "../nav/sub_nav";
import HikeIndex from "./hike_index";

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
        if (!this.props.hike || !this.props.tags.length) return null;

        const { hike, tags, reviewCount, avgRating } = this.props;
        const { activeUserContent } = this.state;
        
        // Creating various html blocks
        const reviewStars = [];

        for (let i = 1; i < 6; i++) {
            const starClass = avgRating >= i ? " filled" : "";
            reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
        }

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

        const hikeUserContent = (
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
            <>
                <SubNav parentType="hikes" parentObject={hike} classToggle={hikeMapClass}/>
                <div className="hike-with-map">
                    <main className={`primary-content hike-container${hikeMapClass}`}>
                        <div className={`hike-detail-nav${hikeMapClass}`}>
                            <div onClick={this.mapToggle}>Return to Hike Details
                                <FontAwesomeIcon icon={faExpandArrowsAlt} />
                            </div>
                        </div>
                        <div className="hike-hero">
                            <div className="hike-hero-content">
                                <h1>{hike.name}</h1>
                                <div className="page-summary-info">
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
                                <HikePrimaryContent hike={hike} tags={tags}/>
                                <section className="hike-content">
                                    {contentTabs}
                                </section>
                                <section>
                                    {hikeUserContent}
                                </section>
                            </article>
                            <aside className={`hike-sidebar${hikeMapClass}`}>
                                <div onClick={this.mapToggle} className="map-preview">
                                    <FontAwesomeIcon icon={faExpandArrowsAlt}/>
                                    <img src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+4D9709(${hike.lng},${hike.lat})/${hike.lng},${hike.lat},13,0/400x400@2x?access_token=${window.mapboxAPIKey}`} alt="map-preview"/>
                                    <span>View Full Map</span>
                                </div>
                                <div className="nearby-hikes-container">
                                    <h3 className="header-text">Nearby Hikes</h3>
                                    <HikeIndex hikes={this.props.nearbyHikes} classToggle="sidebar" parkName={hike.parkName}/>
                                </div>
                            </aside>
                        </div>
                    </main>
                    <section className={`hike-map${hikeMapClass}`}>
                        {this.state.mapView ? <HikeMap hike={hike} /> : null}
                    </section>
                </div>
            </>
        )
    }
}

export default HikeShow;