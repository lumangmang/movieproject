/**
 *
 * Created by Devin on 2020/12/25.
 * Copyright Devin. All rights reserved.
 *
 */
import { AsyncStorage } from "react-native";
import { ThemeFlags } from "../../resource/styles/ThemeFactory";
import ThemeFactory from "../../resource/styles/ThemeFactory";

const THEME_KEY = "theme_key";

export default class Theme {
    getTheme() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(THEME_KEY, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!result) {
                    this.save(ThemeFlags.Default);
                    result = ThemeFlags.Default;
                }
                resolve(ThemeFactory.createTheme(result));
            });
        });
    }

    save(flag) {
        AsyncStorage.setItem(THEME_KEY, flag, error => {
            console.log("save theme error", error);
        });
    }
}
