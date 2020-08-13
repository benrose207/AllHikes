import React from "react";
import HikeIndexItem from "./hike_index_item";

const HikeIndex = ({ hikes, parkName, classToggle }) => {
    return (
        <ul>
            {hikes.map((hike, idx) => (
                <HikeIndexItem key={hike.id} hike={hike} parkName={parkName} idx={idx} classToggle={classToggle}/>
            ))}
        </ul>
    )
}

export default HikeIndex;