/**
 * movieproject.
 * Create by Devin on 2020/12/28.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React from "react";
import {
    Placeholder,
    PlaceholderLine,
    PlaceholderMedia,
    ShineOverlay,
} from "rn-placeholder";

import {
    StyleSheet,
    View,
} from "react-native";

const PlaceholderItem = () => {
    return (
        <Placeholder
            Left={props => (
                <PlaceholderMedia style={{
                    backgroundColor: "lightgray",
                    marginRight: 10,
                }} />
            )}
            Animation={ShineOverlay}
            style={{
                marginVertical: 15,
                marginHorizontal: 15,
                borderRadius: 4,
            }}
        >
            <PlaceholderLine style={styles.line} width={50} />
            <PlaceholderLine style={styles.line} width={70} />
            <PlaceholderLine style={styles.line} width={90} />

        </Placeholder>
    );
};

export default PlaceholderItem;

const styles = StyleSheet.create({
    line: {
        backgroundColor: "lightgray",
    },
});
