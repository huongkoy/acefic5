import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import HomePage from "containers/HomePage/store";
import Share from "shared/components/store";
import Page from "containers/pages/store";

const hasExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
        traceLimit: 25,
    });

const composeWith = hasExtension ?
    compose(applyMiddleware(thunk), hasExtension) :
    compose(applyMiddleware(thunk));

const staticReducers = {
    HomePage: HomePage,
    ShareComponent: Share,
    Page: Page
};

function configureStore(initialState) {
    const store = createStore(createReducer(), initialState, composeWith);
    store.asyncReducers = {};
    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };
    return store;
}

function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    });
}

const store = configureStore();
export default store;