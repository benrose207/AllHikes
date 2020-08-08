import { connect } from 'react-redux';
import ParkShow from './park_show';
import { fetchPark, fetchParkHikes } from "../../actions/park_actions";
import { parkHikes } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const parkHikeData = parkHikes(state, ownProps.match.params.parkId);

    return {
        park: state.entities.parks[ownProps.match.params.parkId],
        hikes: parkHikeData.hikes,
        totalReviews: parkHikeData.totalReviews,
        avgRating: parkHikeData.avgRating
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchParkHikes: parkId => dispatch(fetchParkHikes(parkId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkShow);