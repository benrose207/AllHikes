import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./app";
import ReactGA from "react-ga";


const Root = ({ store }) => {
    const history = createBrowserHistory();
    ReactGA.initialize('UA-175985833-3');
    ReactGA.pageview(window.location.pathname + location.hash.slice(1) + window.location.search);
    history.listen((location) => {
        ReactGA.pageview(location.pathname + location.hash.slice(1) + location.search);
    });

    return(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    );
};

export default Root;