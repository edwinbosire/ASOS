import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TouchableHighlight, Image, Text} from 'react-native';
import Color from './AsosColors';
import Button from './Button'
const {width, height} = Dimensions.get('window');

export default class NavBar extends Component {
    render() {

        if (this.props.type == 'bag'){
            return this.basketNavigationBar()
        }
        return (
            <View style={styles.plainNavigationBar}>
                <Button type={'Icon'} icon={'keyboard-backspace'} onPress={this.props.onBackPress}/>
                <Text style={[styles.title, {width: (width - 120)}]}> {this.props.title} </Text>
            </View>

        );
    }
    
    /*added extra checkoutbutton as a hack to center title*/
    basketNavigationBar(){
        return(
            <View style={styles.navigationBar}>
                <Text style={[styles.buttonText, {opacity:0}]}> {'CHECKOUT'}</Text> 
                <Text style={styles.title}> {'BAG'} </Text>
                <TouchableHighlight activeOpacity={0.9} underlayColor={Color.extraLightBackground} onPress={this.props.onCheckoutPress}>
                    <Text style={styles.buttonText}> {'CHECKOUT'}</Text>
                </TouchableHighlight>

            </View>
        );
    }
    onBackButtonPressed(){    }
}

const styles = StyleSheet.create({
    plainNavigationBar: {
            height: 54,
            width:width,
            paddingLeft: -10,
            paddingRight: -10,
            borderBottomWidth: 1,
            borderColor: Color.extraLightBackground,
            alignItems: 'center',
            flexDirection:'row',
        },

    navigationBar: {
        alignSelf:'stretch',
        height: 64,
        paddingHorizontal:20,
        backgroundColor:Color.white,
        borderColor: Color.extraLightBackground,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    backButton: {
        height: 44,
        width: 60,
        resizeMode: 'center'
    },
    title: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "800",
        textAlign: 'center',
        color: Color.darkText,
        backgroundColor:'transparent'
    },
    buttonText: {
        fontFamily: 'futura',
        fontSize: 16,
        fontWeight: "400",
        textAlign: 'center',
        color: Color.white,
        padding:7,
        backgroundColor: Color.emerald,
        alignSelf:'center',
        },


});

const backButtonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAAbklEQVR4Ae3ZxQHDMAxAUZ197sBasQu1gXuoaHhfC7ygAyFJktYysi7Oc56si7OS6uKspLo4z7hHqYtzw8HBwemNg4ODg/OtqY3zfIkD9FdSVEZq5bJvn4SEhISEhISEVHw43yGlny9Hv6ckSdIEb5dSW8V5J5sAAAAASUVORK5CYII="