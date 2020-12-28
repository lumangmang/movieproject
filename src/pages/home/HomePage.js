/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, {PureComponent} from "react";
import {
    View,
} from "react-native";
import {connect} from "react-redux";
import NavigationBar from "../../common/NavigationBar";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import HomeListPage from "./HomeListPage";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import HomePageNavigator from "./HomePageNavigator";

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.storeNames = ["iOS", "Java", "Python", 'React',
            "Android", "C++", "C#", 'JavaScript'
        ];
    }

    pageViews() {
        const {theme} = this.props;
        return <ScrollableTabView
            renderTabBar={() =>
                <HomePageNavigator
                    tabs={this.storeNames}
                    activeTextColor={'white'}
                    inactiveTextColor={'white'}
                    backgroundColor={theme.themeColor}
                    underlineWidth={20}
                    underlineStyle={{backgroundColor: 'white', height: 3}}
                />}>
            {this.storeNames.map((item) => (
                <HomeListPage key={item} tabLabel={item} {...this.props}/>
            ))}
        </ScrollableTabView>
    }

    render() {
        const {theme} = this.props;
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
        const TabNavigator = this.pageViews();
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
