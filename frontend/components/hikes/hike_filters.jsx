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
            length: "",
            elevation: "",
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

        this.props.fetchParkHikes(this.props.parkId, queryStr)
            .then(() => this.props.toggleFiltered(queryStr));
    }

    toggleFilterDropdown(dropdownId) {
        return (e) => {
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle("hidden");
            const filter = e.currentTarget;
            filter.classList.toggle("hike-filter-selected");
            filter.classList.toggle("hike-filter");
        }
    }

    render() {
        return (
            <div className="hike-filter-bar">
                <div className="hike-filter-container">
                    <button className="hike-filter" onClick={this.toggleFilterDropdown("difficulty-dropdown")}>
                        <span>Difficulty</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className="hike-filter-dropdown hidden" id="difficulty-dropdown">
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
                    <button className="hike-filter" onClick={this.toggleFilterDropdown("route-dropdown")}>
                        <span>Route Type</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <form className="hike-filter-dropdown hidden" id="route-dropdown">
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
            </div>
        )
    }
}

export default HikeFilters;