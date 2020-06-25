import React from "react";

class HikeShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedContent: "description"
        };

        this.handleContentTabs = this.handleContentTabs.bind(this);
    }

    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    handleContentTabs(e) {
        this.setState({ selectedContent: e.target.dataset.fieldName })
    }

    render () {
        if (!this.props.hike) return null;

        const { hike, tags } = this.props;
        
        const hikeDifficulty = `tag hike-difficulty ${hike.difficulty}`;

        const tagCloud = tags.map(tag => (
            <h4 key={tag.id} className="tag">{tag.name}</h4>
        ));

        const contentTabs = (
            <>
                <nav onClick={this.handleContentTabs} className="hike-tabs">
                    <span 
                        data-field-name="description" 
                        className={ this.state.selectedContent === "description" ? "active-tab" : null}
                    >Description</span>
                    <span 
                        data-field-name="contact"
                        className={this.state.selectedContent === "contact" ? "active-tab" : null}
                    >Contact</span>
                </nav>
                <p>{hike[this.state.selectedContent]}</p>
            </>
        );

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
                        <section className="hike-content">
                            {contentTabs}
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