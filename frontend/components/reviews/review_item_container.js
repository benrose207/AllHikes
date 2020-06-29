import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { deleteReview } from "../../actions/review_actions";
import { reviewTags } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        user: Object.values(state.entities.users).find(user => user.id === ownProps.review.userId),
        tags: reviewTags(state, ownProps.review.id),
        currentUser: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewItem);