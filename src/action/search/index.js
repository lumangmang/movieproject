/**
 * movieproject.
 * Create by Devin on 2021/1/2.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../types";
import service from "../../expand/dao/HttpServerDao";
import URLs from "../../macro/URLs";
import ArrayEx from "../../utils/ArrayEx";


const CANCEL_TOKENS = [];

export function onSearch(inputKey, pageSize, token) {
    return dispatch => {
        dispatch({
            type: Types.SEARCH_REFRESH,
        });

        service.get('', {

        }).then(response => {
            console.log('response', response);
        }).catch(error => {
            console.log('error', error);
            dispatch({
                type: Types.SEARCH_FAIL,
                error: error,
            })
        })

        // service('https://api.github.com/responses/').then(response => {
        //     return hasCancel(token) ? null : response.json();
        // }).then(json => {
        //     if (hasCancel(token, true)) {
        //         return;
        //     }
        //     if (json || json.items || json.items.length === 0) {
        //         dispatch({
        //             type: Types.SEARCH_FAIL,
        //             message: `没找到关于${inputKey}的项目`,
        //         })
        //         return;
        //     }
        //     let items = json.items;
        //     dispatch({
        //         type: Types.SEARCH_REFRESH_SUCCESS,
        //     });
        // }).catch(error => {
        //     dispatch({
        //         type: Types.SEARCH_FAIL,
        //         error: error,
        //     })
        // })
    };
}

/**
 * 取消异步任务
 * @param token
 */
export function onSearchCancel(token) {
    return dispatch => {
        CANCEL_TOKENS.push(token);
        dispatch({
            type: Types.SEARCH_CANCEL,
        });
    }
}

/**
 * 检查指定token是否已经取消
 * @param token
 * @param isRemove
 */
function hasCancel(token, isRemove) {
    if (CANCEL_TOKENS.includes(token)) {
        isRemove && ArrayEx.remove(CANCEL_TOKENS, token);
        return true;
    }
    return false;
}
