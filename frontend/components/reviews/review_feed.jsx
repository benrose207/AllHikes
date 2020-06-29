import React from "react";
import ReviewItemContainer from "./review_item_container";

class ReviewFeed extends React.Component {

    componentDidMount() {
        if (this.props.userId) {
            this.props.fetchReviews(this.props.userId)
        }
    }
    
    render () {
        const reviewItems = (
            <>
                {this.props.reviews.map(review => (
                    <ReviewItemContainer review={review} key={review.id}/>
                ))}
            </>
        )

        return (
            <div>
                <ul>
                    {reviewItems}
                </ul>
            </div>
        )
    }
}

export default ReviewFeed;