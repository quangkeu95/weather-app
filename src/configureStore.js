import { createStore, applyMiddleware, compose } from "redux";

import rootReducers from "./reducers";

import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(rootReducers, {}, middleware);

export default store;
