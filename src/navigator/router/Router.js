/**
 * movieproject.
 * Create by Devin on 2020/12/26.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */
import Root from "../../pages/root/Root";
import WelcomePage from "../../pages/welcome/WelcomePage";
import AboutMePage from "../../pages/about/AboutMePage";
import AboutPage from "../../pages/about/AboutPage";

// 全局子页面路由
export default [
    {
        name: "WelcomePage",
        component: WelcomePage,
        options: { headerShown: false },
    },
    {
        name: "Root",
        component: Root,
        options: { headerShown: false, animationEnabled: false },
    },
    {
        name: "AboutMePage",
        component: AboutMePage,
        options: { headerShown: false },
    },
    {
        name: "AboutPage",
        component: AboutPage,
        options: { headerShown: false },
    },
];
