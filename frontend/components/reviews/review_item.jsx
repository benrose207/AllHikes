import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        const answer = confirm("Are you sure you want to delete this review?");

        if (answer) this.props.deleteReview(this.props.review.id);
    }
    
    render() {
        const { review, user, tags, currentUser } = this.props;
        const reviewDate = new Date(review.activityDate);
    
        const tagCloud = tags.map(tag => (
            <h4 key={tag.id} className="tag">{tag.name}</h4>
        ));
    
        const reviewStars = [];
    
        for (let i = 1; i < 6; i++) {
            const starClass = review.rating >= i ? " filled" : "";
            reviewStars.push(<span key={i} className={`star${starClass}`}></span>)
        }
        
        const reviewActions = (currentUser === review.userId ? (
            <>
                <Link to={`/my/reviews/${review.id}/edit`} className="review-action"><FontAwesomeIcon icon={faPencilAlt} /></Link>
                <button className="review-action" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashAlt}/></button>
            </>
        ) : null )
    
        return (
            <li className="review-item">
                <div className="review-header">
                    <div>
                        <Link to={`/members/${user.id}`}>{user.firstName} {user.lastName}</Link>
                        <div className="review-tags">{tagCloud}</div>
                    </div>
                    <div>
                        <div className="review-rating">
                            {reviewStars}
                        </div>
                        <p>{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(reviewDate)} {reviewDate.getFullYear()}
                            {reviewActions}
                        </p>
                    </div>
                </div>
                <p>
                    {review.reviewText}
                </p>
            </li>
        )
    }
}

export default ReviewItem;