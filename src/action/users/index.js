/**
 * movieproject.
 * Create by Devin on 2020/12/26.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Types from "../types";
import Server from "../../expand/dao/HttpServerDao";

export function fetchUserInfo() {
    return dispatch => {
        Server.get("/users/lumangmang").then(response => {
            dispatch({
                type: Types.LOAD_USER_INFO,
                users: response,
            });
        }).catch(error => {
            console.log("fetchUserInfo", error);
        });
    };
}
