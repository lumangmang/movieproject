/**
 * movieproject.
 * Create by Devin on 2020/12/25.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, { PureComponent } from "react";
import AboutBase, { FLAG_ABOUT } from "./AboutBase";
import actions from "../../action";
import {
    View,
} from "react-native";

import { connect } from "react-redux";

class AboutMePage extends PureComponent {

    constructor(props) {
        super(props);
        this.params = props.route.params;
        this.about = new AboutBase({
            ...this.params,
            navigation: props.navigation,
            flagAbout: FLAG_ABOUT.flag_about_me,
        });
    }

    componentDidMount() {
        this.fetchUserInfo();
        this.about.componentDidMount();
    }

    componentWillUnmount() {
        this.about.componentWillUnmount();
    }

    fetchUserInfo() {
        const { fetchUserInfo } = this.props;
        fetchUserInfo();
    }

    render() {
        const {users, isLoading} = this.props.users;
        const content = <View>
        </View>;
        return <View style={{ flex: 1 }}>
            {this.about.render(content, users, isLoading)}
        </View>;
    }
}

const mapStateToProps = state => ({
    users: state.users,
});
const mapDispatchToProps = dispatch => ({
    fetchUserInfo: () => dispatch(actions.fetchUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMePage);
