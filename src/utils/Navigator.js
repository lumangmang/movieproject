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

    static goPage(params, page) {
        const navigation = Navigator.navigation;
        if (!navigation) return;
        navigation.navigate(
            page,
            {
                ...params,
            }
        )
    }

    static goBack(navigation) {
        navigation.goBack();
    }

    static restRoot(params) {
        const {navigation} = params;
        navigation.dispatch(
            StackActions.replace('Root', {}),
        )
    }
}
