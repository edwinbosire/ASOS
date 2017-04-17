import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import {darkText, extraLightBackground} from '../AsosColors';
const {width, height} = Dimensions.get('window');

export default class ActionBar extends Component { 
    render() {
        return (
            <View style={ styles.container }>
                <Text style={styles.buttonText}> SORT  ▼ </Text>
                <View style={{backgroundColor:extraLightBackground, height:30, width:1}}></View>
                <Text style={styles.buttonText}> REFINE </Text>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        height: 54,
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,

    },
    buttonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: darkText,
        width: width/2 - 50,
        backgroundColor: 'white',
        paddingVertical:5,
    },

});