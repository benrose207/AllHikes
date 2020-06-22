import { connect } from "react-redux";
import MainNav from "./main_nav";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.currentUserId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainNav);