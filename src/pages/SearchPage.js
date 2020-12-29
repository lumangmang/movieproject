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
    View, TextInput,
    Platform, StyleSheet,
    DeviceInfo, Modal,
} from 'react-native';

import Macro from '../macro/Macro';
import SafeAreaViewPlus from "../common/SafeAreaViewPlus";
import BackPressComponent from "../common/BackPressComponent";
import Navigator from "../utils/Navigator";
import ViewExtension from "../utils/ViewExtension";
import GlobalStyle from "../resource/styles/GlobalStyle";

export default class SearchPage extends PureComponent {

    constructor(props) {
        super(props);
        this.params = props.route.params;
        this.backPress = new BackPressComponent({backPress: (e) => this.onBackPress(e)});
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
        const {theme} = this.params;
        let backButton = ViewExtension.leftBarButtonItem(() => this.onBackPress());
        let inputView = <TextInput
            ref={'input'}
            placeholder={'请输入'}
            onChangeText={text => this.inputKey = text}
            style={styles.textInput}
        >
        </TextInput>;
        return <View style={{
            backgroundColor: theme.themeColor,
            flexDirection: 'row',
            alignItems: 'center',
            height: (Platform.OS === 'ios') ?
                GlobalStyle.nav_bar_height_ios : GlobalStyle.nav_bar_height_android
        }}>
            {backButton}
            {inputView}
        </View>
    }

    render() {
        const {theme} = this.params;
        let statusBar = null;
        if (Platform.OS === 'ios' && !DeviceInfo.isIPhoneX_deprecated) {
            statusBar = <View style={[styles.statusBar, {backgroundColor: theme.themeColor}]}/>;
        }
        return (
            <SafeAreaViewPlus style={GlobalStyle.root_container}
                              topColor={theme.themeColor}
            >
                {statusBar}
                {this.renderNavigationBar()}
            </SafeAreaViewPlus>
            // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            //     <Modal animationType={'slide'}
            //            visible={true}
            //            transparent={true}
            //     >
            //         <SafeAreaViewPlus style={GlobalStyle.root_container}
            //                           topColor={theme.themeColor}
            //         >
            //             {statusBar}
            //             {this.renderNavigationBar()}
            //         </SafeAreaViewPlus>
            //     </Modal>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabStyle: {
        padding: 0,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        margin: 0,
    },
    indicatorContainer: {
        alignItems: 'center',
    },
    indicator: {
        color: 'red',
        margin: 10,
    },
    statusBar: {
        height: 20,
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        height: 40,
        position: 'absolute',
        left: 10,
        top: Macro.window.height - 45 - (DeviceInfo.isIPhoneX_deprecated ? 34 : 0),
        right: 10,
        borderRadius: 3,
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textInput: {
        flex: 1,
        height: (Platform.OS === 'ios') ? 26 : 36,
        borderWidth: (Platform.OS === 'ios') ? 1 : 0,
        borderColor: 'white',
        alignSelf: 'center',
        paddingLeft: 5,
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 3,
        opacity: 0.7,
        color: 'white',
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
    },
});
