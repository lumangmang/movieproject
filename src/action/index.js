/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import { onThemeChange, onThemeInit, onShowCustomThemeView } from "./theme";

import { fetchUserInfo, submitFeedBack } from "./users";
import { onRefreshPopular } from "./popular";

export default {
    onThemeInit,
    onThemeChange,
    onShowCustomThemeView,
    fetchUserInfo,
    submitFeedBack,
    onRefreshPopular,
};
