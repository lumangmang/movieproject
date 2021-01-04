/**
 * movieproject.
 * Create by Devin on 2020/12/26.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */
import axios from "axios";

const instance = axios.create({
    timeout: 10000,
    baseURL: "https://api.github.com",
});

// 错误重试
instance.defaults.retry = 3;
instance.defaults.retryDelay = 500;

// 跨域访问需要
instance.defaults.withCredentials = true;

/**
 * 设置请求传递数据的格式（看服务器要求的格式）
 * x-www-form-urlencoded
 * 默认提交表单数据
 * 把数据对象序列化成 表单数据
 */
// axios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = data => qs.stringify(data);

/**
 * 设置默认提交
 * 把数据对象序列化成 json 字符串
 */
// 设置默认提交 json
axios.defaults.headers['Content-Type'] = 'application/json';
// 把数据对象序列化成 json字符串
axios.defaults.transformRequest = data => JSON.stringify(data);

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // do something before request is sent
        console.log("*****【 request url 】*****\n",
            config.baseURL + config.url);
        return config;
    },
    error => {
        // do something with request error
        console.log("*****【 request error 】*****\n", error); // for debug
        return Promise.reject(error);
    },
);

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data;
    }, error => {
        // 对响应错误做点什么
        if (error.response) {
            console.log("*****【 response error 】*****\n", error);
            return Promise.reject(error);
        } else {
            // 请求超时处理
            let config = error.config;
            // If config does not exist or the retry option is not set, reject
            if (!config || !config.retry) return Promise.reject(error);
            config.__retryCount = config.__retryCount || 0;
            // Check if we've maxed out the total number of retries
            if (config.__retryCount >= config.retry) {
                // Reject with the error
                return Promise.reject(error);
            }
            config.__retryCount += 1;
            // Create new promise to handle exponential backoff
            let backoff = new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, config.retryDelay || 1);
            });
            // Return the promise in which recalls axios to retry the request
            return backoff.then(function () {
                return instance(config);
            });
        }
    },
);

export default instance;
