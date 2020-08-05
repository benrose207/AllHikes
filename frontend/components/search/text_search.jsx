import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./search_results";
import debounce from "lodash.debounce";

class TextSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryStr: "",
            focused: false
        }

        this.search = debounce(this.search, 200).bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentWillUnmount() {
        if (this.props.searchResults.length > 0) this.props.clearSearchResults();
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({ queryStr: e.target.value }, this.search)
    }

    search() {
        this.props.fetchSearchResults(this.state.queryStr);
    }

    handleFocus() {
        this.setState({ focused: true });
    }
    
    handleBlur() {
        this.setState({ focused: false });
    }

    render() {
        const inputLabel = this.props.parentName === "home" ? (
            <label htmlFor="home-search-bar">
                <FontAwesomeIcon icon={faSearch} />
            </label>
        ) : null;

        const searchButtonContent = this.props.parentName === "home" ? "Search" : (
            <FontAwesomeIcon icon={faSearch} />
        );

        return (
            <div className={`text-search-${this.props.parentName}`} onFocus={this.handleFocus} onBlur={this.handleBlur}>
                <form onSubmit={this.search} className="text-search">
                    {inputLabel}
                    <input
                        id="home-search-bar"
                        type="text"
                        placeholder="Enter a park or trail name"
                        autoComplete="off"
                        onChange={this.handleInput}
                    />
                    <button>{searchButtonContent}</button>
                </form>
                <div className="search-results-container">
                    {this.state.focused ? (
                        <SearchResults
                            searchResults={this.props.searchResults}
                            fetchSearchResults={this.props.fetchSearchResults}
                            parentName={this.props.parentName}
                            currentQuery={this.state.queryStr}
                        />
                    ) : null}
                </div>
            </div>
        )
    }
}

export default TextSearch;