import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        initialState: {
            rating: "",
            review: "",
            activity_date: "",
            tag_ids: [],
            user_id: state.session.currentUserId,
            hike_id: ownProps.hikeId
        },
        trailConditions: Object.values(state.entities.tags).filter(tag => tag.tagType === "obstacle")
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