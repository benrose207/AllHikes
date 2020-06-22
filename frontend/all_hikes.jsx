import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing imports

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    //testing start
    window.getState = store.getState;
    window.dispatch - store.dispatch;

    //testing end

    ReactDOM.render(<Root store={store} />, root);
})