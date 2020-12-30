/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import SafeAreaViewPlus from "../../common/SafeAreaViewPlus";
import TabBarNavigators from "../../navigator/TabBarNavigators";
import { connect } from "react-redux";
import actions from '../../action';
import Navigator from "../../utils/Navigator";
import ThemeView from "../../common/ThemeView";

class Root extends PureComponent {

    renderCustomThemeView() {
        const {customThemeViewVisible, onShowCustomThemeView} = this.props;

        return (<ThemeView
            visible={customThemeViewVisible}
            {...this.props}
            onClose={() => onShowCustomThemeView(false)}
        />);
    }

    render() {
        const {theme} = this.props;
        Navigator.navigation = this.props.navigation;
        return (
            <SafeAreaViewPlus topColor={theme.themeColor}>
                <TabBarNavigators />
                {this.renderCustomThemeView()}
            </SafeAreaViewPlus>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    customThemeViewVisible: state.theme.customThemeViewVisible,
    theme: state.theme.theme,
});

const mapDispatchToProps = dispatch => ({
    onShowCustomThemeView: (show) => dispatch(actions.onShowCustomThemeView(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);




