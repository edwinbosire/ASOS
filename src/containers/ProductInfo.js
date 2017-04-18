import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import {lightBackground, extraLightBackground,darkBackground, darkText, lightText, emerald} from '../AsosColors';
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
const PADDING = 10;

export default class ProductInfo extends Component { 
    render() {
        return (
            <View style={styles.container}>

                <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}>
                    <Image style={{width:width, height:480}} source={{uri:productImage}}>                    
                        <Icon.Button name="keyboard-backspace" size={30} color={darkBackground}  backgroundColor="transparent" onPress={this.onBackButtonPressed}/>
                    </Image>
                    {this.actionButtonGroup()}

                    <View style={styles.productDescription}>
                        <Text style={styles.price}> £30.00 </Text>
                        <Text style={styles.subTitle}> ASOS Skinny Jeans With Knee Rips In Black </Text>
                    </View>

                    <View style={ styles.optionsGroup }>
                        <Text style={styles.optionsButtonText}> WASHED BLACK  </Text>
                        <View style={{backgroundColor:extraLightBackground, height:30, width:1}}></View>
                        <Text style={styles.optionsButtonText}> SIZE  ▼ </Text>
                    </View>

                    <Icon.Button style={{width:width*0.9, alignItems:'center', justifyContent:'center'}}name="basket-fill" size={30} borderRadius={0} color='white' backgroundColor={emerald} onPress={this.onBackButtonPressed}>
                        <Text style={styles.basketButtonText}> ADD TO BAG </Text>
                    </Icon.Button>

                    <View style={styles.productDescription}>
                        <Text style={styles.list}> Product information </Text>
                        <Text style={styles.list}> Free delivery & returns </Text>
                        <Text style={styles.list}> Size guide </Text>
                    </View>
                </ScrollView>
            </View>   
         );
    }
    
    onBackButtonPressed(){    }

    actionButtonGroup() {
        return (
            <View style={styles.buttonGroup}>
                <View style={{flexDirection:'column', width:55, justifyContent:'center', alignItems:'center'}}>
                    <Icon.Button name="heart-outline" size={30} color={darkBackground}  backgroundColor="transparent" onPress={this.onBackButtonPressed}/>
                    <Text style={styles.buttonText}> SAVE </Text>
                </View>
                <View style={{flexDirection:'column', width:55, justifyContent:'center', alignItems:'center'}}>
                    <Icon.Button name="play" size={30} color={darkBackground}  backgroundColor="transparent" onPress={this.onBackButtonPressed}/>
                    <Text style={styles.buttonText}> VIDEO </Text>
                </View>
                <View style={{flexDirection:'column', width:55, justifyContent:'center', alignItems:'center'}}>
                    <Icon.Button name="share-variant" size={30} color={darkBackground}  backgroundColor="transparent" onPress={this.onBackButtonPressed}/>
                    <Text style={styles.buttonText}> SHARE </Text>
                </View>
            </View>
        );
    }
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
    },
    buttonText: {
        fontFamily: 'futura',
        fontSize: 14,
        fontWeight: "800",
        textAlign: 'left',
        color: darkText,
    },
    buttonGroup: {
        flexDirection:'row',
        width:width-50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
price:{
        fontFamily:'futura',
        fontSize:20,
        fontWeight:"800",
        textAlign: 'left',
        paddingVertical:10,
        color:darkText,
    },
subTitle:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        textAlign: 'left',
        color:lightText,
    },
    productDescription:{ 
        alignSelf:'stretch', 
        margin:20,
        paddingBottom:20,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

},
    optionsGroup: {
        height: 54,
        margin:20,
        marginTop:-20,
        alignSelf:'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
    optionsButtonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: darkText,
        width: width/2 - 50,
        backgroundColor: 'white',
        paddingVertical:5,
    },
    basketButtonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: 'white',
        paddingVertical:5,
    },
    list:{
        fontFamily: 'futura',
        fontSize: 20,
        fontWeight: "200",
        textAlign: 'left',
        color: darkText,
        marginVertical:20,
        borderBottomWidth: 1,
        borderColor: 'red',

    },
});



const productImage = 'https://images.asos-media.com/products/asos-double-breasted-trench-coat-with-shower-resistance-in-light-khaki/7487951-1-lightkhaki?$XL$'
const backButtonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAAbklEQVR4Ae3ZxQHDMAxAUZ197sBasQu1gXuoaHhfC7ygAyFJktYysi7Oc56si7OS6uKspLo4z7hHqYtzw8HBwemNg4ODg/OtqY3zfIkD9FdSVEZq5bJvn4SEhISEhISEVHw43yGlny9Hv6ckSdIEb5dSW8V5J5sAAAAASUVORK5CYII="
