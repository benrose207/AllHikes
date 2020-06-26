import { connect } from "react-redux";
import HikeMap from "./hike_map";

const mapStateToProps = (state, ownProps) => {
    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId]
    }
}

export default connect(
    mapStateToProps,
    null
)(HikeMap);