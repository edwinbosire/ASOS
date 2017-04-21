import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {lightBackground} from '../AsosColors';
import Card from '../components/Card'
import Header from '../components/RecentHeader'
import {getHomePageData} from '../store/Service'
import { Actions } from 'react-native-router-flux';

var data = require('../store/Data.json');

class Homepage extends Component {
    handleRouting(e) {
        Actions.productListing()
    }

    constructor(props){
        super(props)
        this.state = {
            raw:data,
        }
    }
    createGridItem(item){
       return <Card key={item.id} type='grid-item' price={item.price} subtitle={item.subtitle} source={item.image} onCardPress= {Actions.productPage}/>
    }
    render() {
        var dummy = this.getHomePageData
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:20}}>

                    <Card type='wide' source={premiumDeliveryBanner}/>
                    <Card type='standard' source={salesBanner} onCardPress= {Actions.cateogryListing}/>
                    <Card type='tall' source={newSeason} onCardPress= {Actions.cateogryListing}/>

                    <ScrollView scrollEnabled={false} contentContainerStyle={styles.gridView}> 
                        <Card type='grid-item' title='NEW TREND' subtitle="Camo you'll want to be seen in" source={newTrend} onCardPress= {Actions.productListing}/>
                        <Card type='grid-item' title='HOLIDAY' subtitle="Spring into summer" source={holiday} onCardPress= {Actions.productListing}/>
                        <Card type='grid-item' title='ACTIVE WEAR' subtitle="Pump up, look sharp" source={activeWear} onCardPress= {Actions.productListing}/>
                        <Card type='grid-item' title='THE SUIT GUIDE' subtitle="Sharp gear for any occasion" source={suitGuide} onCardPress= {Actions.productListing}/> 
                    </ScrollView>

                    <Card type='wide' source={freeDelivery}/>
                    <Card type='standard' source={salesBanner2}/>
                    <Card type='standard-short' source={recommendationBanner}/>
                    
                    <Header />
                    
                    <ScrollView horizontal={true} contentContainerStyle={styles.recentView}> 
                        {recentlyViewed.map((item) => this.createGridItem(item))}
                    </ScrollView>

                </ScrollView>
            </View>
        );
    }
    
    presentSales(){

    }
}

const recentlyViewed = [
    {id:0, price:'£35.00', subtitle:'Brave Soul Skinny Jeans', image:'http://images.asos-media.com/products/brave-soul-skinny-jeans/7384621-1-green?$XXL$&wid=513&fit=constrain'},
    {id:1, price:'£55.00', subtitle:'Spring into summer', image:'http://content.asos-media.com/~/media/210317114653en-GB/mw-homepage/2017/April/03/springbreak-app-02.jpg'},
    {id:2, price:'90.00', subtitle:'ASOS light camo jacket', image:'http://content.asos-media.com/~/media/060417052531en-GB/mw-homepage/2017/April/11/1146x1496-newness-(2).jpg'},
    {id:3, price:'11.50', subtitle:'Another Influence PLUS Tropical Palm Pocket Vest', image:'http://images.asos-media.com/products/another-influence-plus-tropical-palm-pocket-vest/7796744-1-blue?$XXL$&wid=513&fit=constrain'},
    {id:4, price:'15.00', subtitle:'French Connection Henley T-Shirt', image:'http://images.asos-media.com/products/french-connection-henley-t-shirt/7742330-1-black?$XXL$&wid=513&fit=constrain'}
]


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBackground,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-around',
    },
    recentView:{
        flexDirection:'row', 
        flexWrap:'nowrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',

    }
});

export default Homepage;

const premiumDeliveryBanner = 'http://content.asos-media.com/~/media/070417040134en-GB/unisex/service-messages/' +
        '2017/Premier/premier-service-message-iphone-app-v2.png'
const salesBanner = 'http://content.asos-media.com/~/media/040417100631en-GB/mw-homepage/2017/April/1' +
        '1/App/mw-INT-mss-iphone-1024x672-week2.jpg'

const newSeason = 'http://content.asos-media.com/~/media/300317024542en-GB/mw-homepage/2017/April/0' +
        '3/jeans_hero_moment_mw_app.jpg'

const newTrend = 'http://content.asos-media.com/~/media/060417052531en-GB/mw-homepage/2017/April/11/1146x1496-newness-(2).jpg';
const holiday = 'http://content.asos-media.com/~/media/210317114653en-GB/mw-homepage/2017/April/03/springbreak-app-02.jpg';
const activeWear = 'http://content.asos-media.com/~/media/210317114821en-GB/mw-homepage/2017/April/03/mw-activewear-app-01.jpg';
const suitGuide = 'http://content.asos-media.com/~/media/210317114935en-GB/mw-homepage/2017/April/03/mw-occasionwear-app-01.jpg';
const freeDelivery = 'http://content.asos-media.com/~/media/191216102247en-GB/unisex/Free-worldwide-delivery-service-messages/App/iphone/freedelivery-service-message-iphone-1024x138_UK.png'
const salesBanner2 = 'http://content.asos-media.com/~/media/040417100631en-GB/mw-homepage/2017/April/1' +
        '1/App/mw-INT-mss-iphone-1024x672-week2.jpg'
const recommendationBanner = 'http://content.asos-media.com/~/media/100217042313en-GB/asosapp/homepage/SERVICE_MESSAGES_FEB17/v2-unisex-rec-iphone-1024x380-v1.png';
