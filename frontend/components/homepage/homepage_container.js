import { connect } from "react-redux";
import HomePage from "./homepage";

const mapStateToProps = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.currentUserId]
    };
};

export default connect(
    mapStateToProps,
    null
)(HomePage);