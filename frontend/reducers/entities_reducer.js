import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import hikesReducer from "./hikes_reducer";

const entitiesReducer = combineReducers({
    hikes: hikesReducer,
    users: usersReducer,
});

export default entitiesReducer;