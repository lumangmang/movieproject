/**
 * movieproject.
 * Create by Devin on 2021/1/4.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import instance from "../config/AxiosConfig";

export function get(url, params = {}, headers) {
    return new Promise((resolve, reject) => {
        instance.get(url, {params, headers})
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function post(url, params = {}, headers) {
    return new Promise((resolve, reject) => {
        instance.post(url, params, headers)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default {
    get,
    post,
}
