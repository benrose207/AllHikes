import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faExchangeAlt, faRetweet, faMountain } from "@fortawesome/free-solid-svg-icons";

const HikePrimaryContent = ({hike, tags}) => {
    const features = tags.filter(tag => tag.tagType === "feature");
    const feature = features[Math.floor(Math.random() * features.length)].name;
    const featureDescription = (feature[feature.length - 1] === "s" || feature === "wildlife" ?
        feature : `a ${feature}`);

    const tagCloud = tags.map(tag => (
        <h4 key={tag.id} className="tag">{tag.name}</h4>
    ));

    return (
        <>
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
        </>
    )
}

export default HikePrimaryContent;