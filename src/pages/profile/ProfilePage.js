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
import Ionicons from "react-native-vector-icons/Ionicons";

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
            case Menu.About:
                RouteName = "AboutPage";
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
            barStyle: "default",
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
                <ScrollView>
                    <TouchableOpacity style={styles.item}
                                      onPress={() => this.onSelectItem(Menu.About)}
                    >
                        <View style={styles.about_left}>
                            <Ionicons
                                name={Menu.About.icon}
                                size={40}
                                style={{
                                    marginRight: 10,
                                    color: theme.themeColor,
                                }}
                            />
                            <Text>GitHub Popular</Text>
                        </View>
                        <Ionicons
                            name={"ios-arrow-forward"}
                            size={16}
                            style={{
                                marginRight: 10,
                                alignSelf: "center",
                                color: theme.themeColor,
                            }} />
                    </TouchableOpacity>
                    <View style={GlobalStyle.line} />
                    {this.getItem(Menu.Tutorial)}
                    <View style={GlobalStyle.line} />
                    <Text style={styles.groupTitle}>趋势管理</Text>
                    {this.getItem(Menu.Custom_Language)}
                    <View style={GlobalStyle.line}/>
                    {this.getItem(Menu.Custom_Theme)}
                    <View style={GlobalStyle.line} />
                    {this.getItem(Menu.About_Author)}
                </ScrollView>
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
        marginTop: 30,
    },
    about_left: {
        alignItems: "center",
        flexDirection: "row",
    },
    item: {
        backgroundColor: "white",
        padding: 10,
        height: 90,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: "gray",
    },
});
