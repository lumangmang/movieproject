/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Keyboard,
} from "react-native";
import SafeAreaViewPlus from "../../common/SafeAreaViewPlus";
import NavigationBar from "../../common/NavigationBar";
import ViewExtension from "../../utils/ViewExtension";
import Navigator from "../../utils/Navigator";
import GlobalStyle from "../../resource/styles/GlobalStyle";
import Entypo from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
import actions from "../../action";

class FeedBackPage extends PureComponent {

    constructor(props) {
        super(props);
        this.params = props.route.params;
    }

    feedBackAction() {
        const { submitFeedBack } = this.props;
        submitFeedBack();
    }

    render() {
        const { theme, title } = this.params;
        let navigationBar = <NavigationBar
            title={title}
            style={theme.styles.navBar}
            leftButton={ViewExtension.leftBarButtonItem(() => Navigator.goBack(this.props.navigation))}
            rightButton={ViewExtension.rightBarButtonItem(null, (
                <Entypo
                    name={"publish"}
                    size={20}
                    style={{ color: "white", paddingRight: 5 }}
                />
            ), () => this.feedBackAction())}
        />;
        return (
            <SafeAreaViewPlus style={GlobalStyle.root_container}
                              topColor={theme.themeColor}
            >
                {navigationBar}
                <TextInput style={styles.input}
                           placeholder={"say something.."}
                           multiline={true}
                           onSubmitEditing={Keyboard.dismiss}
                >
                </TextInput>
            </SafeAreaViewPlus>
        );
    }
}

const mapStateToProps = state => ({
    feedback: state.users.feedback,
});
const mapDispatchToProps = dispatch => ({
    submitFeedBack: () => dispatch(actions.submitFeedBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedBackPage);

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        minHeight: 200,
        backgroundColor: "white",
        padding: 10,
        fontSize: 16,
    },
});

