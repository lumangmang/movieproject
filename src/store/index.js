/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducer";

const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching ', action);
    }
    const result = next(action);
    console.log('nextState ', store.getState());
    return result;
};

const middlewares = [
    // logger,
    thunk,
];

export default createStore(reducers, applyMiddleware(...middlewares));
