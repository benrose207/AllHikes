import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return (
        <footer>
            <div className="flex-footer">
                <div className="logo-title">
                    <FontAwesomeIcon icon={faMountain} className="logo-icon"/>
                    <h3>AllHikes</h3>
                </div>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/ben-rose-483549124/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/benrose207">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;