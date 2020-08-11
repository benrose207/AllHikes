import React from "react";

class HikeFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            easy: false,
            moderate: false,
            difficult: false,
            length: "",
            elevation: "",
            routeType: "",
            rating: "",
            usage: "",
        }

        this.handleMultiSelectFilter = this.handleMultiSelectFilter.bind(this);
        this.filterResults = this.filterResults.bind(this);
    }

    handleMultiSelectFilter(e) {
        const field = e.target.id;
        this.setState({ [field]: !this.state[field] }, this.filterResults);
    }

    filterResults() {
        const keys = Object.keys(this.state);
        let difficultyParams = [];
        keys.forEach(key => {
            if (key === "easy" && this.state[key]) difficultyParams.push(key);
            if (key === "moderate" && this.state[key]) difficultyParams.push(key);
            if (key === "difficult" && this.state[key]) difficultyParams.push(key);
        })
        
        let queryStr = "";
        if (difficultyParams.length) queryStr += `difficulty=${difficultyParams.join(",")}`;
        this.props.fetchParkHikes(this.props.parkId, queryStr)
            .then(() => this.props.toggleFiltered(queryStr));
    }

    render() {
        return (
            <div>
                <button>Difficulty</button>
                <form>
                    <input
                        type="checkbox"
                        name="difficulty"
                        id="easy"
                        value="easy"
                        checked={this.state.easy}
                        onChange={this.handleMultiSelectFilter} />
                    <label htmlFor="easy">Easy</label>
                    <input
                        type="checkbox"
                        name="difficulty"
                        id="moderate"
                        value="moderate"
                        checked={this.state.moderate}
                        onChange={this.handleMultiSelectFilter} />
                    <label htmlFor="moderate">Moderate</label>
                    <input
                        type="checkbox"
                        name="difficulty"
                        id="difficult"
                        value="difficult"
                        checked={this.state.difficult}
                        onChange={this.handleMultiSelectFilter} />
                    <label htmlFor="difficult">Difficult</label>
                </form>
            </div>
        )
    }
}

export default HikeFilters;