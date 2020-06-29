import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import { userReviews } from "../../reducers/selectors";
import ReviewFeed from "./review_feed";

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: userReviews(state, ownProps.userId)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: userId => dispatch(fetchReviews(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewFeed);