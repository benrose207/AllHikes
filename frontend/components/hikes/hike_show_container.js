import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchHike } from "../../actions/hike_actions";
import { hikeTags, hikeReviews, avgHikeRating } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const reviews = hikeReviews(state, ownProps.match.params.hikeId);

    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId],
        tags: hikeTags(state, ownProps.match.params.hikeId),
        reviews: reviews,
        reviewCount: reviews.length,
        avgRating: avgHikeRating(reviews),
        loggedIn: Boolean(state.session.currentUserId)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHike: hikeId => dispatch(fetchHike(hikeId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HikeShow);