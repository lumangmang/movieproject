/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../../action/types";

const defaultState = {
    projectModels: [],
    isLoading: false,
};

export default (state = defaultState, action) => {

    switch (action.type) {
        case Types.REFRESH_INDEX:
            return {
                ...state,
                isLoading: true,
            };
        case Types.REFRESH_INDEX_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projectModels: action.items,
            };
        case Types.REFRESH_INDEX_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
