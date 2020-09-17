import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";


const MainNav = ({ currentUser, logout }) => {

    const profilePicture = (currentUser && currentUser.profilePicture ? (
        <picture>
            <img src={currentUser.profilePicture} alt={`${currentUser.firstName} ${currentUser.lastName}`} />
        </picture>
    ) : (<FontAwesomeIcon icon={faHiking} />))

    const userNav = ( currentUser ? (
        <>
            <div className="dropdown-selector">
                <div className="user-menu-header">
                    <div className="profile-picture">
                        {profilePicture}
                    </div>
                    <p>{currentUser.firstName}</p>
                </div>
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
            <div id="ml-user-menu">
                <Link to="/signup" className="secondary-cta">Sign Up</Link>
                <Link to="/login" className="tertiary-cta">Log In</Link>
            </div>
            <div id="s-user-menu" className="dropdown-selector">
                <div className="user-menu-header">
                    Menu
                </div>
                <ul className="user-dropdown">
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
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