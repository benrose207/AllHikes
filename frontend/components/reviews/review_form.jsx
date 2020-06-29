import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialState;

        this.handleTagSelection = this.handleTagSelection.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTagSelection(e) {
        const selectedTag = e.target.dataset.tagid;
        let newValue = this.state.tag_ids;
        
        if (this.state.tag_ids.includes(selectedTag)) {
            this.setState({ tag_ids: newValue.filter(tagId => tagId !== selectedTag) })
        } else {
            this.setState({ tag_ids: newValue.concat(selectedTag)})
        }

        e.target.classList.toggle("tag-selected");
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const tags = [this.state.selectedActivity].concat(this.state.tag_ids);
        
        const formData = {};
        Object.keys(this.state).forEach(key => {
            if (key === "tag_ids") {
                formData[key] = tags;
            } else if (key !== "selectedActivity") {
                formData[key] = this.state[key]
            }
        })
        
        this.props.submitAction(formData)
            .then(this.props.closeFormAction);
    }

    render () {
        const tagFormCloud = (
            <>
                {this.props.trailConditions.map(trailConditions => (
                    <a 
                        key={trailConditions.id} 
                        data-tagid={trailConditions.id}
                        className={this.state.tag_ids.includes(trailConditions.id) ? "tag-selected" : ""}
                    >{trailConditions.name}</a>
                ))}
            </>
        )

        const errors = (this.props.errors ? (
            <ul className="form-errors">
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        ) : "")
        
        return (
            <form className="review-form" onSubmit={this.handleSubmit}>
                <label htmlFor="rating">Rating</label>
                <div className="rating-select" onChange={this.handleInput("rating")}>
                    <input type="radio" id="five" name="rating" value="5" defaultChecked={this.state.rating === 5}/>
                    <label htmlFor="five" className="review-star"></label>

                    <input type="radio" id="four" name="rating" value="4" defaultChecked={this.state.rating === 4}/>
                    <label htmlFor="four" className="review-star"></label>

                    <input type="radio" id="three" name="rating" value="3" defaultChecked={this.state.rating === 3}/>
                    <label htmlFor="three" className="review-star"></label>

                    <input type="radio" id="two" name="rating" value="2" defaultChecked={this.state.rating === 2}/>
                    <label htmlFor="two" className="review-star"></label>

                    <input type="radio" id="one" name="rating" value="1" required defaultChecked={this.state.rating === 1}/>
                    <label htmlFor="one" className="review-star"></label>
                </div>

                <label htmlFor="reviewText">Review</label>
                <textarea 
                    id="reviewText" 
                    rows="8" 
                    value={this.state.review_text}
                    required
                    onChange={this.handleInput("review_text")}>
                {this.state.review_text}
                </textarea>

                <label htmlFor="activity">Activity</label>
                <select 
                    id="activity" 
                    value={this.state.selectedActivity}
                    required
                    onChange={this.handleInput("selectedActivity")}
                >
                    {this.props.activities.map(activity => (
                        <option 
                            key={activity.id} 
                            value={activity.id}>
                            {activity.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="activityDate">Activity Date</label>
                <input 
                    type="date" 
                    id="activityDate" 
                    value={this.state.activity_date}
                    required
                    onChange={this.handleInput("activity_date")}/>

                <label htmlFor="trailConditions">Trail Conditions (optional)</label>
                <div onClick={this.handleTagSelection} className="form-tag-cloud">
                    {tagFormCloud}
                </div>
                {errors}
                <button className="primary-cta">Save</button>
                <a className="tag" onClick={this.props.closeFormAction}>Cancel</a>
            </form>
        )
    }
}

export default ReviewForm;