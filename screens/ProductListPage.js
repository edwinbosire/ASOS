import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, Text } from 'react-native';
import Color from '../components/AsosColors';
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import ActionBar from '../components/ActionBar'

const {width, height} = Dimensions.get('window');

export default class ProductListPage extends Component { 

    constructor(props){
        super(props)
        props.title = ""
    }
    render() {
        return (
            <View style={styles.container}>
                <NavBar title={this.props.title.toUpperCase()} />
                <ScrollView contentContainerStyle={styles.gridView} showsVerticalScrollIndicator={false}> 
                    <ActionBar firstButtonText={'SORT  ▼ '} secondButtonText={'filter'} />
                    <Text style={styles.resultsCount}> 1,234 styles found </Text>
                    <Card type='grid-item' price='£35.00' subtitle="ASOS light camo jacket" source={newTrend} />
                    <Card type='grid-item' price='£55.0' subtitle="Spring into summer" source={holiday} />
                    <Card type='grid-item' price='£67.50' subtitle="Pump up, look sharp" source={activeWear} />
                    <Card type='grid-item' price='£10.00' subtitle="Sharp gear for any occasion" source={suitGuide} /> 
                </ScrollView>
            </View>   
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.lightBackground,
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
    resultsCount: {
        fontFamily: 'futura',
        fontSize: 14,
        fontWeight: "100",
        textAlign: 'center',
        color: Color.lightText,
        paddingVertical:10,
        width:width,
    }
});


const newTrend = 'http://content.asos-media.com/~/media/060417052531en-GB/mw-homepage/2017/April/11/1146x1496-newness-(2).jpg';
const holiday = 'http://content.asos-media.com/~/media/210317114653en-GB/mw-homepage/2017/April/03/springbreak-app-02.jpg';
const activeWear = 'http://content.asos-media.com/~/media/210317114821en-GB/mw-homepage/2017/April/03/mw-activewear-app-01.jpg';
const suitGuide = 'http://content.asos-media.com/~/media/210317114935en-GB/mw-homepage/2017/April/03/mw-occasionwear-app-01.jpg';
