import { connect } from "react-redux";
import React from "react";
import ReviewForm from "./review_form";
import { ScrollToTopOnMount } from "../../util/route_util";
import { updateReview } from "../../actions/review_actions";
import { filteredTagsByType, reviewTags } from "../../reducers/selectors";
import { Redirect } from "react-router-dom";

const EditReviewContainer = (props) => {
    return (
        <>
            {props.currentUser ? (
                <>
                    <ScrollToTopOnMount />
                    <div className="edit-review-form">
                        <h1>Edit Review | {props.hikeName}</h1>
                        <ReviewForm 
                            initialState={props.initialState}
                            trailConditions={props.trailConditions}
                            submitAction={props.submitAction}
                            activities={props.activities}
                            closeFormAction={() => props.history.push(`/hikes/${props.initialState.hike_id}`)}/>
                    </div>
                </>
            ) : <Redirect to="/"/>
        }
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const currentReview = state.entities.reviews[ownProps.match.params.reviewId]

    let tags = [];
    let activity
    reviewTags(state, ownProps.match.params.reviewId).forEach(tag => {
        if (tag.tagType === "activity") {
            activity = tag.id;
        } else {
            tags.push(tag.id);
        }
    })

    return {
        initialState: {
            id: currentReview.id,
            rating: currentReview.rating,
            review_text: currentReview.reviewText,
            activity_date: currentReview.activityDate,
            tag_ids: tags,
            user_id: currentReview.userId,
            hike_id: currentReview.hikeId,
            selectedActivity: activity
        },
        trailConditions: filteredTagsByType(state, "obstacle"),
        activities: filteredTagsByType(state, "activity"),
        hikeName: state.entities.hikes[currentReview.hikeId].name,
        currentUser: (state.session.currentUserId === currentReview.userId)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: review => dispatch(updateReview(review)), 
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditReviewContainer);