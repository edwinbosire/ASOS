import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightBackground, extraLightBackground,darkBackground, darkText, lightText, emerald} from '../AsosColors';
const {width, height} = Dimensions.get('window');


function buttonWithText(icon, text) {
    return (
        <View style={{justifyContent:'center', alignItems:'stretch'}}>
            <Icon.Button style={{alignSelf:'center', margin:0}} name={icon} size={30} color={darkBackground}  backgroundColor="transparent" onPress={this.onBackButtonPressed}/>
            <Text style={styles.buttonText}> {text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

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
    optionsButtonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: darkText,
        width: width/2 - 50,
        backgroundColor: 'blue',
        paddingVertical:5,
    },
    basketButtonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: 'white',
        paddingVertical:5,
    }

});

module.exports = {buttonWithText}