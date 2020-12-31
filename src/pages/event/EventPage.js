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
    Text
} from 'react-native';
import MainPage from "../MainPage";

import { connect } from "react-redux";

@MainPage({title: 'Event'})
class EventPage extends PureComponent {


    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return <View>
            <Text>message {this.props.message}</Text>
        </View>;
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps, null)(EventPage);
