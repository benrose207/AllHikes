import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

const receiveSearchResults = (searchResults) => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        searchResults
    };
};

export const clearSearchResults = () => {
    return {
        type: CLEAR_SEARCH_RESULTS
    }
}

export const fetchSearchResults = queryStr => dispatch => {
    return SearchAPIUtil.textSearch(queryStr)
        .then(searchResults => dispatch(receiveSearchResults(searchResults)));
}