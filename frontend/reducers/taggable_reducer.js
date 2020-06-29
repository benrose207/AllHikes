import { RECEIVE_HIKE } from "../actions/hike_actions";
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";

const taggableReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HIKE:
        case RECEIVE_REVIEWS:
        case RECEIVE_REVIEW:
            return Object.assign({}, state, action.payload.taggable)
        default:
            return state;
    }
}

export default taggableReducer;