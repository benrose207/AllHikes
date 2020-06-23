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

const Protected = ({ path, exact, loggedIn, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/" /> }
    />
);

export const AuthRoute = withRouter(connect(
    mapStateToProps,
    null
)(Auth));

export const ProtectedRoute = withRouter(connect(
    mapStateToProps,
    null
)(Protected));