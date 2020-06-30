import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import hikesReducer from "./hikes_reducer";
import tagsReducer from "./tags_reducer";
import taggableReducer from "./taggable_reducer";
import reviewsReducer from "./reviews_reducer";
import photosReducer from "./photos_reducer";

const entitiesReducer = combineReducers({
    hikes: hikesReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    photos: photosReducer,
    tags: tagsReducer,
    taggable: taggableReducer,
});

export default entitiesReducer;