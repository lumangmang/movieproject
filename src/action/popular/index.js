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
            type: Types.REFRESH_INDEX,
        });
        service.get(URLs.search_repositories_url, {
            q: storeName,
            sort: "stars",
            page: 1,
            per_page: 1,
        }).then(response => {
            handleResponse(dispatch, response, Types.REFRESH_INDEX_SUCCESS);
        }).catch(error => {
            console.log(error);
            dispatch({
                type: Types.REFRESH_INDEX_FAILED,
                error,
            });
        });
    };
}

function handleResponse(dispatch, data, actionType) {
    let projectModels = [];
    if (data && data.items) {
        projectModels = data.items;
    }

    console.log('projectModels', projectModels);
    dispatch({
        type: actionType,
        items: projectModels,
    });
}
