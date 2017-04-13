import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Color from '../AsosColors';

class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    "Search goes here"
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
        backgroundColor: Color.purple
    }
});

export default Search;