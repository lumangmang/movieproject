/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from 'react';
import {
    DeviceInfo, Modal, TouchableHighlight,
    Platform, ScrollView, StyleSheet, Text, View
} from 'react-native';
import Theme from "../expand/dao/Theme";
import ThemeFactory, {ThemeFlags} from "../resource/styles/ThemeFactory";
import GlobalStyle from "../resource/styles/GlobalStyle";
import actions from '../action'
import {connect} from 'react-redux';

class ThemeView extends PureComponent {
    constructor(props) {
        super(props);
        this.theme = new Theme();
    }

    onSelectTheme(key) {
        this.props.onClose();
        this.theme.save(ThemeFlags[key]);
        const {onThemeChange} = this.props;
        onThemeChange(ThemeFactory.createTheme(ThemeFlags[key]));
    }

    getThemeItem(key) {
        return <TouchableHighlight
            style={{flex: 1}}
            underlayColor='white'
            onPress={() => this.onSelectTheme(key)}
        >
            <View style={[{backgroundColor: ThemeFlags[key]}, styles.themeItem]}>
                <Text style={styles.themeText}>{key}</Text>
            </View>
        </TouchableHighlight>
    }

    renderThemeItems() {
        const views = [];
        for (let index = 0, keys = Object.keys(ThemeFlags), l = keys.length; index < l; index += 3) {
            const key1 = keys[index], key2 = keys[index + 1], key3 = keys[index + 2];
            views.push(<View key={index} style={{flexDirection: 'row'}}>
                {this.getThemeItem(key1)}
                {this.getThemeItem(key2)}
                {this.getThemeItem(key3)}
            </View>)
        }
        return views;
    }

    renderContentView() {
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.props.onClose();
                }}
            >
                <View style={styles.modalContainer}>
                    <ScrollView>
                        {this.renderThemeItems()}
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    render() {
        let view = this.props.visible ? <View style={GlobalStyle.root_container}>
            {this.renderContentView()}
        </View> : null;
        return view;
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onThemeChange: (theme) => dispatch(actions.onThemeChange(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeView);

const styles = StyleSheet.create({
    themeItem: {
        flex: 1,
        height: 120,
        margin: 3,
        padding: 3,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        margin: 10,
        marginBottom: 10 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0),
        marginTop: Platform.OS === 'ios' ? 20 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0) : 10,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding: 3,
    },
    themeText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});
