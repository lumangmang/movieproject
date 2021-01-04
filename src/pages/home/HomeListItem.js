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
    View, Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import LazyLoad from 'react-lazyload';

import FastImage from 'react-native-fast-image';

import { numberFormat, timeFormat } from "../../utils/String";
import Colors from "../../utils/Colors";
import ImageHelper from "../../utils/ImageHelper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../resource/json/colors";

export default class HomeListItem extends PureComponent {

    render() {
        const { item, theme } = this.props;
        if (!item || !item.owner) return null;
        return (
            <TouchableOpacity
                onPress={() => this.props.onSelect()}>
                <View style={styles.cell_container}>
                    <Image style={[styles.image, { borderColor: theme.themeColor }]}
                           defaultSource={ImageHelper.placeholder}
                           source={{
                               uri: item.owner.avatar_url,
                           }} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>
                            {item.full_name}
                        </Text>
                        <Text style={styles.description} numberOfLines={3}>
                            {item.description}
                        </Text>
                        <View style={styles.row}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}
                                              onPress={() => {
                                                  console.log("start");
                                              }}>
                                <FontAwesome
                                    name={"star-o"}
                                    size={20}
                                    color={Colors.subtext} />
                                <Text style={{ color: Colors.subtext, marginLeft: 2 }}>
                                    {numberFormat(item.stargazers_count)}
                                </Text>
                            </TouchableOpacity>
                            {item.language ?
                                <View style={{
                                    flexDirection: "row",
                                    marginLeft: 10,
                                    alignItems: "center",
                                }}>
                                    <View style={{
                                        width: 16, height: 16,
                                        backgroundColor: colors[item.language].color,
                                        borderRadius: 8,
                                        marginRight: 3,
                                    }} />
                                    <Text style={{ color: "#57606a" }}>
                                        {item.language}
                                    </Text>
                                </View>
                                : null}
                            <Text style={styles.language}>
                                {timeFormat(item.pushed_at)}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cell_container: {
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        elevation: 2,
        flexDirection: "row",
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: Colors.link,
        marginBottom: 3,
    },
    description: {
        marginBottom: 3,
        lineHeight: 20,
    },
    language: {
        color: "#57606a",
        marginLeft: 10,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginLeft: 3,
        marginTop: 3,
        borderRadius: 15,
        borderWidth: 0.5,
    },
});
