import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import MainNavContainer from "./nav/main_nav_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => {
    return (
        <>
            <header>
                <MainNavContainer />
            </header>

            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
        </>
    )
}

export default App;