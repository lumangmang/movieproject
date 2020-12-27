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
    StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import NavigationBar from "../../common/NavigationBar";
import Navigator from "../../utils/Navigator";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

class HomePage extends PureComponent {

    constructor(props) {
        super(props);
        this.tabNames = ["iOS", "Java", "Python"];
    }

    pageViews() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <View {...props} tabLabel={item}></View>,
                navigationOptions: {
                    title: item,
                },
            };
        });
        return tabs;
    }

    render() {
        const { theme } = this.props;
        let statusBar = {
            backgroundColor: theme.themeColor,
            barStyle: "light-content",
        };
        let navigationBar =
            <NavigationBar
                title={"热门"}
                statusBar={statusBar}
                style={theme.styles.navBar}
            />;

        const TabNavigator = <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                lazy={true}
                tabBarOptions={
                    {
                        tabStyle: styles.tabStyle,
                        scrollEnabled: true,
                        activeTintColor: "white",
                        style: {
                            backgroundColor: theme.themeColor,
                        },
                        indicatorStyle: styles.indicatorStyle,
                        labelStyle: styles.labelStyle,
                    }
                }
            >
                {Object.entries(this.pageViews()).map(item => {
                    console.log(this.pageViews());
                    console.log(item);
                    return <Tab.Screen key={item[0]} name={item[0]}
                                       component={item[1].screen}
                                       options={item[1].navigationOptions}
                    />;
                })}
            </Tab.Navigator>
        </NavigationContainer>;

        return (
            <View style={GlobalStyle.root_container}
            >
                {navigationBar}
                {TabNavigator}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});
export default connect(mapStateToProps, null)(HomePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabStyle: {
        // minWidth: 50 //fix minWidth会导致tabStyle初次加载时闪烁
        padding: 0,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: "white",
    },
    labelStyle: {
        fontSize: 13,
        margin: 0,
    },
    indicatorContainer: {
        alignItems: "center",
    },
    indicator: {
        color: "red",
        margin: 10,
    },
});
