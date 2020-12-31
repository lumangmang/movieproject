/**
 * movieproject.
 * Create by Devin on 2020/12/31.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from 'react';
import {
    View,
    Text,
} from 'react-native';
import NavigationBar from "../common/NavigationBar";

// 高阶组件本质就是纯函数(没有副作用)
export default params => WrapComponent => class MainPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {theme} = this.props;
        let statusBar = {
            backgroundColor: theme.themeColor,
            barStyle: "light-content",
        };
        let navigationBar =
            <NavigationBar
                title={params.title}
                statusBar={statusBar}
                style={theme.styles.navBar}
            />;
        return (
            <View>
                {navigationBar}
            </View>
        )
    }
}

// export default connect(mapStateToProps, null)(EventPage);
// export default function MainPage(params) {
//     return function (WrapComponent) {
//         return class SubComponent extends PureComponent {
//             constructor(props) {
//                 super(props);
//                 console.log(params);
//             }
//             render() {
//                 let navigationBar =
//                     <NavigationBar
//                         title={"热门"}
//                     />;
//                 return (
//                     <View>
//                         {navigationBar}
//                         <WrapComponent message={'反向传值'}/>
//                     </View>
//                 )
//             }
//         }
//     }
// }
