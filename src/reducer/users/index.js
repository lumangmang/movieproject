/**
 * movieproject.
 * Create by Devin on 2020/12/26.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../../action/types";

const defaultState = {
    users: {},
    isLoading: true,
    feedback: {},
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOAD_USER_INFO:
            return {
                ...state,
                users: action.users,
                isLoading: false,
            };
        case Types.SUBMIT_FEED_BACK:
            return {
                ...state,
                isLoading: false,
                feedback: action.feedback,
            };
        default:
            return state;
    }
}
