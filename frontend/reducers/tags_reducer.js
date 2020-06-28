import { RECEIVE_HIKE } from "../actions/hike_actions";
import { RECEIVE_REVIEWS } from "../actions/review_actions";

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_HIKE:
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.payload.tags)
        default:
            return state;
    }
}

export default tagsReducer;