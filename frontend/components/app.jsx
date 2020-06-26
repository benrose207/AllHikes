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
import HikeMapContainer from "./maps/hike_map_container";


const App = () => {
    return (
        <>
            <header>
                <MainNavContainer />
            </header>

            <Route exact path="/" component={HomePage} />
            <div className="hike-with-map">
                <Route path="/hikes/:hikeId" component={HikeShowContainer} />
                <Route path="/hikes/:hikeId/map" component={HikeMapContainer} />
            </div>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/members/:userId" component={UserContainer} />

            <Footer />
        </>
    )
}

export default App;