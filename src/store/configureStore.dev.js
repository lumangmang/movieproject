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
import {createLogger} from 'redux-logger';

import api from "../middleware/api";

const configureStore = preloadedState => {
    const store = createStore(
        reducers,
        preloadedState,
        applyMiddleware(thunk, api),
    )

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            store.replaceReducer(reducers)
        })
    }
    return store
}

export default configureStore;
