/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import {StackActions} from '@react-navigation/native';

export default class Navigator {
    static restRoot(params) {
        const {navigation} = params;
        navigation.dispatch(
            StackActions.replace('Root', {}),
        )
    }
}
