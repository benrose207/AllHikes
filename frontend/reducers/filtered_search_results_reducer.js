import { RECEIVE_PARK_HIKES } from "../actions/park_actions";
import { CLEAR_SEARCH_RESULTS } from "../actions/search_actions";

const filteredSearchResultsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PARK_HIKES:
            return action.hikes;
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
};

export default filteredSearchResultsReducer;