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
import { Octokit } from "@octokit/rest";

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

export function submitFeedBack() {
    return dispatch => {
        new Octokit({
        }).request("get /repos/{owner}/{repo}/issues", {
            owner: "lumangmang",
            repo: "movieproject",
            title: "测试",
        }).then(response => {
            dispatch({
                type: Types.SUBMIT_FEED_BACK,
                feedback: response,
            });
        }).catch(error => {
            console.log("error", error.status);
        });
    };
}
