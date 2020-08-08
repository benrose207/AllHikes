import React from "react";
import TextSearchContainer from "../search/text_search_container";

class ParkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
    }

    render() {
        if (!this.props.park) return null
        const { park, totalReviews, avgRating } = this.props;

        return (
            <>
                <div className="sub-nav">
                    <TextSearchContainer parentName="hike"/>
                </div>
                <main className="primary-content">
                    <h1 className="header-text">{park.name}</h1>
                    {avgRating}
                    {totalReviews}
                    <p>{park.summary}</p>
                    <h4 className="header-text">Description</h4>
                    <p>{park.description}</p>
                    {park.acreage}
                    {park.contact}
                </main>
            </>
        )
    }
}

export default ParkShow;