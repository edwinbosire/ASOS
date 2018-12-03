import React from 'react';
import { Image} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomePage from '../screens/Homepage';
import SearchScreen from '../screens/Search';
import Basket from '../screens/Basket';
import Favourites from '../screens/Favourites'
import Profile from '../screens/Profile';
import ProductInfo from '../screens/ProductInfo'
import ProductListPage from '../screens/ProductListPage'

const HomeStack = createStackNavigator({
  Home: {screen: HomePage },
  ProductListPage: {screen: ProductListPage},  
  ProductInfo: {screen: ProductInfo}
},{ headerMode: 'none' });

const SearchStack = createStackNavigator({
  Search: {screen: SearchScreen}
},{ headerMode: 'none' });

export default createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../assets/images/asos-logo.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },

  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'SEARCH',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../assets/images/search.png')} style={{ height: 30, width: 30, resizeMode:'contain',tintColor: tintColor }} />
      )
    }
  },
  Basket: {
    screen: Basket,
    navigationOptions: {
      tabBarLabel: 'BASKET',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../assets/images/bag.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Favourites: {
    screen: Favourites,
    navigationOptions: {
      tabBarLabel: 'Favourites',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../assets/images/favourite.png')} style={{ height: 24, width: 24, resizeMode:'contain', tintColor: tintColor }} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../assets/images/user.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  }

}, {
  tabBarOptions: {
    activeTintColor: 'rgb(53,51,53)',
    inactiveTintColor: 'rgb(173,173,173)',
    showLabel:false,
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 1
    }
  }
});
