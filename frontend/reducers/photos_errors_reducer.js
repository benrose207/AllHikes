import { RECEIVE_PHOTOS, RECEIVE_PHOTOS_ERRORS } from "../actions/photo_actions";

const photosErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PHOTOS_ERRORS:
            return action.errors
        case RECEIVE_PHOTOS:
            return [];
        default:
            return state;
    }
}

export default photosErrorsReducer;