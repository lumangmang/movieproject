/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet, Image,
} from "react-native";
import NavigationBar from "../../common/NavigationBar";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import actions from "../../action";
import { connect } from "react-redux";
import { Menu } from "../../common/Menu";
import ViewExtension from "../../utils/ViewExtension";
import Navigator from "../../utils/Navigator";
import constants from "../../macro/Macro";

class ProfilePage extends PureComponent {
    onSelectItem(item) {
        const { theme } = this.props;
        let RouteName, params = { theme };
        switch (item) {
            case Menu.Custom_Theme:
                const { onShowCustomThemeView } = this.props;
                onShowCustomThemeView(true);
                break;
            case Menu.About_Author:
                RouteName = "AboutMePage";
                break;
            default:
                break;
        }
        if (RouteName) {
            Navigator.goPage(params, RouteName);
        }
    }

    getItem(item) {
        const { theme } = this.props;
        return ViewExtension.getItem(() => this.onSelectItem(item), item, theme.themeColor);
    }
    render() {
        const { theme } = this.props;
        let statusBar = {
            backgroundColor: theme.themeColor,
            barStyle: "light-content",
        };
        let navigationBar =
            <NavigationBar
                title={"我的"}
                statusBar={statusBar}
                style={theme.styles.navBar}
            />;
        return (
            <View style={GlobalStyle.root_container}>
                {navigationBar}
                {this.getItem(Menu.Custom_Theme)}
                <View style={GlobalStyle.line}/>
                {this.getItem(Menu.About_Author)}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

const mapDispatchToProps = dispatch => ({
    onShowCustomThemeView: (show) => dispatch(actions.onShowCustomThemeView(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: window.width,
        height: constants.parallax_header_height,
    },
    stickySection: {
        height: constants.sticky_header_height,
        alignItems: "center",
        paddingTop: constants.statusBar_height,
    },
    stickySectionText: {
        color: "white",
        fontSize: 20,
        margin: 10,
    },
    fixedSection: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        paddingRight: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: constants.statusBar_height,
    },
    fixedSectionText: {
        color: "#999",
        fontSize: 20,
    },
    parallaxHeader: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        paddingTop: 100,
    },
    avatar: {
        marginBottom: 10,
        borderRadius: constants.avatar / 2,
        width: constants.avatar,
        height: constants.avatar,
    },
    sectionSpeakerText: {
        color: "white",
        fontSize: 24,
        paddingVertical: 5,
        marginBottom: 10,
    },
    sectionTitleText: {
        color: "white",
        fontSize: 16,
        marginRight: 10,
        marginLeft: 10,
    },
});
