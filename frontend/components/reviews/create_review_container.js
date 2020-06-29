import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";
import { filteredTagsByType, defaultActivity } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        initialState: {
            rating: "",
            review_text: "",
            activity_date: "",
            tag_ids: [],
            user_id: state.session.currentUserId,
            hike_id: ownProps.hikeId,
            selectedActivity: defaultActivity(state)
        },
        trailConditions: filteredTagsByType(state, "obstacle"),
        activities: filteredTagsByType(state, "activity"),
        errors: state.errors.reviewForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: review => dispatch(createReview(review))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm)