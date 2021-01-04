/**
 * movieproject.
 * Create by Devin on 2020/12/26.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import instance from "../../config/AxiosConfig";

class HttpServerDao {

    /**
     * get请求
     * @param url
     * @param params
     */
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params: params,
            }).then((response) => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }

    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.post(url, params).then((response) => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

export default new HttpServerDao();
