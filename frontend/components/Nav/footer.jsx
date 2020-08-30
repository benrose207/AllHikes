import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faAngellist } from "@fortawesome/free-brands-svg-icons";
import ReactGA from "react-ga";

const Footer = (props) => {
    return (
        <footer>
            <div className="flex-footer">
                <div className="logo-title">
                    <FontAwesomeIcon icon={faMountain} className="logo-icon"/>
                    <h3>AllHikes</h3>
                </div>
                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/benjamin-rose-483549124/"
                        target="_blank"
                        aria-label="LinkedIn logo"
                        rel="noopener"
                        onClick={() => ReactGA.event({category: 'click', action: "linkedin", label: 'footer'})}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/benrose207"
                        target="_blank"
                        aria-label="GitHub logo"
                        rel="noopener"
                        onClick={() => ReactGA.event({ category: 'click', action: "github", label: 'footer' })}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://angel.co/benjamin-rose-2"
                        target="_blank"
                        aria-label="Angellist logo"
                        rel="noopener"
                        onClick={() => ReactGA.event({ category: 'click', action: "angellist", label: 'footer' })}
                    >
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;