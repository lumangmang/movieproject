/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import actions from "../../action";
import SplashScreen from "react-native-splash-screen";
import GuidePage from "./GuidePage";
import AdvertPage from "./AdvertPage";
import Navigator from "../../utils/Navigator";

class WelcomePage extends PureComponent {

    componentDidMount() {
        this.props.onThemeInit();
        this.timer = setTimeout(() => {
            SplashScreen.hide();
        }, 300);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return <AdvertPage
            onButtonClick={() => {
                Navigator.restRoot({
                    navigation: this.props.navigation,
                });
            }}
            {...this.props} />;
    }
}

const mapDispatchToProps = dispatch => ({
    onThemeInit: () => dispatch(actions.onThemeInit()),
});

export default connect(null, mapDispatchToProps)(WelcomePage);

