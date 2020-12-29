/**
 * movieproject.
 * Create by Devin on 2020/12/29.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import {WebView} from "react-native-webview";
import SafeAreaViewPlus from "../../common/SafeAreaViewPlus";
import ViewExtension from "../../utils/ViewExtension";
import BackPressComponent from "../../common/BackPressComponent";
import NavigationBar, {NAVIGATION_BAR_HEIGHT} from "../../common/NavigationBar";
import Navigator from "../../utils/Navigator";

const TRENDING_URL = 'https://github.com/';

export default class RepoDetailPage extends PureComponent {
    constructor(props) {
        super(props);
        this.params = props.route.params;

        console.log(this.params);

        const {projectModel} = this.params;
        this.url = projectModel.html_url || TRENDING_URL + projectModel.fullName;
        const title = projectModel.full_name || projectModel.fullName;
        this.state = {
            title: title,
            url: this.url,
            canGoBack: false,
        };
        this.backPress = new BackPressComponent({backPress: () => this.onBackPress()});
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    onBackPress() {
        this.onBack();
        return true;
    }

    onBack() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            Navigator.goBack(this.props.navigation);
        }
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        const {theme} = this.params;
        const titleLayoutStyle = this.state.title.length > 20 ? {paddingRight: 30} : null;
        let navigationBar = <NavigationBar
            leftButton={ViewExtension.leftBarButtonItem(() => this.onBack())}
            titleLayoutStyle={titleLayoutStyle}
            title={this.state.title}
            style={[styles.navBar, theme.styles.navBar]}
        />;
        return (
            <SafeAreaViewPlus topColor={theme.themeColor}>
                <View style={styles.container}>
                    <WebView
                        style={{marginTop: NAVIGATION_BAR_HEIGHT}}
                        ref={webView => this.webView = webView}
                        startInLoadingState={true}
                        onNavigationStateChange={e => this.onNavigationStateChange(e)}
                        source={{uri: this.state.url}}
                    />
                    {navigationBar}
                </View>
            </SafeAreaViewPlus>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
});
