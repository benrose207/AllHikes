import React from "react";

class HikeShow extends React.Component {

    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    render () {
        if (!this.props.hike) return null;

        const { hike, tags } = this.props;
        return (
            <main className="hike-container">
                <div className="hike-hero">
                    <h1>{hike.name}</h1>
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