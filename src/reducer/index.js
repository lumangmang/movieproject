/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import { combineReducers } from "redux";
import theme from "./theme";
import users from "./users";
import popular from "./popular";

const index = combineReducers({
    theme: theme,
    users: users,
    popular: popular,
});

export default index;
