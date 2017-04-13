import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Color from '../AsosColors';

class Homepage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    "Homepage goes here"
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
        backgroundColor: Color.blue
    }
});

export default Homepage;