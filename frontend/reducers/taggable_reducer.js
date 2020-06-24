import { RECEIVE_HIKE } from "../actions/hike_actions";

const taggableReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HIKE:
            return Object.assign({}, state, action.payload.taggable)
        default:
            return state;
    }
}

export default taggableReducer;