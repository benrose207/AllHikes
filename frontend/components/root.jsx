import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import App from "./app";
import ReactGA from "react-ga";


const Root = ({ store }) => {
    const history = createHistory();
    ReactGA.initialize('UA-175985833-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
    history.listen((location) => {
        ReactGA.pageview(location.pathname + location.search);
    });

    return(
        <Provider store={store}>
            <HashRouter history={history}>
                <App />
            </HashRouter>
        </Provider>
    );
};

export default Root;