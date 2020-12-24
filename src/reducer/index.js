/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import { combineReducers } from "redux";
import theme from "./theme";

const index = combineReducers({
    theme: theme,
});

export default index;
