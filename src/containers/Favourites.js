import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
        backgroundColor: '#F5FCFF'
    }
});

export default Favourites;