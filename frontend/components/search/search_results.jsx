import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns, faTree } from "@fortawesome/free-solid-svg-icons";

const SearchResults = (props) => {
    const results = props.searchResults.map(searchResult => (
        <li key={`${searchResult.type}-${searchResult.id}`} >
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
        <ul className="search-results-home">
            {props.searchResults.length ? results : noResultsDisplay}
        </ul>
    )
}

export default SearchResults;