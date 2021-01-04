/**
 * movieproject.
 * Create by Devin on 2021/1/2.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../../action/types";

const defaultSate = {
    showText: "搜索",
    isLoading: false,
};

export default (state = defaultSate, action) => {
    switch (action.type) {
        case Types.SEARCH_REFRESH:
            return {
                ...state,
                isLoading: true,
                showText: "取消",
            };
        case Types.SEARCH_CANCEL:
            return {
                ...state,
                isLoading: false,
                showText: "搜索",
            };
        case Types.SEARCH_FAIL:
            return {
                ...state,
                isLoading: false,
                showText: "搜索",
            };
        default:
            return state;
    }
}
