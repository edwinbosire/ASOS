/*

Defines all the card views used in the ASOS app
Suggested Improvements: Utilize type to render appropriate card instead of title & price
*/

import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, TouchableHighlight} from 'react-native';
import {darkText, lightText, extraLightBackground, darkBackground} from '../AsosColors'
import Icons from '../TabbarIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
const PADDING = 20;

export default class Card extends Component {
    
    render() {
        if (this.props.title){
            return (this.renderCardWithTitle(this.props.title, this.props.subtitle)) //returning early to avoid styling issues presented by parent container
        }else if(this.props.price){
            return (this.renderCardWithPrice(this.props.price, this.props.subtitle))
        }else{
            return(
                <View style={styles.container}>
                    {this.renderStandard()}
                </View>
            )
        }
    }

renderCardWithTitle(title, subtitle) {
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <View style={[styles.gridItem]}>
                <Image style={{height:230, resizeMode:'cover'}} source={{uri: this.props.source}}/>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.subTitle}> {subtitle} </Text>
            </View>
       </TouchableHighlight> 
    )
}

renderCardWithPrice(price, subtitle) {
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <View style={[styles.gridItem, {marginHorizontal:10}]}>
                <Image style={[{height:230, resizeMode:'cover'}]} source={{uri: this.props.source}}/>
                <View style={{justifyContent:'space-between', flexDirection:'row', paddingTop:10}}>
                    <Text style={styles.price}> {price} </Text>
                    <Icon.Button style={{padding:0}}name="heart-outline" size={25} color={darkBackground}  backgroundColor="transparent"/>
                </View>
                <Text style={styles.subTitlePrice}> {subtitle} </Text>
            </View>
        </TouchableHighlight>
    )
}

renderStandard(){
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <Image style={this.styleForType(this.props.type)} source={{uri: this.props.source}}/>
        </TouchableHighlight>
    )
}

    styleForType(type) {
        switch (type) {
            case 'wide':
                return styles.promotionBanner;
                break;
            case 'standard':
                return styles.standardCard;
                break;
            case 'tall':
                return styles.tallCard;
                break;
            case 'grid-item':
                return styles.gridItem;
            case 'standard-short':
                return styles.standardShort;
            default:
                return styles.container;
                break
        }
    }
}

const styles = StyleSheet.create({
    container: {
        margin:width*0.05,
        marginTop:0,
    },
    promotionBanner: {
        height:(148/1024)* width*0.95,
        resizeMode:'cover'
    },
    standardCard: {
        alignSelf:'stretch',
        height: 270,
        resizeMode:'cover'
    },
    tallCard: {
        alignSelf:'stretch',
        height:450,
        overflow:'hidden'
    },
    standardShort: {
        alignSelf:'stretch',
        height: 125,
        resizeMode:'contain',
    },
    gridItem: {
        width:(width/2) - PADDING*2,
        margin:0,
        marginBottom:20,
        padding:0,
    },
    title:{
        fontFamily:'futura',
        fontSize:18,
        fontWeight:"300",
        textAlign: 'center',
        color:darkText,
        width:(width/2) - PADDING*2 - PADDING,
        paddingVertical:5,
    },
    subTitle:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        textAlign: 'center',
        color:lightText,
    },
    subTitlePrice:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        paddingHorizontal:10,
        color:lightText,
    },
    price:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"600",
        textAlign: 'left',
        paddingLeft:10,
        color:darkText,
    },
});
