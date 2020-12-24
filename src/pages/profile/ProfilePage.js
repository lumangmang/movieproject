/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    View,
    Text,
} from "react-native";

import NavigationBar from "../../common/NavigationBar";

export default class ProfilePage extends PureComponent {
    render() {
        let statusBar = {
            backgroundColor: "black",
            barStyle: "light-content",
        };
        // #f3f3f4
        let navigationBar =
            <NavigationBar
                title={"我的"}
                statusBar={statusBar}
                style={{ backgroundColor: "blue" }}
            />;
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#f3f3f4",
            }}>
                {navigationBar}
                <Text>我的</Text>
            </View>
        );
    }
}
