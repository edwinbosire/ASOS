import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity, Image, Text} from 'react-native';
import {lightBackground, extraLightBackground, darkText} from '../AsosColors';
import Button from './Button'
const {width, height} = Dimensions.get('window');

export default class NavBar extends Component {
    render() {
        return (
            <View style={styles.navigationBar}>
                <Button type={'Icon'} title="hidden" icon={'keyboard-backspace'}/>
                <Text style={styles.title}> {this.props.title} </Text>
            </View>

        );
    }
    
    onBackButtonPressed(){    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row'
    },
    navigationBar: {
        height: 54,
        width:width,
        paddingLeft: -10,
        paddingRight: -10,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,
        alignItems: 'center',
        flexDirection:'row',
    },
    backButton: {
        height: 44,
        width: 60,
        resizeMode: 'center'
    },
    title: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'center',
        color: darkText,
        width: (width - 120),
    },


});

const backButtonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAAbklEQVR4Ae3ZxQHDMAxAUZ197sBasQu1gXuoaHhfC7ygAyFJktYysi7Oc56si7OS6uKspLo4z7hHqYtzw8HBwemNg4ODg/OtqY3zfIkD9FdSVEZq5bJvn4SEhISEhISEVHw43yGlny9Hv6ckSdIEb5dSW8V5J5sAAAAASUVORK5CYII="