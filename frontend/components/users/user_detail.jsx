import React from "react";

const UserDetail = (props) => {
    const { firstName, lastName, createdAt } = props.user;

    let year;
    if (createdAt) {
        year = createdAt.slice(0, 4);
    }

    return (
        <div className="user-details">
            <h2>{firstName} {lastName}</h2>
            <p>Member since: {year}</p>
        </div>
    )
}

export default UserDetail;