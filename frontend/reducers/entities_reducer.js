import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import hikesReducer from "./hikes_reducer";
import tagsReducer from "./tags_reducer";
import taggableReducer from "./taggable_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    hikes: hikesReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    tags: tagsReducer,
    taggable: taggableReducer,
});

export default entitiesReducer;