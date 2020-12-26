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
    StyleSheet,
    ScrollView,
    Image,
    Text,
    ImageBackground,
} from "react-native";

import marco from "../../macro/Macro";
import Navigator from "../../utils/Navigator";

let image1 = require("../../resource/image/guide/guide1.png");
let image2 = require("../../resource/image/guide/guide2.png");
let image3 = require("../../resource/image/guide/guide3.png");

export default class GuidePage extends PureComponent {
    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Image source={image1}
                       style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <ImageBackground source={image3} style={styles.image}>
                    <Text style={styles.text}
                          onPress={() => {
                              Navigator.restRoot({
                                  navigation: this.props.navigation,
                              })
                          }}
                    >
                        跳过
                    </Text>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        width: marco.window.width * 3,
        height: marco.window.height,
    },
    backgroundImage: {
        width: marco.window.width,
        height: marco.window.height,
    },
    text: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right",
        marginRight: 10,
        marginTop: 64,
        padding: 10,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
});
