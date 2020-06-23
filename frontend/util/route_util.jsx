import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

const Auth = ({ path, exact, loggedIn, component: Component }) => (
    <Route 
        path={path}
        exact={exact}
        render={props => 
            loggedIn ? <Redirect to="/" /> : <Component {...props} />}
    />
);

export const AuthRoute = withRouter(connect(
    mapStateToProps,
    null
)(Auth));