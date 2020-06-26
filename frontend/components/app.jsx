import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomePage from "./homepage";
import Footer from "./nav/footer";
import MainNavContainer from "./nav/main_nav_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import UserContainer from "./users/user_container";
import HikeShowContainer from "./hikes/hike_show_container";


const App = () => {
    return (
        <>
            <header>
                <MainNavContainer />
            </header>

            <Route exact path="/" component={HomePage} />            
            <Route path="/hikes/:hikeId" render={(props) => (
                <HikeShowContainer key={props.match.params.hikeId} {...props}/> )}/>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/members/:userId" component={UserContainer} />

            <Footer />
        </>
    )
}

export default App;