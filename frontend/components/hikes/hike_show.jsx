import React from "react";

class HikeShow extends React.Component {

    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    render () {
        if (!this.props.hike) return null;

        const { hike, tags } = this.props;
        
        const hikeDifficulty = `tag hike-difficulty ${hike.difficulty}`;

        const tagCloud = tags.map(tag => (
            <h4 key={tag.id} className="tag">{tag.name}</h4>
        ));

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
                <div className="hike-main">
                    <article className="hike-main-content">
                        <p className="hike-summary">
                            {hike.name} is a 4.3 mile heavily trafficked loop trail located near Berkeley, California that features beautiful {tags[0].name} and is rated as {hike.difficulty}. The trail offers a number of activity options and is accessible year-round. Dogs and horses are also able to use this trail.
                        </p>
                        <section className="tag-cloud">
                            {tagCloud}
                        </section>
                    </article>
                    <aside className="hike-sidebar">

                    </aside>
                </div>
            </main>
        )
    }
}

export default HikeShow;