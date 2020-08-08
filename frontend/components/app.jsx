import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomePage from "./homepage";
import Footer from "./nav/footer";
import MainNavContainer from "./nav/main_nav_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import UserProfileContainer from "./users/user_profile_container";
import HikeShowContainer from "./hikes/hike_show_container";
import EditReviewContainer from "./reviews/edit_review_container";
import ParkShowContainer from "./parks/park_show_container";

const App = () => {
    return (
        <>
            <header>
                <MainNavContainer />
            </header>

            <div className="content">
                <Route exact path="/" component={HomePage} />            
                <Route path="/hikes/:hikeId" render={(props) => (
                    <HikeShowContainer key={props.match.params.hikeId} {...props} />)} />
                <Route path="/parks/:parkId" component={ParkShowContainer}/>
                <ProtectedRoute path="/my/reviews/:reviewId/edit" component={EditReviewContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/members/:userId" component={UserProfileContainer} />
            </div>
            <Footer />
        </>
    )
}

export default App;