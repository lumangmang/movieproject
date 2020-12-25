/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Root from "../pages/root/Root";
import WelcomePage from "../pages/welcome/WelcomePage";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"WelcomePage"} component={WelcomePage}
                              options={{headerShown: false}}/>
                <Stack.Screen name="Root" component={Root}
                              options={{headerShown: false, animationEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
