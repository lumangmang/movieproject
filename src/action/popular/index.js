/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../types";
import service from "../../expand/dao/HttpServerDao";
import URLs from "../../macro/URLs";

export function onRefreshPopular(storeName) {
    return dispatch => {
        dispatch({
            type: Types.REFRESH_INDEX, storeName: storeName,
        });
        service.get(URLs.search_repositories_url, {
            q: storeName,
            sort: "stars",
            page: 1,
            per_page: 2,
        }).then(response => {
            handleResponse(dispatch, response, Types.REFRESH_INDEX_SUCCESS, storeName);
        }).catch(error => {
            console.log(error);
            dispatch({
                type: Types.REFRESH_INDEX_FAILED,
                error,
                storeName,
            });
        });
    };
}

function handleResponse(dispatch, data, actionType, storeName) {
    let projectModels = [];
    if (data && data.items) {
        projectModels = data.items;
    }
    dispatch({
        type: actionType,
        items: projectModels,
        storeName,
    });
}
