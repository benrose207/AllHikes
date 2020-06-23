import { connect } from "react-redux";
import User from "./user";
import { fetchUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);