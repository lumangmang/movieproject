/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import actions from '../../action'
import SplashScreen from 'react-native-splash-screen';
import Navigator from "../../utils/Navigator";
import {View, Text} from 'react-native';

class WelcomePage extends PureComponent {
    componentDidMount() {
        this.props.onThemeInit();
        this.timer = setTimeout(() => {
            SplashScreen.hide();
            Navigator.restRoot({
                navigation: this.props.navigation,
            });
        }, 300);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return null;
    }
}

const mapDispatchToProps = dispatch => ({
    onThemeInit: () => dispatch(actions.onThemeInit()),
})

export default connect(null, mapDispatchToProps)(WelcomePage);

