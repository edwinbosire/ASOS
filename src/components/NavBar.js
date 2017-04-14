import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import {lightBackground, extraLightBackground} from '../AsosColors';

export default class NavBar extends Component {
    render() {
        return (
            <View style={styles.navigationBar}>
                <TouchableOpacity activeOpacity={0.8} underlayColor={extraLightBackground} onPress={()=> this.onBackButtonPressed()}>

                <Image
                    style={styles.backButton}
                    source={{
                    uri: backButtonImage
                }}/>
                </TouchableOpacity>
            </View>

        );
    }
    
    onBackButtonPressed(){    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigationBar: {
        height: 54,
        alignSelf: 'stretch',
        paddingLeft: -10,
        paddingRight: -10,
        borderBottomWidth: 1,
        borderColor: extraLightBackground,
        alignItems: 'flex-start'
    },
    backButton: {
        height: 44,
        width: 60,
        resizeMode: 'center'
    }

});

const backButtonImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAAbklEQVR4Ae3ZxQHDMAxAUZ197sBasQu1gXuoaHhfC7ygAyFJktYysi7Oc56si7OS6uKspLo4z7hHqYtzw8HBwemNg4ODg/OtqY3zfIkD9FdSVEZq5bJvn4SEhISEhISEVHw43yGlny9Hv6ckSdIEb5dSW8V5J5sAAAAASUVORK5CYII="