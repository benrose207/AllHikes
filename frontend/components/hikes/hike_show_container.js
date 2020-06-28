import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchHike } from "../../actions/hike_actions";
import { hikeTags } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId],
        tags: hikeTags(state, ownProps.match.params.hikeId),
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