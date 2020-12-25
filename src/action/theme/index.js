/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import Types from "../types";
import Theme from "../../expand/dao/Theme";

export function onThemeChange(theme) {
    return {type: Types.THEME_CHANGE, theme: theme};
}

export function onThemeInit() {
    return dispatch => {
        new Theme().getTheme().then((data) => {
            dispatch(onThemeChange(data));
        });
    };
}

export function onShowCustomThemeView(show) {
    return {type: Types.SHOW_THEME_VIEW, customThemeViewVisible: show};
}
