import React from "react";
import { Link } from "react-router-dom";

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
            <div>
                <form onSubmit={this.search}>
                    <input
                        type="text"
                        placeholder="Enter a City, Park, or Trail Name"
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