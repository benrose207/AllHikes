import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

//testing imports
import * as SessionApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    //testing start
    window.signup = SessionApiUtil.signup;
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    window.getState = store.getState;
    window.dispatch - store.dispatch;

    //testing end

    ReactDOM.render(<h1>Hello World!</h1>, root);
})