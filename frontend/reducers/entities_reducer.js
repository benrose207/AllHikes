import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import hikesReducer from "./hikes_reducer";
import tagsReducer from "./tags_reducer";
import taggableReducer from "./taggable_reducer";

const entitiesReducer = combineReducers({
    hikes: hikesReducer,
    users: usersReducer,
    tags: tagsReducer,
    taggable: taggableReducer,
});

export default entitiesReducer;