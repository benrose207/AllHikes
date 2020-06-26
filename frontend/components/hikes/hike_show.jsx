import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faExchangeAlt, faRetweet, faMountain, faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import HikeMap from "../maps/hike_map";

class HikeShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedContent: "description"
        };

        this.handleContentTabs = this.handleContentTabs.bind(this);
    }

    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    handleContentTabs(e) {
        this.setState({ selectedContent: e.target.dataset.fieldName })
    }

    render () {
        if (!this.props.hike) return null;

        const { hike, tags } = this.props;

        // Creating various html blocks
        const tagCloud = tags.map(tag => (
            <h4 key={tag.id} className="tag">{tag.name}</h4>
        ));

        const contentTabs = (
            <>
                <nav onClick={this.handleContentTabs} className="hike-tabs">
                    <span 
                        data-field-name="description" 
                        className={ this.state.selectedContent === "description" ? "active-tab" : null}
                    >Description</span>
                    <span 
                        data-field-name="contact"
                        className={this.state.selectedContent === "contact" ? "active-tab" : null}
                    >Contact</span>
                </nav>
                <p>{hike[this.state.selectedContent]}</p>
            </>
        );

        // Setting dynamic classes for html elements
        const hikeDifficulty = `tag hike-difficulty ${hike.difficulty}`;

        let hikeMapClass = "";
        if (this.props.location.search.includes("mapView=true")) {
            hikeMapClass = " hike-map-view"
        }

        return (
            <div className="hike-with-map">
                <main className={`hike-container${hikeMapClass}`}>
                    <div className={`hike-detail-nav${hikeMapClass}`}>
                        <Link to={`/hikes/${hike.id}`}>View Hike Details
                            <FontAwesomeIcon icon={faExpandArrowsAlt} />
                        </Link>
                    </div>
                    <div className="hike-hero">
                        <div className="hike-hero-content">
                            <h1>{hike.name}</h1>
                            <span className={hikeDifficulty}>{hike.difficulty}</span>
                        </div>
                    </div>
                    <div className="hike-actions">

                    </div>
                    <div className="hike-main">
                        <article className="hike-main-content">
                            <p className="hike-summary">
                                {hike.name} is a {hike.distance} mile heavily trafficked {hike.routeType.toLowerCase()} trail located near Berkeley, California that features beautiful {tags[0].name} and is rated as {hike.difficulty}. The trail offers a number of activity options and is accessible year-round. Dogs and horses are also able to use this trail.
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
                        </article>
                        <aside className={`hike-sidebar${hikeMapClass}`}>
                            <Link to={`/hikes/${hike.id}?mapView=true`}>View Map</Link>
                        </aside>
                    </div>
                </main>
                <section className={`hike-map${hikeMapClass}`}>
                    <HikeMap hike={hike}/>
                </section>
            </div>
        )
    }
}

export default HikeShow;