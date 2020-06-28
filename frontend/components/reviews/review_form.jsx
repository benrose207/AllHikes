import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.initialState;
        this.handleTagSelection = this.handleTagSelection.bind(this);
    }

    handleTagSelection(e) {
        const newValue = this.state.tag_ids.concat([e.target.dataset.tagid])
        debugger
        this.setState({ tag_ids: newValue})
    }

    render () {
        debugger
        const tagFormCloud = (
            <>
                {this.props.trailConditions.map(trailConditions => (
                    <a key={trailConditions.id} data-tagid={trailConditions.id} className="tag">{trailConditions.name}</a>
                ))}
            </>
        )

        return (
            <form className="review-form">
                <label htmlFor="reviewText">Reviews</label>
                <textarea id="reviewText" cols="40" rows="8"></textarea>

                <label htmlFor="activity">Activity</label>

                <label htmlFor="activityDate">Activity Date</label>
                <input type="date" id="activityDate"/>

                <label htmlFor="trailConditions">Trail Conditions</label>
                <div onClick={this.handleTagSelection}>
                    {tagFormCloud}
                </div>
                <button className="primary-cta">Save</button>
                <button className="secondary-cta">Cancel</button>
            </form>
        )
    }
}

export default ReviewForm;