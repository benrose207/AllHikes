import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing imports
import { fetchReviews, updateReview, deleteReview } from "./actions/review_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchReviews = fetchReviews;
    window.updateReview = updateReview;
    window.deleteReview = deleteReview;
    //testing end

    ReactDOM.render(<Root store={store} />, root);
})