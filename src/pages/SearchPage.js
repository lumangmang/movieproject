/**
 * movieproject.
 * Create by Devin on 2020/12/29.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    View, TextInput,
    Platform, StyleSheet,
    DeviceInfo, Modal,
    TouchableOpacity,
    Text,
} from "react-native";

import { connect } from "react-redux";
import Macro from "../macro/Macro";
import SafeAreaViewPlus from "../common/SafeAreaViewPlus";
import BackPressComponent from "../common/BackPressComponent";
import ViewExtension from "../utils/ViewExtension";
import GlobalStyle from "../resource/styles/GlobalStyle";
import PropTypes from "prop-types";
import Navigator from "../utils/Navigator";
import actions from "../action";

class SearchPage extends PureComponent {

    constructor(props) {
        super(props);
        this.params = props.route.params;
        this.backPress = new BackPressComponent({ backPress: (e) => this.onBackPress(e) });
    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress.componentWillUnmount();
    }

    onBackPress() {
        Navigator.goBack(this.props.navigation);
        return true;
    }

    renderNavigationBar() {
        const { theme } = this.params;
        const { showText } = this.props.search;
        let backButton = ViewExtension.leftBarButtonItem(() => this.onBackPress());
        let inputView = <TextInput
            underlineColorAndroid="transparent"
            ref={"input"}
            placeholder={"请输入"}
            onChangeText={text => this.inputKey = text}
            style={styles.textInput}
            placeholderTextColor={"white"}
        >
        </TextInput>;
        let rightButton =
            <TouchableOpacity
                onPress={() => {
                    this.refs.input.blur();//收起键盘
                }}
            >
                <View style={{ marginRight: 10 }}>
                    <Text style={styles.title}>{showText}</Text>
                </View>
            </TouchableOpacity>;
        return <View style={{
            backgroundColor: theme.themeColor,
            flexDirection: "row",
            alignItems: "center",
            height: (Platform.OS === "ios") ?
                GlobalStyle.nav_bar_height_ios : GlobalStyle.nav_bar_height_android,
        }}>
            {backButton}
            {inputView}
            {rightButton}
        </View>;
    }

    render() {
        const { theme } = this.params;
        let statusBar = null;
        if (Platform.OS === "ios" && !DeviceInfo.isIPhoneX_deprecated) {
            statusBar = <View style={[styles.statusBar, { backgroundColor: theme.themeColor }]} />;
        }
        return (
            <SafeAreaViewPlus style={GlobalStyle.root_container}
                              topColor={theme.themeColor}
            >
                {statusBar}
                {this.renderNavigationBar()}
            </SafeAreaViewPlus>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    search: state.search,
});

const mapDispatchToProps = (dispatch, props) => ({
    onSearch: (inputKey, pageSize, token) => dispatch(actions.onSearch(inputKey, pageSize, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabStyle: {
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
    statusBar: {
        height: 20,
    },
    bottomButton: {
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.9,
        height: 40,
        position: "absolute",
        left: 10,
        top: Macro.window.height - 45 - (DeviceInfo.isIPhoneX_deprecated ? 34 : 0),
        right: 10,
        borderRadius: 3,
    },
    centering: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    textInput: {
        flex: 1,
        height: 36,
        borderWidth: (Platform.OS === "ios") ? 1 : 0,
        borderColor: "white",
        alignSelf: "center",
        paddingLeft: 5,
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 3,
        opacity: 0.7,
        color: "white",
    },
    title: {
        fontSize: 16,
        color: "white",
        fontWeight: "500",
    },
});
