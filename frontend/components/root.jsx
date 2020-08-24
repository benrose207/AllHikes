import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import ReactGA from "react-ga";


const Root = ({ store }) => {
    
    ReactGA.initialize('UA-175985833-3');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    );
};

export default Root;