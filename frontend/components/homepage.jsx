import React from "react";

const HomePage = (props) => {
    return (
        <main className="homepage">
            <div className="homepage-hero">
                <h1>Find your next favorite trail</h1>
            </div>
            <section className="homepage-subcontent">
                <h2>100,000+ trails. 20 million explorers. Endless memories.</h2>
                <p>The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</p>
                <button>Sign up for free</button>
            </section>
        </main>
    )
}

export default HomePage;