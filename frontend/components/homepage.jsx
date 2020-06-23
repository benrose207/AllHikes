import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <main className="homepage">
            <div className="homepage-hero">
                <h1>Find your next favorite trail</h1>
            </div>
            <section className="homepage-subcontent">
                <h2>100,000+ trails. 20 million explorers. Endless memories.</h2>
                <p>The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</p>
                <Link to="/signup">Sign up for free</Link>
            </section>
        </main>
    )
}

export default HomePage;