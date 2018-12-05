import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class ExploreButton extends React.Component {
  render() {
    return (
        <TouchableOpacity activeOpacity={0.95} underlayColor={'grey'} style = {styles.container}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}> {this.props.title} </Text>
                <Icon name="ios-arrow-forward" color={'black'} size={14} style={{marginTop:3}}/>
            </View>
      </TouchableOpacity>
);
  }
}


export default ExploreButton;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:4, 
        overflow: 'hidden',
        backgroundColor:'white'
    },
    
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',  
        alignContent:'center',
    },
    buttonTitle: {
        fontSize: 12, 
        fontWeight: '500', 
        color:'black', 
        lineHeight:20,
        marginLeft: 8,
        marginRight: 8,
    },
});