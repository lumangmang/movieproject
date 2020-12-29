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
    StyleSheet, ActivityIndicator,
    InteractionManager,
} from "react-native";
import PlaceholderItem from "../../common/PlaceholderItem";
import {connect} from "react-redux";
import actions from "../../action";
import HomeListItem from "./HomeListItem";
import Navigator from "../../utils/Navigator";

class HomeListPage extends PureComponent {
    constructor(props) {
        super(props);
        const {tabLabel} = this.props;
        this.storeName = tabLabel;
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.refreshRemoteData();
        });
    }

    refreshRemoteData(loadMore) {
        const {onRefreshPopular, onLoadMorePopular} = this.props;
        const store = this.store();
        if (loadMore) {
            onLoadMorePopular(this.storeName, ++store.page, 30, (message) => {
                console.log(message);
            }, store.projectModels);
        } else {
            onRefreshPopular(this.storeName, 30);
        }
    }

    renderItem(data) {
        const item = data.item;
        const {theme} = this.props;
        return <HomeListItem item={item} theme={theme}
                             onSelect={(callBack) => {
                                 Navigator.goPage({
                                     theme,
                                     projectModel: item,
                                     callBack,
                                 }, 'RepoDetailPage');
                             }}
        />;
    }

    renderFooter() {
        return this.store().hideLoadingMore ? null :
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    style={styles.indicator}
                />
            </View>;
    }

    renderList(projectModels) {
        return (
            <FlatList
                data={projectModels}
                renderItem={item => this.renderItem(item)}
                keyExtractor={(item, index) => "" + index}
                refreshControl={
                    <RefreshControl
                        title={"Loading"}
                        refreshing={false}
                        onRefresh={() => this.refreshRemoteData()}
                    />
                }
                ListFooterComponent={() => this.renderFooter()}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    setTimeout(() => {
                        if (this.canLoadMore) {
                            this.refreshRemoteData(true);
                            this.canLoadMore = false;
                        }
                    }, 100);
                }}
                onMomentumScrollBegin={() => {
                    this.canLoadMore = true;
                }}
            />
        );
    }

    render() {
        let store = this.store();
        const {projectModels, isLoading} = store;
        return <View style={styles.container}>
            {(isLoading && !projectModels) ? renderPlaceholders() : this.renderList(projectModels)}
        </View>;
    }

    store() {
        const {popular} = this.props;
        let store = popular[this.storeName];
        if (!store) {
            store = {
                isLoading: false,
                projectModels: [],
                hideLoadingMore: true,
            };
        }
        return store;
    }
}

const renderPlaceholders = () =>
    [...new Array(10).fill({})].map((e, i) => <PlaceholderItem key={i}/>);

const mapStateToProps = state => ({
    popular: state.popular,
});
const mapDispatchToProps = dispatch => ({
    onRefreshPopular: (storeName, per_page) => dispatch(actions.onRefreshPopular(storeName, per_page)),
    onLoadMorePopular: (storeName, page, per_page, callBack, preItems) =>
        dispatch(actions.onLoadMorePopular(storeName, page, per_page, callBack, preItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeListPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicatorContainer: {
        alignItems: 'center',
    },
    indicator: {
        color: 'red',
        margin: 10,
    },
});
