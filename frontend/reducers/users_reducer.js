import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_REVIEWS } from "../actions/review_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, { [action.user.id]: action.user })
        case RECEIVE_REVIEWS:
            return Object.assign(nextState, action.payload.users)            
        default:
            return state;
    }
}

export default usersReducer;