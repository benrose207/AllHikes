import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import HomePage from "./homepage";
import Footer from "./nav/footer"
import MainNavContainer from "./nav/main_nav_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";


const App = () => {
    return (
        <>
            <header>
                <MainNavContainer />
            </header>

            <Route exact path="/" component={HomePage}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>

            <Footer />
        </>
    )
}

export default App;