/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import { combineReducers } from "redux";
import theme from "./theme";
import users from './users';

const index = combineReducers({
    theme: theme,
    users: users,
});

export default index;
