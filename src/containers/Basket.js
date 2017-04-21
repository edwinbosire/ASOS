import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ListView, Dimensions, TouchableHighlight} from 'react-native';
import Color from '../AsosColors';
import NavBar from '../components/NavBar'
import Service from '../store/Service'
import { Actions } from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Basket extends Component {

  constructor(props) {
    super(props);
    let feed = Service.getBagItems();

    this.state = {
        loaded: false,
        isSearching: false,
        feed: feed,
        dataSource: ds.cloneWithRows(feed)
    };
  }

   renderRows(data){
        return ( 
            <TouchableHighlight activeOpacity={0.8} underlayColor={Color.extraLightBackground}onPress={() => (data.title)?Actions.productListing(data) : Actions.productPage(data)}>
                
                <View style={styles.row}>  
                    <Image style={{ height:(width/2 ), width:145, alignSelf:'stretch', resizeMode:'cover'}} source={{uri: data.images[0].url}} />
                    <View style ={{flex:1,  justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal:20}}>
                        <Text style={styles.price}> {data.price.current.text} </Text>
                        <Text style={styles.title}> {data.name} </Text>
                        <View style={styles.actionButtonRow}>
                            {this.buttonWithText(data.colour)}
                            <View style={{backgroundColor:Color.extraLightBackground, height:45, width:1}}></View>
                            {this.buttonWithText("M")}
                        </View>
                        {this.buttonWithText("QTY: 1")}
                    </View>

                </View>
        </TouchableHighlight>
        )
    }

    buttonWithText(text){
        return (
            <TouchableHighlight activeOpacity={0.9} underlayColor={Color.extraLightBackground}>
                <Text style={styles.buttonText}> {text.toUpperCase()}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        var total = Service.getBagTotal()
        return (
            <View style={styles.container}>
                <NavBar type={'bag'} onCheckoutPress={this.checkout} />
                <Text style={styles.resultsCount}> 3 Items: Total(excluding delivery) <Text style={styles.resultsSum}>£{total }</Text> </Text>
                <View style={{alignSelf:'stretch', height:1,borderColor: Color.extraLightBackground,borderBottomWidth: 1}} />
                <ListView contentContainerStyle = {styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRows({...rowData})}
                />
            </View>
        );
    }

    checkout(){
        console.log("checkout requested");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    resultsCount: {
        alignSelf:'stretch',
        fontFamily: 'futura',
        fontSize: 14,
        fontWeight: "100",
        textAlign: 'center',
        color: Color.lightText,
        paddingVertical:20,
    },
    resultsSum:{
        alignSelf:'stretch',
        fontFamily: 'futura',
        fontSize: 14,
        fontWeight: "800",
        textAlign: 'center',
        color: 'black',
        paddingVertical:20,
    },
    listView:{
        justifyContent:'space-between',
        marginHorizontal:10,
    },
    row:{
        width:width, 
        paddingVertical:20, 
        flexDirection:'row', 
        alignItems:'flex-start', 
        borderBottomColor:Color.extraLightBackground, 
        borderBottomWidth:1,
        paddingHorizontal:10,
    },
    title:{
        fontFamily:'futura',
        fontSize:16,
        fontWeight:"200",
        textAlign: 'left',
        color:Color.lightText,
        backgroundColor:'transparent',
        marginBottom:20,
    },
    price:{
        fontFamily:'futura',
        fontSize:18,
        fontWeight:"800",
        textAlign: 'left',
        color:Color.darkText,
        marginBottom:10,
    },
    buttonText: {
        width:120,
        fontFamily: 'futura',
        fontSize: 20,
        fontWeight: "400",
        color: Color.darkText,
        backgroundColor: Color.white,
        alignSelf:'center',
        },
    actionButtonRow: {
        height: 54,
        alignSelf:'stretch',
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:Color.extraLightBackground,

    },


});

export default Basket;