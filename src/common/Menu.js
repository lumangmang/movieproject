/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Menu = {
    Feedback: {name: '意见反馈', Icons: MaterialIcons, icon: 'feedback'},
    Share: {name: '分享', Icons: Ionicons, icon: 'md-share'},
    CodePush: {name: 'CodePush', Icons: Ionicons, icon: 'ios-planet'},
    Remove_Key: {name: '标签移除', Icons: Ionicons, icon: 'md-remove'},
    Custom_Key: { name: "自定义标签", Icons: Ionicons, icon: "md-checkbox-outline" },
    Sort_Key: { name: "标签排序", Icons: MaterialCommunityIcons, icon: "sort" },
    Custom_Theme: { name: "主题选择", Icons: Ionicons, icon: "ios-color-palette" },
    About_Author: { name: "关于作者", Icons: Octicons, icon: "smiley" },
    About: { name: "关于", Icons: Ionicons, icon: "logo-github" },
    Tutorial: { name: "教程", Icons: Ionicons, icon: "ios-bookmarks" },
    Custom_Language: { name: "自定义语言", Icons: Ionicons, icon: "md-checkbox-outline" },
    Sort_Language: { name: "语言排序", Icons: MaterialCommunityIcons, icon: "sort" },
};
