import React from "react";

class HikeShow extends React.Component {

    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    render () {
        if (!this.props.hike) return null;

        const { hike, tags } = this.props;

        const hikeDifficulty = `tag hike-difficulty ${hike.difficulty}`;

        return (
            <main className="hike-container">
                <div className="hike-hero">
                    <div className="hike-hero-content">
                        <h1>{hike.name}</h1>
                        <span className={hikeDifficulty}>{hike.difficulty}</span>
                    </div>
                </div>
                <div className="hike-actions">

                </div>
                <article>

                </article>
                <aside>

                </aside>
            </main>
        )
    }
}

export default HikeShow;