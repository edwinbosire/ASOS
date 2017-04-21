import React, {Component} from 'react';
import {Image, Text} from 'react-native';

import Search from './containers/Search';
import Favourites from './containers/Favourites';
import Homepage from './containers/Homepage';
import Basket from './containers/Basket';
import Profile from './containers/Profile';
import Category from './containers/Category';
import ProductListPage from './containers/ProductListPage';
import ProductInfo from './containers/ProductInfo'

import Icons from './TabbarIcons'
import Color from './AsosColors'
import { Router, Scene } from 'react-native-router-flux';




export default class AppRouter extends Component {

 tabIcon(imageURI){
  return (
    <Image style={{width:40, height:40, resizeMode:'center', tintColor:Color.lightText}} source={{uri:imageURI}} />
  );
}
    render() {
        return (
            <Router>
                <Scene key="root"> 
                    <Scene key="tabbar" tabs={true}  default="search" tabBarStyle={{backgroundColor: Color.lightBackground, borderTopColor:Color.extraLightBackground, borderTopWidth:1}}>
                        {/*Tab and it's scenes */}
                        <Scene key = "homepage_tab" icon={() => this.tabIcon(Icons.homeIcon)} >
                            <Scene key="homepage" component={ Homepage } title="Homepage" hideNavBar={true}/>
                            <Scene key="productListing" clone={true} component={ProductListPage} title="" />
                            <Scene key="productPage" clone={true} component={ ProductInfo } title="" />
                            <Scene key="cateogryListing" clone={true} component={ Category } title="" />
                            <Scene key="productInfo" clone={true} component={ ProductInfo } title="" />     

                        </Scene>
                        
                        <Scene key = "search_tab" title="" intial={true} icon={() => this.tabIcon(Icons.searchIcon)} hideNavBar={true}>
                            <Scene key="search" component={Search} title="Search" />
                        </Scene>

                        <Scene key = "bag_tab" title="" icon={() => this.tabIcon(Icons.bagIcon)} hideNavBar={true}>
                            <Scene key="bag" component={ Basket } title="Basket" />
                        </Scene>

                        <Scene key = "favourites_tab" title="" icon={() => this.tabIcon(Icons.favorites)} hideNavBar={true}>
                            <Scene key="favourites" component={ Favourites } title="Favourites" />
                        </Scene>

                        <Scene key = "profile_tab" title="" icon={() => this.tabIcon(Icons.userIcon)} hideNavBar={true}>
                            <Scene key="profile" component={ Profile } title="Profile" />
                        </Scene>

                    </Scene>        
                </Scene>
            </Router>
        );
    }    
}