import { combineReducers } from 'redux';
import textSearchResultsReducer from "./text_search_results_reducer";
import filteredSearchResultsReducer from "./filtered_search_results_reducer";

const searchResultsReducer = combineReducers({
    textSearchResults: textSearchResultsReducer,
    filteredSearchResults: filteredSearchResultsReducer
});

export default searchResultsReducer;