import { RECEIVE_HIKE } from "../actions/hike_actions";
import { RECEIVE_PARK } from "../actions/park_actions";

const hikesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_HIKE:
            nextState[action.payload.hike.id] = action.payload.hike;
            return nextState;
        case RECEIVE_PARK:
            return Object.assign(nextState, action.payload.hikes);
        default:
            return state;
    }
}

export default hikesReducer;