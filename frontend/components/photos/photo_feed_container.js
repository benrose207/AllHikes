import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PhotoFeed from "./photo_feed";
import { fetchPhotos } from "../../actions/photo_actions";

const mapStateToProps = state => {
    return {
        photos: Object.values(state.entities.photos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: (contentType, id) => dispatch(fetchPhotos(contentType, id))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoFeed));