import React, {Component} from 'react';
import {StyleSheet, View, Text, TabBarIOS} from 'react-native';

import Search from './containers/Search';
import Favourites from './containers/Favourites';
import Homepage from './containers/Homepage';
import Basket from './containers/Basket';
import Profile from './containers/Profile';
import Category from './containers/Category';
import ProductListPage from './containers/ProductListPage';
import Icons from './TabbarIcons'
import Color from './AsosColors'

export default class TabBarView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            presses: 0,
            selectedTab: 'Bag'
        }
    }
    render() {
        return (
            <TabBarIOS tintColor={Color.darkText}>
                <TabBarIOS.Item
                    title=""
                    icon={{
                    uri: Icons.homeIcon,
                    scale: 3
                }}
                    selected={this.state.selectedTab === 'Home'}
                    onPress={() => {
                    this.setState({selectedTab: 'Home'});
                }}>
                    {< Homepage />}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title=""
                    icon={{
                    uri: Icons.searchIcon,
                    scale: 3
                }}
                    selected={this.state.selectedTab === 'Search'}
                    onPress={() => {
                    this.setState({selectedTab: 'Search'});
                }}>
                    {< Category />}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title=""
                    icon={{
                    uri: Icons.bagIcon,
                    scale: 3
                }}
                    selected={this.state.selectedTab === 'Bag'}
                    onPress={() => {
                    this.setState({selectedTab: 'Bag'});
                }}>
                    {< ProductListPage />}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title=""
                    icon={{
                    uri: Icons.favorites,
                    scale: 3
                }}
                    selected={this.state.selectedTab === 'Favourites'}
                    onPress={() => {
                    this.setState({selectedTab: 'Favourites'});
                }}>
                    {< Favourites />}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title=""
                    icon={{
                    uri: Icons.userIcon,
                    scale: 3
                }}
                    selected={this.state.selectedTab === 'Profile'}
                    onPress={() => {
                    this.setState({selectedTab: 'Profile'});
                }}>
                    {< Profile />}
                </TabBarIOS.Item>
            </TabBarIOS>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
