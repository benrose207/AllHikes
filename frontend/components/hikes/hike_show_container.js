import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchHike } from "../../actions/hike_actions";
import { hikeTags, hikeReviews, avgHikeRating } from "../../reducers/selectors";
import { createPhotos } from "../../actions/photo_actions";

const mapStateToProps = (state, ownProps) => {
    const reviews = hikeReviews(state, ownProps.match.params.hikeId);

    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId],
        tags: hikeTags(state, ownProps.match.params.hikeId),
        reviews: reviews,
        reviewCount: reviews.length,
        avgRating: avgHikeRating(reviews),
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHike: hikeId => dispatch(fetchHike(hikeId)),
        createPhotos: photos => dispatch(createPhotos(photos))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HikeShow);