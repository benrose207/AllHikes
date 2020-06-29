import React from "react";
import { ScrollToTopOnMount } from "../../util/route_util";
import UserDetail from "./user_detail";
import ReviewFeedContainer from "../reviews/review_feed_container";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: "Profile"
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    toggleUserView(tab) {
        return (e) => {
            this.setState({ currentTab: tab })
        }
    }
    
    render () {
        const EditProfileButton = (<button className="secondary-cta">Edit Profile</button>)

        return (
            <div className="primary-content">
                <ScrollToTopOnMount />
                <ul className="user-tabs">
                    <li className={this.state.currentTab === "Profile" ? "active-user-tab" : null}>
                        <a onClick={this.toggleUserView("Profile")}>Profile</a>
                    </li>
                    <li className={this.state.currentTab === "Reviews" ? "active-user-tab" : null}>
                        <a onClick={this.toggleUserView("Reviews")} >Reviews</a>
                    </li>
                </ul>
                <main className="user-profile">
                    <div className="content-header">
                        <h3>{this.state.currentTab}</h3>
                        {this.state.currentTab === "Profile" ? EditProfileButton : null}
                    </div>
                    <section className="primary-tab-content">
                        {this.state.currentTab === "Profile" ? <UserDetail user={this.props.user} /> : null}
                        {this.state.currentTab === "Reviews" ? <ReviewFeedContainer userId={this.props.user.id} /> : null}
                    </section>
                </main>
            </div>
        );
    }
}

export default UserProfile;