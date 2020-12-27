/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import Navigator from "../../utils/Navigator";
import { WebView } from "react-native-webview";
import BackPressComponent from "../../common/BackPressComponent";
import NavigationBar from "../../common/NavigationBar";
import ViewExtension from "../../utils/ViewExtension";
import SafeAreaViewPlus from "../../common/SafeAreaViewPlus";
import GlobalStyle from "../../resource/styles/GlobalStyle";

export default class WebViewPage extends PureComponent {
    constructor(props) {
        super(props);
        this.params = props.route.params;
        const { title, url } = this.params;
        this.state = {
            title: title,
            url: url,
            canGoBack: false,
        };
        this.backPress = new BackPressComponent({
            backPress: () => this.onBackPress(),
        });
    }

    onBackPress() {
        this.goBack();
        return true;
    }

    goBack() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            Navigator.goBack(this.props.navigation);
        }
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        const { theme } = this.params;
        let navigationBar = <NavigationBar
            title={this.state.title}
            style={theme.styles.navBar}
            leftButton={ViewExtension.leftBarButtonItem(() => this.onBackPress())}
        />;
        return (
            <SafeAreaViewPlus style={GlobalStyle.root_container}
                              topColor={theme.themeColor}
            >
                {navigationBar}
                <WebView ref={webView => this.webView = webView}
                         startInLoadingState={true}
                         onNavigationStateChange={e => this.onNavigationStateChange(e)}
                         source={{ uri: this.state.url }}
                />
            </SafeAreaViewPlus>
        );
    }
}
