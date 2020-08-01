import React from "react";
import { Link } from "react-router-dom";
import { ScrollToTopOnMount } from "../util/route_util";
import TextSearchContainer from "./search/text_search_container";

const HomePage = (props) => {
    return (
        <main className="homepage">
            <ScrollToTopOnMount />
            <div className="homepage-hero">
                <div className="hero-content">
                    <h1>Find your next favorite hike</h1>
                    <TextSearchContainer />
                </div>
            </div>
            <section className="homepage-subcontent">
                <h2>100,000+ hikes. 20 million explorers. Endless memories.</h2>
                <p>The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated hike guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</p>
                <Link to="/signup" className="secondary-cta">Sign up for free</Link>
            </section>
        </main>
    )
}

export default HomePage;