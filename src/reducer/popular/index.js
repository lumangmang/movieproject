/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../../action/types";

const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.REFRESH_INDEX:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: true,
                }
            };
        case Types.REFRESH_INDEX_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                    projectModels: action.items,
                }
            };
        case Types.REFRESH_INDEX_FAILED:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                    error: action.error,
                },
            };
        default:
            return state;
    }
}
