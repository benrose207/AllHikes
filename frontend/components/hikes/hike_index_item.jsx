import React from "react";
import { Link } from "react-router-dom";

const HikeIndexItem = ({ hike, park, idx }) => {

    const reviewStars = [];
    for (let i = 1; i < 6; i++) {
        const starClass = hike.avgRating >= i ? " filled" : "";
        reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
    }

    return (
        <li className="hike-card">
            <div>
                <Link to={`/hikes/${hike.id}`}><h5 className="header-text">{`#${idx + 1} - ${hike.name}`}</h5></Link>
                <Link to={`/parks/${park.id}`} className="detail-text">{park.name}</Link>
                <div className="page-summary-info">
                    <span className={`tag hike-difficulty ${hike.difficulty}`}>{hike.difficulty}</span>
                    <div>
                        {reviewStars}
                    </div>
                    <p>({hike.numReviews})</p>
                </div>
                <p className="detail-text">Length: {hike.distance} mi</p>
                <p className="card-long-description">{hike.description}</p>
            </div>
        </li>
    )
}

export default HikeIndexItem;