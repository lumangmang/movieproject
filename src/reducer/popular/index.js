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
                    hideLoadingMore: action.hideLoadingMore,
                }
            };
        case Types.REFRESH_INDEX_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                    projectModels: action.items,
                    page: action.page,
                    hideLoadingMore: action.hideLoadingMore
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
        case Types.LOAD_MORE_INDEX_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    projectModels: action.items,
                    hideLoadingMore: action.hideLoadingMore,
                    page: action.page,
                }
            };
        case Types.LOAD_MORE_INDEX_FAILED:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    hideLoadingMore: action.hideLoadingMore,
                    page: action.page,
                }
            };
        default:
            return state;
    }
}
