/*

Defines all the card views used in the ASOS app
Suggested Improvements: Utilize type to render appropriate card instead of title & price
*/

import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, TouchableHighlight} from 'react-native';
import {darkText, lightText, extraLightBackground, darkBackground} from './AsosColors'
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const PADDING = 30;

export default class Card extends Component {
    
    render() {
        if (this.props.title){
            return (this.renderCardWithTitle(this.props.title, this.props.subtitle)) //returning early to avoid styling issues presented by parent container
        }else if(this.props.price){
            return (this.renderCardWithPrice(this.props.price, this.props.subtitle))
        }else{
            return(
                <View>
                    {this.renderStandard()}
                </View>
            )
        }
    }

renderCardWithTitle(title, subtitle) {
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <View style={[styles.gridItem]}>
                <Image style={{flex:3, resizeMode:'contain', alignSelf:'center', marginBottom:3, backgroundColor:'white'}} source={ this.props.imageName }/>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-start'}}>
                    <Text style={[styles.title, {marginBottom:3}]}> {title} </Text>
                    <Text style={styles.subTitle}> {subtitle} </Text>
                </View>
            </View>
       </TouchableHighlight> 
    )
}

renderCardWithPrice(price, subtitle) {
    return(
        <TouchableHighlight style={{
            backgroundColor:'white',
            borderWidth: 0.5, 
            borderColor: 'rgba(0,0,0,0.1)',
            shadowColor:'black',
            shadowOffset:{ width: 0, height: 3 },
            shadowRadius:4,
            shadowOpacity:0.1,
            }}
            activeOpacity={0.8} 
            underlayColor={extraLightBackground}
            onPress={this.props.onCardPress}>
            
            <View style={[styles.gridItem]}>
                <Image style={[{flex:3, resizeMode:'contain', alignSelf:'center',}]} source={this.props.imageName}/>
                <View style={{flex:1,flexDirection:'column', justifyContent:'space-around', marginLeft:5 }}>
                    <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:5 }}>
                        <Text style={styles.price}>{price}</Text>
                        <Icon.Button style={{padding:0}} name="ios-heart" size={25} color={darkBackground}  backgroundColor="transparent"/>
                    </View>
                    <Text style={styles.subTitlePrice}>{subtitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

renderStandard(){
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <Image style={this.styleForType(this.props.type)} source={ this.props.imageName }/>
        </TouchableHighlight>
    )
}

    styleForType(type) {
        switch (type) {
            case 'wide':
                return styles.promotionBanner;
            case 'standard':
                return styles.standardCard;
            case 'tall':
                return styles.tallCard;
            case 'grid-item':
                return styles.gridItem;
            case 'standard-short':
                return styles.standardShort;
            default:
                return styles.container;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width:null,
        marginTop:0,
        backgroundColor: 'white',
    },
    promotionBanner: {
        height:90,
        marginBottom:20,
        width:null,
        flex:1,
        resizeMode:'cover',
        borderWidth:2,
        borderColor:'black',
        backgroundColor: 'white'
    },
    standardCard: {
        alignSelf:'stretch',
        height: 270,
        width:null,
        resizeMode:'cover',
        backgroundColor: extraLightBackground,
        marginBottom:20,
    },
    tallCard: {
        alignSelf:'stretch',
        height:450,
        width:null,
        resizeMode:'cover',
        overflow:'hidden',
        backgroundColor: extraLightBackground,
        marginBottom:20,
    },
    standardShort: {
        alignSelf:'stretch',
        height: 125,
        width:null,
        resizeMode:'contain',
        backgroundColor: extraLightBackground

    },
    gridItem: {
        overflow:'hidden',
        width:(width/2) - PADDING,
        height:300,
        backgroundColor: 'white'

    },
    title:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"800",
        textAlign: 'center',
        color:darkText,
    },
    subTitle:{
        fontFamily:'futura-light',
        fontSize:14,
        textAlign: 'center',
        color:lightText,
    },
    subTitlePrice:{
        fontFamily:'futura-light',
        fontSize:14,
        fontWeight:"200",
        color:lightText,
    },
    price:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"600",
        textAlign: 'left',
        color:darkText,
    },
});
