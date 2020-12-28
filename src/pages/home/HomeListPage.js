/**
 * movieproject.
 * Create by Devin on 2020/12/27.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {PureComponent} from "react";
import {
    View, RefreshControl,
    FlatList,
    StyleSheet,
} from "react-native";

import {connect} from "react-redux";
import actions from "../../action";
import HomeListItem from "./HomeListItem";


class HomeListPage extends PureComponent {
    constructor(props) {
        super(props);
        const {tabLabel} = this.props;
        this.storeName = tabLabel;
    }

    componentDidMount() {
        this.refreshRemoteData();
    }

    refreshRemoteData() {
        const {onRefreshPopular} = this.props;
        onRefreshPopular(this.storeName);
    }

    renderItem(data) {
        const item = data.item;
        const {theme} = this.props;
        return <HomeListItem item={item} theme={theme}
                             onSelect={(callBack) => {
                                 console.log("callBack", callBack);
                             }}
        />;
    }

    render() {
        let store = this.store();
        const {theme} = this.props;
        const {projectModels, isLoading} = store;

        return <View style={styles.container}>
            <FlatList
                data={projectModels}
                renderItem={item => this.renderItem(item)}
                keyExtractor={item => "" + item.id}
                refreshControl={
                    <RefreshControl
                        title={'Loading'}
                        refreshing={isLoading}
                        onRefresh={() => this.refreshRemoteData()}
                    />
                }
            />
        </View>;
    }

    store() {
        const {popular} = this.props;
        let store = popular[this.storeName];
        if (!store) {
            store = {
                isLoading: false,
                projectModels: [],
            };
        }
        return store;
    }
}

const mapStateToProps = state => ({
    popular: state.popular,
});
const mapDispatchToProps = dispatch => ({
    onRefreshPopular: (storeName) => dispatch(actions.onRefreshPopular(storeName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeListPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '',
    },
});
