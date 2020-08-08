import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns, faTree } from "@fortawesome/free-solid-svg-icons";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onMouseDown(e) {
        e.preventDefault();
    }

    componentDidMount() {
        const { searchResults, currentQuery } = this.props;
        if (!searchResults.length && currentQuery.length === 0) this.props.fetchSearchResults("");
    }
    
    render() {        
        const results = this.props.searchResults.map(searchResult => (
            <li key={`${searchResult.type}-${searchResult.id}`} onMouseDown={this.onMouseDown}>
                <Link to={`/hikes/${searchResult.id}`} className="search-result">
                    <FontAwesomeIcon icon={faMapSigns} />
                    <div>
                        {searchResult.name}
                    </div>
                </Link>
            </li>
        ));
    
        const noResultsDisplay = (
            <li className="search-result">No Results Found</li>
        )

        return (
            <ul className={`search-results-${this.props.parentName}`}>
                {this.props.searchResults.length ? results : noResultsDisplay}
            </ul>
        )
    }
}

export default SearchResults;