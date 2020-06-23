import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing imports
import { fetchUser, updateUser } from "./util/user_api_util";

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
    window.dispatch - store.dispatch;
    window.fetchUser = fetchUser;
    window.updateUser = updateUser;

    //testing end

    ReactDOM.render(<Root store={store} />, root);
})