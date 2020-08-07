import { combineReducers } from 'redux';
import textSearchResultsReducer from "./text_search_results_reducer";

const searchResultsReducer = combineReducers({
    textSearchResults: textSearchResultsReducer
});

export default searchResultsReducer;