import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

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
        secondaryActionLink: <Link to="/login" >Log in</Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);