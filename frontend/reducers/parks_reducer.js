import { RECEIVE_PARK } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PARK:
            const nextState = Object.assign({}, state);
            nextState[action.payload.park.id] = action.payload.park;
            return nextState;
        default:
            return state;
    };
}

export default parksReducer;