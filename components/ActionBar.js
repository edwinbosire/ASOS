import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableHighlight, Text, Animated, Easing } from 'react-native';
import Color from './AsosColors';
const {width, height} = Dimensions.get('window');

export default class ActionBar extends Component { 

    constructor(props){
        super(props)
        type = 'search'
        props.firstButtonText = "",
        props.secondButtonText = "",
        this.state = {
            selected:this.props.defaultGender,
            leftOffset:new Animated.Value(width/2 + 10)
        }
    }
    
    indicatorStyle(){
        return {
            position:'absolute',
            bottom:0,
            backgroundColor:Color.darkBackground,
            width: width/2 ,
            height:2,
            left: this.state.leftOffset,
        }
    }

    toggleSelection(text){
        this.props.onButtonSelect(text)
        this.setState({selected:text.toUpperCase()})
        let value = 10;
        if (text === 'MEN'){
            value = width/2 + 10
        }else{
            value = 10
        }
        Animated.timing(
            this.state.leftOffset, { 
                toValue: value,
                easing: Easing.elastic(1.3),
                duration: 550,
            }
        ).start()
    }

    buttonWithText(text){
        return (
            <TouchableHighlight activeOpacity={0.8} underlayColor={Color.extraLightBackground}onPress={() => this.toggleSelection(text)}>
                <Text style={styles.buttonText}> {text.toUpperCase()}</Text>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View style={ [styles.container, {...this.props.style}] }>
                {this.buttonWithText(this.props.firstButtonText)}
                <View style={{backgroundColor:Color.extraLightBackground, height:30, width:1}}></View>
                {this.buttonWithText(this.props.secondButtonText)}
                <Animated.View style={this.indicatorStyle()} />
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        height: 54,
        width:width,
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between',
        
        paddingHorizontal:10,
        borderBottomWidth: 1,
        borderColor:Color.extraLightBackground,
    },
    buttonText: {
        fontFamily: 'futura',
        fontSize: 18,
        fontWeight: "200",
        textAlign: 'center',
        color: Color.darkText,
        width: width/2 ,
        backgroundColor: 'white',
    },
});