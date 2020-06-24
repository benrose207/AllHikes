import { RECEIVE_HIKE } from "../actions/hike_actions";

const hikesReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_HIKE:
            const nextState = Object.assign({}, state);
            nextState[action.hike.id] = action.hike;
            return nextState;
        default:
            return state;
    }
}

export default hikesReducer;