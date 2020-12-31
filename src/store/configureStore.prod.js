/**
 * movieproject.
 * Create by Devin on 2020/12/30.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducer";
import api from "../middleware/api";

const middlewares = [
    thunk,
];

const configureStore = preloadedState => createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middlewares),
);

export default configureStore;
