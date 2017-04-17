import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {lightBackground, extraLightBackground} from '../AsosColors';
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
export default class ProductInfo extends Component { 
    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <Image style={{width:width, height:480}} source={{uri:productImage}}>
                        <TouchableOpacity activeOpacity={0.8} underlayColor={extraLightBackground} onPress={()=> this.onBackButtonPressed()}>
                        <Image
                            style={styles.backButton}
                            source={{
                            uri: backButtonImage
                        }}/>
                        </TouchableOpacity>
                        <Icon name="rocket" size={30} color="#900" />
                    </Image>
                </ScrollView>
            </View>   
         );
    }
    
    onBackButtonPressed(){    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBackground,
        paddingTop: -20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        height: 44,
        width: 60,
        resizeMode: 'center'
    }

});



const productImage = 'https://images.asos-media.com/products/asos-double-breasted-trench-coat-with-shower-resistance-in-light-khaki/7487951-1-lightkhaki?$XL$'
const backButtonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAAbklEQVR4Ae3ZxQHDMAxAUZ197sBasQu1gXuoaHhfC7ygAyFJktYysi7Oc56si7OS6uKspLo4z7hHqYtzw8HBwemNg4ODg/OtqY3zfIkD9FdSVEZq5bJvn4SEhISEhISEVHw43yGlny9Hv6ckSdIEb5dSW8V5J5sAAAAASUVORK5CYII="
