/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, {PureComponent} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from 'react-native-vector-icons/Feather';
import HomePage from "../pages/home/HomePage";
import ProfilePage from "../pages/profile/ProfilePage";
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

const TABS = {
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarIcon: ({color, focused}) => {
                return <MaterialIcons
                    name={"whatshot"}
                    size={26}
                    style={{color: color}}
                />;
            },
        },
    },

    ProfilePage: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({color, focused}) => {
                return <Feather
                    name={"user"}
                    size={26}
                    style={{color: color}}
                />;
            },
        },
    },
};

class TabBarNavigators extends PureComponent {
    tabNavigator() {
        // if (this.Tabs) {
        //     return this.Tabs;
        // }
        const {HomePage, ProfilePage} = TABS;
        const tabs = {HomePage, ProfilePage};
        return this.Tabs = <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                tabBar={props => {
                    return <TabBarComponent theme={this.props.theme} {...props} />;
                }}
            >
                {
                    Object.entries(tabs).map(item => {
                        return <Tab.Screen
                            key={item[0]}
                            name={item[0]}
                            component={item[1].screen}
                            options={item[1].navigationOptions}
                        />;
                    })
                }
            </Tab.Navigator>
        </NavigationContainer>;
    }

    render() {
        const Tab = this.tabNavigator();
        return Tab;
    }
}

class TabBarComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme.themeColor}
        />;
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(TabBarNavigators);
