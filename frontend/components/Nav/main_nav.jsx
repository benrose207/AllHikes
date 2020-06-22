import React from "react";
import { Link } from "react-router-dom";

const MainNav = ({ currentUser, logout }) => {
    const userNav = ( currentUser ? (
        <>
            <p>{currentUser.firstName}</p>
            <button onClick={logout} >Logout</button>
        </>
    ) : (
        <>
            <Link to="/signup" >Sign Up</Link>
            <Link to="login" >Log In</Link>
        </>
    ))

    return (
        <nav>
            <h2>AllHikes</h2>
            {userNav}
        </nav>
    );
}

export default MainNav;