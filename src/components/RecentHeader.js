import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableHighlight} from 'react-native';

import {lightBackground, darkText, extraLightBackground, darkBackground} from '../AsosColors'

const {width, height} = Dimensions.get('window');

export default class RecentHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>RECENTLY VIEWED</Text>
                <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground} onPress={()=> this.onCardPressed()}>
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableHighlight>
            </View>
        );
    }

    onCardPressed(){}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:40,
        backgroundColor:lightBackground,
        alignItems:'center',
        paddingHorizontal:10,
    },
    title: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "300",
        textAlign: 'left',
        color: darkText,
        width: (width / 2)
    },
    buttonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: darkText,
        width: 80,
        backgroundColor: extraLightBackground,
        paddingVertical:5,
    },

});