import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessionErrorsReducer";
import reviewErrorsReducer from "./review_errors_reducer";
import photosErrorsReducer from "./photos_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviewForm: reviewErrorsReducer,
    photoForm: photosErrorsReducer
});

export default errorsReducer;