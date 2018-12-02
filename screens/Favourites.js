import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Color from '../components/AsosColors';

class Favourites extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    "Favourites goes here"
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.orange
    }
});

export default Favourites;