/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../types";
import apis from "../../api/apis";

export function onRefreshPopular(storeName, per_page) {
    return dispatch => {
        dispatch({
            type: Types.REFRESH_INDEX, storeName: storeName, hideLoadingMore: true,
        });
        apis.popularIndex({
            q: storeName,
            sort: "stars",
            page: 1,
            per_page: 30,
        }).then(response => {
            handleResponse(dispatch, response,
                Types.REFRESH_INDEX_SUCCESS, storeName, per_page, 1, false);
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

export function onLoadMorePopular(storeName, page, per_page, callBack, preItems) {
    return dispatch => {
        apis.popularIndex({
            q: storeName,
            sort: "stars",
            page: page,
            per_page: 30,
        }).then(response => {
            handleResponse(dispatch, response,
                Types.LOAD_MORE_INDEX_SUCCESS, storeName,
                per_page, page, true, callBack, preItems);
        }).catch(error => {
            console.log(error);
            dispatch({
                type: Types.LOAD_MORE_INDEX_FAILED,
                error,
                storeName,
                hideLoadingMore: true,
            });
        });
    };
}

function handleResponse(dispatch, data, actionType, storeName,
                        per_page, page, isLoadMore, callBack, preItems) {

    let projectModels = [];
    let size = 0;
    let hideLoadingMore = false;
    if (data && data.items) {
        projectModels = data.items;
        size = projectModels.length;
        if (isLoadMore) {
            projectModels = preItems.concat(projectModels);
        }
    }
    if (size < per_page) {
        hideLoadingMore = true;
        if (typeof callBack === 'function') {
            callBack('No More');
        }
    }
    dispatch({
        type: actionType,
        items: projectModels,
        storeName,
        page: page,
        hideLoadingMore: hideLoadingMore,
    });
}
