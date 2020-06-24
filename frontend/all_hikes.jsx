import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing imports
import { fetchHike } from "./actions/hike_actions"

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
    window.fetchHike = fetchHike;
    //testing end

    ReactDOM.render(<Root store={store} />, root);
})