import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import {lightBackground, extraLightBackground} from '../AsosColors';
import Card from '../components/Card'
import NavBar from '../components/NavBar'

export default class Category extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                <ScrollView style={{paddingHorizontal:10}} showsVerticalScrollIndicator={false}>

                    <Card type='standard' source={salesBanner}/>
                    
                    <ScrollView scrollEnabled={false} contentContainerStyle={styles.gridView}> 
                        <Card type='grid-item' title='JACKETS & COATS' subtitle="Win at winter" source={jacketsCoats}/>
                        <Card type='grid-item' title='SHOES, BOOTS & TRAINERS' subtitle="From adidas sneaks to Dr Martens" source={shoes}/>
                        <Card type='grid-item' title='JUMPERS & CARDIGANS' subtitle="All the layers" source={jumpers}/>
                        <Card type='grid-item' title='HOODIES & SWEATSHIRTS' subtitle="Chill everyday threads" source={hoodies}/> 
                        <Card type='grid-item' title='JEANS' subtitle="From skinny to stonewashed" source={jeans}/> 
                        <Card type='grid-item' title='TROUSERS & CHINOS' subtitle="Trew story" source={trousers}/> 

                    </ScrollView>

                </ScrollView>
            </View>   
         );
    }
}
 
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

});


const jacketsCoats = 'http://content.asos-media.com/~/media/180117104853en-GB/unisex/sale/2016/12/GL_Wk4_Retail-22/Skus/GL-MW/app/gl-mw-coats-app.jpg';
const shoes = 'http://content.asos-media.com/~/media/180117104906en-GB/unisex/sale/2016/12/GL_Wk4_Retail-22/Skus/GL-MW/app/gl-mw-trainers-app.jpg';
const jumpers = 'http://content.asos-media.com/~/media/180117104903en-GB/unisex/sale/2016/12/GL_Wk4_Retail-22/Skus/GL-MW/app/gl-mw-jumpers-app.jpg';
const hoodies = 'http://content.asos-media.com/~/media/180117104908en-GB/unisex/sale/2016/12/GL_Wk4_Retail-22/Skus/GL-MW/app/gl-mw-knitwear-app.jpg';
const jeans = 'http://content.asos-media.com/~/media/180117104848en-GB/unisex/sale/2016/12/GL_Wk4_Retail-22/Skus/GL-MW/app/gl-mw-jeans-app.jpg';
const trousers = 'http://content.asos-media.com/~/media/180117104851en-GB/unisex/sale/2016/12/GL_Wk4_Retail-22/Skus/GL-MW/app/gl-mw-trousers-app.jpg';

const salesBanner = 'http://content.asos-media.com/~/media/040417100631en-GB/mw-homepage/2017/April/1' +
        '1/App/mw-INT-mss-iphone-1024x672-week2.jpg'
const newTrend = 'http://content.asos-media.com/~/media/060417052531en-GB/mw-homepage/2017/April/11/1146x1496-newness-(2).jpg';
const holiday = 'http://content.asos-media.com/~/media/210317114653en-GB/mw-homepage/2017/April/03/springbreak-app-02.jpg';
const activeWear = 'http://content.asos-media.com/~/media/210317114821en-GB/mw-homepage/2017/April/03/mw-activewear-app-01.jpg';
const suitGuide = 'http://content.asos-media.com/~/media/210317114935en-GB/mw-homepage/2017/April/03/mw-occasionwear-app-01.jpg';

