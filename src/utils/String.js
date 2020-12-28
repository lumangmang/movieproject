/**
 * movieproject.
 * Create by Devin on 2020/12/28.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

export function numberFormat(number, unit = 'k') {
    return number > 1000 ? (number / 1000).toFixed(1) + unit : number || 0
}

export function timeFormat(UTCtime) {
    // 2020-12-28T06:23:47Z
    let T_pos = UTCtime.indexOf('T');
    let Z_pos = UTCtime.indexOf('Z');
    let year_month_day = UTCtime.substr(0, T_pos);
    let hour_minute_second = UTCtime.substr(T_pos + 1, Z_pos - T_pos - 1);
    let new_datetime = year_month_day + " " + hour_minute_second;

    let dateTime = new Date(new_datetime);
    let no1new = dateTime.valueOf();

    let year = dateTime.getFullYear();

    console.log(dateTime);

    let month = dateTime.getMonth() + 1;
    let day = dateTime.getDate();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let now = new Date();
    let now_new = now.valueOf();  //typescript转换写法

    let milliseconds = 0;
    let timeSpanStr;

    milliseconds = now_new - no1new;

    if (milliseconds <= 1000 * 60) {
        timeSpanStr = '刚刚';
    } else if (1000 * 60 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
    } else if (1000 * 60 * 60 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
    } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
    } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
        timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
    } else {
        timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }
    return timeSpanStr;
}
