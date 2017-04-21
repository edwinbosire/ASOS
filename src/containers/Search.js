import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, ListView, Image, Dimensions, TouchableHighlight} from 'react-native';
import Color from '../AsosColors';
import Card from '../components/Card';
import { Actions } from 'react-native-router-flux';
const {width, height} = Dimensions.get('window');

var Service = require('../store/Service')

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Search extends Component {

  constructor() {
    super();
    let feed = Service.getCategories('men');

    this.state = {
        loaded: false,
        isSearching: false,
        gender:'men',
        feed: feed,
        dataSource: ds.cloneWithRows(feed)
    };
  }

    componentDidMount(){
        this.setState = {
            loaded: false,
            feed: Service.getCategories(this.state.gender),
            dataSource: ds.cloneWithRows(this.state.feed)
        }
    }
        /*<Card type='grid-item' title={data.title} subtitle={data.title} source={data.image.url} onCardPress= {Actions.productInfo}/>*/

    renderRows(data){
        return ( 
            <TouchableHighlight activeOpacity={0.8} underlayColor={Color.extraLightBackground}onPress={() => Actions.productListing(data)}>
                <View style={{marginTop:10, height:(width/2 - 15),width:(width/2 - 15), justifyContent: 'center', alignItems: 'stretch'}}>  
                    <Image style={{flex:1, resizeMode:'cover'}} source={{uri: data.image.url}}>
                        <View style ={{flex:1,alignSelf: 'stretch',  justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.title}> {data.title.toUpperCase()} </Text>
                        </View>
                    </Image>
                </View>
        </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
               <ListView contentContainerStyle = {styles.gridView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRows({...rowData})}
               />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.lightBackground,
        marginTop:20,
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
       justifyContent:'space-between',
       marginHorizontal:10,
    },
  title:{
        fontFamily:'futura',
        fontSize:18,
        fontWeight:"800",
        textAlign: 'center',
        color:'white',
        backgroundColor:'transparent',
        shadowColor:'black',
        shadowRadius:10,
    },

});

export default Search;