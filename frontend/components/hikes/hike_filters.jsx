import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

class HikeFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            easy: false,
            moderate: false,
            difficult: false,
            loop: false,
            outAndBack: false,
            pointToPoint: false,
            rating: "",
            difficultyOpen: false,
            routeOpen: false,
            ratingOpen: false
        }

        this.handleMultiSelectFilter = this.handleMultiSelectFilter.bind(this);
        this.filterResults = this.filterResults.bind(this);
        this.handleRatingFilter = this.handleRatingFilter.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
    }

    handleMultiSelectFilter(e) {
        const field = e.target.id;
        this.setState({ [field]: !this.state[field] }, this.filterResults);
    }

    handleRatingFilter(e) {
        let newValue = e.target.value;
        this.setState({ rating: newValue }, this.filterResults);
    }

    filterResults() {
        const keys = Object.keys(this.state);
        let difficultyParams = [];
        let routeTypeParams = [];
        keys.forEach(key => {
            if (key === "easy" && this.state[key]) difficultyParams.push(key);
            if (key === "moderate" && this.state[key]) difficultyParams.push(key);
            if (key === "difficult" && this.state[key]) difficultyParams.push(key);

            if (key === "loop" && this.state[key]) routeTypeParams.push("Loop");
            if (key === "outAndBack" && this.state[key]) routeTypeParams.push("Out %26 Back");
            if (key === "pointToPoint" && this.state[key]) routeTypeParams.push("Point-to-Point");
        })
        
        let queryStr = "";
        if (difficultyParams.length) queryStr += `difficulty=${difficultyParams.join(",")}&`;
        if (routeTypeParams.length) queryStr += `route_type=${routeTypeParams.join(",")}&`;
        if (this.state.rating) queryStr += `rating=${this.state.rating}&`;

        this.props.fetchParkHikes(this.props.parkId, queryStr)
            .then(() => this.props.toggleFiltered(queryStr));
    }

    toggleFilterDropdown(field) {
        return (e) => {
            this.setState({
                difficultyOpen: "difficultyOpen" === field ? !this.state.difficultyOpen : false,
                routeOpen: "routeOpen" === field ? !this.state.routeOpen : false,
                ratingOpen: "ratingOpen" === field ? !this.state.ratingOpen : false,
            });
        }
    }

    resetFilters() {
        this.setState({
            easy: false,
            moderate: false,
            difficult: false,
            loop: false,
            outAndBack: false,
            pointToPoint: false,
            rating: "",
            difficultyOpen: false,
            routeOpen: false,
            ratingOpen: false
        }, this.props.toggleFiltered(""));
    }

    render() {
        const { easy, moderate, difficult, loop, outAndBack, pointToPoint, difficultyOpen, routeOpen, ratingOpen } = this.state;

        const difficultyFilterClass = (difficultyOpen || easy || moderate || difficult) ? "hike-filter-selected" : "hike-filter";
        const routeFilterClass = (routeOpen || loop || outAndBack || pointToPoint) ? "hike-filter-selected" : "hike-filter";
        const ratingFilterClass = (ratingOpen || this.state.rating) ? "hike-filter-selected" : "hike-filter";
    
        return (
            <div className="hike-filter-bar">
                <div className="hike-filter-container">
                    <button className={difficultyFilterClass} onClick={this.toggleFilterDropdown("difficultyOpen")}>
                        <span>Difficulty</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className={`hike-filter-dropdown${this.state.difficultyOpen ? "" : " hidden"}`}>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="difficulty"
                                id="easy"
                                value="easy"
                                checked={this.state.easy}
                                onChange={this.handleMultiSelectFilter} />
                            <label htmlFor="easy">Easy</label>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="difficulty"
                                id="moderate"
                                value="moderate"
                                checked={this.state.moderate}
                                onChange={this.handleMultiSelectFilter} />
                            <label htmlFor="moderate">Moderate</label>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="difficulty"
                                id="difficult"
                                value="difficult"
                                checked={this.state.difficult}
                                onChange={this.handleMultiSelectFilter} />
                            <label htmlFor="difficult">Difficult</label>
                        </div>
                    </form>
                </div>
                <div className="hike-filter-container">
                    <button className={routeFilterClass} onClick={this.toggleFilterDropdown("routeOpen")}>
                        <span>Route Type</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className={`hike-filter-dropdown${this.state.routeOpen ? "" : " hidden"}`}>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="route_type"
                                id="loop"
                                value="loop"
                                checked={this.state.loop}
                                onChange={this.handleMultiSelectFilter} />
                            <label htmlFor="loop">Loop</label>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="route_type"
                                id="outAndBack"
                                value="Out & Back"
                                checked={this.state.outAndBack}
                                onChange={this.handleMultiSelectFilter} />
                            <label htmlFor="outAndBack">Out & Back</label>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                name="route_type"
                                id="pointToPoint"
                                value="Point-to-Point"
                                checked={this.state.pointToPoint}
                                onChange={this.handleMultiSelectFilter} />
                            <label htmlFor="pointToPoint">Point-to-Point</label>
                        </div>
                    </form>
                </div>
                <div className="hike-filter-container">
                    <button className={ratingFilterClass} onClick={this.toggleFilterDropdown("ratingOpen")}>
                        <span>Rating</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className={`hike-filter-dropdown${this.state.ratingOpen ? "" : " hidden"}`}>
                        <div className="rating-select">
                            <input type="radio" id="five" name="rating" value="5" checked={this.state.rating === "5"} onChange={this.handleRatingFilter}/>
                            <label htmlFor="five" className="review-star"></label>

                            <input type="radio" id="four" name="rating" value="4" checked={this.state.rating === "4"} onChange={this.handleRatingFilter}/>
                            <label htmlFor="four" className="review-star"></label>

                            <input type="radio" id="three" name="rating" value="3" checked={this.state.rating === "3"} onChange={this.handleRatingFilter}/>
                            <label htmlFor="three" className="review-star"></label>

                            <input type="radio" id="two" name="rating" value="2" checked={this.state.rating === "2"} onChange={this.handleRatingFilter}/>
                            <label htmlFor="two" className="review-star"></label>

                            <input type="radio" id="one" name="rating" value="1" required checked={this.state.rating === "1"} onChange={this.handleRatingFilter}/>
                            <label htmlFor="one" className="review-star"></label>
                        </div>
                    </form>
                </div>

                {this.props.filtered ? (
                    <button className="filter-reset" onClick={this.resetFilters}>
                        Clear filters
                    </button>
                ) : null}
            </div>
        )
    }
}

export default HikeFilters;