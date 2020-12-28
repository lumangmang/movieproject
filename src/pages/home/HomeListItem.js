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
} from "react-native";

import { numberFormat, timeFormat } from "../../utils/String";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class HomeListItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity
                onPress={() => this.props.onSelect()}
            >
                <View style={styles.cell_container}>
                    <AntDesign
                        name={"book"}
                        size={20}
                        color={Colors.subtext}
                        style={{ marginTop: 3, marginRight: 5 }}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>
                            {item.full_name}
                        </Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <View style={styles.row}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome
                                    name={"star-o"}
                                    size={20}
                                    color={Colors.subtext}
                                />
                                <Text style={{ color: Colors.subtext, marginLeft: 2 }}>
                                    {numberFormat(item.stargazers_count)}
                                </Text>
                            </View>
                            {item.language ? <Text style={styles.language}>
                                {item.language}
                            </Text> : null}
                            {item.license ? <Text style={styles.language}>
                                {item.license.spdx_id}
                            </Text> : null
                            }
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
        borderColor: "#dddddd",
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: "gray",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
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
        marginBottom: 5,
    },
    description: {
        marginBottom: 5,
    },
    language: {
        marginLeft: 20,
        color: "#57606a",
    },
});
