import { DeviceInfo, Dimensions, Platform } from "react-native";
import GlobalStyle from "../resource/styles/GlobalStyle";

/**
 * movieproject.
 * Create by Devin on 2020/12/26.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

const statusBar_height = (Platform.OS === "ios") ? 20 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0) : 0;
const sticky_header_height = (Platform.OS === "ios") ? GlobalStyle.nav_bar_height_ios + statusBar_height :
    GlobalStyle.nav_bar_height_android;

export default {
    window: Dimensions.get("window"),
    avatar: 90,
    parallax_header_height: 300,
    statusBar_height: statusBar_height,
    sticky_header_height: sticky_header_height,
};
