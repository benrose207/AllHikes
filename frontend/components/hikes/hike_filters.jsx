import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";

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
            minLength: "0",
            maxLength: "25",
            minElevation: "0",
            maxElevation: "10000",
            difficultyOpen: false,
            routeOpen: false,
            ratingOpen: false,
            lengthOpen: false,
            elevationOpen: false
        }

        this.handleMultiSelectFilter = this.handleMultiSelectFilter.bind(this);
        this.handleRatingFilter = this.handleRatingFilter.bind(this);
        this.handleSliderFIlters = this.handleSliderFIlters.bind(this);
        this.filterResults = debounce(this.filterResults, 200).bind(this);
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

    handleSliderFIlters(e) {
        let field = e.target.name;
        let newValue = e.target.value;
        this.setState({ [field]: newValue }, this.filterResults);
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
        if (this.state.minLength !== "0") queryStr += `min_length=${this.state.minLength}&`;
        if (this.state.maxLength !== "25") queryStr += `max_length=${this.state.maxLength}&`;
        if (this.state.minElevation !== "0") queryStr += `min_elevation=${this.state.minElevation}&`;
        if (this.state.maxElevation !== "25") queryStr += `max_elevation=${this.state.maxElevation}&`;

        this.props.fetchParkHikes(this.props.parkId, queryStr)
            .then(() => this.props.toggleFiltered(queryStr));
    }

    toggleFilterDropdown(field) {
        return (e) => {
            this.setState({
                difficultyOpen: "difficultyOpen" === field ? !this.state.difficultyOpen : false,
                routeOpen: "routeOpen" === field ? !this.state.routeOpen : false,
                ratingOpen: "ratingOpen" === field ? !this.state.ratingOpen : false,
                lengthOpen: "lengthOpen" === field ? !this.state.lengthOpen : false,
                elevationOpen: "elevationOpen" === field ? !this.state.elevationOpen : false
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
            minLength: "0",
            maxLength: "25",
            minElevation: "0",
            maxElevation: "10000",
            difficultyOpen: false,
            routeOpen: false,
            ratingOpen: false,
            lengthOpen: false,
            elevationOpen: false
        }, this.props.toggleFiltered(""));
    }

    render() {
        const { easy, moderate, difficult, loop, outAndBack, pointToPoint, difficultyOpen, routeOpen, ratingOpen, lengthOpen, minLength, maxLength, elevationOpen, minElevation, maxElevation } = this.state;

        const difficultyFilterClass = (difficultyOpen || easy || moderate || difficult) ? "hike-filter-selected" : "hike-filter";
        const routeFilterClass = (routeOpen || loop || outAndBack || pointToPoint) ? "hike-filter-selected" : "hike-filter";
        const ratingFilterClass = (ratingOpen || this.state.rating) ? "hike-filter-selected" : "hike-filter";
        const lengthFilterClass = (lengthOpen || minLength !== "0" || maxLength !== "25") ? "hike-filter-selected" : "hike-filter";
        const elevationFilterClass = (elevationOpen || minElevation !== "0" || maxElevation !== "10000") ? "hike-filter-selected" : "hike-filter";
        
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
                    <button className={lengthFilterClass} onClick={this.toggleFilterDropdown("lengthOpen")}>
                        <span>Length</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className={`hike-filter-dropdown${this.state.lengthOpen ? "" : " hidden"}`}>
                        <div className="slider-filter-container">
                            <label htmlFor="min-length">Min. Length:  {minLength} mi</label>
                            <input type="range" name="minLength" id="min-length" min="0" max="25" value={minLength} onChange={this.handleSliderFIlters} />
                            <label htmlFor="max-length">Max. Length:  {maxLength === "25" ? "25+" : maxLength} mi</label>
                            <input type="range" name="maxLength" id="max-length" min="0" max="25" value={maxLength} onChange={this.handleSliderFIlters} />
                        </div>
                    </form>
                </div>
                <div className="hike-filter-container">
                    <button className={elevationFilterClass} onClick={this.toggleFilterDropdown("elevationOpen")}>
                        <span>Elevation Gain</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className={`hike-filter-dropdown${this.state.elevationOpen ? "" : " hidden"}`}>
                        <div className="slider-filter-container">
                            <label htmlFor="min-elevation">Min. Elevation Gain:  {minElevation} ft</label>
                            <input type="range" name="minElevation" id="min-elevation" min="0" max="10000" value={minElevation} onChange={this.handleSliderFIlters} />
                            <label htmlFor="max-elevation">Max. Elevation Gain:  {maxElevation === "10000" ? "10,000+" : maxElevation} ft</label>
                            <input type="range" name="maxElevation" id="max-elevation" min="0" max="10000" value={maxElevation} onChange={this.handleSliderFIlters} />
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