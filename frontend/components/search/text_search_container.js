import { connect } from 'react-redux';
import TextSearch from "./text_search";
import { fetchSearchResults } from "../../actions/search_actions";

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchResults: queryStr => dispatch(fetchSearchResults(queryStr))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextSearch);