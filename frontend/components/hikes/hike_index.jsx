import React from "react";
import HikeIndexItem from "./hike_index_item";

const HikeIndex = ({ hikes, park }) => {
    return (
        <ul>
            {hikes.map((hike, idx) => (
                <HikeIndexItem key={hike.id} hike={hike} park={park} idx={idx}/>
            ))}
        </ul>
    )
}

export default HikeIndex;