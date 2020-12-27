/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text, TouchableOpacity,
} from "react-native";

import ImageHelper from "../../utils/ImageHelper";

export default class AdvertPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            haveAD: false,
            adImgUrl: "",
            remainTime: 5,
        };
    }

    render() {
        let show = this.state.haveAD && this.state.adImgUrl.length > 0;
        let showText = <TouchableOpacity>
            {show ? <Image defaultSource={ImageHelper.launch_default}
                           style={styles.bgImage}
                           source={{ uri: this.state.adImgUrl }} /> :
                <Image defaultSource={ImageHelper.launch_default}
                       style={styles.bgImage}
                />}
        </TouchableOpacity>;
        return (
            <View style={styles.container}>
                {showText}
                <View style={styles.djsView}>
                    <Text style={styles.djsText} onPress={
                        () => {
                            this.props.onButtonClick();
                        }
                    }
                    >{this.state.remainTime}s</Text>
                </View>
                <TouchableOpacity onPress={
                    () => {
                        this.props.onButtonClick();
                    }
                }>
                    <View style={styles.btnView}></View>
                </TouchableOpacity>

            </View>);
    }

    componentDidMount() {
        this.setState({
            haveAD: true,
            adImgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1589652575,159736488&fm=26&gp=0.jpg",
        });
        this.showTimer();
    }

    showTimer() {
        this.timer = setInterval(() => {
            let t = this.state.remainTime;
            if (t === 0) {
                clearInterval(this.timer);
                this.props.onButtonClick();
            } else {
                this.setState({
                    remainTime: t - 1,
                });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        width: "100%",
        height: "100%",
    },
    djsView: {
        width: 46,
        height: 46,
        position: "absolute",
        backgroundColor: "#e8e8e8",
        borderRadius: 23,
        top: "5%",
        left: "80%",
    },
    djsText: {
        width: 46,
        height: 46,
        fontSize: 16,
        fontWeight: "200",
        textAlign: "center",
        textAlignVertical: "center",
        ...Platform.select({
            ios: { lineHeight: 46 },
            android: {},
        }),
    },
    btnView: {
        backgroundColor: "#00000000",
        width: 300,
        height: 150,
        position: "absolute",
        left: "50%",
        bottom: 30,
        transform: [{ translateX: -150 }],
    },
});
