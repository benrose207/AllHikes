import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }
    
    render () {
        const { id, firstName, lastName, createdAt } = this.props.user;
        let year;
        if (createdAt) {
            year = createdAt.slice(0,4);
        }

        return (
            <div className="primary-content">
                <ul className="user-tabs">
                    <li>
                        <Link to={`/members/${id}`}>Profile</Link>
                    </li>
                </ul>
                <main className="user-profile">
                    <div className="content-header">
                        <h3>Profile</h3>
                        <button className="secondary-cta">Edit Profile</button>
                    </div>
                    <div className="user-details">
                        <h2>{firstName} {lastName}</h2>
                        <p>Member since: {year}</p>
                    </div>
                </main>
            </div>
        );
    }
}

export default User;