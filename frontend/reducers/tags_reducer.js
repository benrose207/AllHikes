import { RECEIVE_HIKE } from "../actions/hike_actions";

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_HIKE:
            return Object.assign({}, state, action.payload.tags)
        default:
            return state;
    }
}

export default tagsReducer;