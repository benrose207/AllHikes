import { connect } from 'react-redux';
import TextSearch from "./text_search";
import { fetchSearchResults, clearSearchResults } from "../../actions/search_actions";

const mapStateToProps = ({ searchResults }) => {
    return {
        searchResults: searchResults.textSearchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchResults: queryStr => dispatch(fetchSearchResults(queryStr)),
        clearSearchResults: () => dispatch(clearSearchResults())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextSearch);