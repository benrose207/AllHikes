import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class TextSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { queryStr: "" }
        this.search = this.search.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({ queryStr: e.target.value }, this.search)
    }

    search() {
        this.props.fetchSearchResults(this.state.queryStr);
    }

    render() {
        const results = this.props.searchResults.map(searchResult => (
            <li key={`${searchResult.type}-${searchResult.id}`}><Link to={`/hikes/${searchResult.id}`}>{searchResult.name}</Link></li>
        ));

        return (
            <div className="text-search-home">
                <form onSubmit={this.search} className="text-search">
                    <label htmlFor="home-search-bar">
                        <FontAwesomeIcon icon={faSearch} />
                    </label>
                    <input
                        id="home-search-bar"
                        type="text"
                        placeholder="Enter a city, park, or trail name"
                        onChange={this.handleInput}
                    />
                    <button>Search</button>
                </form>
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

export default TextSearch;