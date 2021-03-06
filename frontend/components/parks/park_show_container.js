import { connect } from 'react-redux';
import ParkShow from './park_show';
import { fetchPark, fetchParkHikes } from "../../actions/park_actions";
import { parkHikes } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const parkHikeData = parkHikes(state, ownProps.match.params.parkId);

    return {
        park: state.entities.parks[ownProps.match.params.parkId],
        hikes: parkHikeData.hikes,
        filteredHikes: state.searchResults.filteredSearchResults,
        totalReviews: parkHikeData.totalReviews,
        avgRating: parkHikeData.avgRating,
        coverPhotos: parkHikeData.photos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchParkHikes: (parkId, query) => dispatch(fetchParkHikes(parkId, query))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkShow);