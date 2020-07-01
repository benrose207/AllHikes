import { connect } from "react-redux";
import PhotosForm from "./photos_form";
import { createPhotos } from "../../actions/photo_actions";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.photoForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPhotos: photos => dispatch(createPhotos(photos))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotosForm);