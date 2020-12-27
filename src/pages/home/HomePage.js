/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import NavigationBar from "../../common/NavigationBar";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeListPage from "./HomeListPage";

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
                screen: props => <HomeListPage {...props} tabLabel={item} />,
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
    indicatorStyle: {
        height: 2,
        backgroundColor: "white",
    },
    labelStyle: {
        fontSize: 13,
    },
});
