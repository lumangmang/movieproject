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
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOAD_USER_INFO:
            return {
                ...state,
                users: action.users,
                isLoading: false,
            };
        default:
            return state;
    }
}
