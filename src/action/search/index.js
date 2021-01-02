/**
 * movieproject.
 * Create by Devin on 2021/1/2.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../types";

export function onSearch(inputKey, pageSize, token) {
    return dispatch => {
        dispatch({
            type: Types.SEARCH_REFRESH,
        });

    };
}
