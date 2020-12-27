/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React from "react";
import Navigator from "../../utils/Navigator";
import BackPressComponent from "../../common/BackPressComponent";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import ViewExtension from "../../utils/ViewExtension";
import constants from "../../macro/Macro";
import image from "../../utils/ImageHelper";
import {
    StyleSheet,
    View, Image, Text,
    ActivityIndicator,
} from "react-native";

export const FLAG_ABOUT = { flag_about: "about", flag_about_me: "about_me" };
export default class AboutBase {
    constructor(props) {
        this.props = props;
        this.backPress = new BackPressComponent({ backPress: () => this.onBackPress() });
    }

    onBackPress() {
        Navigator.goBack(this.props.navigation);
        return true;
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    getParallaxRenderConfig(params, isLoading) {
        let config = {};
        config.renderBackground = () => (
            <View key={"background"}>
                <Image style={{
                    width: constants.window.width,
                    height: constants.parallax_header_height,
                }}
                       source={{
                           uri: params.avatar_url,
                       }} />
                <View style={{
                    position: "absolute",
                    width: constants.window.width,
                    backgroundColor: "rgba(0,0,0,.65)",
                    height: constants.parallax_header_height,
                }} />
            </View>);
        config.renderForeground = () => (
            <View key="parallax-header" style={styles.parallaxHeader}>
                <Image style={styles.avatar}
                       source={{ uri: params.avatar_url }}
                       defaultSource={image.avatar_default}
                />
                <Text style={styles.sectionSpeakerText}>
                    {params.login}
                </Text>
                <Text style={styles.sectionTitleText}>
                    {params.bio}
                </Text>
            </View>
        );
        config.renderStickyHeader = () => (
            <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{params.login}</Text>
            </View>
        );
        config.renderFixedHeader = () => (
            <View key="fixed-header" style={styles.fixedSection}>
                {ViewExtension.leftBarButtonItem(() => Navigator.goBack(this.props.navigation))}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ActivityIndicator style={{ size: 20, marginRight: 8 }}
                                       animating={isLoading}
                    />
                    {ViewExtension.shareButton(() => {
                    })}
                </View>
            </View>
        );
        return config;
    }

    render(contentView, params, isLoading) {
        const { theme } = this.props;
        const renderConfig = this.getParallaxRenderConfig(params, isLoading);
        return (
            <ParallaxScrollView
                backgroundColor={theme.themeColor}
                contentBackgroundColor={GlobalStyle.backgroundColor}
                parallaxHeaderHeight={constants.parallax_header_height}
                stickyHeaderHeight={constants.sticky_header_height}
                backgroundScrollSpeed={5}
                {...renderConfig}
            >
                {contentView}
            </ParallaxScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
