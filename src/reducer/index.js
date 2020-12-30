/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import {combineReducers} from "redux";
import theme from "./theme";
import users from "./users";
import popular from "./popular";

import merge from 'lodash/merge'
import paginate from './paginate'
import Types from '../action/types';

const entities = (state = {users: {}, repos: {}}, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities);
    }
    return state
}

const errorMessage = (state = null, action) => {
    const {type, error} = action
    if (type === Types.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }
    return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
    starredByUser: paginate({
        mapActionToKey: action => action.login,
        types: [
            Types.STARRED_REQUEST,
            Types.STARRED_SUCCESS,
            Types.STARRED_FAILURE
        ]
    }),
})

const index = combineReducers({
    theme: theme,
    users: users,
    popular: popular,
});

export default index;
