import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";

const UserDetail = (props) => {
    const { firstName, lastName, createdAt } = props.user;

    let year;
    if (createdAt) {
        year = createdAt.slice(0, 4);
    }

    return (
        <div className="user-details">
                <div className="profile-picture">
                    <FontAwesomeIcon icon={faHiking} />
                </div>
                <section>
                    <h2>{firstName} {lastName}</h2>
                    <p>Member since: {year}</p>
                </section>
        </div>
    )
}

export default UserDetail;