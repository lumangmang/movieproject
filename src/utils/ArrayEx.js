/**
 * movieproject.
 * Create by Devin on 2021/1/4.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

export default class ArrayEx {
    /**
     * 移除数组中指定元素
     * @param array
     * @param item
     * @param id
     * @returns {*}
     */
    static remove(array, item, id) {
        if (!array) return;
        for (let i = 0, length = array.length; i < length; i++) {
            const val = array[i];
            if (item === val || val && val[id] && val[id] === item[id]) {
                array.splice(i, 1);
            }
        }
        return array;
    }
}
