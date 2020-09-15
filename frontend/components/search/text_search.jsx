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
            focused: false,
            currIdx: null
        }

        this.search = debounce(this.search, 200).bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    addKeyHandlers() {
        document.addEventListener('keydown', (event) => {
            const lastIndex = this.props.searchResults.length - 1;
            if (event.key === "ArrowUp") {
                if (this.state.currIdx === null) {
                    this.setState({ currIdx: lastIndex });
                } else if (this.state.currIdx > 0) {
                    this.setState({ currIdx: this.state.currIdx - 1 });
                }
            } else if (event.key === "ArrowDown") {
                if (this.state.currIdx === null) {
                    this.setState({ currIdx: 0 });
                } else if (this.state.currIdx < lastIndex) {
                    this.setState({ currIdx: this.state.currIdx + 1 });
                }
            } else if (this.state.currIdx !== null && event.key !== "Enter") {
                this.setState({ currIdx: null });
            }
        });

        document.addEventListener("keyup", (event) => {
            if (event.key === "Enter" && this.state.currIdx !== null) {
                const currResult = document.getElementById(`search-result-${this.state.currIdx}`);
                currResult.click();
            }
        })
    }

    componentDidMount() {
        this.addKeyHandlers();
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
            <label htmlFor="home-search-bar" aria-label="magnifying glass icon">
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
                        aria-label="text search input"
                        onChange={this.handleInput}
                    />
                    <button aria-label="Search">{searchButtonContent}</button>
                </form>
                <div className="search-results-container">
                    {this.state.focused ? (
                        <SearchResults
                            searchResults={this.props.searchResults}
                            fetchSearchResults={this.props.fetchSearchResults}
                            parentName={this.props.parentName}
                            currentQuery={this.state.queryStr}
                            currIdx={this.state.currIdx}
                        />
                    ) : null}
                </div>
            </div>
        )
    }
}

export default TextSearch;