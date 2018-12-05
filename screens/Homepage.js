import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const { width } = Dimensions.get('window')

import {lightBackground, extraLightBackground} from '../components/AsosColors';
import Card from '../components/Card'
import Header from '../components/RecentHeader'
const kHorizontalMargin = 20

class Homepage extends Component {
    handleRouting(e) {
    }

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{ width:width}}>
                {/** |Premier Delivery| Outlet| Party like an animal */}
                <View style={{marginHorizontal:kHorizontalMargin}}>
                    <Card type='wide' imageName={premiumDeliveryBanner}/>
                    <View style={
                        {flex:1, 
                        marginBottom:20,
                        flexDirection:'column',
                        justifyContent:'space-between',
                        alignItems:'center', 
                        height: 200, width: null, 
                        backgroundColor:'#E5A7B3'}
                        }>
                        <Image style={{marginTop:30}}
                        source={require('../assets/images/clock-white-on-pink.gif')} />
                        <Text style={{fontFamily:'futura',fontSize:26, fontWeight:'900', color:'white', textAlign:'center'}}>
                            UP TO 60% OFF COLD WEATHER
                        </Text>
                        <Text style={{fontFamily:'futura', fontSize:12, fontWeight:'400', color:'white', textAlign:'center'}}>See website for full terms</Text>
                    </View>

                    <TouchableOpacity 
                    activeOpacity={0.8} 
                    underlayColor={extraLightBackground}
                    onPress={ () => {
                        this.props.navigation.navigate('ProductListPage', {
                            title:'Party like an animal',
                        }) 
                    }}
                    style={{height:450, width:null, overflow:'hidden', marginBottom:20}}>
                        <ImageBackground style={{flex:1, height:null,width:null, resizeMode:'cover', }} source={ salesBanner }>
                        <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
                            <Text style={{fontFamily:'futura',fontSize:26, fontWeight:'900', color:'white', textAlign:'center'}}>
                                Party like an animal
                            </Text>

                            <View style={{width: 190, height: 39, backgroundColor:'white', flexDirection:'column', justifyContent:'center', alignItems:'center', borderRadius:3}} >
                                <Text style={{fontFamily:'futura',fontSize:16, fontWeight:'700', color:'black', textAlign:'center'}}> SHOP NOW </Text>
                            </View>
                        </View>
                        </ImageBackground>
                    </TouchableOpacity> 
                </View>

                {/** Recommended styles */}
                <ScrollView scrollEnabled={false} contentContainerStyle={styles.gridView}> 
                    {recommendedStyles.map((item) => this.createRecommendedStyles(item))}
                </ScrollView> 

                {/* <Card type='wide' source={freeDelivery}/>
                <Card type='standard' source={salesBanner2}/>
                <Card type='standard-short' source={recommendationBanner}/> */}

                {/** YOUR EDIT */}
                <View style={{flex:1,  paddingVertical:20,  backgroundColor: 'rgb(46,46,46)'}}>
                    <View style={{margin: 20}}>
                        <Text style={{fontFamily:'futura', fontSize:16, fontWeight:'800', color:'white'}}>YOUR EDIT</Text>
                        <Text style={{fontFamily:'futura-light', fontSize:12, color:'white'}}>Based on your shopping habits</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.recentView}> 
                        {recentlyViewed.map((item) => this.createGridItem(item))}
                    </ScrollView> 
                </View>

                {/** RECENTLY VIEWED */}
                <View style={{flex:1,  paddingVertical:20,  backgroundColor: 'rgb(250,248,250)'}}>
                    <View style={{margin: 20}}>
                        <Header title={'RECENTLY VIEWED'}/>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.recentView}> 
                        {recentlyViewed.map((item) => this.createGridItem(item))}
                    </ScrollView> 
                </View>

            </ScrollView>
        );
    }
    
    presentSales(){

    }


    createRecommendedStyles(item){
        return (
        <View style={{marginVertical: 10}}>
             <Card 
             key={item.id} 
             type='grid-item' 
             title={item.title} 
             subtitle={item.subtitle} 
             imageName={item.image}
             onCardPress={ () => {
                this.props.navigation.navigate('ProductListPage', {
                    title:'Recommended',
                }) 
            }} />
        </View>);
    }
    createGridItem(item){
        return (
            <View style={{marginHorizontal:10}}>
                <Card 
                key={item.id} 
                type='grid-item' 
                price={item.price} 
                subtitle={item.subtitle} 
                imageName={item.image}
                onCardPress={ () => {
                    this.props.navigation.navigate('ProductListPage', {
                        title:'Recently Viewed',
                    }) 
                }} />
                </View>
        );
     }
}

const recommendedStyles = [
    {id:0, title:'COLD-WEATHER NEWNESS', subtitle:'Fresh as the morning frost', image:require('../assets/images/newness_moment.jpg')},
    {id:2, title:'BACK IN BLACK', subtitle:'Retro-futuristic cyber-niceness', image:require('../assets/images/model_1.jpeg')},
    {id:3, title:'THE GIFT GUIDE', subtitle:'All present and correct', image:require('../assets/images/newSeason.jpg')},
    {id:4, title:'CHRISTMAS KIT', subtitle:'Ding dong merrily on point', image:require('../assets/images/UNISEX_CHRISTMASPRODUCT.jpg')}
]


const recentlyViewed = [
    {id:0, price:'£35.00', subtitle:'Cold-Weather Newness', image:require('../assets/images/model_3.jpeg')},
    {id:1, price:'£55.00', subtitle:'Spring into summer', image:require('../assets/images/model_2.jpeg')},
    {id:2, price:'£90.00', subtitle:'ASOS light camo jacket', image:require('../assets/images/model_1.jpeg')},
    {id:3, price:'£11.50', subtitle:'Another Influence PLUS Tropical Palm Pocket Vest', image:require('../assets/images/model_3.jpeg')},
    {id:4, price:'£15.00', subtitle:'French Connection Henley T-Shirt', image:require('../assets/images/model_1.jpeg')}
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginHorizontal: kHorizontalMargin,
    },
    recentView:{
        flexDirection:'row', 
        flexWrap:'nowrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        marginLeft:10,
        marginBottom:20,

    }
});

export default Homepage;

const premiumDeliveryBanner = require('../assets/images/premium-delivery-banner.png')
const salesBanner = require('../assets/images/newSeason.jpg')
const product = require('../assets/images/product_1.jpeg')
const model1 = require('../assets/images/model_1.jpeg')
const model2 = require('../assets/images/model_2.jpeg')
const model3 = require('../assets/images/model_3.jpeg')

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
