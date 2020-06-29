import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessionErrorsReducer";
import reviewErrorsReducer from "./review_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviewForm: reviewErrorsReducer
});

export default errorsReducer;