/**
 * movieproject.
 * Create by Devin on 2021/1/2.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

// 这个地方没有做分离
// 最好每个模块单独存放一个相应的请求
import URLs from "../macro/URLs";
import {get, post} from "./index";

export const popularIndex = (params, headers) => get(URLs.search_repositories_url, params, headers);

export default {
    popularIndex,
}
