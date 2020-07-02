import { RECEIVE_HIKE } from "../actions/hike_actions";
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";

const taggableReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_HIKE:
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.payload.taggable)
        case RECEIVE_REVIEW:
            const reviewId = Object.values(action.payload.review)[0].id
            Object.values(nextState).forEach(taggable => {
                if (taggable.taggableId === reviewId && taggable.taggableType === "Review") {
                    delete nextState[taggable.id];
                }
            })
            return Object.assign({}, nextState, action.payload.taggable);
        default:
            return state;
    }
}

export default taggableReducer;