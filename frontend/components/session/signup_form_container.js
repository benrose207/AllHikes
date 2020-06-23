import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => {
    return {
        formTitle: "Create your free account",
        submitText: "Sign up",
        errors: errors.session,
        initialState: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }, 
        secondaryActionText: "Already have an account?",
        secondaryActionLink: <Link to="/login" className="inline-link">Log in</Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        login: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);