/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import AppNavigator from "./src/navigator/AppNavigators";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();

export default function App() {
    const App = AppNavigator();
    return (
        <Provider store={store}>
            {App}
        </Provider>
    );
}

// export default class App extends PureComponent {
//
//     render(): React$Node {
//         const App = AppNavigator();
//         return (
//             <Provider store={store}>
//                 {App}
//             </Provider>
//         )
//     }
// }


