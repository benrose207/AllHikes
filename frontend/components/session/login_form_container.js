import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => {
    return {
        formTitle: "Log in and let's get going",
        submitText: "Log in",
        errors: errors.session,
        initialState: {
            email: "",
            password: ""
        },
        secondaryActionText: "Don't have an account?",
        secondaryActionLink: <Link to="/signup" >Sign up for free</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);