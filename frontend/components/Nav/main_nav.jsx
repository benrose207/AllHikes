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
            <Link to="/signup" className="secondary-cta">Sign Up</Link>
            <Link to="login" className="tertiary-cta">Log In</Link>
        </>
    ))

    return (
        <nav className="main-nav">
            <div className="nav-site-links"></div>
            <Link to="/"><h2>AllHikes</h2></Link>
            <div className="nav-user-links">
                {userNav}
            </div>
        </nav>
    );
}

export default MainNav;