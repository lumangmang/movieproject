/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, {PureComponent} from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";
import {connect} from "react-redux";
import NavigationBar from "../../common/NavigationBar";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import HomeListPage from "./HomeListPage";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomePageNavigator from "./HomePageNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Navigator from "../../utils/Navigator";

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.storeNames = ["iOS", "Java", "Python",
            "Android", "C++", 'JavaScript'
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

    renderRightButton() {
        const {theme} = this.props;
        return (
            <TouchableOpacity
                onPress={() => {
                    Navigator.goPage({theme},'SearchPage')
                }}>
                <View style={{padding: 5, marginRight: 8}}>
                    <Ionicons
                        name={'ios-search'}
                        size={24}
                        style={{
                            marginRight: 8, alignSelf: 'center',
                            color: 'white',
                        }}/>
                </View>
            </TouchableOpacity>
        )
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
                rightButton={this.renderRightButton()}
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
