import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from "../actions/review_actions";
import { RECEIVE_HIKE } from "../actions/hike_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_HIKE:
        case RECEIVE_REVIEWS:
            return Object.assign(nextState, action.payload.reviews);
        case RECEIVE_REVIEW:
            return Object.assign(nextState, action.payload.review);
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;