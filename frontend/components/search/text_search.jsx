import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./search_results";

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
        event.preventDefault();
        this.props.fetchSearchResults(this.state.queryStr);
    }

    render() {

        return (
            <div className="text-search-home">
                <form onSubmit={this.search} className="text-search">
                    <label htmlFor="home-search-bar">
                        <FontAwesomeIcon icon={faSearch} />
                    </label>
                    <input
                        id="home-search-bar"
                        type="text"
                        placeholder="Enter a park or trail name"
                        onChange={this.handleInput}
                    />
                    <button>Search</button>
                </form>
                <SearchResults searchResults={this.props.searchResults} />
            </div>
        )
    }
}

export default TextSearch;