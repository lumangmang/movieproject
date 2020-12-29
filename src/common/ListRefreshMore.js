/**
 * movieproject.
 * Create by Devin on 2020/12/29.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import React, {
    PureComponent, forwardRef,
    useState, useRef,
    useImperativeHandle,
} from 'react';

import {
    View, Text,
    FlatList, TouchableOpacity,
    ActivityIndicator, Image
} from 'react-native';

import {PropTypes} from 'prop-types';

function PullLoadMoreListView(props, ref) {
    const [isRefresh, setRefresh] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);
    const [showLoadMore, setLoadMore] = useState(false);
    const [showRefresh, setShowRefresh] = useState(true);
    const [listHeight, setListHeight] = useState(0);
    const list = useRef(null);

    function _renderFooter() {
        let footer = (showLoadMore) ?
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator
                    color={'gray'}
                    animating={true}
                    style={{height: 50}}
                    size={'large'}
                />
                <Text style={{fontSize: 15, color: 'black'}}>
                    loading
                </Text>
            </View> : <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{fontSize: 15, color: 'black', margin: 10}}>
                    {props.dataSource != null && props.dataSource.length > 0 ? "loadMoreEnd" : " "}
                </Text>
            </View>
        return footer;
    }

    function _refresh() {
        if (isRefreshing) return;
        setRefreshing(true)
        setLoadMore(false)
        setRefresh(true)
        props.refresh && props.refresh();
    }

    function _loadMore() {
        if (isRefreshing) return;
        if (!showLoadMore) return;
        if (props.dataSource.length === 0) return;
        setRefreshing(true)
        setShowRefresh(false)
        props.loadMore && props.loadMore();
    }

    function scrollToTop() {
        if (props.dataSource <= 0) return;
        if (list) {
            list.current.scrollToIndex({index: 0, animate: false});
        }
    }

    let openMethods = {
        refreshComplete: (showLoadMore = false, _scrollToTop = false) => {
            setRefreshing(false)
            setRefresh(false)
            setLoadMore(showLoadMore)
            if (_scrollToTop)
                scrollToTop();
        },
        loadMoreComplete: (showLoadMore = false) => {
            setRefreshing(false)
            setShowRefresh(true)
            setLoadMore(showLoadMore)
        },
        showRefreshState: () => {
            setRefresh(true)
        },
        scrollToTop: () => {
            scrollToTop();
        }
    }

    useImperativeHandle(ref, () => ({
        refreshComplete: openMethods.refreshComplete,
        loadMoreComplete: openMethods.loadMoreComplete,
        showRefreshState: openMethods.showRefreshState,
        scrollToTop: openMethods.scrollToTop
    }));

    // function _renderEmpty() {
    //     return (!props.hasOwnProperty("renderHeader")) ?
    //         <View style={{
    //             flex: 1,
    //             height: listHeight,
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //         }}>
    //             <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    //                               onPress={() => {
    //                                   _refresh();
    //                                   openMethods.showRefreshState();
    //                               }}>
    //                 <Image source={require("../../img/logo.png")}
    //                        resizeMode={"contain"}
    //                        style={{width: 80, height: 80}}/>
    //                 <Text style={{}}>
    //                     isEmpty
    //                 </Text>
    //             </TouchableOpacity>
    //         </View> : <View/>;
    // }

    let refreshProps = {
        refreshing: isRefresh,
        onRefresh: _refresh,
        tintColor: 'gray',
        title: 'refreshing',
        colors: ['gray', 'red'],
    };

    return (
        <FlatList
            style={{flex: 1}}
            ref={list}

            removeClippedSubviews={false}
            {...refreshProps}
            onLayout={(e) => {
                if (listHeight === 0 && e.nativeEvent.layout.height !== 0) {
                    setListHeight(e.nativeEvent.layout.height)
                }
            }}
            renderItem={
                ({item, index}) => props.renderRow(item, index)
            }
            ListHeaderComponent={props.renderHeader}
            ItemSeparatorComponent={({highlighted}) => <View/>}
            enableEmptySections
            initialListSize={props.pageSize}
            pageSize={props.pageSize}
            initialNumToRender={10}
            onEndReachedThreshold={0.1}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={_loadMore}
            ListFooterComponent={_renderFooter}
            data={props.dataSource}
        />
    )
}

PullLoadMoreListView.propTypes = {
    pageSize: PropTypes.number,
    dataSource: PropTypes.any,
    refresh: PropTypes.func,
    loadMore: PropTypes.func,
    enableRefresh: PropTypes.bool,
}

PullLoadMoreListView.defaultProps = {
    pageSize: 30,
    dataSource: [],
    enableRefresh: true,
}

export default forwardRef(
    (props, ref) => PullLoadMoreListView(props, ref)
);


