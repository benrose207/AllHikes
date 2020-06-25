import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";


const MainNav = ({ currentUser, logout }) => {
    const userNav = ( currentUser ? (
        <>
            <div className="dropdown-selector">
                <p>{currentUser.firstName}</p>
                <ul className="user-dropdown">
                    <li>
                        <Link to={`/members/${currentUser.id}`}>Profile</Link>
                    </li>
                    <li>
                        <button onClick={logout} >Logout</button>
                    </li>
                </ul>
            </div>
        </>
    ) : (
        <>
            <Link to="/signup" className="secondary-cta">Sign Up</Link>
            <Link to="/login" className="tertiary-cta">Log In</Link>
        </>
    ))

    return (
        <nav className="main-nav">
            <div className="nav-site-links"></div>
            <div className="nav-logo-title">
                <Link to="/" className="logo-title">
                    <FontAwesomeIcon icon={faMountain} className="logo-icon"/>
                    <h2>AllHikes</h2>
                </Link>
            </div>
            <div className="nav-user-links">
                {userNav}
            </div>
        </nav>
    );
}

export default MainNav;