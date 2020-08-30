import React from "react";
import { Link } from "react-router-dom";

const HikeIndexItem = ({ hike, parkName, idx, classToggle }) => {
    const toggledClass = classToggle ? classToggle : "";

    const reviewStars = [];
    for (let i = 1; i < 6; i++) {
        const starClass = hike.avgRating >= i ? " filled" : "";
        reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
    }

    return (
        <li>
            <Link to={`/hikes/${hike.id}`} className="hike-card">
                <picture className={`hike-card-photo ${toggledClass}`}>
                    <img src={hike.coverPhotoUrl} alt={hike.name}/>
                </picture>
                <div className={`hike-card-content ${toggledClass}`}>
                    <div><h5 className={`header-text ${toggledClass}`}>{`#${idx + 1} - ${hike.name}`}</h5></div>
                    <p className="detail-text">{parkName}</p>
                    <div className="page-summary-info">
                        <span className={`tag hike-difficulty ${hike.difficulty}`}>{hike.difficulty}</span>
                        <div>
                            {reviewStars}
                        </div>
                        <p>({hike.numReviews})</p>
                    </div>
                    <p className="detail-text">Length: {hike.distance} mi</p>
                    <div className="card-long-description">
                        <p>{hike.description}</p>
                        <span className="text-expander">Show more</span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default HikeIndexItem;