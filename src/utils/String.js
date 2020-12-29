/**
 * movieproject.
 * Create by Devin on 2020/12/28.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import moment from 'moment';

export function numberFormat(number, unit = 'k') {
    return number > 1000 ? (number / 1000).toFixed(1) + unit : number || 0
}

export function timeFormat(UTCtime) {
    return UTCtime ? "Update " + moment(UTCtime).fromNow() : null;
}
