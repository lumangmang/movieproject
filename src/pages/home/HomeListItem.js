/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from "react";
import {
    View, Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import {numberFormat, timeFormat} from "../../utils/String";
import Emoji from "react-native-emoji";
import Colors from "../../utils/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Placeholder,
    PlaceholderLine,
} from 'rn-placeholder';

export default class HomeListItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        // if (!item || !item.owner) return null;
        return (
            <TouchableOpacity
                onPress={() => this.props.onSelect()}
            >
                <View style={styles.cell_container}>
                    <AntDesign
                        name={'book'}
                        size={20}
                        color={Colors.subtext}
                        style={{marginTop: 3, marginRight: 5}}
                    />
                    <View>
                        {/*<Placeholder*/}
                        {/*    hasRadius //左边的方块是否需要圆角*/}
                        {/*    size={60}  // 大小*/}
                        {/*    animate="fade"  // 动画方式*/}
                        {/*    lineNumber={4} // 右边的线显示的数量*/}
                        {/*    lineSpacing={5} // 行间距的距离*/}
                        {/*    lastLineWidth="70%" // 最后一行的宽度*/}
                        {/*    onReady={false} // 内容是否加载完毕，如果加载完毕会切换到你的真实内容布局*/}
                        {/*>*/}
                        {/*    <Text style={styles.title}>*/}
                        {/*        {item.full_name}*/}
                        {/*    </Text>*/}
                        {/*</Placeholder>*/}
                        <Placeholder
                            Left={PlaceholderLine}
                            Right={PlaceholderLine}
                        >
                            <PlaceholderLine width={80} />
                            <PlaceholderLine />
                            <PlaceholderLine width={30} />
                        </Placeholder>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <View style={styles.row}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <FontAwesome
                                    name={'star-o'}
                                    size={20}
                                    color={Colors.subtext}
                                />
                                <Text style={{color: Colors.subtext, marginLeft: 2}}>
                                    {numberFormat(item.stargazers_count)}
                                </Text>
                            </View>
                            {item.language ? <Text style={styles.language}>
                                {item.language}
                            </Text> : null}
                            <Text style={styles.language}>
                                {item.license.spdx_id}
                            </Text>
                            <Text style={styles.language}>
                                {item.updated_at}
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
        backgroundColor: "white",
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: "#dddddd",
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: "gray",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2,
        flexDirection: 'row',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
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
        color: '#57606a',
    }
});
