import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, TouchableHighlight} from 'react-native';
import {darkText, lightText, extraLightBackground, darkBackground} from '../AsosColors'
import Icons from '../TabbarIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
const PADDING = 10;

export default class Card extends Component {
    render() {
        if (this.props.title){
            return this.renderCardWithTitle(this.props.title, this.props.subtitle)
        }else if(this.props.price){
            return this.renderCardWithPrice(this.props.price, this.props.subtitle)
        }else{
            return this.renderStandard()
        }
    }

renderCardWithTitle(title, subtitle) {
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={()=> this.onCardPressed()}>
            <View style={{height:350, backgroundColor:'white'}}>
                <Image style={[this.styleForType(this.props.type), {height:230, resizeMode:'center'}]} source={{uri: this.props.source}}/>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.subTitle}> {subtitle} </Text>
            </View>
        </TouchableHighlight>
    )
}

renderCardWithPrice(price, subtitle) {
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={()=> this.onCardPressed()}>
            <View style={{height:320, backgroundColor:'white'}}>
                <Image style={[this.styleForType(this.props.type), {height:230, resizeMode:'center'}]} source={{uri: this.props.source}}/>
                <View style={{justifyContent:'space-between', flexDirection:'row'}}>
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
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={()=> this.onCardPressed()}>
            <Image style={this.styleForType(this.props.type)} source={{uri: this.props.source}}/>
        </TouchableHighlight>
    )
}

onCardPressed(){

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
        flex: 1,
    },
    promotionBanner: {
        width:width - PADDING*2,
        height: 70,
        resizeMode:'contain'
    },
    standardCard: {
        height: 270,
        width:width - PADDING*2,
        resizeMode:'contain'
    },
    tallCard: {
        height:450,
        width:width - PADDING*2,
        overflow:'hidden'
    },
    standardShort: {
        height: 125,
        width:width - PADDING*2,
        resizeMode:'contain'
    },
    gridItem: {
        height: 350,
        width:(width/2) - PADDING*2 - PADDING,
        marginTop:10,
        marginBottom:10,
        margin: 10,
    },
    title:{
        fontFamily:'futura',
        fontSize:18,
        fontWeight:"300",
        textAlign: 'center',
        color:darkText,
        width:(width/2) - PADDING*2 - PADDING,
    },
    subTitle:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        textAlign: 'center',
        color:lightText,
        width:(width/2) - PADDING*2 - PADDING,
    },
    subTitlePrice:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        textAlign: 'left',
        paddingHorizontal:10,
        color:lightText,
        width:(width/2) - PADDING*2 - PADDING,
    },
    price:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"600",
        textAlign: 'left',
        paddingLeft:10,
        color:darkText,
        width:90,
    },
});

/**
 *
 *                     <FitImage
                        source={{
                        uri: saleBanner
                    }}
                        style={styles.saleBanner}/>

                    <FitImage
                        source={{
                        uri: newSeason
                    }}
                        style={styles.saleBanner}/>

                    <FitImage
                        source={{
                        uri: saleBanner
                    }}
                        style={styles.saleBanner}/>

                    <FitImage
                        source={{
                        uri: saleBanner
                    }}
                        style={styles.saleBanner}/>


 */